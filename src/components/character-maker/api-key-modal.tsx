"use client";

import { useState, useEffect } from "react";
import { Dialog } from "@/components/ui/dialog-simple";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { KeyRound, Eye, EyeOff, Save, Trash2 } from "lucide-react";

interface ApiKeyModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSave: (apiKey: string) => void;
}

export function ApiKeyModal({ isOpen, onClose, onSave }: ApiKeyModalProps) {
    const [key, setKey] = useState("");
    const [showKey, setShowKey] = useState(false);

    // モーダルが開いた時にLocalStorageからキーを読み込む
    useEffect(() => {
        if (isOpen) {
            const savedKey = localStorage.getItem("google_api_key") || "";
            setKey(savedKey);
        }
    }, [isOpen]);

    const handleSave = () => {
        if (!key.trim()) {
            alert("APIキーを入力してください");
            return;
        }
        localStorage.setItem("google_api_key", key);
        onSave(key);
        onClose();
    };

    const handleClear = () => {
        if (confirm("保存されたAPIキーを削除しますか？")) {
            localStorage.removeItem("google_api_key");
            setKey("");
            onSave("");
            onClose();
        }
    };

    return (
        <Dialog isOpen={isOpen} onClose={onClose} title="APIキーの設定">
            <div className="flex flex-col gap-4">
                <p className="text-sm text-muted-foreground">
                    Google AI StudioのAPIキーを入力してください。<br />
                    キーはブラウザ（LocalStorage）にのみ保存され、画像生成リクエスト時以外にサーバーに送信されることはありません。
                </p>

                <div className="relative">
                    <Input
                        type={showKey ? "text" : "password"}
                        placeholder="AIzaSy..."
                        value={key}
                        onChange={(e) => setKey(e.target.value)}
                        className="pr-10"
                    />
                    <button
                        type="button"
                        onClick={() => setShowKey(!showKey)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-white"
                    >
                        {showKey ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                </div>

                <div className="flex justify-between gap-2 mt-2">
                    <Button variant="destructive" size="sm" onClick={handleClear} className="gap-2">
                        <Trash2 className="w-4 h-4" />
                        削除
                    </Button>
                    <Button onClick={handleSave} className="gap-2 flex-1">
                        <Save className="w-4 h-4" />
                        保存して閉じる
                    </Button>
                </div>

                <div className="text-xs text-muted-foreground bg-muted p-3 rounded-md mt-2">
                    <strong>取得方法:</strong>
                    <ol className="list-decimal ml-4 mt-1 space-y-1">
                        <li><a href="https://aistudio.google.com/app/apikey" target="_blank" rel="noopener noreferrer" className="text-primary underline">Google AI Studio</a> にアクセス</li>
                        <li>"Create API key" をクリック</li>
                        <li>キーをコピーしてここに貼り付け</li>
                    </ol>
                </div>
            </div>
        </Dialog>
    );
}
