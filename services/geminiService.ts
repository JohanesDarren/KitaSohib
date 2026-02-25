import { GoogleGenAI } from "@google/genai";

export const getSupportiveMessage = async (mood: string, context: string): Promise<string> => {
  try {
    // Inisialisasi di dalam fungsi agar tidak crash saat halaman baru dimuat (lazy load)
    // Pastikan process.env.API_KEY tersedia
    const apiKey = process.env.API_KEY;
    
    if (!apiKey) {
      console.warn("API Key belum terdeteksi.");
      return "Sohib sedang istirahat sebentar (API Key Missing). Coba lagi nanti ya! ✨";
    }

    const ai = new GoogleGenAI({ apiKey: apiKey });
    const model = "gemini-3-flash-preview";
    
    const prompt = `
      Kamu adalah "Sohib", asisten AI dari aplikasi KitaSohib yang ramah, suportif, dan hangat. Target audiensmu adalah remaja Gen Z Indonesia.
      Gunakan bahasa yang santai, tidak kaku, "aku-kamu", dan penuh empati. Jangan menggurui.
      
      User sedang merasa: ${mood}.
      Konteks tambahan: ${context}.
      
      Berikan respon singkat (maksimal 3 kalimat) yang memvalidasi perasaan mereka dan memberikan sedikit semangat atau tips kecil yang bisa dilakukan sekarang.
      Gunakan emoji yang relevan.
    `;

    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
      config: {
        temperature: 0.7,
      }
    });

    return response.text || "Maaf, Sohib lagi loading nih. Tapi ingat, kamu berharga! ✨";
  } catch (error) {
    console.error("Error generating support message:", error);
    return "Sepertinya koneksi kita agak putus-putus. Tetap semangat ya! 💪";
  }
};