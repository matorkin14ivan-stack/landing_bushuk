import { Shield, CheckCircle, FileText } from "lucide-react";

export function NewHero() {
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
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#002D62" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Abstract shapes for depth */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-[#002D62] rounded-full opacity-[0.02] blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D4AF37] rounded-full opacity-[0.02] blur-3xl" />

      <div className="container mx-auto px-4 max-w-[1240px] relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left content - 7 cols */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 border border-red-100 rounded-full">
              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-red-700">Закон 274-ФЗ действует с 01.09.2024</span>
            </div>

            {/* H1 */}
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-bold text-[#002D62] leading-[1.1] tracking-tight">
              Название на латинице?
              <br />
              <span className="text-[#D4AF37]">Проверьте риски</span>
              <br />
              <span className="text-3xl sm:text-4xl lg:text-5xl">до штрафа в 500 000 ₽</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              Бесплатная проверка названия/сайта на иностранные слова + персональные рекомендации: 
              переводить, менять или зарегистрировать товарный знак
            </p>

            {/* Benefits */}
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#002D62] flex items-center justify-center mt-0.5">
                    <CheckCircle className="w-4 h-4 text-white" strokeWidth={2.5} />
                  </div>
                  <p className="text-sm sm:text-base text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={scrollToForm}
                className="w-full sm:w-auto px-8 py-4 bg-[#002D62] text-white text-base font-semibold rounded-xl hover:bg-[#003870] transition-all duration-300 hover:shadow-lg"
              >
                Проверить название бесплатно
              </button>
              <button
                onClick={scrollToForm}
                className="w-full sm:w-auto px-8 py-4 bg-white text-[#002D62] text-base font-semibold rounded-xl border-2 border-[#002D62] hover:bg-gray-50 transition-all duration-300"
              >
                Получить список рисков
              </button>
            </div>
          </div>

          {/* Right - Trust block - 5 cols */}
          <div className="lg:col-span-5">
            <div className="bg-gray-50 border border-gray-200 rounded-3xl p-8 space-y-8">
              {/* Title */}
              <div className="flex items-center gap-3 pb-6 border-b border-gray-200">
                <div className="w-12 h-12 rounded-xl bg-[#002D62] flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" strokeWidth={2} />
                </div>
                <div>
                  <div className="font-semibold text-lg text-[#002D62]">
                    Проверяет юрист
                  </div>
                  <div className="text-sm text-gray-500">
                    Патентный поверенный РФ
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-4xl font-bold text-[#002D62] mb-2">12+</div>
                  <div className="text-sm text-gray-600">лет опыта в патентном праве</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#002D62] mb-2">850+</div>
                  <div className="text-sm text-gray-600">зарегистрированных знаков</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#002D62] mb-2">94%</div>
                  <div className="text-sm text-gray-600">успешных регистраций</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#002D62] mb-2">24ч</div>
                  <div className="text-sm text-gray-600">ответ после заявки</div>
                </div>
              </div>

              {/* Bottom note */}
              <div className="pt-6 border-t border-gray-200">
                <div className="flex items-start gap-3">
                  <FileText className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Проверку проводит дипломированный патентный поверенный, 
                    не менеджер отдела продаж
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}