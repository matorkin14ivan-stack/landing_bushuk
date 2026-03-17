import { AlertTriangle, TrendingDown, Users } from "lucide-react";

export function Problem() {
  const risks = [
    {
      icon: TrendingDown,
      title: "200 000 ₽+",
      description: "на переделку вывески и табличек"
    },
    {
      icon: AlertTriangle,
      title: "до 500 000 ₽",
      description: "штрафы в рекламе для юрлиц"
    },
    {
      icon: Users,
      title: "Потеря узнаваемости",
      description: "в спешке \"перевести\" бренд и потерять клиентов"
    }
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section title */}
        <div className="text-center mb-16">
          <h2 className="font-['Montserrat'] font-bold text-4xl md:text-5xl text-[#002D62] mb-6">
            Почему это важно
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#D4AF37] to-[#50C878] mx-auto rounded-full" />
        </div>

        {/* Main content */}
        <div className="space-y-12">
          {/* Problem statement */}
          <div className="backdrop-blur-sm bg-white/80 border border-gray-200 rounded-3xl p-8 md:p-12 shadow-xl">
            <p className="font-['Montserrat'] text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
              По новым правилам придётся добавлять русский вариант, причём он должен быть главным. 
              Если у вас на фасаде, в меню, на сайте или в баннерах есть <span className="font-semibold text-[#002D62]">Sale / Open / Coffee / Beauty / Studio</span> и другие спорные слова — вы рискуете:
            </p>

            {/* Risk cards */}
            <div className="grid md:grid-cols-3 gap-6 mt-10">
              {risks.map((risk, index) => (
                <div 
                  key={index}
                  className="group relative backdrop-blur-md bg-gradient-to-br from-white/90 to-gray-50/90 border border-gray-200/50 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Icon */}
                  <div className="flex items-center justify-center w-14 h-14 rounded-full bg-red-50 text-red-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                    <risk.icon className="w-7 h-7" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="font-['Playfair_Display'] text-2xl text-[#002D62] mb-2">
                    {risk.title}
                  </h3>
                  <p className="font-['Montserrat'] text-gray-600 leading-relaxed">
                    {risk.description}
                  </p>

                  {/* Hover effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
            </div>
          </div>

          {/* Solution teaser */}
          <div className="relative backdrop-blur-md bg-gradient-to-br from-[#002D62] to-[#003870] rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <h3 className="font-['Playfair_Display'] text-3xl md:text-4xl text-white mb-6">
                Есть нормальный выход:
              </h3>
              <p className="font-['Lora'] text-2xl md:text-3xl text-[#D4AF37] mb-6 italic">
                Зарегистрировать название как товарный знак
              </p>
              
              <div className="space-y-4 text-white/90 font-['Montserrat'] text-lg leading-relaxed">
                <p>
                  Тогда вы сможете легально использовать бренд в оригинальном написании (в том числе на английском) — 
                  <span className="text-[#50C878] font-semibold"> без "перевода названия" и без ребрендинга</span>.
                </p>
                <p className="font-['Montserrat'] text-xl font-semibold text-[#D4AF37]">
                  По деньгам это обычно в 5–10 раз дешевле, чем менять вывеску.
                </p>
              </div>

              <div className="mt-8 p-6 bg-white/10 border border-white/20 rounded-2xl backdrop-blur-sm">
                <p className="font-['Montserrat'] text-white/80">
                  Мы поможем понять, какие слова нужно перевести/заменить, а что можно оставить законно — 
                  и где выгоднее закрыться товарным знаком.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}