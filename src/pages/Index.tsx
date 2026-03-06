import { Link } from "react-router-dom";
import seoData from "../data/seo-data.json";

const Index = () => {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h1 className="text-5xl font-extrabold text-foreground mb-6">
          Мастер Манас — Сантехник и Электрик в Алматы
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Профессиональные услуги сантехника и электрика во всех районах Алматы. 
          Выезд за 30 минут, гарантия до 12 месяцев. Работаем 24/7.
        </p>
        <div className="mt-8">
          <a 
            href="tel:+77055535332" 
            className="inline-block bg-primary text-primary-foreground px-10 py-4 rounded-full font-bold text-xl hover:bg-primary/90 transition-transform hover:scale-105"
          >
            Позвонить мастеру: +7 (705) 553-53-32
          </a>
        </div>
      </div>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Наши услуги</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {seoData.services.slice(0, 6).map((service) => (
            <div key={service.id} className="bg-card p-6 rounded-xl border shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-4">{service.description}</p>
              <Link 
                to={`/uslugi/${service.id}/medeuskij`} 
                className="text-primary font-semibold hover:underline"
              >
                Подробнее →
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-muted/30 p-12 rounded-3xl mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Обслуживаем все районы Алматы</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {seoData.districts.map((district) => (
            <Link 
              key={district.id}
              to={`/uslugi/vyzov-santehnika/${district.id}`}
              className="p-4 bg-card rounded-lg border text-center font-medium hover:border-primary hover:text-primary transition-all"
            >
              {district.name}
            </Link>
          ))}
        </div>
      </section>

      <section className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-6">Почему выбирают нас?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
              <span className="text-primary font-bold">15+</span>
            </div>
            <div>
              <h4 className="font-bold">Лет опыта</h4>
              <p className="text-sm text-muted-foreground">Тысячи выполненных заказов и довольных клиентов по всему городу.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
              <span className="text-primary font-bold">24/7</span>
            </div>
            <div>
              <h4 className="font-bold">Круглосуточно</h4>
              <p className="text-sm text-muted-foreground">Приедем в любое время дня и ночи, особенно при аварийных ситуациях.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;

