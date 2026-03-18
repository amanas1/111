import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Home, Zap } from "lucide-react";
import SEO from "../components/SEO";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-6 py-20 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#DC2626] rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#DC2626] rounded-full blur-[120px]" />
      </div>

      <SEO 
        title="Страница не найдена (404) | Мастер Манас - Электрик" 
        description="К сожалению, запрашиваемая страница не найдена. Вернитесь на главную страницу сайта электрика в Алматы." 
      />
      
      <div className="text-center max-w-2xl mx-auto relative z-10">
        <div className="relative mb-8 inline-block">
          <Zap className="w-24 h-24 text-[#DC2626] opacity-20 absolute -top-8 -right-8 animate-pulse transition-all" />
          <div className="text-[120px] md:text-[180px] font-black text-[#DC2626] leading-none select-none tracking-tighter">
            404
          </div>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">
          Упс! Кажется, произошло <span className="text-[#DC2626]">замыкание...</span>
        </h1>
        
        <p className="text-xl text-gray-600 mb-12 leading-relaxed max-w-lg mx-auto">
          Страница, которую вы ищете, обесточена или переехала в другой щиток. Но не волнуйтесь, наш электрик уже в пути!
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button 
            onClick={() => window.history.back()}
            className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white text-gray-700 font-bold px-8 py-4 rounded-2xl border-2 border-gray-100 hover:border-[#DC2626] hover:text-[#DC2626] transition-all group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            Вернуться назад
          </button>
          
          <Link 
            to="/" 
            className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[#DC2626] text-white font-bold px-8 py-4 rounded-2xl hover:bg-[#B91C1C] shadow-xl shadow-red-500/20 transition-all hover:-translate-y-1 hover:shadow-2xl active:scale-95"
          >
            <Home size={20} />
            На главную
          </Link>
        </div>
        
        <div className="mt-16 pt-8 border-t border-gray-100">
          <p className="text-gray-400 font-medium">Нужна срочная помощь электрика?</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-2">
            <a href="tel:+77055535332" className="text-[#DC2626] text-xl font-black hover:underline">
              +7 (705) 553-53-32
            </a>
            <span className="hidden sm:block text-gray-300">|</span>
            <a href="tel:+77074791020" className="text-[#DC2626] text-xl font-black hover:underline">
              +7 (707) 479-10-20
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
