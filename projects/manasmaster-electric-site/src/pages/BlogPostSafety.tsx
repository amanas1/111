import SEO from "../components/SEO";
import { Calendar, User, ArrowLeft, ShieldAlert } from "lucide-react";
import { Link } from "react-router-dom";

const BlogPostSafety = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <SEO 
        title="Электробезопасность в доме: главные правила | Советы электрика Манаса"
        description="Разбираем основные правила безопасности при работе с электричеством. Узнайте, как защитить свой дом от пожара и удара током."
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
                src="/images/blog/safety.png" 
                alt="Электробезопасность в доме" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
                <div className="flex flex-wrap gap-3 mb-4">
                  <span className="bg-[#DC2626] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Безопасность
                  </span>
                  <span className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Важно
                  </span>
                </div>
                <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
                  Электробезопасность в доме: главные правила
                </h1>
                <div className="flex flex-wrap items-center gap-6 text-sm text-gray-300 font-medium">
                  <span className="flex items-center gap-2"><Calendar size={18} /> 16 Марта 2024</span>
                  <span className="flex items-center gap-2"><User size={18} /> Мастер Манас</span>
                </div>
              </div>
            </div>

            <div className="p-8 md:p-12 lg:px-16 prose prose-lg md:prose-xl max-w-none text-gray-700 font-medium leading-relaxed">
              <p className="lead text-xl text-gray-600 italic border-l-4 border-red-500 pl-6 py-2 mb-10">
                Электричество — это комфорт, но и источник повышенной опасности. Знание простых правил может спасти жизнь и имущество.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 text-[#DC2626]">Никаких оголенных проводов</h2>
              <p>
                Любое повреждение изоляции — это риск короткого замыкания или удара током. Не используйте "скрутки", особенно если они не защищены должным образом.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 text-[#DC2626]">Защита от детей</h2>
              <p>
                Используйте специальные заглушки для розеток. Современные розетки со шторками — отличный выбор для семей с маленькими детьми.
              </p>

              <div className="bg-red-50 border-l-4 border-[#DC2626] p-6 rounded-r-2xl my-8">
                <p className="m-0 font-medium">Заметили искрение или запах горелой пластмассы? Немедленно обесточьте помещение и вызовите специалиста. Я приеду быстро и устраню опасность.</p>
              </div>
            </div>

            <div className="bg-red-50 border-t border-red-100 p-8 md:p-12 text-center">
              <h3 className="text-2xl font-bold text-red-700 mb-6 font-extrabold">Безопасность вашего дома — мой приоритет!</h3>
              <a href="tel:+77055535332" className="inline-flex items-center justify-center px-10 py-5 bg-[#DC2626] text-white font-bold rounded-2xl shadow-xl hover:bg-[#B91C1C] transition-all text-xl">
                Вызвать Электрика
              </a>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default BlogPostSafety;
