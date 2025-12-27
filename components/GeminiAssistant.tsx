
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Loader2, Bot } from 'lucide-react';
import { geminiService } from '../services/geminiService';
import { ChatMessage } from '../types';

const GeminiAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Hi! I am Macke Roofers AI Assistant. How can I help you with your roof today?' }
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
    <div className="fixed bottom-6 right-6 z-50">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-red-700 hover:bg-red-800 text-white p-4 rounded-full shadow-2xl transition-all hover:scale-110 flex items-center justify-center"
        >
          <MessageSquare size={28} />
          <span className="ml-2 font-semibold hidden md:inline">Ask an Expert</span>
        </button>
      ) : (
        <div className="bg-white rounded-2xl shadow-2xl w-80 md:w-96 flex flex-col overflow-hidden border border-slate-200 animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="bg-red-700 p-4 text-white flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Bot size={24} />
              <div>
                <h3 className="font-bold leading-none">Roofing Assistant</h3>
                <span className="text-xs text-red-100">Powered by Gemini</span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-red-600 p-1 rounded transition-colors">
              <X size={20} />
            </button>
          </div>

          <div ref={scrollRef} className="h-96 overflow-y-auto p-4 space-y-4 bg-slate-50">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl text-sm ${
                  msg.role === 'user' 
                    ? 'bg-red-700 text-white rounded-tr-none' 
                    : 'bg-white text-slate-800 shadow-sm border border-slate-200 rounded-tl-none'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-3 rounded-2xl shadow-sm border border-slate-200 flex items-center gap-2">
                  <Loader2 size={16} className="animate-spin text-red-700" />
                  <span className="text-xs text-slate-500">Thinking...</span>
                </div>
              </div>
            )}
          </div>

          <div className="p-3 border-t bg-white flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask about repairs, costs..."
              className="flex-1 text-sm border border-slate-200 rounded-full px-4 py-2 focus:outline-none focus:border-red-500"
            />
            <button
              onClick={handleSend}
              disabled={isLoading}
              className="bg-red-700 text-white p-2 rounded-full hover:bg-red-800 transition-colors disabled:opacity-50"
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
