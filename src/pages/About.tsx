import SEO from "../components/SEO";
import { CheckCircle, Shield, Clock, ThumbsUp, Wrench, Users } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <SEO 
        title="О нас | Сантехник и Электрик в Алматы - Мастер Манас"
        description="Узнайте больше о нас. Профессиональные услуги сантехника и электрика в Алматы. Опыт более 10 лет, гарантия на все виды работ, круглосуточный выезд."
      />
      
      {/* Hero Section */}
      <section className="bg-[#0095DA] text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&q=80')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 shadow-sm">О компании "Мастер Манас"</h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-50">
              Ваш надежный партнер в решении любых бытовых проблем. Мы предоставляем профессиональные услуги сантехника и электрика в Алматы.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="p-8 md:p-12">
              <div className="prose prose-lg max-w-none text-gray-700">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 w-full text-center">Наш подход к работе</h2>
                <p className="mb-6">
                  Мы работаем на рынке бытовых услуг Алматы более 10 лет. За это время мы сформировали команду настоящих профессионалов, которые любят свое дело и ценят каждого клиента. Наша главная цель — предоставить качественный сервис по доступным ценам, обеспечивая комфорт и безопасность в ваших домах.
                </p>
                <p className="mb-8">
                  В штате компании "Мастер Манас" работают только квалифицированные специалисты с профильным образованием и допуском к соответствующим видам работ. Мы регулярно повышаем квалификацию наших мастеров и следим за новинками рынка строительных материалов и технологий.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
                  <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-[#0095DA] shadow-md mb-4">
                      <Clock size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Оперативность</h3>
                    <p className="text-gray-600">Мы ценим ваше время. Мастер прибывает на объект в точно назначенное время, а при экстренном вызове — в течение 30-45 минут.</p>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-[#0095DA] shadow-md mb-4">
                      <Shield size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Надежность</h3>
                    <p className="text-gray-600">Мы используем только качественные, сертифицированные материалы от проверенных поставщиков. Это залог долговечности ремонта.</p>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-[#0095DA] shadow-md mb-4">
                      <Users size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Опытные мастера</h3>
                    <p className="text-gray-600">Средний стаж работы наших специалистов составляет 8 лет. Мы справляемся с задачами любой сложности.</p>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-[#0095DA] shadow-md mb-4">
                      <ThumbsUp size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Гарантия качества</h3>
                    <p className="text-gray-600">Мы уверены в качестве своих услуг, поэтому предоставляем официальную гарантию на все выполненные работы до 12 месяцев.</p>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Почему выбирают нас?</h2>
                <ul className="space-y-4 mb-8">
                  {[
                    "Прозрачное ценообразование: мы озвучиваем стоимость до начала работ.",
                    "Бесплатный выезд и диагностика (при заказе ремонта).",
                    "Работаем круглосуточно, без выходных и праздников.",
                    "Оставляем после себя чистоту и порядок.",
                    "Скидки пенсионерам и постоянным клиентам."
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="text-[#0095DA] mr-3 mt-1 flex-shrink-0" size={20} />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="bg-gray-50 p-8 border-t border-gray-100 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Готовы доверить нам решение вашей проблемы?</h3>
              <p className="text-gray-600 mb-6">Мы всегда на связи и готовы приехать в любой район Алматы.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+77055535332"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-xl text-white bg-[#0095DA] hover:bg-[#0084c0] shadow-lg shadow-blue-500/30 transition-all hover:scale-105"
                >
                  Позвонить мастеру
                </a>
                <Link 
                  to="/services"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-xl text-[#0095DA] bg-white border-2 border-[#0095DA] hover:bg-blue-50 transition-all"
                >
                  Посмотреть услуги
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
