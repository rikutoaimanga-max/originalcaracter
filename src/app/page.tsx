"use client";

import { useState, useEffect } from "react";
import { OptionsPanel } from "@/components/character-maker/options-panel";
import { ReviewPanel } from "@/components/character-maker/review-panel";
import { ApiKeyModal } from "@/components/character-maker/api-key-modal";
import { categories } from "@/data/options";
import { generateCharacterImage } from "@/app/actions";
import { listAvailableModels } from "@/app/debug-actions";
import { Button } from "@/components/ui/button";
import { Settings } from "lucide-react";

export default function Home() {
  const [selections, setSelections] = useState<Record<string, string>>({});
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [resolvedSelections, setResolvedSelections] = useState<Record<string, string> | null>(null);

  // API Key State
  const [apiKey, setApiKey] = useState("");
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  // 初回ロード時にLocalStorageからキーを読み込む
  useEffect(() => {
    const savedKey = localStorage.getItem("google_api_key");
    if (savedKey) {
      setApiKey(savedKey);
    } else {
      // キーがない場合は設定モーダルを開く（UX向上のため任意）
      // setIsSettingsOpen(true); 
    }
  }, []);

  const handleSelect = (categoryId: string, value: string) => {
    setSelections((prev) => {
      const newSelections = { ...prev };
      if (newSelections[categoryId] === value) {
        delete newSelections[categoryId];
      } else {
        newSelections[categoryId] = value;
      }
      return newSelections;
    });
  };


  const handleGenerate = async () => {
    if (!apiKey) {
      alert("APIキーが設定されていません。右上の設定ボタンからキーを入力してください。");
      setIsSettingsOpen(true);
      return;
    }

    setIsGenerating(true);
    setGeneratedImage(null);
    setResolvedSelections(null);

    try {
      // プロンプト構築とランダム値の解決
      const currentResolved: Record<string, string> = {};
      const promptParts = categories
        .map((cat) => {
          const selectedValue = selections[cat.id];

          // 未選択の場合はスキップ（あるいは必須にするならエラー）
          if (!selectedValue) return null;

          // "random" が選択されている場合、そのカテゴリの選択肢からランダムに選ぶ
          if (selectedValue === "random") {
            // random以外のアイテムをフィルタリング
            const validItems = cat.items.filter(item => item.id !== "random");
            if (validItems.length > 0) {
              const randomItem = validItems[Math.floor(Math.random() * validItems.length)];
              // 解決された値を保存
              currentResolved[cat.id] = randomItem.value;
              return randomItem.value;
            }
            return null;
          }

          // 解決された値を保存
          currentResolved[cat.id] = selectedValue;
          return selectedValue;
        })
        .filter((val) => val && val.length > 0);

      if (promptParts.length === 0) {
        alert("少なくとも1つの項目を選択してください。"); // ランダムを選んでもOKになる
        setIsGenerating(false);
        return;
      }

      // 解決された選択肢をStateに保存
      setResolvedSelections(currentResolved);

      const basePrompt = "A high quality, detailed anime style character illustration, white background, front view, full body, ";
      const finalPrompt = basePrompt + promptParts.join(", ") + ", masterpiece, best quality, 8k";

      console.log("Generating with prompt:", finalPrompt);

      // APIキーを渡して生成
      const result = await generateCharacterImage(finalPrompt, apiKey);
      setGeneratedImage(result.base64);
    } catch (error) {
      console.error(error);
      alert("画像の生成に失敗しました。APIキーまたはモデルの設定を確認してください。");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="container max-w-7xl mx-auto p-4 md:p-6 lg:p-8 h-screen flex flex-col gap-6">
      <header className="flex-none flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight lg:text-4xl bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent w-fit">
            Original Character Maker
          </h1>
          <p className="text-muted-foreground mt-2">
            AIの力で、あなたの想像するキャラクターを具現化しよう。
          </p>
        </div>

        {/* ヘッダー部分のボタンの並びに追加 */}
        <div className="flex gap-2">
          <Button variant="ghost" size="sm" onClick={async () => {
            if (!apiKey) return alert("APIキーを設定してください");
            try {
              const data = await listAvailableModels(apiKey);
              console.log("=== 利用可能なモデル一覧 ===");
              if (data.models) {
                data.models.forEach((m: any) => {
                  console.log(`モデル名: ${m.name}`);
                  console.log(`  - 生成メソッド: ${m.supportedGenerationMethods?.join(", ")}`);
                });
              } else {
                console.log("モデルが見つかりませんでした。", data);
              }
              alert("コンソールにモデル一覧を出力しました。F12を押して「Console」タブを確認し、表示された「モデル名」を教えてください。");
            } catch (e) {
              alert("モデル一覧の取得に失敗しました");
            }
          }}>
            モデル確認
          </Button>
          <Button variant="outline" size="icon" onClick={() => setIsSettingsOpen(true)}>
            <Settings className="w-5 h-5" />
          </Button>
        </div>
      </header>

      <div className="flex-1 min-h-0 grid grid-cols-1 md:grid-cols-[1fr_350px] lg:grid-cols-[1fr_400px] gap-6">
        {/* 左側: 設定パネル */}
        <div className="min-h-0 flex flex-col">
          <OptionsPanel selections={selections} onSelect={handleSelect} />
        </div>

        {/* 右側: プレビュー＆生成 */}
        <div className="h-full min-h-0 overflow-hidden">
          <ReviewPanel
            selections={selections}
            resolvedSelections={resolvedSelections}
            generatedImage={generatedImage}
            isGenerating={isGenerating}
            onGenerate={handleGenerate}
          />
        </div>
      </div>

      <ApiKeyModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        onSave={setApiKey}
      />
    </div>
  );
}
