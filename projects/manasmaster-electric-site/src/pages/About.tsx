import SEO from "../components/SEO";
import { Users, Calendar, ShieldCheck, Star, CheckCircle2, Award, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col pt-24 md:pt-32 pb-20">
      <SEO 
        title="О компании | Электрик в Алматы - Мастер Манас"
        description="Узнайте больше о нас. Профессиональные услуги электрика в Алматы. Опыт более 10 лет, гарантия на все виды работ."
      />
      
      {/* Hero Section */}
      <section className="bg-red-50 py-12 md:py-16">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex gap-2 text-sm text-slate-500 font-medium mb-6">
            <Link to="/" className="hover:text-[#DC2626] transition-colors">Главная</Link>
            <span>/</span>
            <span className="text-slate-900">О компании</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">О компании Мастер Манас</h1>
        </div>
      </section>

      {/* Наша история */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Наша история</h2>
              <div className="space-y-4 text-lg text-slate-600 leading-relaxed font-medium">
                <p>
                  Компания "Мастер Манас" занимается электромонтажными работами в Алматы с 2015 года. Наша цель — обеспечивать безопасность и надежность электроснабжения в домах и офисах наших клиентов. 
                </p>
                <div className="my-8 rounded-[2rem] overflow-hidden shadow-lg aspect-video md:aspect-[16/9]">
                  <img 
                src="/images/services/vyzov-elektrika.png" 
                alt="Мастер Манас за работой — профессиональный электрик в Алматы" 
                title="Мастер Манас: Профессиональный электрик с 10-летним опытом"
                className="w-full h-full object-cover rounded-2xl shadow-lg border border-gray-100"
              />
                </div>
                <p>
                  Мы начинали как небольшая группа квалифицированных электромонтажников. Сегодня мы выполняем задачи любой сложности: от замены перегоревшей розетки до проектирования и монтажа электрики в крупных объектах.
                </p>
                <p>
                  Мы постоянно совершенствуем свои знания, следим за новыми технологиями и используем современное профессиональное оборудование. Наш девиз: "Безопасность превыше всего".
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 flex flex-col items-center justify-center text-center">
                <Users size={32} strokeWidth={1.5} className="text-[#DC2626] mb-4" />
                <span className="text-3xl font-extrabold text-slate-900 block mb-1">1000+</span>
                <span className="text-[15px] text-slate-500 font-medium">клиентов</span>
              </div>
              <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 flex flex-col items-center justify-center text-center">
                <Calendar size={32} strokeWidth={1.5} className="text-[#DC2626] mb-4" />
                <span className="text-3xl font-extrabold text-slate-900 block mb-1">10 лет</span>
                <span className="text-[15px] text-slate-500 font-medium">на рынке</span>
              </div>
              <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 flex flex-col items-center justify-center text-center">
                <ShieldCheck size={32} strokeWidth={1.5} className="text-[#DC2626] mb-4" />
                <span className="text-[17px] font-extrabold text-slate-900 block mb-1">Гарантия 1 год</span>
                <span className="text-[15px] text-slate-500 font-medium">на работы</span>
              </div>
              <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 flex flex-col items-center justify-center text-center">
                <Star size={32} strokeWidth={1.5} className="text-[#DC2626] mb-4" />
                <span className="text-[17px] font-extrabold text-slate-900 block mb-1">Рейтинг 4.9/5</span>
                <span className="text-[15px] text-slate-500 font-medium">по отзывам</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Наши принципы */}
      <section className="py-16 md:py-24 bg-red-50/30">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">Наши принципы</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Безопасность", desc: "Строгое соблюдение ПУЭ и всех норм безопасности." },
              { title: "Качество материалов", desc: "Используем только сертифицированный кабель и надежную автоматику." },
              { title: "Оперативность", desc: "Выезжаем для устранения аварийных ситуаций максимально быстро." },
              { title: "Прозрачность", desc: "Точная смета до начала работ без скрытых расходов." },
              { title: "Гарантия", desc: "Несем полную ответственность за выполненную работу в течение года." },
              { title: "Порядок", desc: "Всегда убираем за собой строительный мусор." },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100">
                <CheckCircle2 size={28} strokeWidth={2} className="text-green-500 mb-4" />
                <h3 className="text-[17px] font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-[15px] text-slate-500 font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Сертификаты и лицензии */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">Сертификаты и допуски</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Допуск по ЭБ", desc: "Наличие всех необходимых групп допуска по электробезопасности." },
              { title: "ПУЭ Стандарты", desc: "Работа в строгом соответствии с Правилами Устройства Электроустановок." },
              { title: "Техника безопасности", desc: "Соблюдение правил ТБ при проведении высотных и монтажных работ." },
              { title: "Качественный инструмент", desc: "Использование профессионального измерительного оборудования и инструмента." },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 text-center flex flex-col items-center">
                <div className="w-16 h-16 bg-red-50 text-[#DC2626] rounded-full flex items-center justify-center mb-6">
                  <Award size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-[17px] font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-[14px] text-slate-500 font-medium leading-loose">{item.desc}</p>
                <div className="mt-4 inline-block px-3 py-1 bg-green-50 text-green-600 text-[11px] font-bold uppercase tracking-wider rounded-md border border-green-100">
                  Соответствие нормам
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
