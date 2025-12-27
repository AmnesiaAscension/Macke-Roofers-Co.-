
import { GoogleGenAI } from "@google/genai";

// Initialize Lucide Icons
// @ts-ignore
lucide.createIcons();

// --- UI Interaction Logic ---

// Reveal animations using Intersection Observer
const observerOptions = { threshold: 0.1 };
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// Header Scroll Effect
const header = document.getElementById('main-header');
const logoText = document.getElementById('logo-text');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
        header?.classList.add('bg-white/90', 'backdrop-blur-xl', 'py-4', 'shadow-2xl', 'mt-0');
        header?.classList.remove('bg-transparent', 'py-8', 'mt-10');
        logoText?.classList.add('text-slate-900');
        logoText?.classList.remove('text-white');
        navLinks.forEach(link => link.classList.add('text-slate-600'));
        navLinks.forEach(link => link.classList.remove('text-white'));
    } else {
        header?.classList.remove('bg-white/90', 'backdrop-blur-xl', 'py-4', 'shadow-2xl', 'mt-0');
        header?.classList.add('bg-transparent', 'py-8', 'mt-10');
        logoText?.classList.remove('text-slate-900');
        logoText?.classList.add('text-white');
        navLinks.forEach(link => link.classList.remove('text-slate-600'));
        navLinks.forEach(link => link.classList.add('text-white'));
    }
});

// Mobile Menu
const menuToggle = document.getElementById('menu-toggle');
const menuClose = document.getElementById('menu-close');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-nav-link');

const toggleMenu = () => mobileMenu?.classList.toggle('hidden');

menuToggle?.addEventListener('click', toggleMenu);
menuClose?.addEventListener('click', toggleMenu);
mobileLinks.forEach(link => link.addEventListener('click', () => mobileMenu?.classList.add('hidden')));

// --- AI Concierge Logic ---

const aiToggleBtn = document.getElementById('ai-toggle-btn');
const aiWindow = document.getElementById('ai-window');
const aiCloseBtn = document.getElementById('ai-close-btn');
const chatInput = document.getElementById('chat-input') as HTMLInputElement;
const chatSend = document.getElementById('chat-send');
const chatMessages = document.getElementById('chat-messages');

aiToggleBtn?.addEventListener('click', () => {
    aiWindow?.classList.remove('hidden');
    aiToggleBtn?.classList.add('hidden');
});

aiCloseBtn?.addEventListener('click', () => {
    aiWindow?.classList.add('hidden');
    aiToggleBtn?.classList.remove('hidden');
});

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

const appendMessage = (role: 'user' | 'model', text: string) => {
    if (!chatMessages) return;
    const msgDiv = document.createElement('div');
    msgDiv.className = `flex ${role === 'user' ? 'justify-end' : 'justify-start'} animate-in fade-in slide-in-from-bottom-2 duration-300`;
    msgDiv.innerHTML = `<div class="message-${role} max-w-[85%] px-5 py-4 rounded-3xl text-sm leading-relaxed">${text}</div>`;
    chatMessages.appendChild(msgDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
};

const handleChat = async () => {
    const prompt = chatInput?.value.trim();
    if (!prompt) return;

    appendMessage('user', prompt);
    chatInput.value = '';

    const loadingId = 'ai-loading-' + Date.now();
    const loadingDiv = document.createElement('div');
    loadingDiv.id = loadingId;
    loadingDiv.className = 'flex justify-start';
    loadingDiv.innerHTML = `<div class="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-2xl shadow-sm border text-[10px] uppercase font-bold text-slate-400 tracking-widest animate-pulse">Consulting Expert...</div>`;
    chatMessages?.appendChild(loadingDiv);
    chatMessages!.scrollTop = chatMessages!.scrollHeight;

    try {
        const response = await ai.models.generateContent({
            model: 'gemini-3-flash-preview',
            contents: prompt,
            config: {
                systemInstruction: "You are the premium AI concierge for Macke Roofers Co. in Deer Park, TX. You are professional and helpful. Advise on roofing, leaks, and weather protection. Always suggest calling (281) 918-7715 for a free inspection.",
                temperature: 0.7,
            },
        });

        document.getElementById(loadingId)?.remove();
        appendMessage('model', response.text || "I apologize, but I couldn't formulate a response. Please call us directly.");
    } catch (error) {
        document.getElementById(loadingId)?.remove();
        appendMessage('model', "Connection disrupted. Please contact Macke Roofers Co. at (281) 918-7715 for immediate assistance.");
    }
};

chatSend?.addEventListener('click', handleChat);
chatInput?.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') handleChat();
});

// Contact Form Mock Success
document.getElementById('contact-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = (e.target as HTMLFormElement).querySelector('button');
    if (btn) {
        btn.innerText = "DOSSIER RECEIVED";
        btn.classList.replace('bg-red-700', 'bg-green-700');
        setTimeout(() => {
            btn.innerText = "SUBMIT DOSSIER";
            btn.classList.replace('bg-green-700', 'bg-red-700');
            (e.target as HTMLFormElement).reset();
        }, 3000);
    }
});
