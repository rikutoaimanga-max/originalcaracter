"use server";

export async function generateCharacterImage(prompt: string, userApiKey?: string, seed?: number, width?: number, height?: number) {
    // ユーザー入力キーを優先し、なければ環境変数を使用
    const apiKey = userApiKey || process.env.GOOGLE_API_KEY;

    if (!apiKey) {
        throw new Error("API Key not provided. Please set it in the settings menu.");
    }

    // ユーザー指定のモデル名
    const modelName = "imagen-4.0-generate-001";

    // Google AI Studio (Generative Language API) のエンドポイント構築
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${modelName}:predict?key=${apiKey}`;

    // シード値の決定（指定がなければランダム）
    const randomSeed = seed ?? Math.floor(Math.random() * 2147483647);

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
                    aspectRatio: "3:4",
                },
            }),
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error("API Error:", errorText);
            throw new Error(`Failed to generate image: ${response.status} ${response.statusText} - ${errorText}`);
        }

        const data = await response.json();

        // レスポンス形式の解析
        const prediction = data.predictions?.[0];
        const base64Image = prediction?.bytesBase64Encoded || prediction?.mimeType ? prediction.bytesBase64Encoded : null;

        if (!base64Image) {
            console.error("Unexpected response format:", data);
            throw new Error("No image data found in response");
        }

        return {
            base64: `data:image/png;base64,${base64Image}`,
            seed: randomSeed
        };

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
