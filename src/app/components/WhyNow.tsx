import { Clock, AlertCircle, TrendingDown, CheckCircle } from "lucide-react";

export function WhyNow() {
  const urgencyPoints = [
    {
      icon: AlertCircle,
      text: "Пока вы думаете, кто-то может подать заявку на похожее название"
    },
    {
      icon: Clock,
      text: "А когда сроки поджимают, вы принимаете худшие решения: \"давайте быстро поменяем\""
    },
    {
      icon: TrendingDown,
      text: "В спешке чаще всего теряют бренд, узнаваемость и деньги"
    }
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section title */}
        <div className="text-center mb-16">
          <h2 className="font-['Montserrat'] font-bold text-4xl md:text-5xl text-[#002D62] mb-6">
            Почему вам стоит сделать это сейчас
          </h2>
          <p className="font-['Lora'] text-2xl md:text-3xl text-red-600 mb-6 italic">
            Потому что дальше будет дороже
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-[#D4AF37] mx-auto rounded-full" />
        </div>

        {/* Urgency cards */}
        <div className="space-y-6 mb-12">
          {urgencyPoints.map((point, index) => (
            <div
              key={index}
              className="group backdrop-blur-sm bg-white border border-red-100 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-red-200"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-red-50 flex items-center justify-center text-red-600 group-hover:scale-110 transition-transform duration-300">
                  <point.icon className="w-6 h-6" />
                </div>
                <p className="font-['Montserrat'] text-lg md:text-xl text-gray-700 leading-relaxed pt-2">
                  {point.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Solution approach */}
        <div className="relative backdrop-blur-lg bg-gradient-to-br from-[#002D62] via-[#003870] to-[#002D62] rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden">
          {/* Background decorations */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-[#50C878]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-3xl" />
          
          <div className="relative z-10">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-[#D4AF37] to-[#E5C158] flex items-center justify-center shadow-lg">
                <CheckCircle className="w-8 h-8 text-[#002D62]" strokeWidth={2.5} />
              </div>
              <div>
                <h3 className="font-['Montserrat'] font-bold text-3xl md:text-4xl text-white mb-4">
                  Правильная стратегия:
                </h3>
              </div>
            </div>

            <div className="space-y-4 pl-0 md:pl-20">
              <div className="backdrop-blur-sm bg-white/10 border border-white/20 rounded-2xl p-6">
                <p className="font-['Montserrat'] font-bold text-xl md:text-2xl text-[#D4AF37] mb-3">
                  1. Сначала — защита названия
                </p>
                <p className="font-['Montserrat'] text-lg text-white/80">
                  Регистрируем товарный знак и закрепляем за вами право на использование бренда
                </p>
              </div>

              <div className="backdrop-blur-sm bg-white/10 border border-white/20 rounded-2xl p-6">
                <p className="font-['Montserrat'] font-bold text-xl md:text-2xl text-[#50C878] mb-3">
                  2. Потом — спокойно приводим оформление в порядок
                </p>
                <p className="font-['Montserrat'] text-lg text-white/80">
                  Без паники и лишних затрат, с пониманием что и как можно использовать
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
