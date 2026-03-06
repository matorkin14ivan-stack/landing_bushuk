import { HelpCircle, CheckCircle } from "lucide-react";
import { useState } from "react";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Почему все говорят про штрафы «до 500 000 ₽»?",
      answer: "Потому что если надпись/слово квалифицируют как рекламу, штрафы для юрлиц могут быть 100–500 тыс. ₽. Если это просто информация для ознакомления потребителей — санкции обычно ниже. Практика только формируется, поэтому важно заранее оценить риск и действовать по плану."
    },
    {
      question: "Можно ли оставить латиницу или английское название?",
      answer: "Часто — да, если правильно оформить русскую часть и/или защитить обозначение как товарный знак. Но важны детали: где именно используется название (вывеска, реклама, сайт, упаковка) и как оно оформлено. Мы подскажем безопасный вариант без ребрендинга."
    },
    {
      question: "Если товарный знак на стадии заявки — это уже «защита»?",
      answer: "Нет. Заявка — ещё не зарегистрированный товарный знак. До регистрации использование обозначения остаётся «на риск компании». Поэтому мы даём промежуточный сценарий: что сделать сейчас, пока идёт регистрация."
    },
    {
      question: "Можно ли просто «перевестись на русский» и забыть?",
      answer: "Иногда временный переход на русскую версию действительно снижает риск по «иностранным словам». Но делать это вслепую опасно: можно случайно попасть на чужой товарный знак и уже получить претензии/суды. Мы сначала проверяем реестры, потом рекомендуем быстрый безопасный вариант."
    },
    {
      question: "Этикетки, состав, меню, ценники и маркетплейсы — это тоже под проверку?",
      answer: "Да. На практике требования могут касаться всей информации, с которой сталкивается потребитель: описаний, характеристик, инструкций, состава, меню и т.д. Мы подсветим самые рискованные зоны и что править в первую очередь."
    },
    {
      question: "Если Роспатент откажет — что дальше?",
      answer: "В пакете «под ключ» предусмотрены варианты гарантий: письма согласия (без ограничений по количеству), оспаривание в палате по патентным спорам и/или переподача обозначения за наш счёт — в зависимости от ситуации."
    },
    {
      question: "Сколько времени занимает регистрация?",
      answer: "По регламенту сроки могут доходить до 18,5 месяцев. Если время критично, есть ускоренный формат: ориентир 2–4 месяца (с доп. пошлиной). Мы подскажем, какой вариант рациональнее."
    }
  ];

  return (
    <section className="relative py-24 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Section title */}
        <div className="text-center mb-16">
          <h2 className="font-['Montserrat'] font-bold text-4xl md:text-5xl text-[#002D62] mb-6">
            Частые вопросы
          </h2>
          <p className="font-['Montserrat'] text-xl text-gray-600 mb-6">
            коротко и по делу
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#D4AF37] to-[#50C878] mx-auto rounded-full" />
        </div>

        {/* FAQ items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="backdrop-blur-sm bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              {/* Question button */}
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left p-6 md:p-8 flex items-start gap-4 group"
              >
                <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                  openIndex === index 
                    ? 'bg-gradient-to-br from-[#D4AF37] to-[#E5C158]' 
                    : 'bg-gray-100 group-hover:bg-gray-200'
                }`}>
                  {openIndex === index ? (
                    <CheckCircle className="w-5 h-5 text-[#002D62]" />
                  ) : (
                    <HelpCircle className="w-5 h-5 text-gray-600" />
                  )}
                </div>
                
                <div className="flex-1">
                  <h3 className="font-['Montserrat'] font-bold text-xl md:text-2xl text-[#002D62] leading-tight">
                    {faq.question}
                  </h3>
                </div>

                {/* Chevron */}
                <div className={`flex-shrink-0 w-6 h-6 text-gray-400 transition-transform duration-300 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </div>
              </button>

              {/* Answer */}
              <div className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'max-h-96' : 'max-h-0'
              }`}>
                <div className="px-6 md:px-8 pb-6 md:pb-8 pl-20 md:pl-24">
                  <div className="pt-4 border-t border-gray-100">
                    <p className="font-['Montserrat'] text-lg text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional help */}
        <div className="mt-12 text-center">
          <div className="inline-block backdrop-blur-md bg-gradient-to-r from-[#002D62]/5 to-[#D4AF37]/5 border border-[#D4AF37]/30 rounded-2xl px-8 py-6">
            <p className="font-['Montserrat'] text-lg text-gray-700">
              Остались вопросы? Мы ответим при проверке вашего названия
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
