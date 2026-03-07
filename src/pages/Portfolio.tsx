import SEO from "../components/SEO";
import { CheckCircle2, Star, Clock, Calendar } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Капитальный ремонт сантехники в новостройке ЖК 'Манхэттен'",
      category: "Сантехника",
      image: "/images/portfolio/plumbing.png",
      description: "Выполнена полная коллекторная разводка труб водоснабжения Rehau, установка фильтров тонкой очистки, монтаж встроенной душевой системы и инсталляции.",
      time: "3 дня",
      price: "180 000 ₸",
    },
    {
      id: 2,
      title: "Замена старой электропроводки в панельном доме",
      category: "Электрика",
      image: "/images/services/remont-provodki.png",
      description: "Демонтаж старой алюминиевой проводки. Штробление стен без пыли. Прокладка ГОСТ кабеля ВВГнг-LS. Сборка нового щита с автоматами Schneider Electric. Установлено 45 точек.",
      time: "4 дня",
      price: "250 000 ₸",
    },
    {
      id: 3,
      title: "Монтаж котельной в частном доме",
      category: "Сантехника",
      image: "/images/portfolio/boiler.png",
      description: "Обвязка газового и резервного электрического котлов. Монтаж насосных групп, гидрострелки, бойлера косвенного нагрева. Разводка теплого пола.",
      time: "5 дней",
      price: "400 000 ₸",
    },
    {
      id: 4,
      title: "Подключение кухонного оборудования",
      category: "Комплекс",
      image: "/images/portfolio/kitchen.png",
      description: "Перенос розеток и труб водоснабжения по проекту. Подключение посудомоечной машины, измельчителя отходов, фильтра обратного осмоса.",
      time: "1 день",
      price: "45 000 ₸",
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50/50 flex flex-col pt-16 md:pt-20">
      <SEO 
        title="Наши работы | Портфолио сантехника и электрика в Алматы"
        description="Посмотрите фотографии выполненных работ мастерами нашей компании. Замена труб, монтаж проводки, установка ванн и душевых кабин в Алматы."
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1173D4] to-[#13B6EC] text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute w-96 h-96 rounded-full bg-white -top-20 -right-20 blur-3xl mix-blend-overlay" />
          <div className="absolute w-64 h-64 rounded-full bg-white -bottom-10 -left-10 blur-2xl mix-blend-overlay" />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">Наши последние работы</h1>
          <p className="text-xl opacity-90 leading-relaxed max-w-2xl mx-auto">
            Реальные примеры выполненных объектов. Мы гордимся результатами своего труда и гарантируем качество.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 -mt-10 px-6 relative z-20">
        <div className="container mx-auto max-w-7xl">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-white rounded-[2rem] p-6 shadow-sm border border-gray-100 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] transition-all duration-500 group flex flex-col">
                
                {/* Image Section */}
                <div className="w-full h-64 rounded-2xl overflow-hidden relative mb-6">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent opacity-60" />
                  
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-lg font-bold text-[#1173D4] text-xs uppercase shadow-sm">
                    {project.category}
                  </div>

                  {/* Master Avatar Badge */}
                  <div className="absolute bottom-4 left-4 flex items-center gap-3 bg-white/90 backdrop-blur-md px-3 py-2 rounded-xl shadow-lg">
                    <div className="w-8 h-8 bg-gradient-to-br from-[#1173D4] to-[#13B6EC] rounded-full flex items-center justify-center text-white font-bold text-sm shadow-inner">
                      М
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-gray-900 uppercase tracking-wide leading-none mb-1">Мастер Манас</div>
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={8} className="fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex flex-col flex-grow">
                  <h2 className="text-xl font-bold text-gray-900 mb-3 leading-snug group-hover:text-[#1173D4] transition-colors">
                    {project.title}
                  </h2>
                  <p className="text-sm text-gray-500 mb-6 leading-relaxed flex-grow">
                    {project.description}
                  </p>
                  
                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-gray-50 rounded-xl p-3 flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-50 text-[#1173D4] rounded-lg flex items-center justify-center shrink-0">
                        <Clock size={16} />
                      </div>
                      <div>
                        <div className="text-[10px] text-gray-400 font-medium uppercase tracking-wider">Срок</div>
                        <div className="text-sm font-bold text-gray-900">{project.time}</div>
                      </div>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-3 flex items-center gap-3">
                      <div className="w-8 h-8 bg-emerald-50 text-emerald-600 rounded-lg flex items-center justify-center shrink-0">
                        <CheckCircle2 size={16} />
                      </div>
                      <div>
                        <div className="text-[10px] text-gray-400 font-medium uppercase tracking-wider">Бюджет</div>
                        <div className="text-sm font-bold text-gray-900">{project.price}</div>
                      </div>
                    </div>
                  </div>

                  <a 
                    href="https://wa.me/77055535332"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center px-6 py-3.5 text-sm font-bold rounded-xl text-white bg-[#1173D4] hover:bg-[#0084c0] shadow-lg shadow-blue-500/20 transition-all hover:-translate-y-0.5"
                  >
                    Рассчитать свой проект
                  </a>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
};

export default Portfolio;
