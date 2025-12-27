
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
  Construction
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

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Banner */}
      <div className="bg-slate-900 text-white py-2 text-center text-xs md:text-sm font-medium border-b border-slate-800">
        <div className="container mx-auto px-4 flex flex-wrap justify-center items-center gap-4">
          <span className="flex items-center gap-1"><Clock size={14} className="text-red-500" /> 24/7 Emergency Service Available</span>
          <span className="hidden sm:inline">|</span>
          <span className="flex items-center gap-1"><MapPin size={14} className="text-red-500" /> Serving Deer Park & Houston Area</span>
          <span className="hidden sm:inline">|</span>
          <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:text-red-400 flex items-center gap-1 transition-colors">
            <Phone size={14} className="text-red-500" /> {BUSINESS_INFO.phone}
          </a>
        </div>
      </div>

      {/* Navigation */}
      <header className={`sticky top-0 z-40 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-red-700 p-2 rounded transform rotate-45">
              <Construction className="text-white transform -rotate-45" size={24} />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-2xl font-bold tracking-tight text-slate-900">MACKE ROOFERS</span>
              <span className="text-[10px] uppercase tracking-widest text-red-700 font-bold -mt-1">Quality Texas Craftsmanship</span>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-8">
            {['Services', 'About Us', 'Reviews', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(' ', '')}`} className="text-sm font-semibold text-slate-700 hover:text-red-700 transition-colors uppercase tracking-wider">
                {item}
              </a>
            ))}
            <a href="#quote" className="bg-red-700 hover:bg-red-800 text-white px-6 py-2.5 rounded-full font-bold text-sm transition-all shadow-lg hover:shadow-red-200/50 flex items-center gap-2">
              FREE ESTIMATE <ArrowRight size={16} />
            </a>
          </nav>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden p-2 text-slate-900">
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white lg:hidden flex flex-col p-8 pt-24 animate-in slide-in-from-right duration-300">
          <button onClick={() => setIsMenuOpen(false)} className="absolute top-6 right-6 p-2 text-slate-900">
            <X size={32} />
          </button>
          <div className="space-y-6">
            {['Services', 'About Us', 'Reviews', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(' ', '')}`} onClick={() => setIsMenuOpen(false)} className="block text-3xl font-display font-bold text-slate-900">
                {item}
              </a>
            ))}
            <a href="#quote" onClick={() => setIsMenuOpen(false)} className="block w-full bg-red-700 text-white text-center py-4 rounded-xl font-bold text-xl">
              FREE ESTIMATE
            </a>
          </div>
        </div>
      )}

      <main>
        {/* Hero Section */}
        <section className="relative min-h-[85vh] flex items-center bg-slate-900 overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-40">
            <img 
              src="https://images.unsplash.com/photo-1620023477150-514e21a64708?q=80&w=2000&auto=format&fit=crop" 
              alt="Beautiful Roof" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent z-10"></div>
          
          <div className="container mx-auto px-4 relative z-20 pt-20">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-6">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                </div>
                <span className="text-white font-bold text-sm tracking-widest uppercase">5.0 Star Rated Professionals</span>
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl text-white font-bold mb-6 leading-tight">
                PROTECTING <span className="text-red-600 italic">WHAT MATTERS</span> MOST.
              </h1>
              <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed">
                Deer Park's most trusted roofing experts. From minor repairs to full storm restoration, 
                Macke Roofers Co. delivers excellence in every shingle we lay.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#quote" className="bg-red-700 hover:bg-red-800 text-white px-10 py-5 rounded-md font-bold text-lg transition-all text-center flex items-center justify-center gap-3 group">
                  REQUEST INSPECTION <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a href={`tel:${BUSINESS_INFO.phone}`} className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border border-white/20 px-10 py-5 rounded-md font-bold text-lg transition-all text-center flex items-center justify-center gap-3">
                  <Phone size={20} /> CALL US NOW
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-white py-12 border-b">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: ShieldCheck, label: 'Licensed & Insured', sub: 'Total peace of mind' },
                { icon: Award, label: 'Lifetime Warranty', sub: 'On premium materials' },
                { icon: Calendar, label: '15+ Years Exp.', sub: 'Local Texas expertise' },
                { icon: CheckCircle, label: 'Free Estimates', sub: 'Transparent pricing' }
              ].map((stat, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <stat.icon size={32} className="text-red-700 mb-3" />
                  <h4 className="font-bold text-slate-900 text-lg uppercase tracking-tight">{stat.label}</h4>
                  <p className="text-sm text-slate-500">{stat.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div className="max-w-xl text-left">
                <span className="text-red-700 font-bold uppercase tracking-[0.2em] text-sm mb-4 block">Our Specialties</span>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">COMPREHENSIVE ROOFING SOLUTIONS</h2>
                <p className="text-slate-600">We handle everything from residential repairs to massive industrial roofing projects with precision and care.</p>
              </div>
              <a href="#contact" className="text-red-700 font-bold flex items-center gap-2 hover:gap-4 transition-all">
                VIEW ALL SERVICES <ArrowRight size={20} />
              </a>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {SERVICES.map((service) => (
                <div key={service.id} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all group hover:-translate-y-2">
                  <div className="w-16 h-16 bg-red-50 text-red-700 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-700 group-hover:text-white transition-colors">
                    <IconWrapper name={service.icon} size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-slate-900 group-hover:text-red-700 transition-colors">{service.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <button className="text-xs font-bold text-slate-400 group-hover:text-red-700 flex items-center gap-2 tracking-widest uppercase transition-colors">
                    Learn More <ArrowRight size={14} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Us (With Google Maps Data) */}
        <section id="aboutus" className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1595841055318-670877916578?q=80&w=1000&auto=format&fit=crop" 
                    alt="Roofing Crew" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-8 -right-8 bg-slate-900 p-8 rounded-2xl text-white shadow-2xl hidden md:block max-w-[280px]">
                  <div className="flex gap-1 mb-2 text-yellow-400">
                    {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
                  </div>
                  <p className="text-lg font-bold italic mb-2">"Highest rated roofers in Deer Park, TX."</p>
                  <div className="flex items-center gap-2 text-sm text-slate-400">
                    <div className="w-10 h-10 rounded-full bg-red-700 flex items-center justify-center text-xs font-bold">G</div>
                    <span>Google Business verified</span>
                  </div>
                </div>
              </div>
              <div>
                <span className="text-red-700 font-bold uppercase tracking-[0.2em] text-sm mb-4 block">About Macke Roofers Co.</span>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">ROOTED IN TEXAS, <br/>BUILT TO LAST.</h2>
                <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                  <p>
                    Macke Roofers Co. is a top-tier roofing contractor based right here in Deer Park. 
                    Our reputation is built on a solid foundation of quality materials and elite customer service.
                  </p>
                  <div className="bg-slate-50 p-6 rounded-xl border-l-4 border-red-700">
                    <div className="flex items-start gap-4 mb-4">
                      <MapPin className="text-red-700 shrink-0 mt-1" size={24} />
                      <div>
                        <h4 className="font-bold text-slate-900">Our Local Headquarters</h4>
                        <p className="text-sm">{BUSINESS_INFO.address}</p>
                        <p className="text-xs text-slate-400 mt-1 italic">{BUSINESS_INFO.locationContext}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Phone className="text-red-700 shrink-0" size={24} />
                      <div>
                        <h4 className="font-bold text-slate-900">Direct Line</h4>
                        <p className="text-sm font-medium">{BUSINESS_INFO.phone}</p>
                      </div>
                    </div>
                  </div>
                  <p>
                    Whether you need a full replacement or just a check-up, our team of seasoned professionals 
                    is ready to provide the best service in Harris County.
                  </p>
                </div>
                <button className="mt-10 bg-slate-900 text-white px-8 py-4 rounded font-bold hover:bg-slate-800 transition-colors uppercase tracking-widest">
                  Learn Our Story
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section id="reviews" className="py-24 bg-slate-50 relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <span className="text-red-700 font-bold uppercase tracking-[0.2em] text-sm mb-4 block">Customer Feedback</span>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">WHAT OUR CLIENTS SAY</h2>
              <div className="flex justify-center items-center gap-2">
                <span className="text-3xl font-bold text-slate-900">5.0</span>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => <Star key={i} size={24} fill="currentColor" />)}
                </div>
                <span className="text-slate-500 font-medium">({BUSINESS_INFO.reviewsCount} Reviews)</span>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {REVIEWS.map((review) => (
                <div key={review.id} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-between h-full">
                  <div>
                    <div className="flex text-yellow-400 mb-6">
                      {[...Array(review.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                    </div>
                    <p className="text-slate-700 italic mb-8 leading-relaxed">"{review.content}"</p>
                  </div>
                  <div className="flex items-center gap-4 pt-6 border-t border-slate-50">
                    <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-slate-400 font-bold text-xl">
                      {review.author[0]}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 leading-none">{review.author}</h4>
                      <span className="text-xs text-slate-400 uppercase tracking-widest">{review.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact/Quote Section */}
        <section id="quote" className="py-24 bg-slate-900 text-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <span className="text-red-500 font-bold uppercase tracking-[0.2em] text-sm mb-4 block">Request an Estimate</span>
                <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">READY TO <span className="text-red-600">GET STARTED?</span></h2>
                <p className="text-slate-400 text-lg mb-12">
                  Fill out the form below or call us directly. Our team will schedule a 
                  no-obligation inspection and provide a detailed estimate for your project.
                </p>

                <div className="space-y-8">
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 bg-red-700/20 text-red-500 rounded-2xl flex items-center justify-center shrink-0">
                      <Phone size={28} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-1 uppercase tracking-tight">Call Us Now</h4>
                      <p className="text-2xl font-display text-white">{BUSINESS_INFO.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 bg-red-700/20 text-red-500 rounded-2xl flex items-center justify-center shrink-0">
                      <MapPin size={28} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-1 uppercase tracking-tight">Visit Office</h4>
                      <p className="text-slate-400">{BUSINESS_INFO.address}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 md:p-12 rounded-3xl text-slate-900 shadow-2xl">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-widest">Name</label>
                      <input type="text" className="w-full bg-slate-100 border-none rounded-xl px-4 py-4 focus:ring-2 focus:ring-red-700 outline-none" placeholder="John Doe" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-widest">Phone</label>
                      <input type="tel" className="w-full bg-slate-100 border-none rounded-xl px-4 py-4 focus:ring-2 focus:ring-red-700 outline-none" placeholder="(555) 000-0000" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-widest">Email</label>
                    <input type="email" className="w-full bg-slate-100 border-none rounded-xl px-4 py-4 focus:ring-2 focus:ring-red-700 outline-none" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-widest">Service Needed</label>
                    <select className="w-full bg-slate-100 border-none rounded-xl px-4 py-4 focus:ring-2 focus:ring-red-700 outline-none">
                      <option>Roof Replacement</option>
                      <option>Leak Repair</option>
                      <option>Commercial Roofing</option>
                      <option>Gutter Installation</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-widest">Message</label>
                    <textarea rows={4} className="w-full bg-slate-100 border-none rounded-xl px-4 py-4 focus:ring-2 focus:ring-red-700 outline-none" placeholder="Tell us about your project..."></textarea>
                  </div>
                  <button className="w-full bg-red-700 text-white font-bold py-5 rounded-xl hover:bg-red-800 transition-all text-xl uppercase tracking-widest shadow-xl shadow-red-900/20">
                    Submit Request
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-500 py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <div className="bg-red-700 p-1.5 rounded transform rotate-45">
                  <Construction className="text-white transform -rotate-45" size={18} />
                </div>
                <span className="font-display text-xl font-bold tracking-tight text-white uppercase">MACKE ROOFERS</span>
              </div>
              <p className="text-sm leading-relaxed mb-6">
                Providing premium roofing services to Deer Park, Texas and the surrounding Houston metropolitan area. Committed to quality, safety, and integrity.
              </p>
              <div className="flex gap-4">
                {/* Social icons placeholder */}
                <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-red-700 hover:text-white transition-all cursor-pointer">FB</div>
                <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-red-700 hover:text-white transition-all cursor-pointer">IG</div>
                <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-red-700 hover:text-white transition-all cursor-pointer">LI</div>
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Quick Links</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#services" className="hover:text-red-500 transition-colors">Roofing Services</a></li>
                <li><a href="#aboutus" className="hover:text-red-500 transition-colors">Company History</a></li>
                <li><a href="#reviews" className="hover:text-red-500 transition-colors">Customer Testimonials</a></li>
                <li><a href="#quote" className="hover:text-red-500 transition-colors">Request a Quote</a></li>
                <li><a href="#" className="hover:text-red-500 transition-colors">Privacy Policy</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Contact Us</h4>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="text-red-700 shrink-0" />
                  <span>{BUSINESS_INFO.address}<br/>{BUSINESS_INFO.locationContext}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={18} className="text-red-700 shrink-0" />
                  <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:text-white">{BUSINESS_INFO.phone}</a>
                </li>
                <li className="flex items-center gap-3">
                  <Clock size={18} className="text-red-700 shrink-0" />
                  <span>Mon-Sat: 7am - 7pm<br/>Sun: Emergency Only</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Serving Houston Area</h4>
              <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                <p className="text-xs italic leading-relaxed mb-4">
                  "Macke Roofers provided elite service when my property was hit by hail. Their local knowledge of Texas weather patterns made all the difference."
                </p>
                <div className="flex items-center gap-2">
                  <div className="flex text-yellow-500">
                    {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
                  </div>
                  <span className="text-[10px] uppercase font-bold text-white">Verified Client</span>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest font-bold">
            <p>© {new Date().getFullYear()} MACKE ROOFERS CO. ALL RIGHTS RESERVED.</p>
            <p className="flex items-center gap-2">
              <ShieldCheck size={14} className="text-red-700" /> FULLY LICENSED & INSURED CONTRACTOR
            </p>
          </div>
        </div>
      </footer>

      {/* AI Assistant */}
      <GeminiAssistant />
    </div>
  );
};

export default App;
