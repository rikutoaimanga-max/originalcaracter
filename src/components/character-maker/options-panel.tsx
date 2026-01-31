"use client";

import * as React from "react";
import { categories, Category } from "@/data/options";
import { CategorySection } from "./category-section";
import {
    DndContext,
    closestCenter,
    KeyboardSensor,
    PointerSensor,
    useSensor,
    useSensors,
    DragEndEvent,
} from "@dnd-kit/core";
import {
    arrayMove,
    SortableContext,
    sortableKeyboardCoordinates,
    verticalListSortingStrategy,
    useSortable,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { GripVertical } from "lucide-react";

interface OptionsPanelProps {
    selections: Record<string, string>;
    onSelect: (categoryId: string, value: string) => void;
}

// ソート可能なアイテムのラッパーコンポーネント
function SortableCategoryItem({ category, selections, onSelect, defaultOpen }: {
    category: Category;
    selections: Record<string, string>;
    onSelect: (categoryId: string, value: string) => void;
    defaultOpen: boolean;
}) {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
        isDragging,
    } = useSortable({ id: category.id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
        zIndex: isDragging ? 10 : 1,
        opacity: isDragging ? 0.5 : 1,
    };

    return (
        <div ref={setNodeRef} style={style} className="relative group mb-3 last:mb-0">
            {/* ドラッグハンドル */}
            <div
                {...attributes}
                {...listeners}
                className="absolute left-2 top-4 z-20 cursor-grab active:cursor-grabbing p-1 rounded hover:bg-white/10 text-muted-foreground/50 hover:text-white transition-colors"
                title="ドラッグして並び替え"
            >
                <GripVertical className="w-4 h-4" />
            </div>

            {/* CategorySectionにパディングを追加してハンドルと重ならないようにする */}
            <div className="pl-8">
                <CategorySection
                    category={category}
                    selectedItemId={selections[category.id]}
                    onSelect={(value) => onSelect(category.id, value)}
                    defaultOpen={defaultOpen}
                />
            </div>
        </div>
    );
}

export function OptionsPanel({ selections, onSelect }: OptionsPanelProps) {
    const [items, setItems] = React.useState<Category[]>(categories);
    const [isLoaded, setIsLoaded] = React.useState(false);

    // キーボードとポインターのセンサーを設定
    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        })
    );

    // 初回ロード時にLocalStorageから並び順を復元
    React.useEffect(() => {
        const savedOrder = localStorage.getItem("category_order");
        if (savedOrder) {
            try {
                const orderIds = JSON.parse(savedOrder) as string[];
                // ID順にカテゴリをソート。新しいカテゴリが増えている場合も考慮してマージ
                const sortedCategories = [...categories].sort((a, b) => {
                    const indexA = orderIds.indexOf(a.id);
                    const indexB = orderIds.indexOf(b.id);
                    // 保存されていない（新しい）カテゴリは最後尾へ
                    if (indexA === -1) return 1;
                    if (indexB === -1) return -1;
                    return indexA - indexB;
                });
                setItems(sortedCategories);
            } catch (e) {
                console.error("Failed to parse category order", e);
            }
        }
        setIsLoaded(true);
    }, []);

    const handleDragEnd = (event: DragEndEvent) => {
        const { active, over } = event;

        if (over && active.id !== over.id) {
            setItems((items) => {
                const oldIndex = items.findIndex((item) => item.id === active.id);
                const newIndex = items.findIndex((item) => item.id === over.id);
                const newItems = arrayMove(items, oldIndex, newIndex);

                // 新しい順序を保存
                localStorage.setItem("category_order", JSON.stringify(newItems.map(i => i.id)));

                return newItems;
            });
        }
    };

    if (!isLoaded) {
        return null; // またはローディング表示
    }

    return (
        <div className="flex flex-col h-full overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
            {/* 確実にすべてのカテゴリとアイテムを表示する */}
            <DndContext
                sensors={sensors}
                collisionDetection={closestCenter}
                onDragEnd={handleDragEnd}
            >
                <SortableContext
                    items={items.map(i => i.id)}
                    strategy={verticalListSortingStrategy}
                >
                    {items.map((category, index) => (
                        <SortableCategoryItem
                            key={category.id}
                            category={category}
                            selections={selections}
                            onSelect={onSelect}
                            defaultOpen={index === 0}
                        />
                    ))}
                </SortableContext>
            </DndContext>
        </div>
    );
}
