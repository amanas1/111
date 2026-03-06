import { Link } from "react-router-dom";
import seoData from "../data/seo-data.json";
import Hero from "../components/Hero";
import SEO from "../components/SEO";
import { Clock, Shield, ThumbsUp, Wrench, MapPin, Star, ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Сантехник и Электрик в Алматы — Мастер Манас | Вызов 24/7"
        description="Профессиональный сантехник и электрик в Алматы с выездом за 30 минут. 15 лет опыта, гарантия 12 месяцев. Вызов мастера по телефону +7 (705) 553-53-32. Работаем круглосуточно во всех районах города."
      />

      <Hero />

      {/* Services Section */}
      <section className="py-20 px-6" id="services">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block bg-blue-50 text-[#0095DA] text-sm font-bold px-4 py-1.5 rounded-full mb-4">
              НАШИ УСЛУГИ
            </span>
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
              Сантехнические и электрические услуги
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Полный спектр работ для вашего дома и квартиры. Гарантия качества на все виды услуг.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {seoData.services.map((service, index) => (
              <Link
                key={service.id}
                to={`/uslugi/${service.id}/medeuskij`}
                className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-1"
              >
                <div className="h-52 overflow-hidden relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  {index < 6 && (
                    <div className="absolute top-4 left-4">
                      <span className="bg-[#0095DA] text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                        Популярно
                      </span>
                    </div>
                  )}
                  <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#0095DA] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 text-sm mb-4 line-clamp-2">{service.description}</p>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl font-extrabold text-[#0095DA]">
                      {service.price}
                    </span>
                    <div className="flex items-center gap-2 text-xs text-gray-400">
                      <Clock size={14} />
                      {service.time}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs text-green-600">
                      <Shield size={14} />
                      Гарантия 1 год
                    </div>
                    <span className="text-sm font-semibold text-[#0095DA] flex items-center gap-1 group-hover:gap-2 transition-all">
                      Подробнее <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block bg-green-50 text-green-600 text-sm font-bold px-4 py-1.5 rounded-full mb-4">
              ПРЕИМУЩЕСТВА
            </span>
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Почему выбирают Мастера Манаса?</h2>
            <p className="text-lg text-gray-500 max-w-xl mx-auto">Более 1000 довольных клиентов в Алматы</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Clock, title: "Быстрый выезд", desc: "Мастер приедет в любой район Алматы за 30 минут", color: "bg-blue-50 text-[#0095DA]", border: "border-blue-100" },
              { icon: Shield, title: "Гарантия до 12 мес.", desc: "На все виды работ — сантехнических и электрических", color: "bg-green-50 text-green-600", border: "border-green-100" },
              { icon: ThumbsUp, title: "15+ лет опыта", desc: "Тысячи успешно выполненных заказов и довольных клиентов", color: "bg-amber-50 text-amber-600", border: "border-amber-100" },
              { icon: Wrench, title: "Профессиональный инструмент", desc: "Используем только качественные материалы и инструменты", color: "bg-purple-50 text-purple-600", border: "border-purple-100" },
            ].map((item) => (
              <div key={item.title} className={`bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all text-center border ${item.border}`}>
                <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-5`}>
                  <item.icon size={30} />
                </div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block bg-blue-50 text-[#0095DA] text-sm font-bold px-4 py-1.5 rounded-full mb-4">
              КАК ЭТО РАБОТАЕТ
            </span>
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">3 простых шага</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Позвоните нам", desc: "Опишите проблему по телефону или WhatsApp. Бесплатная консультация." },
              { step: "02", title: "Мастер приедет", desc: "В течение 30 минут мастер будет у вас с полным набором инструментов." },
              { step: "03", title: "Проблема решена", desc: "Работа выполнена качественно с гарантией до 12 месяцев." },
            ].map((item) => (
              <div key={item.step} className="text-center relative">
                <div className="w-20 h-20 bg-[#0095DA] text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-extrabold shadow-lg shadow-[#0095DA]/30">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block bg-amber-50 text-amber-600 text-sm font-bold px-4 py-1.5 rounded-full mb-4">
              ОТЗЫВЫ
            </span>
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Что говорят наши клиенты</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Айгуль С.", district: "Бостандыкский район", text: "Вызывала сантехника для замены смесителя. Мастер приехал через 25 минут, всё сделал аккуратно и быстро. Рекомендую!", rating: 5 },
              { name: "Ерлан К.", district: "Медеуский район", text: "Отличный электрик! Заменил всю проводку в квартире. Работал чисто, всё объяснил. Гарантию дал на год. Буду обращаться ещё.", rating: 5 },
              { name: "Наталья П.", district: "Ауэзовский район", text: "Срочно нужен был ремонт унитаза в выходной. Манас приехал за 30 минут, починил быстро. Цены адекватные, мастер вежливый.", rating: 5 },
            ].map((review) => (
              <div key={review.name} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} size={18} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">"{review.text}"</p>
                <div>
                  <p className="font-bold text-gray-900">{review.name}</p>
                  <p className="text-xs text-gray-400">{review.district}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Districts */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block bg-blue-50 text-[#0095DA] text-sm font-bold px-4 py-1.5 rounded-full mb-4">
              ГЕОГРАФИЯ
            </span>
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Обслуживаем все районы Алматы</h2>
            <p className="text-lg text-gray-500">Быстрый выезд мастера в любой район города</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {seoData.districts.map((district) => (
              <Link
                key={district.id}
                to={`/uslugi/vyzov-santehnika/${district.id}`}
                className="group p-6 bg-white rounded-2xl border border-gray-100 shadow-sm text-center font-semibold hover:border-[#0095DA] hover:shadow-lg transition-all hover:-translate-y-1"
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

      {/* FAQ Section for SEO */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block bg-blue-50 text-[#0095DA] text-sm font-bold px-4 py-1.5 rounded-full mb-4">
              FAQ
            </span>
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Часто задаваемые вопросы</h2>
          </div>
          <div className="space-y-4">
            {[
              { q: "Сколько стоит вызов сантехника в Алматы?", a: "Стоимость вызова сантехника начинается от 3 500 ₸. Точная цена зависит от сложности работ. Выезд по городу — бесплатно при заказе работ. Бесплатная консультация по телефону." },
              { q: "Как быстро приедет мастер?", a: "Мастер приедет в любой район Алматы в течение 30 минут после вашего звонка. Работаем круглосуточно, без выходных и праздников." },
              { q: "Даёте ли гарантию на работы?", a: "Да, мы предоставляем гарантию на все виды выполненных работ до 12 месяцев. На установленные материалы и запчасти — гарантия производителя." },
              { q: "Работаете ли вы в выходные и праздники?", a: "Да, мы работаем 7 дней в неделю, 24 часа в сутки, включая все праздничные дни. Аварийный выезд возможен в любое время суток." },
              { q: "Какие районы Алматы вы обслуживаете?", a: "Мы обслуживаем все 8 районов Алматы: Алатауский, Алмалинский, Ауэзовский, Бостандыкский, Жетысуский, Медеуский, Наурызбайский и Турксибский." },
            ].map((faq) => (
              <details key={faq.q} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden group">
                <summary className="p-6 cursor-pointer font-bold text-gray-900 hover:text-[#0095DA] transition-colors flex items-center justify-between">
                  {faq.q}
                  <span className="text-[#0095DA] text-2xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-6 pb-6 text-gray-600 text-sm leading-relaxed border-t border-gray-50 pt-4">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gradient-to-r from-[#0095DA] to-[#0074b3] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute w-96 h-96 rounded-full bg-white -top-20 -right-20" />
          <div className="absolute w-64 h-64 rounded-full bg-white -bottom-10 -left-10" />
        </div>
        <div className="max-w-4xl mx-auto text-center text-white relative z-10">
          <h2 className="text-4xl font-extrabold mb-4">Нужен сантехник или электрик?</h2>
          <p className="text-xl opacity-90 mb-8">Позвоните прямо сейчас — бесплатная консультация!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+77055535332"
              className="inline-flex items-center justify-center gap-3 bg-white text-[#0095DA] px-10 py-4 rounded-xl font-bold text-xl hover:bg-gray-50 transition-colors shadow-lg"
            >
              📞 +7 (705) 553-53-32
            </a>
            <a
              href="https://wa.me/77055535332"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-[#4ADE80] text-gray-900 px-10 py-4 rounded-xl font-bold text-xl hover:bg-[#3dca72] transition-colors shadow-lg"
            >
              💬 Написать в WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* SEO Text Block */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Сантехник и электрик в Алматы — Мастер Манас
          </h2>
          <p className="text-gray-600 leading-relaxed text-sm">
            Ищете надёжного сантехника или электрика в Алматы? Мастер Манас — это более 15 лет профессионального опыта в сфере сантехнических и электромонтажных работ. Мы оказываем полный спектр услуг для жителей всех районов Алматы: от мелкого ремонта смесителей и розеток до капитального ремонта систем водоснабжения и электропроводки.
          </p>
          <p className="text-gray-600 leading-relaxed text-sm">
            Наши мастера выезжают по заявкам круглосуточно, 7 дней в неделю. Среднее время прибытия — 30 минут в любой район города. Мы используем только качественные материалы и профессиональный инструмент, что позволяет нам давать гарантию до 12 месяцев на все виды работ. Более 1000 довольных клиентов уже оценили наш профессионализм и ответственный подход.
          </p>
          <p className="text-gray-600 leading-relaxed text-sm">
            Основные услуги: вызов сантехника, установка и ремонт смесителей, ремонт унитазов, установка ванн и душевых кабин, ремонт бойлеров, услуги электрика, ремонт электропроводки, установка люстр, розеток и выключателей, монтаж газовых котлов, установка фильтров для воды. Работаем в Алатауском, Алмалинском, Ауэзовском, Бостандыкском, Жетысуском, Медеуском, Наурызбайском и Турксибском районах.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Index;
