import SEO from "../components/SEO";
import { Phone, MapPin, Mail, Clock, Send } from "lucide-react";

const Contacts = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <SEO 
        title="Контакты | Вызов сантехника и электрика в Алматы"
        description="Свяжитесь с нами для вызова мастера на дом в Алматы. Телефон: +7 (705) 553 53 32. Работаем круглосуточно во всех районах города."
      />
      
      {/* Hero Section */}
      <section className="bg-[#0095DA] text-white py-16 relative">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Наши контакты</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Мы всегда на связи и готовы оперативно помочь с любыми проблемами в области сантехники и электрики.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8">
            
            {/* Contact Info Cards */}
            <div className="w-full lg:w-1/3 flex flex-col gap-6">
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow flex items-start gap-4">
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-[#0095DA] flex-shrink-0">
                  <Phone size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Телефон</h3>
                  <a href="tel:+77055535332" className="text-lg text-gray-700 hover:text-[#0095DA] transition-colors block font-medium">+7 (705) 553 53 32</a>
                  <p className="text-sm text-gray-500 mt-1">Звонки принимаются круглосуточно</p>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow flex items-start gap-4">
                <div className="w-14 h-14 bg-green-50 rounded-xl flex items-center justify-center text-green-500 flex-shrink-0">
                  <Send size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">WhatsApp</h3>
                  <a 
                    href="https://wa.me/77055535332" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg text-gray-700 hover:text-green-500 transition-colors block font-medium"
                  >
                    Написать в WhatsApp
                  </a>
                  <p className="text-sm text-gray-500 mt-1">Отвечаем в течение 5 минут</p>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow flex items-start gap-4">
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-[#0095DA] flex-shrink-0">
                  <Clock size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Режим работы</h3>
                  <p className="text-lg text-gray-700 font-medium">24/7 Без выходных</p>
                  <p className="text-sm text-gray-500 mt-1">Экстренные вызовы ночью</p>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow flex items-start gap-4">
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-[#0095DA] flex-shrink-0">
                  <MapPin size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Наш адрес</h3>
                  <p className="text-lg text-gray-700 font-medium">г. Алматы, мкр. Аксай 4-11</p>
                  <p className="text-sm text-gray-500 mt-1">Выезжаем во все районы города</p>
                </div>
              </div>
            </div>

            {/* Map and Form */}
            <div className="w-full lg:w-2/3 flex flex-col gap-8">
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden h-[400px]">
                {/* Embedded Yandex Map */}
                <iframe 
                  src="https://yandex.ru/map-widget/v1/?um=constructor%3A7a3c3014a682dafc62b9a7c6f0c6c7d9c6e3b56a1b920bf84d3b145a5d8b8577&amp;source=constructor" 
                  width="100%" 
                  height="100%" 
                  frameBorder="0"
                  title="Карта расположения"
                ></iframe>
              </div>

              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 md:p-10">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Остались вопросы?</h2>
                <p className="text-gray-600 mb-8">Оставьте заявку, и наш мастер свяжется с вами в течение 5 минут для бесплатной консультации.</p>
                
                <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); window.location.href = 'tel:+77055535332'; }}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Ваше имя</label>
                      <input 
                        type="text" 
                        id="name" 
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#0095DA] focus:border-transparent outline-none transition-all"
                        placeholder="Иван Иванов"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Номер телефона</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#0095DA] focus:border-transparent outline-none transition-all"
                        placeholder="+7 (777) 000-00-00"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Опишите проблему (необязательно)</label>
                    <textarea 
                      id="message" 
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#0095DA] focus:border-transparent outline-none transition-all resize-none"
                      placeholder="Например: течет кран на кухне..."
                    ></textarea>
                  </div>
                  <button 
                    type="submit"
                    className="w-full md:w-auto px-8 py-4 bg-[#0095DA] text-white font-bold rounded-xl hover:bg-[#0084c0] shadow-lg shadow-blue-500/30 transition-all hover:scale-105"
                  >
                    Отправить заявку
                  </button>
                  <p className="text-xs text-gray-500 text-center md:text-left mt-4">Нажимая на кнопку, вы даете согласие на обработку персональных данных.</p>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Contacts;
