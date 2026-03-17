import SEO from "../components/SEO";
import { Calendar, User, ArrowLeft, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";

const BlogPostLighting = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <SEO 
        title="Как выбрать люстру и светильники для интерьера | Советы электрика Манаса"
        description="Полезные советы по выбору освещения для разных комнат. Узнайте о типах ламп, мощности и правилах монтажа."
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
                src="/images/blog/lighting.png" 
                alt="Выбор стильной люстры для интерьера гостиной" 
                title="Советы по выбору освещения — Электрик Алматы"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
                <div className="flex flex-wrap gap-3 mb-4">
                  <span className="bg-[#DC2626] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Дизайн
                  </span>
                  <span className="bg-yellow-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Свет
                  </span>
                </div>
                <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
                  Как выбрать люстру и светильники для интерьера
                </h1>
                <div className="flex flex-wrap items-center gap-6 text-sm text-gray-300 font-medium">
                  <span className="flex items-center gap-2"><Calendar size={18} /> 15 Марта 2024</span>
                  <span className="flex items-center gap-2"><User size={18} /> Мастер Манас</span>
                </div>
              </div>
            </div>

            <div className="p-8 md:p-12 lg:px-16 prose prose-lg md:prose-xl max-w-none text-gray-700 font-medium leading-relaxed">
              <p className="lead text-xl text-gray-600 italic border-l-4 border-yellow-500 pl-6 py-2 mb-10">
                Свет может преобразить пространство или сделать его неуютным. Правильный выбор светильников — это баланс красоты и функциональности.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 text-[#DC2626]">Тип освещения</h2>
              <p>
                Разделяйте освещение на основное, рабочее и декоративное. В гостиной нужна яркая люстра, а в спальне — уютные бра с мягким светом.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 text-[#DC2626]">Мощность и цветовая температура</h2>
              <p>
                Для отдыха выбирайте теплый свет (2700-3000K), для работы — нейтральный белый (4000K). Учитывайте общую мощность всех ламп, чтобы не перегрузить проводку.
              </p>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-2xl my-8">
                <p className="m-0 font-medium text-gray-800">Купили сложную дизайнерскую люстру? Я помогу с её сборкой и надежным монтажом на любой тип потолка.</p>
              </div>
            </div>

            <div className="bg-red-50 border-t border-red-100 p-8 md:p-12 text-center">
              <h3 className="text-2xl font-bold text-red-700 mb-6 font-extrabold">Создадим идеальное освещение вместе!</h3>
              <a href="tel:+77055535332" className="inline-flex items-center justify-center px-10 py-5 bg-[#DC2626] text-white font-bold rounded-2xl shadow-xl hover:bg-[#B91C1C] transition-all text-xl">
                Заказать Монтаж
              </a>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default BlogPostLighting;
