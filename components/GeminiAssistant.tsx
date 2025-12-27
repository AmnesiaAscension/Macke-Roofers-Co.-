
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Loader2, Bot, Sparkles } from 'lucide-react';
import { geminiService } from '../services/geminiService';
import { ChatMessage } from '../types';

const GeminiAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Greetings. I am the Macke Roofers Concierge. How may I assist you with your roofing inquiries today?' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    const response = await geminiService.getRoofingAdvice(userMsg);
    setMessages(prev => [...prev, { role: 'model', text: response }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-red-700 hover:bg-red-800 text-white p-5 rounded-full shadow-[0_20px_50px_rgba(185,28,28,0.3)] transition-all hover:scale-110 flex items-center justify-center pulse-glow relative group"
        >
          <div className="absolute -top-1 -right-1 bg-amber-400 p-1.5 rounded-full text-red-900 group-hover:rotate-12 transition-transform">
            <Sparkles size={12} />
          </div>
          <MessageSquare size={28} />
          <span className="ml-3 font-display font-bold text-sm tracking-wider hidden md:inline">AI CONCIERGE</span>
        </button>
      ) : (
        <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-[0_30px_100px_rgba(0,0,0,0.2)] w-80 md:w-[400px] flex flex-col overflow-hidden border border-white/50 animate-in fade-in zoom-in duration-300">
          <div className="bg-gradient-to-r from-red-800 to-red-600 p-6 text-white flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="bg-white/20 p-2 rounded-xl backdrop-blur-md">
                <Bot size={24} />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg leading-none tracking-tight">AI CONCIERGE</h3>
                <span className="text-[10px] uppercase tracking-widest text-red-100 font-bold opacity-80">Macke Premium Intelligence</span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-2 rounded-full transition-colors">
              <X size={20} />
            </button>
          </div>

          <div ref={scrollRef} className="h-96 overflow-y-auto p-6 space-y-6 bg-slate-50/50">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] px-5 py-4 rounded-3xl text-sm leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-red-700 text-white rounded-tr-none shadow-lg' 
                    : 'bg-white text-slate-800 shadow-sm border border-slate-200/50 rounded-tl-none font-medium'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white/80 backdrop-blur-sm px-5 py-3 rounded-2xl shadow-sm border border-slate-200/50 flex items-center gap-3">
                  <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 bg-red-700 rounded-full animate-bounce"></div>
                    <div className="w-1.5 h-1.5 bg-red-700 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                    <div className="w-1.5 h-1.5 bg-red-700 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                  </div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">Consulting Gemini...</span>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 bg-white border-t border-slate-100 flex gap-3 items-center">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask for premium roofing advice..."
              className="flex-1 text-sm bg-slate-50 border border-slate-200/50 rounded-2xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-red-500/20 transition-all"
            />
            <button
              onClick={handleSend}
              disabled={isLoading}
              className="bg-red-700 text-white p-3 rounded-2xl hover:bg-red-800 transition-all disabled:opacity-50 shadow-lg shadow-red-900/10"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GeminiAssistant;
