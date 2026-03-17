import SEO from "../components/SEO";
import { CheckCircle2, Star, Clock, Calendar, Zap } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Полная замена электропроводки в ЖК 'Манхэттен'",
      category: "Электрика",
      image: "/images/services/remont-provodki.png",
      description: "Выполнен полный демонтаж старой алюминиевой проводки и монтаж новой медной системы по ГОСТу. Установка нового щитка, розеток и выключателей во всей квартире.",
      time: "4 дня",
      price: "180 000 ₸",
      alt: "Процесс замены старой электропроводки на новую медную в квартире",
      titleTag: "Замена проводки в ЖК Манхэттен - Мастер Манас"
    },
    {
      id: 2,
      title: "Сборка и монтаж щитового оборудования в коттедже",
      category: "Электрика",
      image: "/images/portfolio/portfolio-sborka-shhitov.png",
      description: "Проектирование и сборка распределительного щита с разделением на группы. Установка УЗО, реле напряжения и автоматики Schneider Electric.",
      time: "2 дня",
      price: "120 000 ₸",
      alt: "Собранный электрический щит с автоматикой Schneider Electric",
      titleTag: "Сборка щитового оборудования в коттедже - Алматы"
    },
    {
      id: 3,
      title: "Монтаж системы 'Умный дом' и освещения",
      category: "Электрика",
      image: "/images/blog/smarthome.png",
      description: "Настройка диммируемого освещения, установка датчиков движения и интеграция системы управления светом со смартфона клиента.",
      time: "3 дня",
      price: "250 000 ₸",
    },
    {
      id: 4,
      title: "Профессиональная замена автоматических выключателей",
      category: "Электрика",
      image: "/images/portfolio/portfolio-breakers.png",
      description: "Замена устаревших советских пробок на современные автоматы. Повышение безопасности электросети и защита от короткого замыкания.",
      time: "3 часа",
      price: "45 000 ₸",
    },
    {
      id: 5,
      title: "Архитектурное освещение загородного дома",
      category: "Электрика",
      image: "/images/portfolio/portfolio-landscape.png",
      description: "Монтаж ландшафтных светильников и подсветки фасада. Использование влагозащищенных LED-лент и декоративных фонарей.",
      time: "3 дня",
      price: "150 000 ₸",
    },
    {
      id: 6,
      title: "Электромонтаж в современном офисе (Open Space)",
      category: "Электрика",
      image: "/images/portfolio/portfolio-office.png",
      description: "Разводка силовых и слаботочных сетей. Организация рабочих мест, установка кабель-каналов и потолочного освещения.",
      time: "7 дней",
      price: "450 000 ₸",
    },
    {
      id: 7,
      title: "Черновой электромонтаж в элитной новостройке",
      category: "Электрика",
      image: "/images/portfolio/portfolio-luxury-wiring.png",
      description: "Штробление стен, прокладка кабеля в гофре и установка подрозетников по дизайнерскому проекту. Использование только ГОСТ кабеля.",
      time: "5 дней",
      price: "220 000 ₸",
    },
    {
      id: 8,
      title: "Установка и подключение стабилизатора напряжения",
      category: "Электрика",
      image: "/images/blog/ups.png",
      description: "Монтаж мощного стабилизатора для защиты дорогой бытовой техники от скачков напряжения в частном секторе.",
      time: "1 день",
      price: "65 000 ₸",
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50/50 flex flex-col pt-24 md:pt-32 pb-20">
      <SEO 
        title="Наши работы | Портфолио электрика в Алматы"
        description="Посмотрите фотографии выполненных электромонтажных работ мастерами нашей компании. Замена проводки, сборка щитов и установка освещения в Алматы."
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#DC2626] to-[#E11D48] text-white py-20 relative overflow-hidden mt-[-24px] md:mt-[-32px]">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute w-96 h-96 rounded-full bg-white -top-20 -right-20 blur-3xl mix-blend-overlay" />
          <div className="absolute w-64 h-64 rounded-full bg-white -bottom-10 -left-10 blur-2xl mix-blend-overlay" />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">Наши выполненные работы</h1>
          <p className="text-xl opacity-90 leading-relaxed max-w-2xl mx-auto text-red-100">
            Реальные примеры объектов. Качество, безопасность и эстетичный монтаж — приоритеты мастера Манаса.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-6 relative z-20">
        <div className="container mx-auto max-w-7xl">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-white rounded-[2rem] p-6 shadow-sm border border-gray-100 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] transition-all duration-500 group flex flex-col">
                
                {/* Image Section */}
                <div className="w-full h-64 rounded-2xl overflow-hidden relative mb-6">
                  <img 
                    src={project.image} 
                    alt={project.alt || `Пример работы: ${project.title}`} 
                    title={project.titleTag || project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent opacity-60" />
                  
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-lg font-bold text-[#DC2626] text-xs uppercase shadow-sm">
                    {project.category}
                  </div>

                  {/* Master Avatar Badge */}
                  <div className="absolute bottom-4 left-4 flex items-center gap-3 bg-white/90 backdrop-blur-md px-3 py-2 rounded-xl shadow-lg">
                    <div className="w-8 h-8 bg-gradient-to-br from-[#DC2626] to-[#E11D48] rounded-full flex items-center justify-center text-white font-bold text-sm shadow-inner">
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
                  <h2 className="text-xl font-bold text-gray-900 mb-3 leading-snug group-hover:text-[#DC2626] transition-colors">
                    {project.title}
                  </h2>
                  <p className="text-sm text-gray-500 mb-6 leading-relaxed flex-grow">
                    {project.description}
                  </p>
                  
                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-gray-50 rounded-xl p-3 flex items-center gap-3">
                      <div className="w-8 h-8 bg-red-50 text-[#DC2626] rounded-lg flex items-center justify-center shrink-0">
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
                    className="w-full inline-flex items-center justify-center px-6 py-3.5 text-sm font-bold rounded-xl text-white bg-[#DC2626] hover:bg-[#B91C1C] shadow-lg shadow-red-500/20 transition-all hover:-translate-y-0.5"
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
