import { FileText, ListChecks, ShieldCheck, Clock, AlertTriangle } from "lucide-react";

export function WhatYouGet() {
  const items = [
    {
      icon: ListChecks,
      title: "Список риск‑слов и мест на сайте",
      text: "Покажем, где именно встречаются спорные слова: страницы, блоки, кнопки, баннеры, карточки товаров."
    },
    {
      icon: FileText,
      title: "План действий: перевести / заменить / убрать",
      text: "Дадим конкретные формулировки и варианты, чтобы вы могли быстро привести материалы в порядок."
    },
    {
      icon: ShieldCheck,
      title: "Что выгоднее закрыть товарным знаком",
      text: "Выделим потенциальные обозначения для регистрации и подскажем стратегию защиты бренда."
    },
    {
      icon: AlertTriangle,
      title: "Проверка риска «перевода»",
      text: "Перед тем как «переводиться на русский», проверяем реестры — чтобы не попасть на чужой товарный знак и претензии."
    },
    {
      icon: Clock,
      title: "Срок — 24 часа",
      text: "После заявки обычно даём ответ в течение суток и согласуем удобный формат связи."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 max-w-[1240px]">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#002D62] mb-6 leading-tight">
            Что вы получите после проверки
          </h2>
          <p className="text-xl text-gray-600">
            Не «консультацию в общем», а понятный результат, который можно сразу внедрять
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#002D62]/10 border border-[#002D62]/10 flex items-center justify-center mb-5">
                <it.icon className="w-6 h-6 text-[#002D62]" />
              </div>
              <h3 className="text-xl font-semibold text-[#002D62] mb-3">{it.title}</h3>
              <p className="text-base text-gray-600 leading-relaxed">{it.text}</p>
            </div>
          ))}

          {/* Mini report preview */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 lg:col-span-3">
            <div className="flex flex-col lg:flex-row gap-6 items-start">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-[#D4AF37] text-sm font-medium mb-4">
                  Пример результата
                </div>
                <h3 className="text-2xl font-semibold text-[#002D62] mb-3">Мини‑отчёт на 1 страницу</h3>
                <p className="text-gray-600 leading-relaxed">
                  Список спорных слов → где встречается → что делать (перевести/заменить/убрать) → что закрыть товарным знаком.
                </p>
              </div>
              <div className="w-full lg:w-[420px]">
                <div className="rounded-2xl border border-gray-200 bg-gradient-to-br from-gray-50 to-white p-5">
                  <div className="text-xs text-gray-500 mb-3">Фрагмент отчёта</div>
                  <div className="space-y-3">
                    {[1, 2, 3].map((r) => (
                      <div key={r} className="flex items-center justify-between gap-3">
                        <div className="h-3 bg-gray-200 rounded w-40" />
                        <div className="h-3 bg-[#D4AF37]/30 rounded w-24" />
                      </div>
                    ))}
                    <div className="h-3 bg-gray-200 rounded w-56" />
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
