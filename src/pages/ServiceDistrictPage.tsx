import { useParams, Link } from "react-router-dom";
import seoData from "../data/seo-data.json";
import SEO from "../components/SEO";
import { Phone, Clock, Shield, MapPin, CheckCircle } from "lucide-react";

const ServiceDistrictPage = () => {
  const { serviceId, districtId } = useParams();

  const service = seoData.services.find((s) => s.id === serviceId);
  const district = seoData.districts.find((d) => d.id === districtId);

  if (!service || !district) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h1 className="text-3xl font-bold mb-4">Страница не найдена</h1>
        <Link to="/" className="text-[#0095DA] hover:underline font-medium">← Вернуться на главную</Link>
      </div>
    );
  }

  const title = `${service.title} в ${district.nameGenitive} Алматы | Мастер Манас`;
  const description = `${service.title} в ${district.nameGenitive} Алматы. Профессионально, быстро, с гарантией. Выезд мастера 24/7. Звоните прямо сейчас!`;

  return (
    <div className="min-h-screen bg-white">
      <SEO title={title} description={description} />

      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-[#0095DA] to-[#0074b3] text-white py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <nav className="mb-6 text-sm opacity-80 flex items-center gap-2">
            <Link to="/" className="hover:opacity-100">Главная</Link>
            <span>/</span>
            <span>Услуги</span>
            <span>/</span>
            <span>{service.title}</span>
            <span>/</span>
            <span>{district.name}</span>
          </nav>

          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            🔧 {service.title} в {district.nameGenitive} Алматы
          </h1>
          <p className="text-xl opacity-90 max-w-2xl">
            Профессиональные услуги по категории "{service.title.toLowerCase()}" с использованием современного оборудования и качественных материалов.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column — Description */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4">Описание услуги</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                {service.description} Мы осуществляем выезд во все точки {district.nameGenitive} в течение 30-60 минут. 
                Все работы выполняются с гарантией качества. Используем профессиональный инструмент и оригинальные запчасти.
                Средняя продолжительность ремонта — 40-60 минут. Работаем без выходных.
              </p>

              <h3 className="text-xl font-bold mb-3">Наши преимущества в {district.nameGenitive}:</h3>
              <ul className="space-y-3">
                {[
                  "Быстрый выезд 24/7 — приедем за 30 минут",
                  "Гарантия на работы до 12 месяцев",
                  "Честные цены без накруток и скрытых платежей",
                  "Опытные мастера со стажем более 15 лет",
                  "Бесплатная диагностика при заказе работ",
                  "Чистота после работы — убираем за собой",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-[#4ADE80] shrink-0 mt-0.5" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Other Districts */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
              <h2 className="text-2xl font-bold mb-6">Другие районы обслуживания</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {seoData.districts
                  .filter((d) => d.id !== districtId)
                  .map((d) => (
                    <Link
                      key={d.id}
                      to={`/uslugi/${serviceId}/${d.id}`}
                      className="flex items-center gap-2 p-3 bg-gray-50 rounded-xl hover:bg-[#0095DA] hover:text-white text-sm font-medium transition-all"
                    >
                      <MapPin size={16} className="shrink-0" />
                      {d.name}
                    </Link>
                  ))}
              </div>
            </div>
          </div>

          {/* Right Column — Sidebar */}
          <div className="space-y-6">
            {/* Price Card */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-lg p-8 sticky top-24">
              <h3 className="text-lg font-bold mb-4 text-center">Стоимость услуги</h3>
              <div className="text-center mb-6">
                <span className="text-4xl font-extrabold text-[#0095DA]">от 3 500 ₸</span>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <Clock size={18} className="text-[#0095DA]" />
                  <span>40-60 мин</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <Shield size={18} className="text-[#4ADE80]" />
                  <span>Гарантия 1 год</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <MapPin size={18} className="text-amber-500" />
                  <span>Выезд по {district.nameGenitive}</span>
                </div>
              </div>

              <a
                href="tel:+77055535332"
                className="w-full flex items-center justify-center gap-2 bg-[#4ADE80] hover:bg-[#3dca72] text-gray-900 py-4 rounded-xl font-bold text-lg transition-colors"
              >
                <Phone size={20} />
                Заказать
              </a>
              
              <p className="text-xs text-gray-400 text-center mt-3">Бесплатная консультация по телефону</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDistrictPage;
