"use client";

import * as React from "react";
import { categories } from "@/data/options";
import { CategorySection } from "./category-section";

interface OptionsPanelProps {
    selections: Record<string, string>;
    onSelect: (categoryId: string, value: string) => void;
    gender: "male" | "female";
    onGenderSelect: (gender: "male" | "female") => void;
}

export function OptionsPanel({ selections, onSelect, gender, onGenderSelect }: OptionsPanelProps) {
    return (
        <div className="flex flex-col h-full overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
            {categories.map((category, index) => {
                // 性別によるフィルタリング
                let displayItems = category.items;
                if (category.id === "hair_style") {
                    displayItems = category.items.filter(item =>
                        !item.gender || item.gender === "both" || item.gender === gender
                    );
                }

                return (
                    <CategorySection
                        key={category.id}
                        category={{ ...category, items: displayItems }}
                        selectedItemId={selections[category.id]}
                        onSelect={(value) => onSelect(category.id, value)}
                        defaultOpen={index === 0}
                        gender={gender}
                        onGenderSelect={onGenderSelect}
                    />
                );
            })}
        </div>
    );
}
