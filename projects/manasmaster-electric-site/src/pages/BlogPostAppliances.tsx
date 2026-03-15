import SEO from "../components/SEO";
import { Calendar, User, ArrowLeft, Monitor } from "lucide-react";
import { Link } from "react-router-dom";

const BlogPostAppliances = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <SEO 
        title="Правильное подключение бытовой техники | Советы электрика Манаса"
        description="Как безопасно подключить плиту, духовку, бойлер или стиральную машину. Почему нужна отдельная линия питания для мощных приборов."
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
                src="/images/blog/appliances.png" 
                alt="Подключение бытовой техники" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
                <div className="flex flex-wrap gap-3 mb-4">
                  <span className="bg-[#DC2626] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Техника
                  </span>
                  <span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Кухня
                  </span>
                </div>
                <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
                  Правильное подключение бытовой техники
                </h1>
                <div className="flex flex-wrap items-center gap-6 text-sm text-gray-300 font-medium">
                  <span className="flex items-center gap-2"><Calendar size={18} /> 12 Марта 2024</span>
                  <span className="flex items-center gap-2"><User size={18} /> Мастер Манас</span>
                </div>
              </div>
            </div>

            <div className="p-8 md:p-12 lg:px-16 prose prose-lg md:prose-xl max-w-none text-gray-700 font-medium leading-relaxed">
              <p className="lead text-xl text-gray-600 italic border-l-4 border-green-500 pl-6 py-2 mb-10">
                Современная кухня потребляет больше электричества, чем вся остальная квартира. Ошибки в подключении могут привести к оплавлению розеток.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 text-[#DC2626]">Отдельная линия для мощных приборов</h2>
              <p>
                Плиты, духовые шкафы и бойлеры должны подключаться через отдельный кабель от щитка. Это предотвращает перегрузку общих линий.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 text-[#DC2626]">Силовые розетки</h2>
              <p>
                Для варочных панелей используются специальные силовые розетки и вилки, рассчитанные на большой ток (32А или 40А).
              </p>

              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-2xl my-8">
                <p className="m-0 font-medium text-gray-800">Купили новую технику? Я помогу с грамотным подключением и при необходимости проведу отдельную линию с установкой автомата.</p>
              </div>
            </div>

            <div className="bg-red-50 border-t border-red-100 p-8 md:p-12 text-center">
              <h3 className="text-2xl font-bold text-red-700 mb-6 font-extrabold">Безопасное подключение вашей техники!</h3>
              <a href="tel:+77055535332" className="inline-flex items-center justify-center px-10 py-5 bg-[#DC2626] text-white font-bold rounded-2xl shadow-xl hover:bg-[#B91C1C] transition-all text-xl">
                Вызвать Специалиста
              </a>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default BlogPostAppliances;
