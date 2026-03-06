import SEO from "../components/SEO";
import { Star, MessageCircle } from "lucide-react";

const Reviews = () => {
  const reviews = [
    {
      name: "Айгерим",
      date: "02 Марта 2024",
      service: "Установка смесителя",
      text: "Очень благодарна Манасу за быструю работу. Смеситель на кухне потек в выходной день. Мастер приехал через 30 минут, сам купил нужные запчасти. Все сделал аккуратно и дал гарантию. Рекомендую!",
      rating: 5
    },
    {
      name: "Тимур",
      date: "25 Февраля 2024",
      service: "Услуги электрика",
      text: "Пропал свет в половине квартиры (выбило автомат и расплавилась розетка). Вызвал мастера ночью. Приехал быстро, нашел причину, заменил автомат в щитке и розетку. Цена адекватная, отношение профессиональное.",
      rating: 5
    },
    {
      name: "Елена",
      date: "18 Февраля 2024",
      service: "Монтаж люстры",
      text: "Мастер повесил три люстры и бра после ремонта. Сделал все очень ровно, никаких торчащих проводов. Мусор за собой убрал. Очень вежливый и пунктуальный специалист.",
      rating: 5
    },
    {
      name: "Данияр",
      date: "10 Февраля 2024",
      service: "Ремонт инсталляции Geberit",
      text: "Потекла инсталляция унитаза. Другие сантехники предлагали ломать плитку. Манас приехал, разобрал кнопку, достал механизм и поменял прокладку за 20 минут. Прямо спас наш ремонт! Огромное спасибо.",
      rating: 5
    },
    {
      name: "Асель",
      date: "05 Февраля 2024",
      service: "Установка стиральной машины",
      text: "Нужно было подключить стиралку в нестандартном месте. Мастер провел трубы, сделал врезку в канализацию и установил отдельную розетку. Все работает как часы. Сервис на высшем уровне.",
      rating: 5
    },
    {
      name: "Руслан",
      date: "28 Января 2024",
      service: "Разводка труб в новостройке",
      text: "Делал ремонт с нуля. Манас полностью сделал сантехнику: трубы Рехау, гребенки, фильтры, канализация. Сделано на совесть, опрессовали систему. Качество материалов и работы - топ.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <SEO 
        title="Отзывы клиентов | Вызов сантехника и электрика в Алматы"
        description="Читайте отзывы наших клиентов о работе сантехника и электрика Мастер Манас в Алматы. Мы ценим вашу обратную связь и гарантируем качество услуг."
      />
      
      {/* Hero Section */}
      <section className="bg-[#0095DA] text-white py-16 relative">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Отзывы наших клиентов</h1>
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={28} fill="currentColor" />
              ))}
            </div>
            <span className="text-xl font-bold ml-2">4.9 / 5</span>
          </div>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Основано на более чем 500 успешных вызовах в Алматы. Ваше мнение помогает нам становиться лучше!
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col h-full hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{review.name}</h3>
                    <p className="text-sm text-gray-500">{review.date}</p>
                  </div>
                  <div className="flex text-yellow-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                </div>
                <div className="bg-blue-50 text-[#0095DA] text-sm font-semibold px-3 py-1 rounded-full w-fit mb-4">
                  {review.service}
                </div>
                <div className="flex-1">
                  <p className="text-gray-700 italic">"{review.text}"</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Leave Review */}
          <div className="mt-16 max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-xl border border-gray-100 text-center relative overflow-hidden">
            <div className="absolute -top-10 -right-10 text-gray-100">
              <MessageCircle size={160} />
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Оставьте свой отзыв</h3>
              <p className="text-gray-600 mb-6">Если мы уже помогли вам с проблемой, пожалуйста, поделитесь своими впечатлениями.</p>
              <a 
                href="https://wa.me/77055535332"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-xl text-white bg-green-500 hover:bg-green-600 shadow-lg transition-all hover:scale-105"
              >
                Оставить отзыв в WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reviews;
