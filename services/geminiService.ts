
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

export class GeminiService {
  private ai: GoogleGenAI;

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  }

  async getRoofingAdvice(prompt: string): Promise<string> {
    try {
      const response: GenerateContentResponse = await this.ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: prompt,
        config: {
          systemInstruction: `You are a professional roofing expert for "Macke Roofers Co." located in Deer Park, Texas. 
          Provide helpful, safe, and professional roofing advice to homeowners. 
          Keep answers concise and informative. 
          Mention that for specific inspections in the Houston/Deer Park area, they should call (281) 918-7715.
          Always maintain a friendly, local-business tone.`,
          temperature: 0.7,
        },
      });

      return response.text || "I'm sorry, I couldn't process that request right now. Please call us directly for assistance.";
    } catch (error) {
      console.error("Gemini API Error:", error);
      return "Unable to connect to the AI assistant. Please try again later or contact our office.";
    }
  }
}

export const geminiService = new GeminiService();
