
import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  MapPin, 
  Star, 
  CheckCircle, 
  ArrowRight, 
  Menu, 
  X, 
  Clock, 
  Award, 
  ShieldCheck, 
  Calendar,
  Construction,
  Waves,
  Sparkles,
  Zap,
  Check
} from 'lucide-react';
import { BUSINESS_INFO, SERVICES, REVIEWS } from './constants';
import IconWrapper from './components/IconWrapper';
import GeminiAssistant from './components/GeminiAssistant';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const ProcessStep = ({ number, title, desc }: { number: string, title: string, desc: string }) => (
    <div className="relative flex flex-col items-center text-center p-6 group">
      <div className="w-16 h-16 rounded-full bg-slate-900 border-2 border-red-700 flex items-center justify-center text-white font-display text-2xl font-bold mb-6 group-hover:scale-110 group-hover:bg-red-700 transition-all duration-500 z-10">
        {number}
      </div>
      <h4 className="font-display font-bold text-xl mb-3 tracking-tight text-slate-900">{title}</h4>
      <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col selection:bg-red-700 selection:text-white">
      {/* Top Banner - Slim & Modern */}
      <div className="bg-slate-950 text-slate-400 py-2.5 text-[10px] md:text-xs font-bold uppercase tracking-[0.15em] border-b border-white/5 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent animate-[pulse_4s_infinite]"></div>
        <div className="container mx-auto px-6 flex justify-between items-center relative z-10">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2"><Clock size={12} className="text-red-600" /> 24/7 Priority Support</span>
            <span className="hidden sm:flex items-center gap-2"><MapPin size={12} className="text-red-600" /> Harris County Experts</span>
          </div>
          <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:text-white flex items-center gap-2 transition-colors">
            <Phone size={12} className="text-red-600" /> CALL: {BUSINESS_INFO.phone}
          </a>
        </div>
      </div>

      {/* Navigation - Glassmorphism */}
      <header className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ${
        scrolled ? 'bg-white/80 backdrop-blur-lg border-b border-slate-200 py-3 mt-0' : 'bg-transparent py-8 mt-10'
      }`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="bg-red-700 p-2.5 rounded-xl shadow-lg shadow-red-900/20 group cursor-pointer overflow-hidden">
              <Construction className="text-white group-hover:scale-125 transition-transform duration-500" size={24} />
            </div>
            <div className="flex flex-col">
              <span className={`font-display text-2xl font-bold tracking-tighter transition-colors duration-500 ${scrolled ? 'text-slate-900' : 'text-white'}`}>
                MACKE <span className="text-red-700">ROOFERS</span>
              </span>
              <span className="text-[9px] uppercase tracking-[0.3em] font-black text-red-600 -mt-1 opacity-90">Est. 2008</span>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-10">
            {['Services', 'Process', 'Testimonials', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(' ', '')}`} className={`text-[11px] font-black uppercase tracking-[0.2em] transition-all hover:text-red-600 hover:-translate-y-0.5 ${
                scrolled ? 'text-slate-600' : 'text-white'
              }`}>
                {item}
              </a>
            ))}
            <a href="#quote" className="bg-red-700 hover:bg-red-800 text-white px-8 py-3.5 rounded-full font-display font-bold text-xs tracking-widest transition-all shadow-[0_10px_30px_rgba(185,28,28,0.3)] hover:scale-105 flex items-center gap-3 group">
              FREE INSPECTION <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </nav>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={`lg:hidden p-2 ${scrolled ? 'text-slate-900' : 'text-white'}`}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950 lg:hidden flex flex-col p-12 pt-32 animate-in fade-in slide-in-from-top-full duration-500">
          <button onClick={() => setIsMenuOpen(false)} className="absolute top-10 right-10 p-2 text-white">
            <X size={40} />
          </button>
          <div className="space-y-10">
            {['Services', 'Process', 'Testimonials', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(' ', '')}`} onClick={() => setIsMenuOpen(false)} className="block text-5xl font-display font-bold text-white hover:text-red-600 transition-colors tracking-tighter">
                {item}
              </a>
            ))}
            <a href="#quote" onClick={() => setIsMenuOpen(false)} className="block w-full bg-red-700 text-white text-center py-6 rounded-2xl font-display font-bold text-2xl tracking-widest shadow-2xl">
              REQUEST QUOTE
            </a>
          </div>
        </div>
      )}

      <main>
        {/* Hero Section - Cinematic */}
        <section className="relative min-h-screen flex items-center justify-center bg-slate-950 overflow-hidden">
          <div className="absolute inset-0 z-0 scale-110 animate-[pulse_10s_ease-in-out_infinite] opacity-60">
            <img 
              src="https://images.unsplash.com/photo-1512401815152-4740e74f36e4?q=80&w=2000&auto=format&fit=crop" 
              alt="Premium Architecture" 
              className="w-full h-full object-cover blur-[2px]"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/90 to-slate-950 z-10"></div>
          
          <div className="container mx-auto px-6 relative z-20 pt-20 text-center">
            <div className="max-w-5xl mx-auto">
              <div className="flex justify-center items-center gap-3 mb-8 reveal">
                <div className="h-px w-12 bg-red-600/50"></div>
                <div className="flex text-amber-400 gap-1">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <span className="text-red-600 font-black text-[10px] tracking-[0.4em] uppercase">Houston's Premier Contractor</span>
                <div className="h-px w-12 bg-red-600/50"></div>
              </div>
              
              <h1 className="text-6xl md:text-8xl lg:text-[10rem] text-white font-display font-bold mb-8 leading-[0.85] tracking-tighter reveal">
                PREMIUM <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-red-500 to-amber-500 italic">CRAFTSMANSHIP</span>
              </h1>
              
              <p className="text-lg md:text-2xl text-slate-400 mb-12 max-w-2xl mx-auto font-serif italic leading-relaxed reveal">
                Defining the gold standard in Texas roofing through uncompromising integrity and elite architectural precision.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center reveal">
                <a href="#quote" className="bg-red-700 hover:bg-red-800 text-white px-12 py-6 rounded-full font-display font-bold text-sm tracking-widest transition-all hover:scale-105 shadow-[0_20px_60px_rgba(185,28,28,0.4)] flex items-center justify-center gap-4 group">
                  BEGIN PROJECT <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a href={`tel:${BUSINESS_INFO.phone}`} className="bg-white/5 backdrop-blur-md hover:bg-white/10 text-white border border-white/10 px-12 py-6 rounded-full font-display font-bold text-sm tracking-widest transition-all hover:scale-105 flex items-center justify-center gap-4">
                  <Phone size={18} className="text-red-600" /> CONTACT US
                </a>
              </div>
            </div>
          </div>
          
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-4 opacity-50 reveal">
            <span className="text-[10px] text-white tracking-[0.5em] font-bold uppercase">Discover Excellence</span>
            <div className="w-px h-20 bg-gradient-to-b from-red-600 to-transparent"></div>
          </div>
        </section>

        {/* Dynamic Stats Section */}
        <section className="bg-white py-20 relative -mt-10 rounded-t-[50px] z-30 shadow-[0_-20px_100px_rgba(0,0,0,0.1)]">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
              {[
                { icon: ShieldCheck, label: 'Secured Build', sub: 'Fully Licensed & Insured' },
                { icon: Award, label: 'Master Elite', sub: 'Certfied Installation Team' },
                { icon: Calendar, label: 'Local Roots', sub: '15+ Years in Deer Park' },
                { icon: Zap, label: 'Rapid Response', sub: '24/7 Storm Response' }
              ].map((stat, i) => (
                <div key={i} className="flex flex-col items-center text-center group reveal">
                  <div className="w-16 h-16 bg-slate-50 text-red-700 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-red-700 group-hover:text-white transition-all duration-500">
                    <stat.icon size={32} />
                  </div>
                  <h4 className="font-display font-bold text-slate-900 text-lg uppercase tracking-tight mb-2">{stat.label}</h4>
                  <p className="text-[11px] text-slate-400 font-bold uppercase tracking-widest">{stat.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section - Grid Glow */}
        <section id="services" className="py-32 bg-slate-50 relative">
          <div className="container mx-auto px-6">
            <div className="flex flex-col items-center text-center mb-24 reveal">
              <span className="text-red-700 font-black uppercase tracking-[0.5em] text-[10px] mb-6 block">Elite Specializations</span>
              <h2 className="text-5xl md:text-7xl font-display font-bold text-slate-900 mb-8 leading-none tracking-tighter">OUR ROOFING <br/><span className="text-red-600 italic">PORTFOLIO</span></h2>
              <p className="text-slate-500 max-w-2xl font-serif text-lg leading-relaxed">From luxurious residential shingles to robust industrial steel systems, we execute every project with military-grade precision.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {SERVICES.map((service) => (
                <div key={service.id} className="bg-white p-10 rounded-[40px] shadow-[0_10px_40px_rgba(0,0,0,0.02)] border border-slate-100 hover:shadow-[0_40px_80px_rgba(0,0,0,0.08)] transition-all duration-700 group hover:-translate-y-4 relative overflow-hidden reveal">
                  <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-10 transition-opacity">
                    <IconWrapper name={service.icon} size={120} />
                  </div>
                  <div className="w-20 h-20 bg-slate-950 text-white rounded-3xl flex items-center justify-center mb-8 shadow-2xl group-hover:bg-red-700 transition-colors duration-700 relative z-10">
                    <IconWrapper name={service.icon} size={40} />
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-6 text-slate-900 relative z-10">{service.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-8 relative z-10">
                    {service.description}
                  </p>
                  <button className="text-[10px] font-black text-red-700 flex items-center gap-3 tracking-[0.3em] uppercase group-hover:gap-5 transition-all relative z-10">
                    View Portfolio <ArrowRight size={14} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Interactive Process Section */}
        <section id="process" className="py-32 bg-white overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="text-center mb-24 reveal">
              <span className="text-red-700 font-black uppercase tracking-[0.5em] text-[10px] mb-6 block">Transparency & Trust</span>
              <h2 className="text-5xl md:text-7xl font-display font-bold text-slate-900 mb-4 tracking-tighter">THE MACKE METHOD</h2>
            </div>
            
            <div className="relative">
              <div className="absolute top-1/2 left-0 w-full h-px bg-slate-100 -translate-y-1/2 hidden lg:block"></div>
              <div className="grid lg:grid-cols-4 gap-8 relative z-10">
                <ProcessStep number="01" title="Initial Scan" desc="Comprehensive AI-assisted roof health analysis and damage mapping." />
                <ProcessStep number="02" title="Blueprint" desc="Detailed structural planning and custom material selection." />
                <ProcessStep number="03" title="Execution" desc="Elite deployment of our certified master installation crew." />
                <ProcessStep number="04" title="Certification" desc="Rigid 50-point quality check and lifetime warranty activation." />
              </div>
            </div>
          </div>
        </section>

        {/* About Section - Premium Visuals */}
        <section id="aboutus" className="py-32 bg-slate-950 text-white overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <div className="relative group reveal">
                <div className="absolute -inset-4 bg-red-700/20 rounded-[60px] blur-2xl group-hover:bg-red-700/30 transition-all duration-700"></div>
                <div className="relative aspect-[4/5] rounded-[50px] overflow-hidden border border-white/10 shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1632759162402-99003182155d?q=80&w=1000&auto=format&fit=crop" 
                    alt="Master Roofer" 
                    className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
                  <div className="absolute bottom-12 left-12 right-12 bg-white/10 backdrop-blur-xl p-8 rounded-3xl border border-white/20">
                    <div className="flex gap-1 mb-3 text-amber-500">
                      {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                    </div>
                    <p className="text-xl font-serif italic mb-2">"Highest standard of integrity I've encountered in Texas construction."</p>
                    <div className="h-px w-10 bg-red-600 mb-3"></div>
                    <span className="text-[10px] font-black tracking-widest uppercase text-slate-400">Google Verified Resident</span>
                  </div>
                </div>
              </div>
              
              <div className="reveal">
                <span className="text-red-600 font-black uppercase tracking-[0.5em] text-[10px] mb-8 block">Our Legacy</span>
                <h2 className="text-5xl md:text-7xl font-display font-bold mb-10 leading-[0.9] tracking-tighter">BORN IN TEXAS.<br/><span className="text-red-600">RAISED TO LEAD.</span></h2>
                <div className="space-y-8 text-slate-400 text-lg leading-relaxed font-serif">
                  <p>
                    Macke Roofers Co. isn't just a business; it's a multi-generational commitment to protecting the families of Deer Park. 
                    We don't just lay shingles; we build fortresses.
                  </p>
                  <div className="grid grid-cols-2 gap-8">
                    <div className="bg-white/5 p-8 rounded-[40px] border border-white/10 hover:border-red-600/50 transition-colors group">
                      <div className="text-4xl font-display font-bold text-white mb-2 group-hover:text-red-600 transition-colors">1.2K+</div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Projects Completed</span>
                    </div>
                    <div className="bg-white/5 p-8 rounded-[40px] border border-white/10 hover:border-red-600/50 transition-colors group">
                      <div className="text-4xl font-display font-bold text-white mb-2 group-hover:text-red-600 transition-colors">100%</div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Safety Rating</span>
                    </div>
                  </div>
                  <p>
                    Operating from our strategic hub in the United States Postal Service complex, we deploy elite logistics 
                    to ensure your roof is restored faster and stronger than any competitor.
                  </p>
                </div>
                <button className="mt-12 bg-white text-slate-900 px-12 py-6 rounded-full font-display font-bold text-xs tracking-[0.3em] hover:bg-red-600 hover:text-white transition-all shadow-2xl uppercase">
                  Our Professional Ethics
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews Section - Modern Deck */}
        <section id="testimonials" className="py-32 bg-white relative">
          <div className="container mx-auto px-6">
            <div className="flex flex-col items-center text-center mb-24 reveal">
              <h2 className="text-5xl md:text-7xl font-display font-bold text-slate-900 mb-8 tracking-tighter">THE CLIENT <br/><span className="text-red-600 italic">EXPERIENCE</span></h2>
              <div className="bg-slate-50 px-10 py-4 rounded-full border border-slate-100 flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-display font-bold text-slate-900">5.0</span>
                  <div className="flex text-amber-500">
                    {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                  </div>
                </div>
                <div className="h-4 w-px bg-slate-200"></div>
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Global Ranking</span>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-10">
              {REVIEWS.map((review) => (
                <div key={review.id} className="bg-slate-50/50 p-12 rounded-[50px] border border-slate-100 flex flex-col justify-between h-full hover:bg-white hover:shadow-[0_40px_100px_rgba(0,0,0,0.05)] transition-all duration-700 reveal">
                  <div>
                    <div className="w-12 h-12 bg-red-700/10 text-red-700 rounded-2xl flex items-center justify-center mb-8">
                      <Sparkles size={24} />
                    </div>
                    <p className="text-slate-700 font-serif italic text-xl mb-12 leading-relaxed">"{review.content}"</p>
                  </div>
                  <div className="flex items-center gap-5 pt-8 border-t border-slate-200">
                    <div className="w-16 h-16 bg-slate-900 rounded-3xl flex items-center justify-center text-white font-display text-2xl font-bold shadow-xl">
                      {review.author[0]}
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-slate-900 text-lg leading-none mb-2">{review.author}</h4>
                      <span className="text-[10px] text-slate-400 font-black uppercase tracking-widest">{review.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact/Quote Section - Ultra Modern */}
        <section id="contact" className="py-32 bg-slate-950 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-red-700/10 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="bg-white rounded-[60px] p-12 md:p-24 shadow-[0_50px_150px_rgba(0,0,0,0.4)]">
              <div className="grid lg:grid-cols-2 gap-24">
                <div className="reveal">
                  <span className="text-red-700 font-black uppercase tracking-[0.5em] text-[10px] mb-8 block">Final Step</span>
                  <h2 className="text-5xl md:text-8xl font-display font-bold text-slate-950 mb-10 leading-none tracking-tighter">SECURE YOUR <br/><span className="text-red-600">VALUATION.</span></h2>
                  <p className="text-slate-500 text-xl font-serif italic mb-12">
                    Our technical inspections go beyond a quick look. We provide a full architectural report and material roadmap.
                  </p>

                  <div className="space-y-10">
                    <div className="flex items-center gap-8 group cursor-pointer">
                      <div className="w-20 h-20 bg-slate-950 text-white rounded-[30px] flex items-center justify-center shrink-0 group-hover:bg-red-700 transition-all duration-500 shadow-2xl shadow-red-900/10">
                        <Phone size={32} />
                      </div>
                      <div>
                        <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Direct Priority Line</h4>
                        <p className="text-3xl font-display font-bold text-slate-950">{BUSINESS_INFO.phone}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-8 group cursor-pointer">
                      <div className="w-20 h-20 bg-slate-950 text-white rounded-[30px] flex items-center justify-center shrink-0 group-hover:bg-red-700 transition-all duration-500 shadow-2xl shadow-red-900/10">
                        <MapPin size={32} />
                      </div>
                      <div>
                        <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Regional HQ</h4>
                        <p className="text-lg font-bold text-slate-950">{BUSINESS_INFO.address}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="reveal">
                  <form className="space-y-8 bg-slate-50 p-10 md:p-16 rounded-[50px] border border-slate-100 shadow-inner">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <label className="block text-[10px] font-black text-slate-400 mb-4 uppercase tracking-[0.3em]">Full Name</label>
                        <input type="text" className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-5 focus:ring-2 focus:ring-red-700 focus:border-transparent outline-none transition-all shadow-sm" placeholder="Johnathan Macke" />
                      </div>
                      <div>
                        <label className="block text-[10px] font-black text-slate-400 mb-4 uppercase tracking-[0.3em]">Phone Number</label>
                        <input type="tel" className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-5 focus:ring-2 focus:ring-red-700 focus:border-transparent outline-none transition-all shadow-sm" placeholder="(281) 000-0000" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-[10px] font-black text-slate-400 mb-4 uppercase tracking-[0.3em]">Email Address</label>
                      <input type="email" className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-5 focus:ring-2 focus:ring-red-700 focus:border-transparent outline-none transition-all shadow-sm" placeholder="contact@premium.com" />
                    </div>
                    <div>
                      <label className="block text-[10px] font-black text-slate-400 mb-4 uppercase tracking-[0.3em]">Project Scope</label>
                      <select className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-5 focus:ring-2 focus:ring-red-700 focus:border-transparent outline-none transition-all shadow-sm appearance-none">
                        <option>Residential Restoration</option>
                        <option>Commercial Development</option>
                        <option>Storm Damage Audit</option>
                        <option>Architectural Consultation</option>
                      </select>
                    </div>
                    <button className="w-full bg-slate-950 text-white font-display font-bold py-6 rounded-2xl hover:bg-red-700 transition-all text-sm uppercase tracking-[0.4em] shadow-2xl shadow-slate-950/20 active:scale-95">
                      SUBMIT DOSSIER
                    </button>
                    <p className="text-center text-[9px] text-slate-400 font-bold uppercase tracking-widest">Privacy Secured & NDA Compliant</p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Premium Footer */}
      <footer className="bg-slate-950 text-slate-500 py-32 relative">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-4 gap-20 mb-24 reveal">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-4 mb-10">
                <div className="bg-red-700 p-2.5 rounded-2xl">
                  <Construction className="text-white" size={32} />
                </div>
                <span className="font-display text-4xl font-bold tracking-tighter text-white uppercase italic">MACKE</span>
              </div>
              <p className="text-lg font-serif italic leading-relaxed max-w-lg mb-12">
                Engineering excellence into every roof since 2008. We are the architects of shelter, 
                blending Texas grit with global craftsmanship standards.
              </p>
              <div className="flex gap-6">
                {['Facebook', 'Instagram', 'LinkedIn'].map(social => (
                  <div key={social} className="px-6 py-2 border border-white/10 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-red-700 hover:text-white transition-all cursor-pointer">
                    {social}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-white font-display font-bold mb-10 uppercase tracking-[0.3em] text-xs">Directory</h4>
              <ul className="space-y-6 text-[11px] font-black uppercase tracking-[0.2em]">
                <li><a href="#services" className="hover:text-red-600 transition-colors">Specializations</a></li>
                <li><a href="#aboutus" className="hover:text-red-600 transition-colors">Our Legacy</a></li>
                <li><a href="#testimonials" className="hover:text-red-600 transition-colors">Testimonials</a></li>
                <li><a href="#quote" className="hover:text-red-600 transition-colors">Evaluations</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-display font-bold mb-10 uppercase tracking-[0.3em] text-xs">Headquarters</h4>
              <ul className="space-y-8 text-[11px] font-black uppercase tracking-[0.2em]">
                <li className="flex items-start gap-4">
                  <MapPin size={18} className="text-red-700 shrink-0" />
                  <span className="leading-relaxed">{BUSINESS_INFO.address}<br/>United States Postal Service Complex</span>
                </li>
                <li className="flex items-center gap-4">
                  <Phone size={18} className="text-red-700 shrink-0" />
                  <a href={`tel:${BUSINESS_INFO.phone}`} className="text-white hover:text-red-600 transition-colors">{BUSINESS_INFO.phone}</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 reveal">
            <div className="flex flex-col md:flex-row items-center gap-12 text-[10px] font-black uppercase tracking-[0.3em]">
              <p>© {new Date().getFullYear()} MACKE ROOFERS CO. | TEXAS REGISTERED</p>
              <div className="flex items-center gap-3">
                <Check size={14} className="text-red-700" />
                <span>OSHA CERTIFIED</span>
              </div>
              <div className="flex items-center gap-3">
                <Check size={14} className="text-red-700" />
                <span>MASTER ELITE CONTRACTOR</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center p-2 invert opacity-50">
                <ShieldCheck size={20} />
              </div>
              <span className="text-[10px] font-black text-white tracking-widest uppercase">Verified Protection</span>
            </div>
          </div>
        </div>
      </footer>

      {/* AI Concierge */}
      <GeminiAssistant />
    </div>
  );
};

export default App;
