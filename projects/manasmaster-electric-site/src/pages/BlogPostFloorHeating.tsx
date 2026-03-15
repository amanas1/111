import SEO from "../components/SEO";
import { Calendar, User, ArrowLeft, Thermometer } from "lucide-react";
import { Link } from "react-router-dom";

const BlogPostFloorHeating = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <SEO 
        title="Мифы и правда об электрических теплых полах | Советы электрика Манаса"
        description="Разбираем плюсы и минусы электрического теплого пола. Стоит ли устанавливать, сколько потребляет и как правильно монтировать."
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
                src="/images/blog/floorheating.png" 
                alt="Электрический теплый пол" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
                <div className="flex flex-wrap gap-3 mb-4">
                  <span className="bg-[#DC2626] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Комфорт
                  </span>
                  <span className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Обогрев
                  </span>
                </div>
                <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
                  Мифы и правда об электрических теплых полах
                </h1>
                <div className="flex flex-wrap items-center gap-6 text-sm text-gray-300 font-medium">
                  <span className="flex items-center gap-2"><Calendar size={18} /> 10 Марта 2024</span>
                  <span className="flex items-center gap-2"><User size={18} /> Мастер Манас</span>
                </div>
              </div>
            </div>

            <div className="p-8 md:p-12 lg:px-16 prose prose-lg md:prose-xl max-w-none text-gray-700 font-medium leading-relaxed">
              <p className="lead text-xl text-gray-600 italic border-l-4 border-orange-500 pl-6 py-2 mb-10">
                Теплый пол — это уют в холодное время года. Но вокруг этой технологии существует множество заблуждений.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 text-[#DC2626]">Дорого ли это в эксплуатации?</h2>
              <p>
                При использовании качественного терморегулятора и хорошей теплоизоляции, затраты на электричество будут минимальными.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 text-[#DC2626]">Надежность и долговечность</h2>
              <p>
                Современные нагревательные кабели и маты служат десятилетиями. Главное — отсутствие воздушных пустот при укладке плитки.
              </p>

              <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-2xl my-8">
                <p className="m-0 font-medium text-gray-800">Планируете ремонт? Я помогу с расчетом мощности и профессиональным монтажом системы теплого пола в любой комнате.</p>
              </div>
            </div>

            <div className="bg-red-50 border-t border-red-100 p-8 md:p-12 text-center">
              <h3 className="text-2xl font-bold text-red-700 mb-6 font-extrabold">Уют и тепло в вашем доме!</h3>
              <a href="tel:+77055535332" className="inline-flex items-center justify-center px-10 py-5 bg-[#DC2626] text-white font-bold rounded-2xl shadow-xl hover:bg-[#B91C1C] transition-all text-xl">
                Заказать Теплый Пол
              </a>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default BlogPostFloorHeating;
