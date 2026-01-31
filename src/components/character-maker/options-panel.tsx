"use client";

import * as React from "react";
import { categories } from "@/data/options";
import { CategorySection } from "./category-section";

interface OptionsPanelProps {
    selections: Record<string, string>;
    onSelect: (categoryId: string, value: string) => void;
}

export function OptionsPanel({ selections, onSelect }: OptionsPanelProps) {
    // 確実にすべてのカテゴリとアイテムを表示する
    return (
        <div className="flex flex-col h-full overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
            {categories.map((category, index) => {
                return (
                    <CategorySection
                        key={category.id}
                        category={category}
                        selectedItemId={selections[category.id]}
                        onSelect={(value) => onSelect(category.id, value)}
                        defaultOpen={index === 0}
                    />
                );
            })}
        </div>
    );
}
