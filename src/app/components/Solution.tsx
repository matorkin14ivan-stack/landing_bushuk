import { Shield, Lock, TrendingUp, Award } from "lucide-react";

export function Solution() {
  const benefits = [
    {
      icon: Shield,
      title: "Закрепить право на название",
      description: "и спокойно его использовать"
    },
    {
      icon: Lock,
      title: "Снизить риск принудительного",
      description: "\"переименования\""
    },
    {
      icon: Award,
      title: "Защититься от копий",
      description: "\"почти такое же\" название, логотип, аккаунт"
    },
    {
      icon: TrendingUp,
      title: "Повысить ценность бизнеса",
      description: "бренд становится активом, который можно продавать, лицензировать, франшизировать"
    }
  ];

  return (
    <section className="relative py-24 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section title */}
        <div className="text-center mb-16">
          <h2 className="font-['Montserrat'] font-bold text-4xl md:text-5xl text-[#002D62] mb-4">
            Товарный знак — это не «бумажка для юристов»
          </h2>
          <p className="font-['Lora'] text-2xl md:text-3xl text-[#D4AF37] mb-6 italic">
            Это ваш гарант не попасть на крупные расходы
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#D4AF37] to-[#50C878] mx-auto rounded-full" />
        </div>

        {/* Main content */}
        <div className="space-y-12">
          {/* Benefits grid */}
          <div>
            <h3 className="font-['Montserrat'] font-bold text-2xl md:text-3xl text-[#002D62] text-center mb-10">
              Зарегистрированный товарный знак помогает:
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="group relative backdrop-blur-md bg-gradient-to-br from-white to-gray-50 border border-gray-200/50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                >
                  {/* Background glow on hover */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#D4AF37]/10 to-[#50C878]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    {/* Icon with shield background */}
                    <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#002D62] to-[#003870] text-[#D4AF37] mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <benefit.icon className="w-8 h-8" strokeWidth={2} />
                    </div>
                    
                    {/* Content */}
                    <h4 className="font-['Montserrat'] font-bold text-xl md:text-2xl text-[#002D62] mb-3 leading-tight">
                      {benefit.title}
                    </h4>
                    <p className="font-['Montserrat'] text-gray-600 text-lg leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>

                  {/* Rising line decoration */}
                  <div className="absolute bottom-0 right-0 w-32 h-32 opacity-5 overflow-hidden rounded-br-3xl">
                    <svg viewBox="0 0 100 100" className="w-full h-full text-[#50C878]">
                      <path d="M 0 100 L 0 80 Q 30 50, 60 30 T 100 0 L 100 100 Z" fill="currentColor" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key message */}
          <div className="relative backdrop-blur-lg bg-gradient-to-br from-[#D4AF37] to-[#E5C158] rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            
            <div className="relative z-10 text-center">
              <h3 className="font-['Montserrat'] font-bold text-3xl md:text-4xl text-[#002D62] mb-4">
                И главное:
              </h3>
              <p className="font-['Montserrat'] text-xl md:text-2xl text-[#002D62] leading-relaxed max-w-3xl mx-auto">
                стоимость регистрации обычно <span className="font-bold">в разы ниже</span>, 
                чем переделка вывесок и ребрендинг.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
