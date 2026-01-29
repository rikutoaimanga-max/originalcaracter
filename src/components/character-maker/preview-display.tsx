"use client";

import * as React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wand2, Image as ImageIcon, Copy, Terminal } from "lucide-react";
import { categories } from "@/data/options";

interface PreviewDisplayProps {
    selections: Record<string, string>;
    onGenerate: () => void;
    isGenerating: boolean;
    generatedImage: string | null;
}

export function PreviewDisplay({
    selections,
    onGenerate,
    isGenerating,
    generatedImage,
}: PreviewDisplayProps) {
    // プロンプトの構築（表示用）
    const promptParts = categories
        .map((cat) => selections[cat.id])
        .filter((val) => val && val.length > 0);

    const promptText = promptParts.join(", ");

    return (
        <div className="flex flex-col h-full gap-4">
            {/* プレビュー画像エリア */}
            <Card className="aspect-[3/4] sm:aspect-[4/3] md:aspect-[3/4] w-full relative overflow-hidden glass-card flex items-center justify-center group">
                {generatedImage ? (
                    <img
                        src={generatedImage}
                        alt="Generated Character"
                        className="w-full h-full object-cover"
                    />
                ) : (
                    <div className="flex flex-col items-center justify-center text-muted-foreground gap-4 p-8 text-center">
                        <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                            <ImageIcon className="w-10 h-10 opacity-50" />
                        </div>
                        <div>
                            <p className="font-medium">プレビュー</p>
                            <p className="text-xs mt-1 max-w-[200px]">
                                左側のパネルで要素を選択して、キャラクターを作成してください
                            </p>
                        </div>
                    </div>
                )}

                {/* 生成中のオーバーレイ */}
                {isGenerating && (
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-10 flex-col gap-4">
                        <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
                        <p className="text-sm font-medium animate-pulse">魔法を詠唱中...</p>
                    </div>
                )}
            </Card>

            {/* アクションエリア */}
            <Card className="p-4 glass flex flex-col gap-4">
                <div className="space-y-2">
                    <div className="flex items-center justify-between">
                        <label className="text-xs font-medium text-muted-foreground flex items-center gap-2">
                            <Terminal className="w-3 h-3" />
                            生成プロンプト
                        </label>
                        <Button variant="ghost" size="sm" className="h-6 text-xs gap-1" onClick={() => navigator.clipboard.writeText(promptText)}>
                            <Copy className="w-3 h-3" />
                            コピー
                        </Button>
                    </div>
                    <div className="bg-black/40 rounded-md p-3 text-xs font-mono text-white/70 h-24 overflow-y-auto border border-white/5">
                        {promptText || "（選択なし）"}
                    </div>
                </div>

                <Button
                    size="lg"
                    className="w-full gap-2 font-bold shadow-lg shadow-primary/20"
                    onClick={onGenerate}
                    disabled={isGenerating || promptParts.length === 0}
                >
                    <Wand2 className="w-5 h-5" />
                    {isGenerating ? "生成中..." : "キャラクターを生成する"}
                </Button>
            </Card>
        </div>
    );
}
