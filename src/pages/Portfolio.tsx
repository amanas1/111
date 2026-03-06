import SEO from "../components/SEO";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Капитальный ремонт сантехники в новостройке ЖК 'Манхэттен'",
      category: "Сантехника",
      imageBefore: "https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&q=80",
      imageAfter: "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&q=80",
      description: "Выполнена полная коллекторная разводка труб водоснабжения Rehau, установка фильтров тонкой очистки, монтаж встроенной душевой системы и инсталляции. Срок выполнения: 3 дня."
    },
    {
      id: 2,
      title: "Замена старой электропроводки в панельном доме",
      category: "Электрика",
      imageBefore: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80",
      imageAfter: "https://images.unsplash.com/photo-1544724569-5f546fd6f2b6?auto=format&fit=crop&q=80",
      description: "Демонтаж старой алюминиевой проводки. Штробление стен без пыли (с пылесосом). Прокладка ГОСТ кабеля ВВГнг-LS. Сборка нового распределительного щита с автоматами защиты Schneider Electric. Установлено 45 точек. Срок: 4 дня."
    },
    {
      id: 3,
      title: "Монтаж котельной в частном доме",
      category: "Сантехника",
      imageBefore: "https://images.unsplash.com/photo-1605814541783-a4e9bd5ebd54?auto=format&fit=crop&q=80",
      imageAfter: "https://images.unsplash.com/photo-1588825838023-e5fb2fba7b16?auto=format&fit=crop&q=80",
      description: "Обвязка газового и резервного электрического котлов. Монтаж насосных групп, гидрострелки, бойлера косвенного нагрева. Разводка теплого пола и радиаторной сети на площади 180 кв.м."
    },
    {
      id: 4,
      title: "Подключение сложного кухонного оборудования",
      category: "Комплекс",
      imageBefore: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80",
      imageAfter: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&q=80",
      description: "Перенос розеток и труб водоснабжения по проекту кухонного гарнитура. Установка и подключение встроенной посудомоечной машины, измельчителя отходов, фильтра обратного осмоса и духового шкафа."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <SEO 
        title="Наши работы | Портфолио сантехника и электрика в Алматы"
        description="Посмотрите фотографии выполненных работ мастерами нашей компании. Замена труб, монтаж проводки, установка ванн и душевых кабин в Алматы."
      />
      
      {/* Hero Section */}
      <section className="bg-[#0095DA] text-white py-16 relative">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Наши последние работы</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Лучшее доказательство профессионализма — это реальные примеры выполненных объектов. Мы гордимся результатами своего труда.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          
          <div className="flex flex-col gap-12">
            {projects.map((project) => (
              <div key={project.id} className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden flex flex-col lg:flex-row">
                
                {/* Image Section */}
                <div className="w-full lg:w-1/2 flex relative h-64 lg:h-auto">
                  {/* For visual appeal, we just show the final result, or a dual image setup. Let's just show abstract 'After' */}
                  <img 
                    src={project.imageAfter} 
                    alt={project.title} 
                    className="w-full h-full object-cover" 
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full font-bold text-[#0095DA] shadow-sm">
                    {project.category}
                  </div>
                </div>

                {/* Content Section */}
                <div className="w-full lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                    {project.title}
                  </h2>
                  <div className="w-20 h-1 bg-[#0095DA] mb-6 rounded-full"></div>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="mt-auto">
                    <a 
                      href="https://wa.me/77055535332"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-6 py-3 font-bold rounded-xl text-white bg-[#0095DA] hover:bg-[#0084c0] transition-colors"
                    >
                      Рассчитать стоимость похожего проекта
                    </a>
                  </div>
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
