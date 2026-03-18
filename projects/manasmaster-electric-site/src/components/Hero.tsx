import { Phone } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[650px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero_electrician.png')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a0505] via-[#1a0505]/80 to-[#1a0505]/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 w-full animate-fade-in">
        <div className="max-w-xl">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-semibold px-5 py-2 rounded-full mb-8 shadow-lg">
            <span className="flex h-2 w-2 rounded-full bg-[#E11D48] animate-pulse"></span>
            Выезд и осмотр мастера 5 000 ₸
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-6 tracking-tight">
            Электрик в Алматы
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E11D48] to-[#FB7185]">
              за 30 минут
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-lg leading-relaxed font-medium">
            Профессиональные услуги электрика с гарантией до 12 месяцев. Работаем во всех районах Алматы 24/7.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:+77055535332"
              className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#DC2626] to-[#E11D48] hover:from-[#B91C1C] hover:to-[#DC2626] text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all hover:scale-105 shadow-[0_8px_30px_rgba(220,38,38,0.4)] hover:shadow-[0_8px_30px_rgba(220,38,38,0.6)] animate-pulse btn-floating flex-1"
              style={{ animationDuration: '3s' }}
            >
              <Phone size={22} className="fill-white" />
              +7 (705) 553-53-32
            </a>
            <a
              href="tel:+77074791020"
              className="inline-flex items-center justify-center gap-3 bg-white text-[#DC2626] border-2 border-[#DC2626] hover:bg-red-50 px-8 py-4 rounded-2xl font-bold text-lg transition-all hover:scale-105 shadow-lg flex-1"
            >
              <Phone size={22} />
              +7 (707) 479-10-20
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-16 lg:mt-24 max-w-4xl animate-slide-up" style={{ animationDelay: '0.2s' }}>
          {[
            { value: "1500+", label: "Довольных клиентов" },
            { value: "12+", label: "Лет опыта" },
            { value: "24/7", label: "Срочный выезд" },
            { value: "5.0", label: "Средний рейтинг" },
          ].map((stat) => (
            <div key={stat.label} className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-center shadow-xl hover:-translate-y-1 transition-transform duration-300">
              <div className="text-3xl md:text-4xl font-extrabold text-white mb-1 group-hover:scale-110 transition-transform">
                {stat.value}
              </div>
              <div className="text-sm font-medium text-[#FB7185] uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
