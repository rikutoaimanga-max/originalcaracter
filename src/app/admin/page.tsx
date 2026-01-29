"use client";

import { useState, useEffect } from "react";
import { categories, type Category, type OptionItem } from "@/data/options";
import { generateCharacterImage, saveImageAction } from "@/app/actions";

export default function AssetGenerator() {
    const [apiKey, setApiKey] = useState("");
    const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
    const [isGenerating, setIsGenerating] = useState(false);
    const [logs, setLogs] = useState<string[]>([]);
    const [progress, setProgress] = useState({ current: 0, total: 0 });

    useEffect(() => {
        const key = localStorage.getItem("google_api_key");
        if (key) setApiKey(key);
    }, []);

    const addLog = (msg: string) => setLogs((prev) => [...prev, msg]);

    const handleGenerate = async () => {
        if (!apiKey || !selectedCategory) return;

        setIsGenerating(true);
        setLogs([]);
        const items = selectedCategory.items.filter((item) => item.id !== "random");
        setProgress({ current: 0, total: items.length });

        addLog(`カテゴリ「${selectedCategory.label}」の画像生成を開始します (${items.length}件)`);

        for (let i = 0; i < items.length; i++) {
            const item = items[i];
            addLog(`[${i + 1}/${items.length}] 生成中: ${item.label} (${item.id}) ...`);

            try {
                // 画像パスから保存先を決定 (例: /images/hat/baseball_cap.png -> images/hat/baseball_cap.png)
                const savePath = item.imageSrc?.startsWith("/")
                    ? item.imageSrc.substring(1)
                    : `images/${selectedCategory.id}/${item.id}.png`;

                if (!savePath) {
                    addLog(`  -> Skip: 保存パスが不明です`);
                    continue;
                }

                const prompt = `icon of ${item.value}, white background, simple illustration, flat design, high quality, single object, minimal style`;

                // 1. 画像生成 (Base64)
                const { base64: base64Image } = await generateCharacterImage(prompt, apiKey);

                if (!base64Image) {
                    throw new Error("画像生成に失敗（Base64が空）");
                }

                // 2. サーバーに保存
                const result = await saveImageAction(base64Image, savePath);

                if (result.success) {
                    addLog(`  -> 成功: ${savePath} に保存しました`);
                } else {
                    addLog(`  -> 保存失敗: ${result.error}`);
                }

                // レート制限回避のためのウェイト (3秒)
                await new Promise(r => setTimeout(r, 3000));

            } catch (error) {
                addLog(`  -> エラー: ${String(error)}`);
            }

            setProgress((prev) => ({ ...prev, current: i + 1 }));
        }

        addLog("完了しました！");
        setIsGenerating(false);
    };

    return (
        <div className="p-8 max-w-4xl mx-auto text-white">
            <h1 className="text-2xl font-bold mb-6">アセット一括生成ツール (Admin)</h1>

            <div className="mb-6 space-y-4">
                <div>
                    <label className="block mb-2">API Key</label>
                    <input
                        type="password"
                        value={apiKey}
                        onChange={(e) => setApiKey(e.target.value)}
                        className="w-full p-2 rounded bg-gray-800 border border-gray-700"
                        placeholder="API Key (LocalStorageから自動読み込み)"
                    />
                </div>

                <div>
                    <label className="block mb-2">生成するカテゴリ</label>
                    <div className="flex flex-wrap gap-2">
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setSelectedCategory(cat)}
                                className={`px-4 py-2 rounded ${selectedCategory?.id === cat.id
                                    ? "bg-purple-600 text-white"
                                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                                    }`}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>
                </div>

                {selectedCategory && (
                    <div className="bg-gray-900 p-4 rounded border border-gray-700">
                        <p className="mb-4">
                            カテゴリ <strong>{selectedCategory.label}</strong> の画像（{selectedCategory.items.length - 1}件）を生成しますか？
                            <br />
                            <span className="text-sm text-yellow-400">※ 生成には数分かかります。ウィンドウを閉じないでください。</span>
                        </p>
                        <button
                            onClick={handleGenerate}
                            disabled={isGenerating || !apiKey}
                            className="px-6 py-2 bg-green-600 hover:bg-green-500 disabled:opacity-50 disabled:cursor-not-allowed rounded font-bold"
                        >
                            {isGenerating ? "生成中..." : "生成開始"}
                        </button>
                    </div>
                )}
            </div>

            {/* Progress & Logs */}
            <div className="bg-black p-4 rounded h-[400px] overflow-y-auto font-mono text-sm border border-gray-800">
                <div className="sticky top-0 bg-black pb-2 border-b border-gray-800 mb-2 flex justify-between">
                    <span>Progress: {progress.current} / {progress.total}</span>
                    <span>Logs</span>
                </div>
                {logs.map((log, i) => (
                    <div key={i} className="mb-1 text-gray-300 border-b border-gray-900 pb-1">{log}</div>
                ))}
                {logs.length === 0 && <span className="text-gray-600">待機中...</span>}
            </div>
        </div>
    );
}
