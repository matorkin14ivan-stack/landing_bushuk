import { FileText, AlertCircle, Lightbulb, Shield, TrendingUp, FileCheck, Scale } from "lucide-react";

export function WhatYouGetAfterCheck() {
  const benefits = [
    {
      icon: FileCheck,
      title: "Анализ рисков по названию",
      description: "Проверим на соответствие закону о языке и на конфликты с чужими правами"
    },
    {
      icon: Scale,
      title: "Юридическая оценка",
      description: "Вероятность штрафа, требований переделки и сценарии защиты"
    },
    {
      icon: Shield,
      title: "Стратегия регистрации",
      description: "Подходящие классы МКТУ, варианты написания, прогноз по срокам"
    },
    {
      icon: TrendingUp,
      title: "План действий",
      description: "Что делать сейчас, чтобы избежать убытков и сохранить бренд"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 max-w-[1240px]">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#002D62] mb-6 leading-tight">
            Что вы получите после проверки
          </h2>
          <p className="text-xl text-gray-600">
            Подробный отчёт с конкретными рекомендациями, а не общие фразы
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-6 lg:p-8 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-[#002D62] flex items-center justify-center mb-6">
                <benefit.icon className="w-6 h-6 text-white" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-semibold text-[#002D62] mb-3">
                {benefit.title}
              </h3>
              <p className="text-base text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Example Report */}
        <div className="bg-white border border-gray-200 rounded-3xl p-6 lg:p-12">
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Left - Description */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-block px-4 py-2 bg-[#D4AF37]/10 border border-[#D4AF37]/20 rounded-full">
                <span className="text-sm font-medium text-[#D4AF37]">Пример отчёта</span>
              </div>
              
              <h3 className="text-3xl font-bold text-[#002D62] leading-tight">
                Получите развёрнутый анализ за 24 часа
              </h3>
              
              <p className="text-base text-gray-600 leading-relaxed">
                Отчёт включает юридический анализ, оценку рисков, сравнение с существующими 
                товарными знаками и пошаговый план регистрации.
              </p>

              <div className="pt-4">
                <button
                  onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-6 py-3 bg-[#002D62] text-white text-sm font-semibold rounded-xl hover:bg-[#003870] transition-all duration-300 w-full sm:w-auto"
                >
                  Проверить бесплатно
                </button>
              </div>
            </div>

            {/* Right - Mock Report Card */}
            <div className="lg:col-span-7">
              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 lg:p-8 space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between pb-4 border-b border-gray-200">
                  <div>
                    <div className="text-xs text-gray-500 mb-1">Отчёт по проверке</div>
                    <div className="font-semibold text-[#002D62]">ООО "Пример бренда"</div>
                  </div>
                  <div className="text-xs text-gray-500">15.02.2026</div>
                </div>

                {/* Risk level */}
                <div>
                  <div className="text-sm text-gray-500 mb-2">Уровень риска</div>
                  <div className="flex items-center gap-3">
                    <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-red-500 rounded-full" style={{ width: '65%' }} />
                    </div>
                    <span className="text-sm font-semibold text-red-600">Высокий</span>
                  </div>
                </div>

                {/* Key findings */}
                <div className="space-y-3">
                  <div className="text-sm font-medium text-gray-700">Ключевые находки:</div>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="text-red-500 mt-0.5">⚠</span>
                      <span>Иностранное слово без перевода</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="text-yellow-500 mt-0.5">⚠</span>
                      <span>Найдено 3 похожих товарных знака</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="text-green-500 mt-0.5">✓</span>
                      <span>Возможна регистрация с модификацией</span>
                    </div>
                  </div>
                </div>

                {/* Recommendations preview */}
                <div className="pt-4 border-t border-gray-200">
                  <div className="text-sm font-medium text-gray-700 mb-2">Рекомендации:</div>
                  <div className="bg-white border border-gray-200 rounded-xl p-4 space-y-2">
                    <div className="text-sm text-gray-600">
                      <span className="font-medium text-[#002D62]">1.</span> Зарегистрировать знак в классах 35, 41
                    </div>
                    <div className="text-sm text-gray-600">
                      <span className="font-medium text-[#002D62]">2.</span> Добавить кириллический элемент
                    </div>
                    <div className="text-sm text-gray-600">
                      <span className="font-medium text-[#002D62]">3.</span> Подать заявку до 15 марта
                    </div>
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