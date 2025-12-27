
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

export class GeminiService {
  private ai: GoogleGenAI;

  constructor() {
    // Initialize GoogleGenAI using the API key from process.env.API_KEY as required by the guidelines.
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
  }

  async getRoofingAdvice(prompt: string): Promise<string> {
    try {
      // Use ai.models.generateContent with the model name and contents in the same call.
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

      // Directly access the .text property from the response object as per the SDK documentation.
      return response.text || "I'm sorry, I couldn't process that request right now. Please call us directly for assistance.";
    } catch (error) {
      console.error("Gemini API Error:", error);
      return "Unable to connect to the AI assistant. Please try again later or contact our office.";
    }
  }
}

export const geminiService = new GeminiService();
