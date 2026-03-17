import { FileText, Package, Briefcase, Globe, Tag, MessageSquare, Store, Menu, Box } from "lucide-react";

export function RiskItems() {
  const items = [
    { icon: Briefcase, text: "Название компании" },
    { icon: Package, text: "Название продукта" },
    { icon: Tag, text: "Название услуги" },
    { icon: Globe, text: "Название сайта" },
    { icon: Store, text: "Название бренда" },
    { icon: MessageSquare, text: "Рекламные тексты" },
    { icon: Store, text: "Вывески" },
    { icon: Menu, text: "Меню и ценники" },
    { icon: Box, text: "Упаковку" }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 max-w-[1240px]">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#002D62] mb-6 leading-tight">
            Что именно мы проверяем
          </h2>
          <p className="text-xl text-gray-600">
            Под риск попадает не только вывеска. Проверять нужно всё, что видит клиент.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg hover:border-[#D4AF37]/30 transition-all duration-300 group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#002D62]/5 flex items-center justify-center group-hover:bg-[#002D62] transition-all duration-300">
                    <Icon className="w-6 h-6 text-[#002D62] group-hover:text-white transition-all duration-300" />
                  </div>
                  <p className="text-base font-semibold text-gray-700">{item.text}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom text */}
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-base text-gray-600 bg-gray-50 border border-gray-200 rounded-2xl p-6">
            Если спорное слово осталось в клиентских материалах, это может закончиться штрафом или срочной переделкой.
          </p>
        </div>
      </div>
    </section>
  );
}
