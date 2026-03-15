import SEO from "../components/SEO";
import { Calendar, User, ArrowLeft, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const BlogPostWiring = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <SEO 
        title="Признаки неисправной проводки: когда звать мастера | Советы электрика Манаса"
        description="Как понять, что ваша проводка требует ремонта или замены. Основные симптомы: от мигающего света до нагретых розеток."
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
                src="/images/blog/wiring.png" 
                alt="Неисправная проводка" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
                <div className="flex flex-wrap gap-3 mb-4">
                  <span className="bg-[#DC2626] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Ремонт
                  </span>
                  <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Опасно
                  </span>
                </div>
                <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
                  Признаки неисправной проводки
                </h1>
                <div className="flex flex-wrap items-center gap-6 text-sm text-gray-300 font-medium">
                  <span className="flex items-center gap-2"><Calendar size={18} /> 14 Марта 2024</span>
                  <span className="flex items-center gap-2"><User size={18} /> Мастер Манас</span>
                </div>
              </div>
            </div>

            <div className="p-8 md:p-12 lg:px-16 prose prose-lg md:prose-xl max-w-none text-gray-700 font-medium leading-relaxed">
              <p className="lead text-xl text-gray-600 italic border-l-4 border-red-500 pl-6 py-2 mb-10">
                Скрытая проводка часто напоминает о себе только тогда, когда становится поздно. Ранняя диагностика предотвращает пожары.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 text-[#DC2626]">Странные звуки и запахи</h2>
              <p>
                Треск в розетках или запах паленой изоляции — критические сигналы. Это говорит о плохом контакте и перегреве проводников.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 text-[#DC2626]">Мигающий свет</h2>
              <p>
                Если лампочки мигают при включении мощных приборов (чайник, стиральная машина), значит сечения кабеля недостаточно или есть проблемы в распределительной коробке.
              </p>

              <div className="bg-red-50 border-l-4 border-[#DC2626] p-6 rounded-r-2xl my-8">
                <p className="m-0 font-medium">Ваша проводка старше 20 лет? Алюминиевые провода имеют ограниченный срок службы. Я проведу диагностику и предложу оптимальный вариант замены.</p>
              </div>
            </div>

            <div className="bg-red-50 border-t border-red-100 p-8 md:p-12 text-center">
              <h3 className="text-2xl font-bold text-red-700 mb-6 font-extrabold">Проверьте безопасность своей проводки сегодня!</h3>
              <a href="tel:+77055535332" className="inline-flex items-center justify-center px-10 py-5 bg-[#DC2626] text-white font-bold rounded-2xl shadow-xl hover:bg-[#B91C1C] transition-all text-xl">
                Вызвать Мастера
              </a>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default BlogPostWiring;
