
import { GoogleGenAI, Type } from "@google/genai";
import { BATIK_PRODUCTS } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getBatikRecommendation = async (userInput: string) => {
  const productContext = BATIK_PRODUCTS.map(p => 
    `ID: ${p.id}, Name: ${p.name}, Desc: ${p.description}, Pattern: ${p.patternOrigin}`
  ).join('\n');

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `You are a professional Indonesian Batik fashion stylist for "Arum's Batik". 
      Based on the user's request, suggest the best batik from our collection.
      
      Collection:
      ${productContext}

      User Request: "${userInput}"

      Return your response in JSON format including:
      1. productIds: An array of IDs recommended (max 3).
      2. reasoning: A short, elegant explanation of why these match the user's need.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            productIds: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: "Array of matching product IDs"
            },
            reasoning: {
              type: Type.STRING,
              description: "Explanation for the recommendation"
            }
          },
          required: ["productIds", "reasoning"]
        }
      }
    });

    return JSON.parse(response.text || "{}");
  } catch (error) {
    console.error("AI Error:", error);
    return null;
  }
};
