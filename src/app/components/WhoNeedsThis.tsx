import { Scissors, Coffee, ShoppingBag, Smartphone, TrendingUp } from "lucide-react";

export function WhoNeedsThis() {
  const industries = [
    {
      icon: Scissors,
      title: "Салоны красоты, барбершопы, студии услуг"
    },
    {
      icon: Coffee,
      title: "Кафе, кофейни, магазины, пункты выдачи"
    },
    {
      icon: ShoppingBag,
      title: "Производители, бренды косметики/одежды/товаров"
    },
    {
      icon: Smartphone,
      title: "Онлайн-сервисы и приложения"
    },
    {
      icon: TrendingUp,
      title: "Любой бизнес, где название — это половина продаж"
    }
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section title */}
        <div className="text-center mb-16">
          <h2 className="font-['Montserrat'] font-bold text-4xl md:text-5xl text-[#002D62] mb-6">
            Для кого это особенно актуально
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#D4AF37] to-[#50C878] mx-auto rounded-full" />
        </div>

        {/* Industries grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="group relative backdrop-blur-sm bg-white border border-gray-200/50 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Gradient background on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#D4AF37]/5 to-[#50C878]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10 flex items-start gap-4">
                {/* Icon */}
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#002D62] to-[#003870] flex items-center justify-center text-[#D4AF37] group-hover:scale-110 transition-transform duration-300">
                  <industry.icon className="w-6 h-6" strokeWidth={2} />
                </div>
                
                {/* Text */}
                <p className="font-['Montserrat'] text-base md:text-lg text-gray-700 leading-relaxed pt-2">
                  {industry.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Key message */}
        <div className="relative backdrop-blur-lg bg-gradient-to-br from-[#002D62] via-[#003870] to-[#002D62] rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#50C878]/10 rounded-full blur-3xl" />
          
          <div className="relative z-10 text-center">
            <p className="font-['Montserrat'] font-bold text-3xl md:text-4xl text-white mb-6 leading-tight">
              Если клиент выбирает вас по имени —
            </p>
            <p className="font-['Lora'] text-3xl md:text-4xl text-[#D4AF37] leading-tight italic">
              имя нужно защищать
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
