import SEO from "../components/SEO";
import { Calendar, User, ArrowLeft, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const BlogPostShield = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <SEO 
        title="Зачем нужен современный электрощит и УЗО | Советы электрика Манаса"
        description="Разбираем устройство современного электрического щитка. Почему важно иметь УЗО и качественные автоматы для защиты дома."
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
                src="/images/blog/shield.png" 
                alt="Профессиональная сборка электрического щита в квартире" 
                title="Современный электрощит и УЗО — Мастер Манас"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
                <div className="flex flex-wrap gap-3 mb-4">
                  <span className="bg-[#DC2626] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Защита
                  </span>
                  <span className="bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Щит
                  </span>
                </div>
                <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
                  Зачем нужен современный электрощит и УЗО
                </h1>
                <div className="flex flex-wrap items-center gap-6 text-sm text-gray-300 font-medium">
                  <span className="flex items-center gap-2"><Calendar size={18} /> 13 Марта 2024</span>
                  <span className="flex items-center gap-2"><User size={18} /> Мастер Манас</span>
                </div>
              </div>
            </div>

            <div className="p-8 md:p-12 lg:px-16 prose prose-lg md:prose-xl max-w-none text-gray-700 font-medium leading-relaxed">
              <p className="lead text-xl text-gray-600 italic border-l-4 border-blue-500 pl-6 py-2 mb-10">
                Электрощит — это "мозг" вашей домашней сети. От его правильной сборки зависит сохранность техники и ваша безопасность.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 text-[#DC2626]">Что такое УЗО и зачем оно нужно?</h2>
              <p>
                Устройство защитного отключения (УЗО) реагирует на утечку тока. Если вы случайно коснетесь оголенного провода, УЗО мгновенно отключит питание, предотвращая удар током.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 text-[#DC2626]">Автоматические выключатели</h2>
              <p>
                Современные "автоматы" защищают проводку от перегрузок и коротких замыканий. Важно правильно подобрать номинал под сечение кабеля.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-2xl my-8">
                <p className="m-0 font-medium text-gray-800">У вас в щитке всё ещё стоят старые "пробки"? Это опасно! Я помогу собрать современный, надежный щит с использованием качественных комплектующих.</p>
              </div>
            </div>

            <div className="bg-red-50 border-t border-red-100 p-8 md:p-12 text-center">
              <h3 className="text-2xl font-bold text-red-700 mb-6 font-extrabold">Модернизируйте защиту своего дома!</h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+77055535332" className="inline-flex items-center justify-center px-8 py-4 bg-[#DC2626] text-white font-bold rounded-2xl shadow-xl hover:bg-[#B91C1C] transition-all text-lg flex-1">
                  +7 (705) 553-53-32
                </a>
                <a href="tel:+77074791020" className="inline-flex items-center justify-center px-8 py-4 bg-[#DC2626] text-white font-bold rounded-2xl shadow-xl hover:bg-[#B91C1C] transition-all text-lg flex-1">
                  +7 (707) 479-10-20
                </a>
              </div>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default BlogPostShield;
