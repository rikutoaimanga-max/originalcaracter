import { type OptionItem } from "@/data/options";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

interface SelectionCardProps {
    item: OptionItem;
    isSelected: boolean;
    onSelect: () => void;
}

export function SelectionCard({ item, isSelected, onSelect }: SelectionCardProps) {
    return (
        <div
            onClick={onSelect}
            className={cn(
                "cursor-pointer group relative flex flex-col items-center rounded-xl border-2 transition-all duration-200 overflow-hidden bg-black/40",
                isSelected
                    ? "border-primary shadow-[0_0_20px_rgba(var(--primary),0.4)] scale-[1.02]"
                    : "border-transparent border-white/5 hover:border-white/20 hover:bg-white/5"
            )}
        >
            <div className="relative w-full aspect-square overflow-hidden bg-white/5">
                {item.imageSrc ? (
                    <img
                        src={encodeURI(item.imageSrc)}
                        alt={item.label}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        onError={(e) => {
                            console.error(`Failed to load image: ${item.imageSrc}`, e);
                            e.currentTarget.style.display = 'none';
                            e.currentTarget.parentElement?.classList.add('flex', 'items-center', 'justify-center');
                            const fallback = document.createElement('div');
                            fallback.className = "text-muted-foreground text-xs p-1 text-center";
                            fallback.innerText = "Img Err";
                            e.currentTarget.parentElement?.appendChild(fallback);
                        }}
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-muted-foreground text-xs">
                        No Image
                    </div>
                )}

                {isSelected && (
                    <div className="absolute inset-0 bg-primary/20 backdrop-blur-[1px] flex items-center justify-center animate-in fade-in duration-200">
                        <div className="bg-primary text-white rounded-full p-1 shadow-lg">
                            <Check className="w-6 h-6" />
                        </div>
                    </div>
                )}
            </div>

            <div className="w-full p-2 text-center bg-black/60 backdrop-blur-sm border-t border-white/5">
                <span className={cn(
                    "text-xs sm:text-sm font-medium transition-colors line-clamp-1",
                    isSelected ? "text-primary" : "text-gray-300 group-hover:text-white"
                )}>
                    {item.label}
                </span>
            </div>
        </div>
    );
}
