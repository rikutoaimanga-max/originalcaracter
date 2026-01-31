"use client";

import { type OptionItem } from "@/data/options";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

interface ColorSelectionCardProps {
    item: OptionItem;
    isSelected: boolean;
    onSelect: () => void;
}

export function ColorSelectionCard({ item, isSelected, onSelect }: ColorSelectionCardProps) {
    const isRandom = item.id === "random";
    // ランダムの場合はレインボー、それ以外は設定された色、なければグレー
    const backgroundStyle = isRandom
        ? { background: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 99%, #fecfef 100%)" } // シンプルなグラデーション
        : { background: item.color || "#333" };

    // オッドアイなどの特殊なグラデーション指定がある場合
    if (item.color && item.color.startsWith("linear-gradient")) {
        // style属性で直接指定する形になるので上記でOK
    }

    return (
        <div
            onClick={onSelect}
            className={cn(
                "cursor-pointer group relative flex flex-col items-center gap-2 transition-all duration-200",
                isSelected ? "scale-110" : "hover:scale-105"
            )}
            title={item.label}
        >
            <div
                className={cn(
                    "w-12 h-12 rounded-full border-2 shadow-lg flex items-center justify-center overflow-hidden relative",
                    isSelected
                        ? "border-primary ring-2 ring-primary/30"
                        : "border-white/20 group-hover:border-white/50"
                )}
                style={item.id === "random" ? { background: "conic-gradient(from 0deg, red, orange, yellow, green, blue, indigo, violet, red)" } : { background: item.color || "#333" }}
            >
                {/* 選択中のチェックマーク */}
                {isSelected && (
                    <div className="bg-black/40 backdrop-blur-[1px] absolute inset-0 flex items-center justify-center">
                        <Check className="w-6 h-6 text-white drop-shadow-md" strokeWidth={3} />
                    </div>
                )}

                {/* ランダムアイコン（?マーク） */}
                {isRandom && !isSelected && (
                    <span className="text-white font-bold text-xl drop-shadow-md">?</span>
                )}
            </div>

            {/* ラベル（任意だが、色はわかりにくいこともあるので表示してもよい。今回は邪魔にならないよう小さく） */}
            {/* <span className="text-[10px] text-muted-foreground">{item.label}</span> */}
        </div>
    );
}
