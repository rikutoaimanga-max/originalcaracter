"use client";

import { useState, useEffect } from "react";
import { HexColorPicker, HexColorInput } from "react-colorful";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Check, Pipette } from "lucide-react";
import { cn } from "@/lib/utils";

interface CustomColorPickerProps {
    color: string;
    onChange: (color: string) => void;
    label?: string;
}

export function CustomColorPicker({ color, onChange, label }: CustomColorPickerProps) {
    const [localColor, setLocalColor] = useState(color);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        setLocalColor(color);
    }, [color]);

    const handleColorChange = (newColor: string) => {
        setLocalColor(newColor);
        onChange(newColor);
    };

    return (
        <Popover open={isOpen} onOpenChange={setIsOpen}>
            <PopoverTrigger asChild>
                <div
                    className="cursor-pointer group relative flex flex-col items-center gap-2 transition-all duration-200 hover:scale-105"
                    title="カスタムカラー"
                >
                    <div className="w-12 h-12 rounded-full border-2 border-white/20 group-hover:border-white/50 border-dashed flex items-center justify-center bg-transparent hover:bg-white/5 transition-colors">
                        <Plus className="w-5 h-5 text-white/70" />
                    </div>
                </div>
            </PopoverTrigger>
            <PopoverContent className="w-64 p-3 bg-[#1e1e1e] border-white/10" side="bottom" align="start">
                <div className="space-y-3">
                    <div className="flex items-center justify-between">
                        <span className="text-xs font-medium text-white/70">カスタムカラー</span>
                        <div className="w-6 h-6 rounded-full border border-white/20" style={{ backgroundColor: localColor }} />
                    </div>

                    <div className="relative custom-color-picker">
                        {/* react-colorful's HexColorPicker component */}
                        <HexColorPicker color={localColor} onChange={handleColorChange} className="!w-full !h-32" />
                    </div>

                    <div className="flex items-center gap-2">
                        <div className="relative flex-1">
                            <span className="absolute left-2 top-1/2 -translate-y-1/2 text-xs text-white/50">#</span>
                            <HexColorInput
                                color={localColor}
                                onChange={handleColorChange}
                                className="w-full h-8 pl-5 pr-2 py-1 text-sm bg-black/20 border border-white/10 rounded focus:outline-none focus:border-primary text-white font-mono uppercase"
                                prefixed={false}
                            />
                        </div>
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    );
}

// Global styles for react-colorful customization (can be moved to global css if preferred, but keeping here for locality or use style tag)
/* 
.custom-color-picker .react-colorful {
  width: 100%;
}
*/
