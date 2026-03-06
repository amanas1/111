import SEO from "../components/SEO";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "Как выбрать надежный смеситель для ванной: советы сантехника",
      excerpt: "Подробный разбор материалов, типов картриджей и производителей смесителей. На что обратить внимание при покупке, чтобы избежать протечек через полгода.",
      date: "01 Марта 2024",
      author: "Мастер Манас",
      image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&q=80",
      category: "Сантехника"
    },
    {
      id: 2,
      title: "Короткое замыкание: причины и первые действия до приезда электрика",
      excerpt: "Что делать, если в квартире выбило автомат или запахло горелой проводкой. Инструкция по безопасности для неподготовленных людей.",
      date: "25 Февраля 2024",
      author: "Мастер Манас",
      image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80",
      category: "Электрика"
    },
    {
      id: 3,
      title: "Почему засоряется канализация на кухне и как этого избежать",
      excerpt: "Главные враги кухонных труб: жир, остатки пищи и кофе. Разбираем эффективные способы профилактики засоров без использования вредной химии.",
      date: "15 Февраля 2024",
      author: "Мастер Манас",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80",
      category: "Полезные советы"
    },
    {
      id: 4,
      title: "Замена электропроводки в старом фонде Алматы: когда это необходимо?",
      excerpt: "Алюминиевая проводка исчерпала свой ресурс. Как понять, что пора менять кабели в квартире и почему это вопрос вашей безопасности.",
      date: "05 Февраля 2024",
      author: "Мастер Манас",
      image: "https://images.unsplash.com/photo-1544724569-5f546fd6f2b6?auto=format&fit=crop&q=80",
      category: "Электрика"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <SEO 
        title="Блог сантехника и электрика | Полезные статьи и советы"
        description="Полезные статьи о ремонте сантехники, монтаже электропроводки, выборе материалов и решении бытовых проблем своими руками. Советы от профессионалов Алматы."
      />
      
      {/* Hero Section */}
      <section className="bg-[#0095DA] text-white py-16 relative">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Блог и полезные советы</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Делимся экспертным мнением, рассказываем о тонкостях работы систем водоснабжения и электросетей в вашем доме.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.map((post) => (
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
                    to={`/blog/article`} 
                    className="inline-flex items-center text-[#0095DA] font-bold hover:text-[#0084c0] transition-colors group/link w-fit"
                  >
                    Читать статью
                    <ArrowRight size={18} className="ml-2 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

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
