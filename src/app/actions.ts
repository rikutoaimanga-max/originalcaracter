"use server";

export async function generateCharacterImage(prompt: string, userApiKey?: string) {
    // ユーザー入力キーを優先し、なければ環境変数を使用
    const apiKey = userApiKey || process.env.GOOGLE_API_KEY;

    if (!apiKey) {
        throw new Error("API Key not provided. Please set it in the settings menu.");
    }

    // ユーザー指定のモデル名
    // コンソールログより、imagen-4.0-generate-001 が利用可能かつ predict メソッドをサポートしていることが確認されました
    // modelName: "gemini-3-pro-image-preview" は generateContent メソッドのため、エンドポイントが異なります
    const modelName = "imagen-4.0-generate-001";

    // Google AI Studio (Generative Language API) のエンドポイント構築
    // 注意: URL形式が異なる場合があるため、複数のパターンを考慮する必要がありますが、まずは標準的な形式を試行
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${modelName}:predict?key=${apiKey}`;

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            // Vertex AI / Generative Language API の標準的なペイロード形式
            body: JSON.stringify({
                instances: [
                    {
                        prompt: prompt,
                    },
                ],
                parameters: {
                    sampleCount: 1,
                    aspectRatio: "3:4", // ポートレート向き
                    // outputOptions: { mimeType: "image/jpeg" } // 必要に応じて
                },
            }),
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error("API Error:", errorText);
            throw new Error(`Failed to generate image: ${response.status} ${response.statusText} - ${errorText}`);
        }

        const data = await response.json();

        // レスポンス形式の解析（Imagen on Vertex AI/AI Studioの形式）
        // 通常は predictions[0].bytesBase64Encoded または同様のパスに画像データがあります
        const prediction = data.predictions?.[0];
        const base64Image = prediction?.bytesBase64Encoded || prediction?.mimeType ? prediction.bytesBase64Encoded : null;

        if (!base64Image) {
            console.error("Unexpected response format:", data);
            throw new Error("No image data found in response");
        }

        return `data:image/png;base64,${base64Image}`;

    } catch (error) {
        console.error("Generation error:", error);
        throw error;
    }
}

import fs from "fs/promises";
import path from "path";

export async function saveImageAction(base64Data: string, relativePath: string) {
    try {
        // データURLプレフィックスを除去
        const base64Content = base64Data.replace(/^data:image\/\w+;base64,/, "");
        const buffer = Buffer.from(base64Content, "base64");

        const publicDir = path.join(process.cwd(), "public");
        const fullPath = path.join(publicDir, relativePath);

        // ディレクトリが存在するか確認し、なければ作成
        const dir = path.dirname(fullPath);
        await fs.mkdir(dir, { recursive: true });

        await fs.writeFile(fullPath, buffer);
        return { success: true, path: relativePath };
    } catch (error) {
        console.error("Error saving image:", error);
        return { success: false, error: String(error) };
    }
}
