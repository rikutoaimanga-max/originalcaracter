"use client";

import { categories } from "@/data/options";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wand2, Image as ImageIcon } from "lucide-react";

interface ReviewPanelProps {
    selections: Record<string, string>;
    resolvedSelections?: Record<string, string> | null;
    generatedImage: string | null;
    isGenerating: boolean;
    onGenerate: () => void;
}

export function ReviewPanel({
    selections,
    resolvedSelections,
    generatedImage,
    isGenerating,
    onGenerate
}: ReviewPanelProps) {
    // 表示すべき選択肢のソース（生成済みなら解決セット、そうでなければ現在の選択）
    // ただし、ユーザーが生成後に選択を変えた場合などを考慮し、
    // 「生成結果の表示モード」と「現在の編集モード」の区別がUI上明確でないため、
    // ここでは「生成された画像がある」場合は解決された値を優先表示するようにします。
    // ※ 厳密には「生成後に変更したら selections を表示」などの制御も考えられますが、
    //    今回は要望通り「ランダムが何を選択されたかわかるように」するために解決値が表示されます。

    // 生成画像があり、かつ解決セットがある場合はそちらを使用
    const sourceSelections = (generatedImage && resolvedSelections) ? resolvedSelections : selections;

    // 選択されたアイテムの情報を取得
    const selectedItems = categories.map((cat) => {
        const value = sourceSelections[cat.id];
        if (!value) return null;

        // 通常の選択状態（生成前）で "random" の場合
        if (value === "random") {
            return { category: cat.label, item: cat.items.find(i => i.id === "random")! };
        }

        // 解決後の値、または通常の選択値からアイテムを検索
        // resolvedSelectionsの場合は、valueは具体的な値になっているはず（randomではない）
        const item = cat.items.find((i) => i.value === value);
        return item ? { category: cat.label, item } : null;
    }).filter((i) => i !== null);

    return (
        <div className="flex flex-col h-full gap-4">
            <h2 className="text-xl font-bold">レビュー</h2>

            <div className="flex-1 overflow-y-auto pr-1 flex flex-col gap-4">
                {/* メイン生成画像エリア */}
                <Card className="aspect-[3/4] w-full relative overflow-hidden glass-card flex items-center justify-center p-1 shrink-0">
                    <div className="w-full h-full relative rounded-lg overflow-hidden bg-black/60">
                        {generatedImage ? (
                            <img
                                src={generatedImage}
                                alt="Generated Character"
                                className="w-full h-full object-cover"
                            />
                        ) : (
                            <div className="flex flex-col items-center justify-center text-muted-foreground gap-4 p-8 text-center h-full">
                                <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center">
                                    <ImageIcon className="w-10 h-10 opacity-50" />
                                </div>
                                <p className="text-sm">キャラクターを生成するとここに表示されます</p>
                            </div>
                        )}

                        {/* 生成中オーバーレイ */}
                        {isGenerating && (
                            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-10 flex-col gap-4">
                                <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
                                <p className="text-sm font-medium animate-pulse text-primary">魔法を詠唱中...</p>
                            </div>
                        )}
                    </div>
                </Card>

                {/* 生成ボタン */}
                <Button
                    size="lg"
                    className="w-full gap-2 font-bold shadow-lg shadow-primary/20 bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 border border-white/10 shrink-0"
                    onClick={onGenerate}
                    disabled={isGenerating || selectedItems.length === 0}
                >
                    <Wand2 className="w-5 h-5" />
                    {isGenerating ? "生成中..." : "キャラクターを生成する"}
                </Button>

                {/* 選択内容の確認リスト */}
                <div className="flex flex-wrap gap-2 pb-4">
                    {selectedItems.map(({ category, item }) => (
                        <div key={`${category}-${item.id}`} className="bg-white/10 px-3 py-1.5 rounded-full text-xs flex items-center gap-2 border border-white/5">
                            <span className="text-muted-foreground opacity-70">{category}:</span>
                            <span className="font-medium text-white">{item.label}</span>
                        </div>
                    ))}
                </div>


            </div>
        </div>
    );
}
