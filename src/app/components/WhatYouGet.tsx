import { FileCheck, Scale, Shield, TrendingUp } from "lucide-react";

export function WhatYouGet() {
  const conditions = [
    {
      icon: FileCheck,
      title: "Слова отсутствуют в 4 нормативных словарях",
      description: ""
    },
    {
      icon: Shield,
      title: "Они не защищены как товарный знак",
      description: ""
    },
    {
      icon: Scale,
      title: "Они используются в рекламе, на сайте, вывеске или в материалах для клиентов",
      description: ""
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 max-w-[1240px]">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#002D62] mb-6 leading-tight">
            Когда иностранные слова становятся риском для бизнеса
          </h2>
          <p className="text-xl text-gray-600">
            Проверка нужна особенно срочно, если одновременно есть одно или несколько условий:
          </p>
        </div>

        {/* Conditions Grid */}
        <div className="grid sm:grid-cols-3 gap-6 mb-8">
          {conditions.map((condition, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-6 lg:p-8 hover:shadow-lg hover:border-[#D4AF37]/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-[#002D62] flex items-center justify-center mb-6">
                <condition.icon className="w-6 h-6 text-white" strokeWidth={2} />
              </div>
              <h3 className="text-lg font-semibold text-gray-700 leading-snug">
                {condition.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Bottom text */}
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-base text-gray-600 font-medium">
            Именно по этой логике мы и проводим проверку.
          </p>
        </div>
      </div>
    </section>
  );
}