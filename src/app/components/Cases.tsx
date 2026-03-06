import { ArrowRight } from "lucide-react";

export function Cases() {
  const cases = [
    {
      industry: "Салон красоты",
      image: "https://images.unsplash.com/photo-1611211235015-e2e3a7d09e97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBzYWxvbiUyMGludGVyaW9yJTIwbW9kZXJufGVufDF8fHx8MTc3MTY5NDk0MXww&ixlib=rb-4.1.0&q=80&w=1080",
      problem: "На вывеске и в рекламе — \"Beauty Lab\". Владелец боялся перевода бренда и затрат на переделку",
      action: "Проверили обозначение по реестрам, подобрали классы МКТУ и зарегистрировали комбинированный товарный знак",
      result: "Сохранили узнаваемость и название. Стоимость услуг: 49 500 ₽ + госпошлины. Переделка вывески не понадобилась",
      tag: "Защита от штрафов"
    },
    {
      industry: "Сеть кофеен",
      image: "https://images.unsplash.com/photo-1642647916129-3909c75c0267?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBzaG9wJTIwY2FmZSUyMGludGVyaW9yfGVufDF8fHx8MTc3MTczNzg5OHww&ixlib=rb-4.1.0&q=80&w=1080",
      problem: "Перед \"быстрым переводом\" названия владелец мог попасть на чужой товарный знак и судебные претензии",
      action: "Сделали проверку по реестрам, нашли риск сходства и предложили безопасную стратегию обозначения + регистрацию",
      result: "Избежали конфликта с правообладателем и сохранили бренд на 8 точках. Дальше — регистрация под ключ",
      tag: "Защита от копий"
    },
    {
      industry: "Производитель / упаковка",
      image: "https://images.unsplash.com/photo-1585144860131-245d551c77f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjBzaG9wcGluZyUyMGVjb21tZXJjZSUyMGJ1c2luZXNzfGVufDF8fHx8MTc3MTY5NDczOHww&ixlib=rb-4.1.0&q=80&w=1080",
      problem: "На этикетках и сайте много англоязычных описаний — риск претензий и переделки партии",
      action: "Дали чек‑лист, что обязательно дублировать на русском (включая состав/характеристики), и какие элементы стоит закрыть товарным знаком",
      result: "Снизили риск штрафов и срочной переделки упаковки. Подготовили стратегию защиты бренда и контента",
      tag: "Снижение рисков"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 max-w-[1240px]">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#002D62] mb-6 leading-tight">
            Реальные кейсы клиентов
          </h2>
          <p className="text-xl text-gray-600">
            Как мы снизили риски, сохранили узнаваемость и сэкономили бюджеты на переделках
          </p>
        </div>

        {/* Cases Grid */}
        <div className="space-y-6">
          {cases.map((caseItem, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <div className="grid lg:grid-cols-12">
                {/* Image */}
                <div className="lg:col-span-4">
                  <img
                    src={caseItem.image}
                    alt={caseItem.industry}
                    className="w-full h-64 lg:h-full object-cover"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src =
                        "https://images.unsplash.com/photo-1553877522-43269d4ea984?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080";
                    }}
                  />
                </div>

                {/* Content */}
                <div className="lg:col-span-8 p-6 lg:p-10">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 lg:mb-8 pb-6 border-b border-gray-100">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#002D62] flex items-center justify-center text-white font-bold">
                        {index + 1}
                      </div>
                      <h3 className="text-2xl font-semibold text-[#002D62]">
                        {caseItem.industry}
                      </h3>
                    </div>
                    <div className="inline-block px-4 py-2 bg-[#D4AF37]/10 border border-[#D4AF37]/20 rounded-full">
                      <span className="text-sm font-medium text-[#D4AF37]">{caseItem.tag}</span>
                    </div>
                  </div>

                  {/* Content Grid */}
                  <div className="space-y-6">
                    {/* Problem */}
                    <div>
                      <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
                        Проблема
                      </div>
                      <p className="text-base text-gray-700 leading-relaxed">
                        {caseItem.problem}
                      </p>
                    </div>

                    {/* Action */}
                    <div>
                      <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
                        Решение
                      </div>
                      <p className="text-base text-gray-700 leading-relaxed">
                        {caseItem.action}
                      </p>
                    </div>

                    {/* Result */}
                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                      <div className="text-sm font-semibold text-[#002D62] uppercase tracking-wide mb-3">
                        Результат
                      </div>
                      <p className="text-base text-gray-700 leading-relaxed font-medium">
                        {caseItem.result}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}