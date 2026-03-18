import { useState } from "react";
import SEO from "../components/SEO";
import { Wrench, Phone, CheckCircle2, Zap, Lightbulb, ShieldCheck, AlertTriangle, Monitor, Thermometer } from "lucide-react";

interface PriceItem {
  name: string;
  unit: string;
  price: string;
  popular?: boolean;
}

interface PriceCategory {
  id: string;
  name: string;
  icon: React.ElementType;
  items: PriceItem[];
}

const priceCategories: PriceCategory[] = [
  {
    id: "wiring",
    name: "Электропроводка",
    icon: Zap,
    items: [
      { name: "Вызов электрика (диагностика)", unit: "за услугу", price: "Бесплатно*", popular: true },
      { name: "Штробление стен под кабель", unit: "за метр", price: "от 1 500 ₸" },
      { name: "Прокладка кабеля в гофре/канале", unit: "за метр", price: "от 500 ₸" },
      { name: "Монтаж распределительной коробки", unit: "за шт.", price: "от 3 000 ₸", popular: true },
      { name: "Полная замена проводки", unit: "за кв.м.", price: "от 4 500 ₸" },
      { name: "Поиск обрыва проводки", unit: "за услугу", price: "от 8 000 ₸" },
      { name: "Установка подрозетника", unit: "за шт.", price: "от 1 000 ₸" },
    ],
  },
  {
    id: "shield",
    name: "Электрощиты",
    icon: ShieldCheck,
    items: [
      { name: "Сборка электрощита", unit: "за услугу", price: "от 15 000 ₸", popular: true },
      { name: "Установка автоматического выключателя", unit: "за шт.", price: "от 2 000 ₸", popular: true },
      { name: "Установка УЗО / Диф.автомата", unit: "за шт.", price: "от 4 000 ₸" },
      { name: "Замена старого щитка на новый", unit: "за услугу", price: "от 20 000 ₸" },
      { name: "Установка реле напряжения", unit: "за шт.", price: "от 5 000 ₸" },
      { name: "Маркировка автоматов", unit: "за щит", price: "от 3 000 ₸" },
    ],
  },
  {
    id: "lighting",
    name: "Освещение и Розетки",
    icon: Lightbulb,
    items: [
      { name: "Установка розетки / выключателя", unit: "за шт.", price: "от 1 500 ₸", popular: true },
      { name: "Установка люстры (сборка включена)", unit: "за шт.", price: "от 5 000 ₸", popular: true },
      { name: "Монтаж точечного светильника", unit: "за шт.", price: "от 2 000 ₸" },
      { name: "Установка светодиодной ленты", unit: "за метр", price: "от 1 800 ₸" },
      { name: "Замена патрона в светильнике", unit: "за шт.", price: "от 1 500 ₸" },
      { name: "Монтаж бра или настенного светильника", unit: "за шт.", price: "от 3 500 ₸" },
    ],
  },
  {
    id: "appliances",
    name: "Бытовая техника",
    icon: Monitor,
    items: [
      { name: "Подключение электроплиты", unit: "за точку", price: "от 8 000 ₸", popular: true },
      { name: "Установка духового шкафа", unit: "за шт.", price: "от 7 000 ₸" },
      { name: "Подключение бойлера / водонагревателя", unit: "за услугу", price: "от 10 000 ₸", popular: true },
      { name: "Монтаж вытяжки", unit: "за шт.", price: "от 6 000 ₸" },
      { name: "Прокладка силовой линии для техники", unit: "за линию", price: "от 12 000 ₸" },
    ],
  },
  {
    id: "heating",
    name: "Теплый пол",
    icon: Thermometer,
    items: [
      { name: "Укладка теплого пола (мат)", unit: "за м²", price: "от 3 500 ₸", popular: true },
      { name: "Монтаж терморегулятора", unit: "за шт.", price: "от 4 000 ₸" },
      { name: "Диагностика теплого пола", unit: "за услугу", price: "от 7 000 ₸" },
      { name: "Ремонт термостата", unit: "за услугу", price: "от 3 000 ₸" },
    ],
  },
];

