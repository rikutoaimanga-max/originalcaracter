"use server";

export async function listAvailableModels(userApiKey?: string) {
    const apiKey = userApiKey || process.env.GOOGLE_API_KEY;
    if (!apiKey) {
        throw new Error("API Key is missing");
    }

    const url = `https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        console.log("=== Available Models ===");
        if (data.models) {
            data.models.forEach((m: any) => {
                console.log(`- ${m.name} (${m.supportedGenerationMethods?.join(", ")})`);
            });
        } else {
            console.log("No models found or unexpected format:", data);
        }
        console.log("========================");

        return data;
    } catch (error) {
        console.error("Failed to list models:", error);
        throw error;
    }
}
