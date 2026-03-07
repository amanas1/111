import { Phone, Clock, MapPin, Menu, X, ChevronDown, Droplet, Calculator, Calendar, MessageSquare, Map } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isToolsOpen, setIsToolsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const toolsRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (toolsRef.current && !toolsRef.current.contains(event.target as Node)) {
        setIsToolsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isActive = (path: string) => {
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname.startsWith(path);
  };

  const navLinkClass = (path: string) => `
    transition-all duration-300 px-3 py-2 rounded-lg font-medium text-sm lg:text-base whitespace-nowrap
    ${isActive(path) 
      ? "text-[#1173D4] bg-blue-50/50 border border-blue-100/50 shadow-sm" 
      : "text-gray-600 hover:text-[#1173D4] hover:bg-gray-50"}
  `;

  return (
    <header className="w-full flex flex-col">
      {/* Top Bar */}
      <div className="bg-[#1173D4] text-white py-2 px-4 flex flex-wrap justify-between items-center text-sm font-medium">
        <div className="max-w-7xl mx-auto w-full flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href="tel:+77055535332" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Phone size={16} />
              +7 (705) 553-53-32
            </a>
            <div className="hidden md:flex items-center gap-2">
              <Clock size={16} />
              Работаем 24/7
            </div>
            <div className="hidden lg:flex items-center gap-2">
              <MapPin size={16} />
              г. Алматы, мкр. Аксай 4-11
            </div>
          </div>
          <div className="hidden sm:block font-bold tracking-wide">
            Вызов мастера БЕСПЛАТНО!
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className={`bg-white py-4 flex justify-center items-center sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'shadow-md border-b border-gray-100 py-3' : 'border-b border-gray-100'}`}>
        <div className="max-w-7xl mx-auto w-full px-6 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 bg-gradient-to-br from-[#1173D4] to-[#13B6EC] rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-500/30 group-hover:scale-105 transition-transform duration-300">
              <Droplet size={24} className="fill-white" />
            </div>
            <div>
              <h1 className="text-xl font-extrabold leading-none text-[#1173D4] tracking-tight">Сантехник Алматы</h1>
              <p className="text-xs text-gray-500 font-medium tracking-wide">Мастер Манас</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden xl:flex items-center gap-2">
            <Link to="/" className={navLinkClass("/")}>Главная</Link>
            <Link to="/services" className={navLinkClass("/services")}>Услуги</Link>
            <Link to="/blog" className={navLinkClass("/blog")}>Блог</Link>
            <Link to="/portfolio" className={navLinkClass("/portfolio")}>Портфолио</Link>
            <Link to="/prices" className={navLinkClass("/prices")}>Цены</Link>
            <Link to="/reviews" className={navLinkClass("/reviews")}>Отзывы</Link>
            <Link to="/about" className={navLinkClass("/about")}>О нас</Link>
            <Link to="/contacts" className={navLinkClass("/contacts")}>Контакты</Link>

            {/* Инструменты Dropdown */}
            <div className="relative ml-2" ref={toolsRef}>
              <button
                onClick={() => setIsToolsOpen(!isToolsOpen)}
                className={`flex items-center gap-1 transition-all duration-300 px-3 py-2 rounded-lg font-medium text-sm lg:text-base whitespace-nowrap ${
                  isActive("/tools") || isToolsOpen
                    ? "text-[#1173D4] bg-blue-50/50 border border-blue-100/50 shadow-sm" 
                    : "text-gray-600 hover:text-[#1173D4] hover:bg-gray-50"
                }`}
              >
                Инструменты
                <ChevronDown size={16} className={`transition-transform duration-300 ${isToolsOpen ? "rotate-180" : ""}`} />
              </button>
              
              <div 
                className={`absolute right-0 top-full mt-3 w-64 bg-white rounded-2xl shadow-2xl border border-gray-100 py-3 z-50 transition-all duration-300 origin-top-right
                  ${isToolsOpen ? "opacity-100 scale-100 translate-y-0 visible" : "opacity-0 scale-95 -translate-y-2 invisible"}`}
              >
                <div className="px-4 pb-2 mb-2 border-b border-gray-50">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Полезные сервисы</p>
                </div>
                <Link
                  to="/tools/calculator"
                  onClick={() => setIsToolsOpen(false)}
                  className="flex flex-col px-4 py-2 hover:bg-blue-50/50 transition-colors group"
                >
                  <span className="text-sm font-semibold text-gray-900 group-hover:text-[#1173D4]">🧮 Калькулятор</span>
                  <span className="text-xs text-gray-500 mt-0.5">Рассчитать стоимость работ</span>
                </Link>
                <Link
                  to="/tools/booking"
                  onClick={() => setIsToolsOpen(false)}
                  className="flex flex-col px-4 py-2 hover:bg-blue-50/50 transition-colors group"
                >
                  <span className="text-sm font-semibold text-gray-900 group-hover:text-[#1173D4]">📅 Бронирование</span>
                  <span className="text-xs text-gray-500 mt-0.5">Оформить вызов онлайн</span>
                </Link>
                <Link
                  to="/tools/feedback"
                  onClick={() => setIsToolsOpen(false)}
                  className="flex flex-col px-4 py-2 hover:bg-blue-50/50 transition-colors group"
                >
                  <span className="text-sm font-semibold text-gray-900 group-hover:text-[#1173D4]">✉️ Заявка</span>
                  <span className="text-xs text-gray-500 mt-0.5">Оставить сообщение мастеру</span>
                </Link>
                <Link
                  to="/tools/service-map"
                  onClick={() => setIsToolsOpen(false)}
                  className="flex flex-col px-4 py-2 hover:bg-blue-50/50 transition-colors group"
                >
                  <span className="text-sm font-semibold text-gray-900 group-hover:text-[#1173D4]">🗺️ Карта</span>
                  <span className="text-xs text-gray-500 mt-0.5">Проверить зону обслуживания</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="hidden lg:block bg-gradient-to-r from-[#1173D4] to-[#13B6EC] text-white px-7 py-2.5 rounded-full font-bold shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 hover:-translate-y-0.5 transition-all duration-300">
              Вызвать мастера
            </button>
            
            <button 
              className="xl:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[60] xl:hidden transition-all duration-300 ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
        onClick={() => setIsMenuOpen(false)}
      >
        <div 
          className={`absolute inset-x-4 top-8 bottom-8 bg-white rounded-[2rem] shadow-2xl flex flex-col overflow-hidden transition-all duration-300 transform ${isMenuOpen ? "scale-100 translate-y-0" : "scale-95 translate-y-4"}`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header of mobile menu */}
          <div className="bg-[#1173D4] p-3 flex items-center gap-3">
            <Link to="/" className="bg-white rounded-2xl p-2 px-3 flex items-center gap-3 flex-1" onClick={() => setIsMenuOpen(false)}>
              <div className="w-9 h-9 bg-[#1173D4] rounded-full flex items-center justify-center text-white">
                <Droplet size={18} className="fill-white" />
              </div>
              <div>
                <h1 className="text-[15px] font-extrabold leading-none text-[#1173D4] tracking-tight">Сантехник Алматы</h1>
                <p className="text-[10px] text-gray-500 font-medium">Мастер Манас</p>
              </div>
            </Link>
            <button 
              className="w-12 h-12 border-2 border-white/20 text-white rounded-[1rem] flex items-center justify-center hover:bg-white/10 transition-colors shrink-0"
              onClick={() => setIsMenuOpen(false)}
            >
              <X size={24} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 flex flex-col">
            {/* Main Links */}
            <div className="flex flex-col mb-4">
              {[
                { path: "/", label: "Главная" },
                { path: "/services", label: "Услуги" },
                { path: "/blog", label: "Блог" },
                { path: "/portfolio", label: "Портфолио" },
                { path: "/prices", label: "Цены" },
                { path: "/reviews", label: "Отзывы" },
                { path: "/about", label: "О нас" },
                { path: "/contacts", label: "Контакты" },
              ].map((item, index) => (
                <div key={item.path}>
                  <Link 
                    to={item.path} 
                    onClick={() => setIsMenuOpen(false)}
                    className={`block py-3.5 px-4 font-semibold text-[15px] transition-all rounded-[1rem] ${
                      isActive(item.path) 
                        ? "bg-[#1173D4] text-white shadow-md" 
                        : "text-gray-800 hover:bg-gray-50"
                    }`}
                  >
                    {item.label}
                  </Link>
                  {index < 7 && !isActive(item.path) && (
                    <div className="h-px bg-slate-100 mx-4"></div>
                  )}
                </div>
              ))}
            </div>

            {/* Tools Lists */}
            <div className="flex flex-col mt-2 mb-6">
              <p className="text-[12px] font-bold text-gray-400 mb-3 px-4">Инструменты</p>
              
              <Link to="/tools/calculator" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3 py-3.5 px-4 text-gray-700 hover:bg-gray-50 rounded-xl transition-colors">
                <Calculator size={18} className="text-[#1173D4]" />
                <span className="font-medium text-[14px]">Калькулятор стоимости</span>
              </Link>
              
              <Link to="/tools/booking" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3 py-3.5 px-4 text-gray-700 hover:bg-gray-50 rounded-xl transition-colors">
                <Calendar size={18} className="text-[#1173D4]" />
                <span className="font-medium text-[14px]">Онлайн бронирование</span>
              </Link>
              
              <Link to="/tools/feedback" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3 py-3.5 px-4 text-gray-700 hover:bg-gray-50 rounded-xl transition-colors">
                <MessageSquare size={18} className="text-[#1173D4]" />
                <span className="font-medium text-[14px]">Оставить заявку</span>
              </Link>
              
              <Link to="/tools/service-map" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3 py-3.5 px-4 text-gray-700 hover:bg-gray-50 rounded-xl transition-colors">
                <Map size={18} className="text-[#1173D4]" />
                <span className="font-medium text-[14px]">Карта обслуживания</span>
              </Link>
            </div>
          </div>

          {/* Bottom Action Area */}
          <div className="p-4 border-t border-slate-100 flex gap-3 relative bg-slate-50">
            <a href="tel:+77055535332" className="flex-1 bg-[#1173D4] text-white py-4 rounded-[1rem] font-bold text-[15px] hover:bg-[#0f67be] transition-colors flex items-center justify-center shadow-lg shadow-blue-500/30">
              Вызвать мастера
            </a>
            <a href="tel:+77055535332" className="w-[52px] h-[52px] shrink-0 rounded-[1rem] border border-[#1173D4] flex items-center justify-center text-[#1173D4] hover:bg-blue-50 transition-colors bg-white">
              <Phone size={22} strokeWidth={2} />
            </a>

            {/* Decorative WhatsApp button over menu */}
            <a href="https://wa.me/77074791020" target="_blank" rel="noopener noreferrer" className="absolute -top-6 right-8 w-[52px] h-[52px] bg-[#22c55e] border-4 border-white text-white rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

