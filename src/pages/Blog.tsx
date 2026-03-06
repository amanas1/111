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
      title: "Как выбрать надежный смеситель для ванной: советы сантехника",
      excerpt: "Подробный разбор материалов, типов картриджей и производителей смесителей. На что обратить внимание при покупке, чтобы избежать протечек через полгода.",
      date: "01 Марта 2024",
      author: "Мастер Манас",
      image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&q=80",
      category: "Сантехприборы",
      link: "/blog/article"
    },
    {
      id: 2,
      title: "Короткое замыкание: причины и первые действия до приезда электрика",
      excerpt: "Что делать, если в квартире выбило автомат или запахло горелой проводкой. Инструкция по безопасности для неподготовленных людей.",
      date: "25 Февраля 2024",
      author: "Мастер Манас",
      image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80",
      category: "Электрика",
      link: "/blog/electrical-short"
    },
    {
      id: 3,
      title: "Почему засоряется канализация на кухне и как этого избежать",
      excerpt: "Главные враги кухонных труб: жир, остатки пищи и кофе. Разбираем эффективные способы профилактики засоров без использования вредной химии.",
      date: "15 Февраля 2024",
      author: "Мастер Манас",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80",
      category: "Канализация",
      link: "/blog/clog-removal"
    },
    {
      id: 4,
      title: "Замена электропроводки в старом фонде Алматы: когда это необходимо?",
      excerpt: "Алюминиевая проводка исчерпала свой ресурс. Как понять, что пора менять кабели в квартире и почему это вопрос вашей безопасности.",
      date: "05 Февраля 2024",
      author: "Мастер Манас",
      image: "/images/services/uslugi-elektrika.png",
      category: "Электрика",
      link: "/blog/wiring-replacement"
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
        title="Блог сантехника и электрика | Полезные статьи и советы"
        description="Полезные статьи о ремонте сантехники, монтаже электропроводки, выборе материалов и решении бытовых проблем своими руками. Советы от профессионалов Алматы."
      />
      
      {/* Hero Section */}
      <section className="bg-[#0095DA] text-white pt-16 pb-12 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Блог о сантехнике</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-10">
            Полезные статьи, советы и инструкции от профессиональных мастеров Алматы. Узнайте больше о правильном уходе за коммуникациями и современных технологиях.
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
                    ? "bg-[#0095DA] text-white shadow-md shadow-[#0095DA]/30" 
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {cat.name}
                <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                  activeCategory === cat.name ? "bg-white text-[#0095DA]" : "bg-white text-gray-500"
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
                  <div className="absolute top-4 left-4 bg-[#0095DA] text-white text-xs font-bold px-3 py-1 rounded-full z-20">
                    {post.category}
                  </div>
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <span className="flex items-center gap-1"><Calendar size={16} /> {post.date}</span>
                    <span className="flex items-center gap-1"><User size={16} /> {post.author}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#0095DA] transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-6 flex-1 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <Link 
                    to={post.link} 
                    className="inline-flex items-center text-[#0095DA] font-bold hover:text-[#0084c0] transition-colors group/link w-fit"
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
             <button className="px-8 py-3 border-2 border-[#0095DA] text-[#0095DA] font-bold rounded-xl hover:bg-blue-50 transition-colors">
               Загрузить еще
             </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
