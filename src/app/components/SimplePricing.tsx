import { Check } from "lucide-react";

export function SimplePricing() {
  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const services = [
    "Предварительная проверка товарного знака",
    "Подготовка и подача заявки в Роспатент",
    "Ответы на запросы экспертизы",
    "Сопровождение до получения свидетельства",
    "Консультации на всех этапах"
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 max-w-[1240px]">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#002D62] mb-6 leading-tight">
              Стоимость услуг
            </h2>
            <p className="text-xl text-gray-600">
              Индивидуальный расчёт под ваш проект
            </p>
          </div>

          {/* Pricing Card */}
          <div className="bg-white border border-gray-200 rounded-3xl p-8 md:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left - Price */}
              <div className="text-center lg:text-left">
                <div className="inline-block px-4 py-2 bg-[#D4AF37]/10 border border-[#D4AF37]/20 rounded-full mb-6">
                  <span className="text-sm font-medium text-[#D4AF37]">Фиксированная цена</span>
                </div>
                
                <div className="mb-6">
                  <div className="flex items-baseline justify-center lg:justify-start gap-2 mb-3">
                    <span className="text-sm text-gray-500">от</span>
                    <span className="text-5xl md:text-6xl font-bold text-[#002D62]">25 000</span>
                    <span className="text-xl text-gray-600">₽</span>
                  </div>
                  <p className="text-base text-gray-600">
                    Точная стоимость зависит от количества классов МКТУ и сложности регистрации
                  </p>
                </div>

                <button
                  onClick={scrollToForm}
                  className="w-full lg:w-auto px-8 py-4 bg-[#002D62] text-white text-base font-semibold rounded-xl hover:bg-[#003870] transition-all duration-300 hover:shadow-lg"
                >
                  Рассчитать стоимость
                </button>
              </div>

              {/* Right - What's included */}
              <div>
                <h3 className="text-xl font-semibold text-[#002D62] mb-6">
                  Что входит в услугу:
                </h3>
                <div className="space-y-4">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#002D62] flex items-center justify-center mt-0.5">
                        <Check className="w-3 h-3 text-white" strokeWidth={3} />
                      </div>
                      <span className="text-base text-gray-700">{service}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-600">
                    <span className="font-medium text-gray-700">Важно:</span> Госпошлины Роспатента (от 16 000 ₽) оплачиваются отдельно. 
                    Бесплатная предварительная оценка стоимости после проверки названия.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom info */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500">
              Срок регистрации: 6-8 месяцев (стандартная процедура) или 4-5 месяцев (ускоренная)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
