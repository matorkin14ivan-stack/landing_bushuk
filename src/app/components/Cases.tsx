import { ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Cases() {
  const cases = [
    {
      industry: "Салон красоты",
      image: "https://images.unsplash.com/photo-1759142235060-3191ee596c81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBzYWxvbiUyMG1vZGVybiUyMGludGVyaW9yJTIwbHV4dXJ5fGVufDF8fHx8MTc3MzE1Mjk4OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      problem: "Название \"Beauty Lab\" на вывеске — риск штрафа и требования перевода",
      action: "Зарегистрировали товарный знак с комбинацией латиницы и символа. Получили право использовать оригинальное название",
      result: "Вывеска осталась неизменной. Расходы: 45 000 ₽. Экономия на переделке: от 200 000 ₽",
      tag: "Защита от штрафов"
    },
    {
      industry: "Сеть кофеен",
      image: "https://images.unsplash.com/photo-1751956066306-c5684cbcf385?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBzaG9wJTIwaW50ZXJpb3IlMjBjb3p5JTIwbW9kZXJufGVufDF8fHx8MTc3MzE1Mjk4OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      problem: "Конкурент зарегистрировал похожее название и требовал убрать вывески по всем точкам",
      action: "Провели экспертизу, доказали приоритет использования, зарегистрировали собственный товарный знак",
      result: "Суд на нашей стороне. Конкурент переименовался. 8 точек сохранили бренд",
      tag: "Защита от копий"
    },
    {
      industry: "Интернет-магазин",
      image: "https://images.unsplash.com/photo-1758272423131-1cc69e29357a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjBzaG9wcGluZyUyMGxhcHRvcCUyMGVjb21tZXJjZXxlbnwxfHx8fDE3NzMxMTg3OTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      problem: "Название из словаря, невозможность выделиться и защититься от подделок",
      action: "Разработали уникальное графическое решение, зарегистрировали комбинированный знак",
      result: "Закрыли 3 поддельных аккаунта в соцсетях. Повысили узнаваемость на 40%",
      tag: "Укрепление бренда"
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
            Как мы помогли бизнесу избежать убытков и защитить репутацию
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
                  <ImageWithFallback
                    src={caseItem.image}
                    alt={caseItem.industry}
                    className="w-full h-64 lg:h-full object-cover"
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