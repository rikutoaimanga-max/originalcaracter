"use client";

import { useState } from "react";
import { type Category, type OptionItem } from "@/data/options";
import { SelectionCard } from "./selection-card";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface CategorySectionProps {
    category: Category;
    selectedItemId?: string;
    onSelect: (value: string) => void;
    defaultOpen?: boolean;
    gender?: "male" | "female";
    onGenderSelect?: (gender: "male" | "female") => void;
}

export function CategorySection({ category, selectedItemId, onSelect, defaultOpen = false, gender, onGenderSelect }: CategorySectionProps) {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
        <div className="shrink-0 border border-white/10 rounded-xl overflow-hidden bg-black/20 mb-3 last:mb-0">
            <div className="w-full flex items-center justify-between p-4 hover:bg-white/5 transition-colors gap-4">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex-1 flex items-center gap-2 text-left"
                >
                    <span className="font-bold text-lg text-white flex items-center gap-2">
                        {category.label}
                        {selectedItemId && (
                            <span className="text-xs font-normal text-muted-foreground bg-white/10 px-2 py-0.5 rounded-full">
                                選択済
                            </span>
                        )}
                    </span>
                    <ChevronDown
                        className={cn(
                            "w-5 h-5 text-muted-foreground transition-transform duration-300",
                            isOpen && "rotate-180"
                        )}
                    />
                </button>

                {/* 性別切り替えボタン (髪型カテゴリのみ) */}
                {(category.id === "hair_style" || category.id.trim() === "hair_style") && gender && onGenderSelect && (
                    <div className="flex bg-black/40 rounded-lg p-1 shrink-0 z-10 relative" onClick={(e) => {
                        e.stopPropagation();
                        e.preventDefault();
                    }}>
                        <button
                            onClick={() => onGenderSelect("male")}
                            className={cn(
                                "px-3 py-1 text-xs font-bold rounded-md transition-all",
                                gender === "male"
                                    ? "bg-blue-600 text-white shadow-sm"
                                    : "text-muted-foreground hover:text-white"
                            )}
                        >
                            男性
                        </button>
                        <button
                            onClick={() => onGenderSelect("female")}
                            className={cn(
                                "px-3 py-1 text-xs font-bold rounded-md transition-all",
                                gender === "female"
                                    ? "bg-pink-600 text-white shadow-sm"
                                    : "text-muted-foreground hover:text-white"
                            )}
                        >
                            女性
                        </button>
                    </div>
                )}
            </div>

            <div
                className={cn(
                    "grid transition-all duration-300 ease-in-out",
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                )}
            >
                <div className="overflow-x-hidden overflow-y-auto max-h-[400px]">
                    <div className="px-4 pt-0 pb-12 grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                        {category.items.map((item) => (
                            <SelectionCard
                                key={item.id}
                                item={item}
                                isSelected={selectedItemId === item.value}
                                onSelect={() => onSelect(item.value)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
