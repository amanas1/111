import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Home } from "lucide-react";
import SEO from "../components/SEO";

const NotFound = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gray-50/50 px-6 py-20">
      <SEO 
        title="Страница не найдена (404) | Мастер Манас" 
        description="К сожалению, запрашиваемая страница не найдена. Вернитесь на главную страницу сайта сантехника в Алматы." 
      />
      <div className="text-center max-w-lg mx-auto">
        <div className="text-[120px] md:text-[150px] font-extrabold text-[#1173D4] leading-none mb-4 opacity-20">
          404
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
          Страница не найдена
        </h1>
        <p className="text-[16px] text-slate-600 mb-8 leading-relaxed">
          Возможно, вы ввели неправильный адрес, или страница была удалена. 
          Не переживайте, давайте вернемся назад или на главную.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button 
            onClick={() => window.history.back()}
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-slate-700 font-bold px-6 py-3 rounded-xl border border-slate-200 hover:bg-slate-50 transition-colors"
          >
            <ArrowLeft size={18} />
            Шаг назад
          </button>
          <Link 
            to="/" 
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#1173D4] text-white font-bold px-6 py-3 rounded-xl hover:bg-[#0084c0] shadow-lg shadow-blue-500/25 transition-all hover:-translate-y-0.5"
          >
            <Home size={18} />
            На главную
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
