import { Link } from "react-router-dom";
import seoData from "../data/seo-data.json";
import Hero from "../components/Hero";
import SEO from "../components/SEO";
import { Clock, Shield, ThumbsUp, Wrench } from "lucide-react";

const Index = () => {
  const serviceImages: Record<string, string> = {
    "vyzov-santehnika": "/images/services/plumbing-repair.png",
    "ustanovka-smesitelya": "/images/services/mixer-install.png",
    "remont-unitaza": "/images/services/toilet-repair-v2.png",
    "remont-dushevih-kabin": "/images/services/plumbing-repair.png",
    "ustanovka-vanny": "/images/services/mixer-install.png",
    "uslugi-elektrika": "/images/services/electrical-v2.png",
    "remont-provodki": "/images/services/electrical-v2.png",
    "ustanovka-lyustry": "/images/services/electrical-v2.png",
    "ustanovka-rozetok": "/images/services/electrical-v2.png",
    "remont-boilera": "/images/services/boiler-repair-v2.png",
    "ustanovka-gazovogo-kotla": "/images/services/boiler-repair-v2.png",
    "ustanovka-filtra-vody": "/images/services/plumbing-repair.png",
  };

  const servicePrices: Record<string, string> = {
    "vyzov-santehnika": "от 3 500 ₸",
    "ustanovka-smesitelya": "от 5 000 ₸",
    "remont-unitaza": "от 4 000 ₸",
    "remont-dushevih-kabin": "от 6 000 ₸",
    "ustanovka-vanny": "от 8 000 ₸",
    "uslugi-elektrika": "от 3 000 ₸",
    "remont-provodki": "от 4 500 ₸",
    "ustanovka-lyustry": "от 3 500 ₸",
    "ustanovka-rozetok": "от 2 500 ₸",
    "remont-boilera": "от 5 000 ₸",
    "ustanovka-gazovogo-kotla": "от 15 000 ₸",
    "ustanovka-filtra-vody": "от 4 000 ₸",
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Сантехник и Электрик в Алматы | Мастер Манас 24/7"
        description="Профессиональные услуги сантехника и электрика в Алматы. Выезд 24/7 во все районы. Гарантия качества, доступные цены."
      />

      <Hero />

      {/* Services Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Наши услуги</h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Полный спектр сантехнических и электрических услуг с гарантией качества
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {seoData.services.map((service) => (
              <Link
                key={service.id}
                to={`/uslugi/${service.id}/medeuskij`}
                className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={serviceImages[service.id] || "/images/services/plumbing-repair.png"}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#0095DA] text-white text-xs font-bold px-3 py-1 rounded-full">
                      Популярно
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#0095DA] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 text-sm mb-4 line-clamp-2">{service.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-extrabold text-[#0095DA]">
                      {servicePrices[service.id] || "от 3 000 ₸"}
                    </span>
                    <div className="flex items-center gap-2 text-xs text-gray-400">
                      <Clock size={14} />
                      20-60 мин
                    </div>
                  </div>
                  <div className="mt-3 flex items-center gap-2 text-xs text-green-600">
                    <Shield size={14} />
                    Гарантия 1 год
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-12 text-center">Почему выбирают нас?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Clock, title: "Быстрый выезд", desc: "Мастер приедет за 30 минут в любой район Алматы", color: "bg-blue-50 text-[#0095DA]" },
              { icon: Shield, title: "Гарантия 1 год", desc: "На все виды сантехнических и электрических работ", color: "bg-green-50 text-green-600" },
              { icon: ThumbsUp, title: "Опыт 15+ лет", desc: "Тысячи выполненных заказов и довольных клиентов", color: "bg-amber-50 text-amber-600" },
              { icon: Wrench, title: "Качество работ", desc: "Используем только профессиональный инструмент", color: "bg-purple-50 text-purple-600" },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow text-center">
                <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-5`}>
                  <item.icon size={30} />
                </div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Districts */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4 text-center">Обслуживаем все районы Алматы</h2>
          <p className="text-center text-gray-500 mb-12">Быстрый выезд мастера в любой район города</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {seoData.districts.map((district) => (
              <Link
                key={district.id}
                to={`/uslugi/vyzov-santehnika/${district.id}`}
                className="group p-6 bg-white rounded-2xl border border-gray-100 shadow-sm text-center font-semibold hover:border-[#0095DA] hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-[#0095DA] transition-colors">
                  <MapPin size={22} className="text-[#0095DA] group-hover:text-white transition-colors" />
                </div>
                <span className="text-gray-700 group-hover:text-[#0095DA] transition-colors">{district.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gradient-to-r from-[#0095DA] to-[#0074b3]">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-extrabold mb-4">Нужен сантехник или электрик?</h2>
          <p className="text-xl opacity-90 mb-8">Позвоните нам прямо сейчас и получите бесплатную консультацию!</p>
          <a
            href="tel:+77055535332"
            className="inline-flex items-center gap-3 bg-white text-[#0095DA] px-10 py-4 rounded-xl font-bold text-xl hover:bg-gray-50 transition-colors shadow-lg"
          >
            📞 +7 (705) 553-53-32
          </a>
        </div>
      </section>
    </div>
  );
};

// Need MapPin for the districts section
import { MapPin } from "lucide-react";

export default Index;
