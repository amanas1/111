import SEO from "../components/SEO";
import { Calendar, User, ArrowLeft, Cpu } from "lucide-react";
import { Link } from "react-router-dom";

const BlogPostSmartHome = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <SEO 
        title="Энергосбережение и умный дом: с чего начать | Советы электрика Манаса"
        description="Как сделать свой дом умнее и начать экономить на счетах за электричество. Обзор систем автоматизации и умного освещения."
      />

      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link to="/blog" className="inline-flex items-center text-gray-500 hover:text-[#DC2626] transition-colors mb-8 group font-medium">
            <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" size={20} />
            Назад к списку статей
          </Link>

          <article className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="h-80 md:h-[450px] relative overflow-hidden">
              <img 
                src="/images/blog/smarthome.png" 
                alt="Умный дом и энергосбережение" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
                <div className="flex flex-wrap gap-3 mb-4">
                  <span className="bg-[#DC2626] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Технологии
                  </span>
                  <span className="bg-indigo-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Умный дом
                  </span>
                </div>
                <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
                  Энергосбережение и умный дом: с чего начать
                </h1>
                <div className="flex flex-wrap items-center gap-6 text-sm text-gray-300 font-medium">
                  <span className="flex items-center gap-2"><Calendar size={18} /> 11 Марта 2024</span>
                  <span className="flex items-center gap-2"><User size={18} /> Мастер Манас</span>
                </div>
              </div>
            </div>

            <div className="p-8 md:p-12 lg:px-16 prose prose-lg md:prose-xl max-w-none text-gray-700 font-medium leading-relaxed">
              <p className="lead text-xl text-gray-600 italic border-l-4 border-indigo-500 pl-6 py-2 mb-10">
                Будущее уже наступило. Умные системы не только делают жизнь комфортнее, но и помогают существенно снизить затраты на электроэнергию.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 text-[#DC2626]">Умное освещение</h2>
              <p>
                Датчики движения, диммеры и программируемые сценарии позволяют использовать свет только тогда, когда он действительно нужен.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 text-[#DC2626]">Удаленное управление</h2>
              <p>
                Забыли выключить утюг? С умными розетками это больше не проблема — вы можете отключить любой прибор через приложение в телефоне.
              </p>

              <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-r-2xl my-8">
                <p className="m-0 font-medium text-gray-800">Хотите внедрить элементы умного дома? Я помогу с выбором оборудования и его профессиональной интеграцией в вашу электросеть.</p>
              </div>
            </div>

            <div className="bg-red-50 border-t border-red-100 p-8 md:p-12 text-center">
              <h3 className="text-2xl font-bold text-red-700 mb-6 font-extrabold">Сделаем ваш дом умнее и экономнее!</h3>
              <a href="tel:+77055535332" className="inline-flex items-center justify-center px-10 py-5 bg-[#DC2626] text-white font-bold rounded-2xl shadow-xl hover:bg-[#B91C1C] transition-all text-xl">
                Получить Консультацию
              </a>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default BlogPostSmartHome;
