import { Shield, CheckCircle, FileText } from "lucide-react";

export function HeroVersionB() {
  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const benefits = [
    "Узнаете риски штрафов по новому закону до 500 000 ₽",
    "Получите готовый план: переводить, менять или регистрировать",
    "Защитите бренд законно и сохраните узнаваемость"
  ];

  return (
    <section className="relative pt-28 sm:pt-32 pb-16 sm:pb-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden">
      {/* Subtle Background Grid - reduced opacity */}
      <div className="absolute inset-0 opacity-[0.015]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-b" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#002D62" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-b)" />
        </svg>
      </div>

      {/* Abstract Legal-Tech Background - Right Side */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large geometric layers */}
        <div className="absolute right-0 top-0 w-[700px] h-full opacity-[0.03]">
          {/* Layer 1 - Shield shape */}
          <svg 
            className="absolute top-[10%] right-[5%]" 
            width="400" 
            height="500" 
            viewBox="0 0 400 500" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M200 20 L360 80 L360 260 C360 340 300 400 200 480 C100 400 40 340 40 260 L40 80 Z" 
              stroke="#002D62" 
              strokeWidth="3" 
              fill="url(#shield-gradient)"
              opacity="0.5"
            />
            <defs>
              <linearGradient id="shield-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#002D62" stopOpacity="0.1" />
                <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.1" />
              </linearGradient>
            </defs>
          </svg>

          {/* Layer 2 - Document stack */}
          <svg 
            className="absolute top-[30%] right-[15%]" 
            width="300" 
            height="350" 
            viewBox="0 0 300 350" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Document 1 */}
            <rect x="30" y="20" width="240" height="300" rx="12" stroke="#002D62" strokeWidth="2" fill="white" fillOpacity="0.3"/>
            <line x1="60" y1="70" x2="240" y2="70" stroke="#002D62" strokeWidth="2" opacity="0.5"/>
            <line x1="60" y1="120" x2="240" y2="120" stroke="#002D62" strokeWidth="2" opacity="0.5"/>
            <line x1="60" y1="170" x2="200" y2="170" stroke="#002D62" strokeWidth="2" opacity="0.5"/>
            
            {/* Document 2 - offset */}
            <rect x="20" y="10" width="240" height="300" rx="12" stroke="#D4AF37" strokeWidth="2" fill="none" opacity="0.4"/>
          </svg>

          {/* Layer 3 - Concentric circles (seal/stamp motif) */}
          <svg 
            className="absolute top-[60%] right-[8%]" 
            width="250" 
            height="250" 
            viewBox="0 0 250 250" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="125" cy="125" r="100" stroke="#002D62" strokeWidth="2" opacity="0.3"/>
            <circle cx="125" cy="125" r="75" stroke="#D4AF37" strokeWidth="2" opacity="0.4"/>
            <circle cx="125" cy="125" r="50" stroke="#002D62" strokeWidth="2" opacity="0.3"/>
            {/* Star in center */}
            <path d="M125 85 L135 115 L165 115 L142 133 L152 163 L125 145 L98 163 L108 133 L85 115 L115 115 Z" 
                  fill="#D4AF37" opacity="0.2"/>
          </svg>
        </div>

        {/* Gradient overlay to fade into content */}
        <div className="absolute right-0 top-0 bottom-0 w-[60%] bg-gradient-to-l from-transparent via-white/60 to-white"></div>

        {/* Small decorative elements scattered */}
        <div className="absolute top-[20%] left-[15%] opacity-[0.02]">
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
            <rect x="10" y="10" width="60" height="60" rx="6" stroke="#002D62" strokeWidth="2" transform="rotate(15 40 40)"/>
          </svg>
        </div>

        <div className="absolute bottom-[25%] left-[8%] opacity-[0.02]">
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
            <circle cx="30" cy="30" r="25" stroke="#D4AF37" strokeWidth="2"/>
          </svg>
        </div>

        {/* Connecting lines - very subtle */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.01]" xmlns="http://www.w3.org/2000/svg">
          <line x1="30%" y1="30%" x2="70%" y2="20%" stroke="#002D62" strokeWidth="1"/>
          <line x1="25%" y1="60%" x2="65%" y2="70%" stroke="#002D62" strokeWidth="1"/>
          <line x1="70%" y1="40%" x2="75%" y2="80%" stroke="#D4AF37" strokeWidth="1"/>
        </svg>
      </div>

      {/* Radial glows for depth */}
      <div className="absolute top-[20%] right-[15%] w-[600px] h-[600px] bg-[#002D62] rounded-full opacity-[0.02] blur-[150px] pointer-events-none" />
      <div className="absolute top-1/2 right-[10%] w-[500px] h-[500px] bg-[#D4AF37] rounded-full opacity-[0.025] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[20%] w-[400px] h-[400px] bg-[#002D62] rounded-full opacity-[0.015] blur-[100px] pointer-events-none" />
      
      {/* Left side accent */}
      <div className="absolute bottom-0 left-[5%] w-80 h-80 bg-[#D4AF37] rounded-full opacity-[0.015] blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 max-w-[1240px] relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-7 space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full shadow-sm">
              <div className="w-2 h-2 rounded-full bg-[#D4AF37]"></div>
              <span className="text-sm font-medium text-gray-700">
                Закон 274-ФЗ действует с 01.09.2024
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#002D62] leading-tight">
              Название на латинице?
              <br />
              <span className="text-[#D4AF37]">Проверьте риски</span>
              <br />
              <span className="text-3xl sm:text-4xl lg:text-5xl">до штрафа в 500 000 ₽</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed max-w-2xl">
              Бесплатная проверка названия/сайта на иностранные слова + персональные рекомендации: 
              переводить, менять или зарегистрировать товарный знак
            </p>

            {/* Benefits List */}
            <div className="space-y-4 bg-white/60 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 lg:p-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#002D62] flex items-center justify-center mt-0.5">
                    <CheckCircle className="w-4 h-4 text-white" strokeWidth={2.5} />
                  </div>
                  <p className="text-base lg:text-lg text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToForm}
                className="px-8 py-4 bg-[#002D62] text-white text-lg font-semibold rounded-xl hover:bg-[#003870] transition-all duration-300 hover:shadow-xl hover:scale-105 active:scale-95"
              >
                Получить бесплатную проверку
              </button>
              <button
                onClick={scrollToForm}
                className="px-8 py-4 bg-white border-2 border-[#002D62] text-[#002D62] text-lg font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300"
              >
                Узнать подробнее
              </button>
            </div>

            {/* Trust Indicator */}
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-[#002D62] to-[#003870] border-2 border-white flex items-center justify-center text-white text-xs font-bold">
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <p>
                <span className="font-semibold text-[#002D62]">120+ компаний</span> защитили свои названия
              </p>
            </div>
          </div>

          {/* Right Column - Trust Card */}
          <div className="lg:col-span-5">
            <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300 relative backdrop-blur-sm">
              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#D4AF37]/10 to-transparent rounded-tr-3xl"></div>
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-[#002D62] flex items-center justify-center mb-6">
                  <Shield className="w-8 h-8 text-white" strokeWidth={2} />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-[#002D62] mb-4">
                  Почему это важно сейчас?
                </h3>

                {/* Content */}
                <div className="space-y-4 mb-6">
                  <div className="flex gap-3 items-start">
                    <div className="flex-shrink-0 w-2 h-2 rounded-full bg-[#D4AF37] mt-2"></div>
                    <p className="text-gray-700">
                      <span className="font-semibold">С 1 марта 2026</span> — штрафы за иностранные слова без перевода
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-2 h-2 rounded-full bg-[#D4AF37] mt-2"></div>
                    <p className="text-gray-700">
                      <span className="font-semibold">Товарный знак</span> — единственный законный способ сохранить латиницу
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-2 h-2 rounded-full bg-[#D4AF37] mt-2"></div>
                    <p className="text-gray-700">
                      <span className="font-semibold">Без действий</span> — риск проверки, штрафов и требований изменить вывеску
                    </p>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 pt-6 border-t border-gray-200">
                  <div>
                    <div className="text-3xl font-bold text-[#002D62]">500k ₽</div>
                    <div className="text-sm text-gray-600">Макс. штраф</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-[#002D62]">6-8 мес</div>
                    <div className="text-sm text-gray-600">Регистрация</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}