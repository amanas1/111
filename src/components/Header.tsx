import { Phone, Clock, MapPin, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full flex flex-col">
      {/* Top Bar */}
      <div className="bg-[#0095DA] text-white py-2 px-4 flex flex-wrap justify-between items-center text-sm font-medium">
        <div className="flex items-center gap-6">
          <a href="tel:+77055535332" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Phone size={16} />
            +77055535332
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
        <div className="hidden sm:block">
          Вызов мастера БЕСПЛАТНО!
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-white border-b py-4 px-6 flex justify-between items-center sticky top-0 z-50">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#0095DA] rounded-lg flex items-center justify-center text-white font-bold">
            <span className="text-xl">💧</span>
          </div>
          <div>
            <h1 className="text-xl font-bold leading-none text-[#0095DA]">Сантехник Алматы</h1>
            <p className="text-xs text-gray-500">Мастер Манас</p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden xl:flex items-center gap-8 font-medium text-gray-600">
          <Link to="/" className="hover:text-[#0095DA] transition-colors">Главная</Link>
          <Link to="/services" className="text-[#0095DA]">Услуги</Link>
          <Link to="/blog" className="hover:text-[#0095DA] transition-colors">Блог</Link>
          <Link to="/portfolio" className="hover:text-[#0095DA] transition-colors">Портфолио</Link>
          <Link to="/prices" className="hover:text-[#0095DA] transition-colors">Цены</Link>
          <Link to="/reviews" className="hover:text-[#0095DA] transition-colors">Отзывы</Link>
          <Link to="/about" className="hover:text-[#0095DA] transition-colors">О нас</Link>
          <Link to="/contacts" className="hover:text-[#0095DA] transition-colors">Контакты</Link>
        </div>

        <div className="flex items-center gap-4">
          <button className="hidden lg:block bg-[#0095DA] text-white px-6 py-2.5 rounded-lg font-bold hover:bg-[#0084c0] transition-colors">
            Вызвать мастера
          </button>
          
          <button 
            className="xl:hidden p-2 text-gray-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-[60] pt-24 px-6 xl:hidden">
          <div className="flex flex-col gap-6 text-xl font-semibold">
            <Link to="/" onClick={() => setIsMenuOpen(false)}>Главная</Link>
            <Link to="/services" onClick={() => setIsMenuOpen(false)}>Услуги</Link>
            <Link to="/blog" onClick={() => setIsMenuOpen(false)}>Блог</Link>
            <Link to="/contacts" onClick={() => setIsMenuOpen(false)}>Контакты</Link>
            <button className="bg-[#0095DA] text-white py-4 rounded-xl mt-4">
              Вызвать мастера
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