const Prices = () => {
  const [activeTab, setActiveTab] = useState("wiring");

  const activeCategory = priceCategories.find((c) => c.id === activeTab)!;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col pt-16 md:pt-20">
      <SEO 
        title="Цены на услуги электрика в Алматы 2025 — Прайс-лист | От 1500₸"
        description="Актуальный прайс-лист на все виды электромонтажных услуг в Алматы. Прозрачные цены, без скрытых платежей. Выезд и диагностика — бесплатно!"
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#DC2626] to-[#E11D48] text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute w-96 h-96 rounded-full bg-white -top-20 -right-20 blur-3xl mix-blend-overlay" />
          <div className="absolute w-64 h-64 rounded-full bg-white -bottom-10 -left-10 blur-2xl mix-blend-overlay" />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">Наши цены</h1>
          <p className="text-xl opacity-90 leading-relaxed max-w-2xl mx-auto">
            Прозрачное ценообразование без скрытых платежей. Точная стоимость озвучивается до начала работ после диагностики.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 -mt-10 px-6 relative z-20">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto">
            
            {/* Free Diagnostics Banner */}
            <div className="bg-white rounded-2xl p-6 mb-10 shadow-lg border border-gray-100 flex items-center gap-6">
              <div className="w-14 h-14 bg-red-50 text-[#DC2626] rounded-2xl flex items-center justify-center shrink-0">
                <CheckCircle2 size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">Выезд и диагностика — БЕСПЛАТНО!*</h3>
                <p className="text-gray-500 text-sm">*При согласии на проведение работ. В случае отказа от услуг оплачивается вызов мастера в размере 3000 тенге.</p>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex flex-wrap gap-2 p-2 bg-white rounded-2xl shadow-sm border border-gray-100 mb-8 overflow-x-auto hide-scrollbar">
              {priceCategories.map((cat) => {
                const Icon = cat.icon;
                const isActive = activeTab === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveTab(cat.id)}
                    className={`flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-sm transition-all whitespace-nowrap flex-1 min-w-max ${
                      isActive
                        ? "bg-red-50 text-[#DC2626] shadow-sm"
                        : "bg-transparent text-gray-500 hover:text-gray-900 hover:bg-gray-50/50"
                    }`}
                  >
                    <Icon size={18} className={isActive ? "text-[#DC2626]" : "text-gray-400"} />
                    {cat.name}
                  </button>
                );
              })}
            </div>

            {/* Price Table */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-12 animate-fade-in" key={activeTab}>
              <div className="p-8 pb-4">
                <h2 className="text-2xl font-extrabold text-gray-900 flex items-center gap-3">
                  <activeCategory.icon className="text-[#DC2626]" size={28} />
                  {activeCategory.name}
                </h2>
              </div>
              <div className="divide-y divide-gray-50 px-8 pb-8">
                {activeCategory.items.map((item, idx) => (
                  <div key={idx} className="py-4 flex flex-col md:flex-row md:items-center justify-between gap-4 group">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 flex-wrap">
                        <h3 className="text-base font-bold text-gray-900 group-hover:text-[#DC2626] transition-colors">{item.name}</h3>
                        {item.popular && (
                          <span className="bg-gradient-to-r from-[#DC2626] to-[#E11D48] text-white text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wide">
                            Популярно
                          </span>
                        )}
                      </div>
                      <p className="text-gray-400 text-sm mt-1">{item.unit}</p>
                    </div>
                    <div className="flex-shrink-0">
                      <span className="text-xl font-extrabold text-[#DC2626] bg-red-50 px-4 py-2 rounded-xl inline-block group-hover:scale-105 transition-transform">{item.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact CTA */}
            <div className="bg-gradient-to-br from-[#DC2626] to-[#E11D48] rounded-3xl p-10 text-center text-white relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute w-64 h-64 rounded-full bg-white -top-10 -right-10 blur-3xl mix-blend-overlay" />
                <div className="absolute w-40 h-40 rounded-full bg-white -bottom-10 -left-10 blur-2xl mix-blend-overlay" />
              </div>
              <div className="relative z-10">
                <h3 className="text-3xl font-extrabold mb-4 tracking-tight">Не нашли нужную услугу?</h3>
                <p className="mb-8 opacity-90 max-w-2xl mx-auto text-lg leading-relaxed">
                  Мы выполняем любые виды электромонтажных работ. Позвоните нам прямо сейчас, опишите вашу проблему, и мастер назовет ориентировочную стоимость.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="tel:+77055535332"
                    className="inline-flex items-center justify-center px-8 py-5 text-lg font-bold rounded-2xl text-[#DC2626] bg-white hover:bg-gray-50 shadow-xl transition-all hover:-translate-y-1 gap-3 hover:shadow-2xl flex-1"
                  >
                    <Phone size={24} />
                    +7 (705) 553-53-32
                  </a>
                  <a 
                    href="tel:+77074791020"
                    className="inline-flex items-center justify-center px-8 py-5 text-lg font-bold rounded-2xl text-[#DC2626] bg-white hover:bg-gray-50 shadow-xl transition-all hover:-translate-y-1 gap-3 hover:shadow-2xl flex-1"
                  >
                    <Phone size={24} />
                    +7 (707) 479-10-20
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Prices;
