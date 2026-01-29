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
}

export function CategorySection({ category, selectedItemId, onSelect, defaultOpen = false }: CategorySectionProps) {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
        <div className="border border-white/10 rounded-xl overflow-hidden bg-black/20 mb-3 last:mb-0">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-4 hover:bg-white/5 transition-colors"
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
