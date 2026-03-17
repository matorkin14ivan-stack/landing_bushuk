import { Plus, Minus } from "lucide-react";
import { useState } from "react";

export function NewFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Сколько времени занимает регистрация товарного знака?",
      answer: "Полный цикл регистрации — 6-8 месяцев от подачи заявки до получения свидетельства. Это стандартный срок экспертизы Роспатента, который не зависит от поверенного. Однако мы можем подать заявку в ускоренном порядке — тогда срок сокращается до 4-5 месяцев."
    },
    {
      question: "Сколько стоит зарегистрировать товарный знак?",
      answer: "Стоимость складывается из услуг поверенного (от 85 000 ₽ в пакете «Стандарт») и госпошлин Роспатента (от 16 000 ₽ за один класс МКТУ). Точная цена зависит от количества классов и сложности знака. После бесплатной проверки мы озвучим точную стоимость под ваш случай."
    },
    {
      question: "Что если Роспатент откажет в регистрации?",
      answer: "Мы проводим предварительную экспертизу и подаём только те заявки, у которых высокий шанс одобрения (наша успешность — 94%). Если всё же придёт отказ, мы бесплатно подготовим возражение и будем отстаивать вашу позицию. В крайнем случае поможем доработать знак и подать повторно."
    },
    {
      question: "Мы давно используем это название, зачем регистрировать?",
      answer: "Даже если вы используете название 10 лет, без регистрации у вас нет юридической защиты. Кто-то другой может зарегистрировать товарный знак и потребовать от вас переименоваться или заплатить компенсацию. С 1 марта добавился риск штрафов по закону о языке — зарегистрированный знак даёт право сохранить оригинальное написание."
    },
    {
      question: "Можно ли законно сохранить английское название бренда?",
      answer: "Да, если зарегистрировать его как товарный знак. Закон о языке не распространяется на зарегистрированные товарные знаки — вы получаете право использовать оригинальное написание на вывесках, упаковке и в рекламе без обязательного перевода. Это самый надёжный способ сохранить узнаваемость бренда."
    },
    {
      question: "Что входит в бесплатную проверку?",
      answer: "Мы проверяем название на конфликты с существующими товарными знаками, анализируем риски по закону о языке, оцениваем шансы на регистрацию и даём конкретные рекомендации: переводить, модифицировать или регистрировать как есть. Вы получаете отчёт и 30-минутную консультацию юриста."
    },
    {
      question: "Нужно ли регистрировать товарный знак для онлайн-бизнеса?",
      answer: "Да, особенно важно. В интернете проще скопировать название, создать поддельные аккаунты или выкупить домены. Зарегистрированный знак даёт право закрывать копии в соцсетях, требовать удаления доменов и защищаться от недобросовестной конкуренции. Плюс — защита от будущих санкций по закону о языке."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 max-w-[1240px]">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#002D62] mb-6 leading-tight">
            Частые вопросы
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            Отвечаем на главные сомнения и возражения
          </p>
        </div>

        {/* FAQ List */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-gray-300 transition-colors duration-300"
            >
              {/* Question */}
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left p-6 md:p-8 flex items-center justify-between gap-4 group"
              >
                <h3 className="text-base md:text-lg lg:text-xl font-semibold text-[#002D62] leading-tight pr-4">
                  {faq.question}
                </h3>
                <div
                  className={`flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center transition-all duration-300 ${
                    openIndex === index ? 'bg-[#002D62] rotate-180' : 'group-hover:bg-gray-200'
                  }`}
                >
                  {openIndex === index ? (
                    <Minus className="w-4 h-4 text-white" strokeWidth={2.5} />
                  ) : (
                    <Plus className="w-4 h-4 text-[#002D62]" strokeWidth={2.5} />
                  )}
                </div>
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-[600px]' : 'max-h-0'
                }`}
              >
                <div className="px-6 md:px-8 pb-6 md:pb-8 pt-0">
                  <div className="border-t border-gray-100 pt-6">
                    <p className="text-base text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gray-50 border border-gray-200 rounded-2xl px-8 py-6">
            <p className="text-base text-gray-700 mb-4">
              Не нашли ответ на свой вопрос?
            </p>
            <button
              onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-6 py-3 bg-[#002D62] text-white text-sm font-semibold rounded-xl hover:bg-[#003870] transition-all duration-300"
            >
              Задать вопрос юристу
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}