import { Send, Search, FileText, Lightbulb } from "lucide-react";

export function HowWeCheck() {
  const steps = [
    {
      number: "1",
      icon: Send,
      title: "Вы отправляете сайт, фото вывески или название",
      description: ""
    },
    {
      number: "2",
      icon: Search,
      title: "Мы проверяем слова по 4 нормативным словарям и клиентским материалам",
      description: ""
    },
    {
      number: "3",
      icon: FileText,
      title: "Вы получаете разбор: что оставить, что перевести, что заменить, где высокий риск",
      description: ""
    },
    {
      number: "4",
      icon: Lightbulb,
      title: "Если нужно — подсказываем безопасный способ решения: правка, дублирование, замена или регистрация товарного знака",
      description: ""
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 max-w-[1240px]">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#002D62] mb-6 leading-tight">
            Как проходит проверка
          </h2>
        </div>

        {/* Steps */}
        <div className="max-w-5xl mx-auto space-y-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl p-6 lg:p-8 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  {/* Number Badge */}
                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-[#002D62] flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">{step.number}</span>
                  </div>
                  
                  {/* Icon */}
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center mt-2">
                    <Icon className="w-6 h-6 text-[#D4AF37]" strokeWidth={2} />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 pt-2">
                    <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
                      {step.title}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom text */}
        <div className="max-w-3xl mx-auto text-center mt-12">
          <p className="text-xl font-semibold text-[#002D62] bg-gray-50 border border-gray-200 rounded-2xl p-6 inline-block">
            Сначала диагностика. Потом решение. Не наоборот.
          </p>
        </div>
      </div>
    </section>
  );
}
