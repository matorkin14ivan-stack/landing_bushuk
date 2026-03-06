import { Check, Zap, Shield } from "lucide-react";

export function Pricing() {
  const scrollToForm = () => {
    document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
  };

  const plans = [
    {
      name: "Подача заявки",
      price: "15 000 ₽",
      note: "Без гарантий (редко используем — когда обозначение очень уникальное)",
      badge: "Эконом",
      highlight: false,
      icon: Shield,
      features: [
        "Предварительная проверка обозначения",
        "Подготовка и подача заявки",
        "Рекомендации по безопасному использованию на время рассмотрения",
      ],
    },
    {
      name: "Регистрация под ключ",
      price: "49 500 ₽",
      note: "+ госпошлины (рассчитываем заранее)",
      badge: "Хит",
      highlight: true,
      icon: Shield,
      features: [
        "Стратегия МКТУ: не переплатить за лишнее",
        "Подача + сопровождение + ответы на запросы",
        "Гарантии: письма согласия без лимита / палата / переподача (по ситуации)",
      ],
    },
    {
      name: "Ускоренная регистрация",
      price: "75 000 ₽",
      note: "+ госпошлины и доп. пошлина за ускорение",
      badge: "Быстро",
      highlight: false,
      icon: Zap,
      features: [
        "Ориентир по срокам: 2–4 месяца",
        "Приоритетное рассмотрение",
        "Подходит, когда нельзя ждать и бренд уже в обороте",
      ],
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 max-w-[1240px]">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#002D62] mb-6 leading-tight">
            Пакеты и цены
          </h2>
          <p className="text-xl text-gray-600">
            Прозрачно: стоимость услуг отдельно от госпошлин. Госпошлины зависят от классов МКТУ и позиций.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {plans.map((p, idx) => (
            <div
              key={idx}
              className={`rounded-3xl border p-7 md:p-8 bg-white transition-all duration-300 ${
                p.highlight
                  ? "border-[#D4AF37] shadow-xl"
                  : "border-gray-200 hover:shadow-lg"
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-50 border border-gray-200 text-gray-700 text-sm font-medium">
                    {p.badge}
                  </div>
                  <h3 className="mt-4 text-2xl font-semibold text-[#002D62]">{p.name}</h3>
                  <p className="mt-2 text-sm text-gray-600">{p.note}</p>
                </div>
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${p.highlight ? "bg-[#D4AF37]/15" : "bg-[#002D62]/10"}`}>
                  <p.icon className={`w-6 h-6 ${p.highlight ? "text-[#D4AF37]" : "text-[#002D62]"}`} />
                </div>
              </div>

              <div className="mt-6">
                <div className="text-4xl font-extrabold text-[#002D62]">{p.price}</div>
              </div>

              <ul className="mt-6 space-y-3">
                {p.features.map((f, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <div className="w-6 h-6 rounded-full bg-[#50C878]/10 border border-[#50C878]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-[#50C878]" />
                    </div>
                    <span className="text-gray-700">{f}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={scrollToForm}
                className={`mt-8 w-full px-6 py-4 rounded-2xl font-semibold transition-all duration-300 ${
                  p.highlight
                    ? "bg-[#D4AF37] text-[#002D62] hover:brightness-95"
                    : "bg-[#002D62] text-white hover:bg-[#003870]"
                }`}
              >
                Выбрать пакет
              </button>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm text-gray-500 max-w-3xl mx-auto">
            Мы сначала считаем госпошлины и риски, а потом вы принимаете решение. Никаких сюрпризов «после звонка».
          </p>
        </div>
      </div>
    </section>
  );
}
