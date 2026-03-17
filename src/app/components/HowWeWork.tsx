import { Search, FileText, Send, Award } from "lucide-react";

export function HowWeWork() {
  const steps = [
    {
      icon: Search,
      number: "1",
      title: "Экспресс-проверка названия",
      description: "Скажем, какие риски, что мешает, какие варианты есть."
    },
    {
      icon: FileText,
      number: "2",
      title: "Подбираем классы МКТУ под ваш бизнес",
      description: "Чтобы знак защищал именно то, чем вы зарабатываете."
    },
    {
      icon: Send,
      number: "3",
      title: "Готовим заявку и подаём в Роспатент",
      description: "Берём на себя формальности и переписку по запросам экспертизы."
    },
    {
      icon: Award,
      number: "4",
      title: "Доводим до регистрации",
      description: "Вы получаете свидетельство и понятные рекомендации: как использовать знак корректно."
    }
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section title */}
        <div className="text-center mb-16">
          <h2 className="font-['Montserrat'] font-bold text-4xl md:text-5xl text-[#002D62] mb-6">
            Как мы работаем — и почему это удобно
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#D4AF37] to-[#50C878] mx-auto rounded-full" />
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative"
            >
              {/* Card */}
              <div className="relative backdrop-blur-md bg-white border border-gray-200/50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full">
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#002D62]/5 to-[#D4AF37]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  {/* Number badge */}
                  <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#E5C158] flex items-center justify-center shadow-lg">
                    <span className="font-['Montserrat'] font-black text-2xl text-[#002D62]">
                      {step.number}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-[#002D62] to-[#003870] text-[#D4AF37] mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="w-10 h-10" strokeWidth={2} />
                  </div>

                  {/* Content */}
                  <h3 className="font-['Montserrat'] font-bold text-2xl md:text-3xl text-[#002D62] mb-4 leading-tight">
                    {step.title}
                  </h3>
                  <p className="font-['Montserrat'] text-lg text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow connector (hidden on mobile, shown between cards on desktop) */}
                {index < steps.length - 1 && index % 2 === 0 && (
                  <div className="hidden lg:block absolute top-1/2 -right-6 xl:-right-8 w-12 xl:w-16 h-0.5 bg-gradient-to-r from-[#D4AF37] to-transparent">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 border-t-2 border-r-2 border-[#D4AF37] rotate-45" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA hint */}
        <div className="mt-16 text-center">
          <div className="inline-block backdrop-blur-md bg-gradient-to-r from-[#002D62]/10 to-[#50C878]/10 border border-[#D4AF37]/30 rounded-2xl px-8 py-6">
            <p className="font-['Montserrat'] text-lg md:text-xl text-gray-700">
              Весь процесс занимает <span className="font-semibold text-[#002D62]">6-8 месяцев</span>, 
              но вашего участия требуется минимум — мы берём всё на себя
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
