import { useParams, Link } from "react-router-dom";
import seoData from "../data/seo-data.json";
import SEO from "../components/SEO";

const ServiceDistrictPage = () => {
  const { serviceId, districtId } = useParams();

  const service = seoData.services.find((s) => s.id === serviceId);
  const district = seoData.districts.find((d) => d.id === districtId);

  if (!service || !district) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h1 className="text-2xl font-bold mb-4">Страница не найдена</h1>
        <Link to="/" className="text-blue-600 hover:underline">Вернуться на главную</Link>
      </div>
    );
  }

  const title = `${service.title} в ${district.nameGenitive} Алматы | Мастер Манас`;
  const description = `${service.title} в ${district.nameGenitive} Алматы. Профессионально, быстро, с гарантией. Выезд мастера 24/7. Звоните прямо сейчас!`;

  return (
    <div className="min-h-screen bg-background p-8">
      <SEO title={title} description={description} />
      
      <div className="max-w-4xl mx-auto">
        <nav className="mb-8 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-foreground">Главная</Link>
          <span className="mx-2">/</span>
          <span>{service.title}</span>
          <span className="mx-2">/</span>
          <span>{district.name}</span>
        </nav>

        <h1 className="text-4xl font-bold text-foreground mb-6">
          {service.title} в {district.nameGenitive} Алматы
        </h1>

        <div className="bg-card p-6 rounded-lg border shadow-sm mb-8">
          <p className="text-lg mb-4">
            Профессиональные услуги: <strong>{service.title.toLowerCase()}</strong> в районе <strong>{district.name}</strong>. 
            Осуществляем выезд во все точки района в течение 30-60 минут.
          </p>
          <p className="mb-4">
            {service.description} Мы гарантируем высокое качество работ, использование качественных материалов и прозрачные цены.
          </p>
          
          <div className="bg-primary/10 p-4 rounded-md border border-primary/20 mb-6">
            <h2 className="text-xl font-semibold mb-2">Наши преимущества в {district.nameGenitive}:</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Быстрый выезд 24/7</li>
              <li>Гарантия на работы до 12 месяцев</li>
              <li>Честные цены без накруток</li>
              <li>Опытные мастера со стажем более 15 лет</li>
            </ul>
          </div>

          <div className="text-center py-6">
            <p className="text-xl font-bold mb-4">Нужен {service.title.toLowerCase()}?</p>
            <a 
              href="tel:+77055535332" 
              className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-full font-bold text-lg hover:bg-primary/90 transition-colors"
            >
              Вызвать мастера: +7 (705) 553-53-32
            </a>
          </div>
        </div>

        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Другие районы обслуживания:</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {seoData.districts
              .filter((d) => d.id !== districtId)
              .map((d) => (
                <Link 
                  key={d.id} 
                  to={`/uslugi/${serviceId}/${d.id}`}
                  className="p-3 bg-muted rounded hover:bg-muted/80 text-center transition-colors"
                >
                  {d.name}
                </Link>
              ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ServiceDistrictPage;
