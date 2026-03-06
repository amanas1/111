import { Link } from "react-router-dom";
import { Phone, MapPin, Clock, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0a1628] text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-[#0095DA] rounded-lg flex items-center justify-center text-white font-bold text-xl">
                💧
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">Сантехник Алматы</h3>
                <p className="text-xs text-gray-500">Мастер Манас</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed">
              Профессиональные сантехнические и электрические услуги в Алматы. Работаем с 2010 года.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Услуги</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/uslugi/vyzov-santehnika/medeuskij" className="hover:text-[#0095DA] transition-colors">Вызов сантехника</Link></li>
              <li><Link to="/uslugi/uslugi-elektrika/medeuskij" className="hover:text-[#0095DA] transition-colors">Услуги электрика</Link></li>
              <li><Link to="/uslugi/ustanovka-smesitelya/medeuskij" className="hover:text-[#0095DA] transition-colors">Установка смесителя</Link></li>
              <li><Link to="/uslugi/remont-unitaza/medeuskij" className="hover:text-[#0095DA] transition-colors">Ремонт унитаза</Link></li>
              <li><Link to="/uslugi/remont-boilera/medeuskij" className="hover:text-[#0095DA] transition-colors">Ремонт бойлера</Link></li>
            </ul>
          </div>

          {/* Districts */}
          <div>
            <h4 className="text-white font-bold mb-4">Районы</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/uslugi/vyzov-santehnika/almalinskij" className="hover:text-[#0095DA] transition-colors">Алмалинский</Link></li>
              <li><Link to="/uslugi/vyzov-santehnika/medeuskij" className="hover:text-[#0095DA] transition-colors">Медеуский</Link></li>
              <li><Link to="/uslugi/vyzov-santehnika/bostandykskij" className="hover:text-[#0095DA] transition-colors">Бостандыкский</Link></li>
              <li><Link to="/uslugi/vyzov-santehnika/auezovskij" className="hover:text-[#0095DA] transition-colors">Ауэзовский</Link></li>
              <li><Link to="/uslugi/vyzov-santehnika/turksibskij" className="hover:text-[#0095DA] transition-colors">Турксибский</Link></li>
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="text-white font-bold mb-4">Контакты</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-[#0095DA] shrink-0" />
                <a href="tel:+77055535332" className="hover:text-white transition-colors">+7 (705) 553-53-32</a>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle size={18} className="text-[#0095DA] shrink-0" />
                <a href="https://wa.me/77055535332" className="hover:text-white transition-colors">WhatsApp</a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={18} className="text-[#0095DA] shrink-0" />
                г. Алматы, мкр. Аксай 4-11
              </li>
              <li className="flex items-center gap-3">
                <Clock size={18} className="text-[#0095DA] shrink-0" />
                Круглосуточно, без выходных
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-500">
          © 2025 Мастер Манас — Сантехник и Электрик в Алматы. Все права защищены.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
