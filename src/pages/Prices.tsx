import SEO from "../components/SEO";
import seoData from "../data/seo-data.json";
import { Wrench, Phone, CheckCircle } from "lucide-react";

const Prices = () => {
  const plumbingServices = seoData.services.filter(s => s.category === "plumbing");
  const electricalServices = seoData.services.filter(s => s.category === "electrical");

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <SEO 
        title="Цены на услуги сантехника и электрика в Алматы | Прайс-лист 2024"
        description="Актуальные цены на услуги сантехника и электрика в Алматы. Прозрачный прайс-лист, стоимость от 2500 тг. Выезд и диагностика бесплатно при заказе работ."
      />
      
      {/* Hero Section */}
      <section className="bg-[#0095DA] text-white py-16 relative">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Наши цены</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Прозрачное ценообразование без скрытых платежей. Точная стоимость озвучивается до начала работ после диагностики.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 mb-12 flex flex-col md:flex-row items-center gap-6">
              <div className="w-16 h-16 bg-[#0095DA] text-white rounded-full flex items-center justify-center flex-shrink-0">
                <CheckCircle size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Выезд и диагностика — БЕСПЛАТНО!*</h3>
                <p className="text-gray-600">*При согласии на проведение ремонтных работ. В случае отказа от ремонта оплачивается вызов мастера в размере 3000 тенге.</p>
              </div>
            </div>

            {/* Plumbing Prices */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden mb-12">
              <div className="bg-blue-50 px-8 py-6 border-b border-blue-100 flex items-center gap-3">
                <Wrench className="text-[#0095DA]" size={24} />
                <h2 className="text-2xl font-bold text-gray-900">Сантехнические работы</h2>
              </div>
              <div className="divide-y divide-gray-100">
                {plumbingServices.map((service) => (
                  <div key={service.id} className="p-6 md:px-8 hover:bg-gray-50 transition-colors flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900">{service.title}</h3>
                      <p className="text-gray-500 text-sm mt-1">{service.description.substring(0, 100)}...</p>
                    </div>
                    <div className="flex flex-col items-start md:items-end flex-shrink-0">
                      <span className="text-2xl font-extrabold text-[#0095DA]">{service.price}</span>
                      <span className="text-sm text-gray-500">Время: {service.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Electrical Prices */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden mb-12">
              <div className="bg-blue-50 px-8 py-6 border-b border-blue-100 flex items-center gap-3">
                <Wrench className="text-[#0095DA]" size={24} />
                <h2 className="text-2xl font-bold text-gray-900">Электромонтажные работы</h2>
              </div>
              <div className="divide-y divide-gray-100">
                {electricalServices.map((service) => (
                  <div key={service.id} className="p-6 md:px-8 hover:bg-gray-50 transition-colors flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900">{service.title}</h3>
                      <p className="text-gray-500 text-sm mt-1">{service.description.substring(0, 100)}...</p>
                    </div>
                    <div className="flex flex-col items-start md:items-end flex-shrink-0">
                      <span className="text-2xl font-extrabold text-[#0095DA]">{service.price}</span>
                      <span className="text-sm text-gray-500">Время: {service.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact CTA */}
            <div className="bg-[#0095DA] rounded-2xl p-8 text-center text-white shadow-xl">
              <h3 className="text-2xl font-bold mb-4">Не нашли нужную услугу?</h3>
              <p className="mb-6 opacity-90 max-w-2xl mx-auto">
                В прайс-листе указаны базовые расценки. Позвоните нам прямо сейчас, опишите вашу проблему, и мастер назовет ориентировочную стоимость работ по телефону.
              </p>
              <a 
                href="tel:+77055535332"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-xl text-[#0095DA] bg-white hover:bg-gray-50 shadow-lg transition-all hover:scale-105 gap-2"
              >
                <Phone size={24} />
                Узнать точную цену
              </a>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Prices;
