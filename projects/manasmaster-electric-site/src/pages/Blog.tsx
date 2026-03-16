import SEO from "../components/SEO";
import { Calendar, User, ArrowRight, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("Все статьи");

  const posts = [
    {
      id: 1,
      title: "Электробезопасность в доме: главные правила",
      excerpt: "Разбираем основные правила безопасности при работе с электричеством. Узнайте, как защитить свой дом от пожара и удара током.",
      date: "16 Марта 2024",
      author: "Мастер Манас",
      image: "/images/blog/safety.png",
      category: "Безопасность",
      link: "/blog/safety"
    },
    {
      id: 2,
      title: "Как выбрать люстру и светильники для интерьера",
      excerpt: "Полезные советы по выбору освещения для разных комнат. Узнайте о типах ламп, мощности и правилах монтажа.",
      date: "15 Марта 2024",
      author: "Мастер Манас",
      image: "/images/blog/lighting.png",
      category: "Освещение",
      link: "/blog/lighting"
    },
    {
      id: 3,
      title: "Признаки неисправной проводки: когда звать мастера",
      excerpt: "Как понять, что ваша проводка требует ремонта или замены. Основные симптомы: от мигающего света до нагретых розеток.",
      date: "14 Марта 2024",
      author: "Мастер Манас",
      image: "/images/blog/wiring.png",
      category: "Ремонт",
      link: "/blog/wiring"
    },
    {
      id: 4,
      title: "Зачем нужен современный электрощит и УЗО",
      excerpt: "Разбираем устройство современного электрического щитка. Почему важно иметь УЗО и качественные автоматы для защиты дома.",
      date: "13 Марта 2024",
      author: "Мастер Манас",
      image: "/images/blog/shield.png",
      category: "Защита",
      link: "/blog/shield"
    },
    {
      id: 5,
      title: "Правильное подключение бытовой техники",
      excerpt: "Как безопасно подключить плиту, духовку, бойлер или стиральную машину. Почему нужна отдельная линия питания для мощных приборов.",
      date: "12 Марта 2024",
      author: "Мастер Манас",
      image: "/images/blog/appliances.png",
      category: "Техника",
      link: "/blog/appliances"
    },
    {
      id: 6,
      title: "Энергосбережение и умный дом: с чего начать",
      excerpt: "Как сделать свой дом умнее и начать экономить на счетах за электричество. Обзор систем автоматизации и умного освещения.",
      date: "11 Марта 2024",
      author: "Мастер Манас",
      image: "/images/blog/smarthome.png",
      category: "Технологии",
      link: "/blog/smarthome"
    },
    {
      id: 7,
      title: "Мифы и правда об электрических теплых полах",
      excerpt: "Разбираем плюсы и минусы электрического теплого пола. Стоит ли устанавливать, сколько потребляет и как правильно монтировать.",
      date: "10 Марта 2024",
      author: "Мастер Манас",
      image: "/images/blog/floorheating.png",
      category: "Комфорт",
      link: "/blog/floorheating"
    },
    {
      id: 8,
      title: "Защита техники: зачем нужен ИБП для дома",
      excerpt: "Как защитить компьютер, котел и дорогую электронику от внезапных отключений света и скачков напряжения с помощью ИБП.",
      date: "9 Марта 2024",
      author: "Мастер Манас",
      image: "/images/blog/ups.png",
      category: "Защита",
      link: "/blog/ups"
    },
    {
      id: 9,
      title: "Автоматизация освещения и промышленных процессов",
      excerpt: "Обзор современных систем управления светом и внедрение ПЛК для автоматизации частных домов и малых производств.",
      date: "8 Марта 2024",
      author: "Мастер Манас",
      image: "/images/blog/automation.png",
      category: "Технологии",
      link: "/blog/automation"
    },
    {
      id: 10,
      title: "Ландшафтное освещение: магия света в саду",
      excerpt: "Как правильно спланировать и смонтировать уличное освещение. Типы светильников, защита от влаги и управление сценариями.",
      date: "7 Марта 2024",
      author: "Мастер Манас",
      image: "/images/blog/landscape.png",
      category: "Освещение",
      link: "/blog/landscape"
    },
    {
      id: 11,
      title: "Аварийное освещение: безопасность превыше всего",
      excerpt: "Почему важно устанавливать системы аварийного освещения в офисах и многоквартирных домах. Нормы и современные решения.",
      date: "6 Марта 2024",
      author: "Мастер Манас",
      image: "/images/blog/emergency.png",
      category: "Безопасность",
      link: "/blog/emergency"
    },
    {
      id: 12,
      title: "Установка зарядной станции для электромобиля",
      excerpt: "Что нужно знать перед покупкой и установкой зарядки для EV дома. Расчет мощности, выбор кабеля и правила монтажа в гараже.",
      date: "5 Марта 2024",
      author: "Мастер Манас",
      image: "/images/blog/ev.png",
      category: "Техника",
      link: "/blog/ev"
    }
  ];

  const categoriesWithCount = [
    { name: "Все статьи", count: posts.length },
    ...Array.from(new Set(posts.map(post => post.category))).map(cat => ({
      name: cat,
      count: posts.filter(post => post.category === cat).length
    }))
  ];

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === "Все статьи" || post.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <SEO 
        title="Блог профессионального электрика Алматы | Полезные статьи и советы"
        description="Полезные статьи об электромонтажных работах, безопасности, выборе светильников и современных технологиях в Алматы. Советы от мастеров Мастер Манас."
        keywords="Электрик Алматы статьи, советы электрика, электромонтажные работы Алматы, как вызвать электрика, безопасность электрики, ремонт проводки советы"
        canonical="https://manasmaster.kz/blog"
      />

      {/* Structured Data: Blog */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Blog",
          "name": "Блог Мастер Манас — Электрик Алматы",
          "description": "Полезные статьи об электрике и электромонтаже в Алматы",
          "publisher": {
            "@type": "Organization",
            "name": "Мастер Манас",
            "logo": {
              "@type": "ImageObject",
              "url": "https://manasmaster.kz/favicon.png"
            }
          },
          "blogPost": posts.map(post => ({
            "@type": "BlogPosting",
            "headline": post.title,
            "description": post.excerpt,
            "image": `https://manasmaster.kz${post.image}`,
            "datePublished": "2024-03-16", // Baseline date
            "author": {
              "@type": "Person",
              "name": "Манас"
            }
          }))
        })}
      </script>
      
      {/* Hero Section */}
      <section className="bg-[#DC2626] text-white pt-16 pb-12 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Блог об электрике</h1>
          <p className="text-xl text-red-100 max-w-2xl mx-auto mb-10">
            Полезные статьи, советы и инструкции от профессиональных мастеров Алматы. Узнайте больше о безопасности и современных технологиях.
          </p>

          <div className="relative max-w-2xl mx-auto">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Поиск по статьям..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-xl text-gray-900 border-0 focus:ring-4 focus:ring-white/20 outline-none shadow-lg text-lg"
            />
          </div>
        </div>
      </section>

      {/* Categories Horizontal Scroll */}
      <section className="bg-white border-b sticky top-[72px] z-40 py-4 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide justify-center">
            {categoriesWithCount.map((cat) => (
              <button
                key={cat.name}
                onClick={() => setActiveCategory(cat.name)}
                className={`flex items-center gap-2 whitespace-nowrap px-5 py-2.5 rounded-full font-semibold transition-all ${
                  activeCategory === cat.name 
                    ? "bg-[#DC2626] text-white shadow-md shadow-red-500/30" 
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {cat.name}
                <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                  activeCategory === cat.name ? "bg-white text-[#DC2626]" : "bg-white text-gray-500"
                }`}>
                  {cat.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="mb-10 text-center md:text-left">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Рекомендуемые статьи</h2>
            <p className="text-gray-500 text-lg">Самые полезные и популярные материалы от наших экспертов</p>
          </div>

          {filteredPosts.length === 0 ? (
             <div className="text-center py-20">
               <div className="text-4xl mb-4">🔍</div>
               <h3 className="text-2xl font-bold text-gray-900 mb-2">Ничего не найдено</h3>
               <p className="text-gray-500">Попробуйте изменить поисковый запрос или выбрать другую категорию</p>
             </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all flex flex-col group">
                <div className="h-64 overflow-hidden relative">
                  <div className="absolute top-4 left-4 bg-[#DC2626] text-white text-xs font-bold px-3 py-1 rounded-full z-20">
                    {post.category}
                  </div>
                  <img 
                    src={post.image} 
                    alt={`${post.title} — полезные советы и инструкции от профессионального мастера в Алматы`} 
                    title={`${post.title}: Узнать больше в блоге Мастера Манаса`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <span className="flex items-center gap-1"><Calendar size={16} /> {post.date}</span>
                    <span className="flex items-center gap-1"><User size={16} /> {post.author}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#DC2626] transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-6 flex-1 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <Link 
                    to={post.link} 
                    className="inline-flex items-center text-[#DC2626] font-bold hover:text-[#B91C1C] transition-colors group/link w-fit"
                  >
                    Читать статью
                    <ArrowRight size={18} className="ml-2 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
            </div>
          )}

          <div className="mt-12 text-center">
             <button className="px-8 py-3 border-2 border-[#DC2626] text-[#DC2626] font-bold rounded-xl hover:bg-red-50 transition-colors">
               Загрузить еще
             </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
