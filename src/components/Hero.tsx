import { Phone } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[600px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero/master-working-v2.png')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/90 via-[#0a1628]/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">
        <div className="max-w-xl">
          <div className="inline-block bg-[#0095DA] text-white text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            ⚡ Выезд и осмотр мастера 5000 тенге
          </div>

          <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight mb-4">
            Сантехник в Алматы
            <br />
            <span className="text-[#4ADE80]">за 30 минут</span>
          </h1>

          <p className="text-lg text-gray-300 mb-8 max-w-md">
            Профессиональные сантехнические услуги с гарантией 1 месяц. Работаем во всех районах Алматы 24/7. Опыт более 15 лет.
          </p>

          <a
            href="tel:+77055535332"
            className="inline-flex items-center gap-3 bg-[#4ADE80] hover:bg-[#3dca72] text-gray-900 px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 shadow-lg shadow-[#4ADE80]/30"
          >
            <Phone size={22} />
            Вызвать мастера
          </a>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap gap-8 mt-12">
          {[
            { value: "1000+", label: "Довольных клиентов" },
            { value: "10", label: "Лет опыта" },
            { value: "24/7", label: "Работаем" },
            { value: "4.9", label: "Рейтинг" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-extrabold text-[#4ADE80]">{stat.value}</div>
              <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
