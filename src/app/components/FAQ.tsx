import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

function FAQItem({ question, answer, isOpen, onToggle }: FAQItemProps) {
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden bg-white hover:border-[#D4AF37] transition-all duration-300">
      <button
        onClick={onToggle}
        className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left hover:bg-gray-50 transition-colors"
      >
        <span className="text-lg font-semibold text-[#002D62]">{question}</span>
        <ChevronDown
          className={`w-6 h-6 text-[#D4AF37] flex-shrink-0 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 pb-5 text-gray-700 leading-relaxed">
          {answer}
        </div>
      </div>
    </div>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Какие штрафы предусмотрены за нарушение закона о запрете иностранных слов?",
      answer: "Согласно новому законодательству, за использование иностранных слов в названиях, вывесках и рекламе предусмотрены штрафы: для ИП — до 50 000 ₽, для юридических лиц — до 500 000 ₽. Повторные нарушения могут привести к еще более серьезным санкциям, включая приостановку деятельности."
    },
    {
      question: "Какие слова попадают под запрет?",
      answer: "Под запрет попадают иностранные слова и выражения в товарных знаках, названиях компаний, вывесках и рекламных материалах, если для них существует общеупотребительный русский аналог. Есть исключения для охраняемых товарных знаков, общепринятых международных терминов и случаев, когда замена невозможна без потери смысла."
    },
    {
      question: "Сколько времени занимает проверка?",
      answer: "Первичный анализ и рекомендации мы предоставляем в течение 1-2 рабочих дней после получения заявки. Полная юридическая экспертиза с детальным отчетом и стратегией защиты занимает от 3 до 5 рабочих дней, в зависимости от сложности случая."
    },
    {
      question: "Что делать, если мой товарный знак зарегистрирован и содержит иностранные слова?",
      answer: "Зарегистрированные товарные знаки получают определенную правовую защиту. Однако важно правильно оформить документы и учесть нюансы нового законодательства. Мы проанализируем ваш товарный знак и разработаем стратегию защиты, которая позволит минимизировать риски и продолжить легальное использование."
    },
    {
      question: "Можно ли просто перевести иностранное слово на русский?",
      answer: "Простой перевод не всегда является правильным решением. Необходимо учитывать фонетическое сходство, устоявшуюся практику использования, позицию контролирующих органов и множество других факторов. Неправильный подход может привести к потере узнаваемости бренда или все равно повлечь санкции. Мы поможем найти оптимальное решение для вашей ситуации."
    },
    {
      question: "Какие исключения предусмотрены законом?",
      answer: "Закон предусматривает исключения для: зарегистрированных товарных знаков (при соблюдении определенных условий), общепринятых международных терминов и наименований, иностранных имен собственных, а также случаев, когда замена на русский аналог невозможна без искажения смысла. Однако применение каждого исключения требует юридического обоснования."
    },
    {
      question: "Бесплатная проверка — это действительно бесплатно?",
      answer: "Да, первичная проверка названия или сайта на риски полностью бесплатна и ни к чему вас не обязывает. Вы получите предварительную оценку рисков и рекомендации от квалифицированного юриста. Дальнейшее сотрудничество и стоимость услуг обсуждаются индивидуально в зависимости от сложности вашего случая."
    },
    {
      question: "Что входит в отчет после проверки?",
      answer: "После проверки вы получаете подробный отчет, который включает: анализ рисков для вашего конкретного случая, список выявленных проблемных элементов, оценку вероятности санкций, конкретные рекомендации по устранению рисков, варианты альтернативных решений и стратегию дальнейших действий."
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 max-w-[1240px]">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#D4AF37]/10 rounded-full mb-6">
            <HelpCircle className="w-5 h-5 text-[#D4AF37]" />
            <span className="text-sm font-semibold text-[#002D62]">Часто задаваемые вопросы</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#002D62] mb-4">
            Ответы на ваши вопросы
          </h2>
          <p className="text-lg sm:text-xl text-gray-600">
            Все, что нужно знать о новом законе и наших услугах
          </p>
        </div>

        {/* FAQ List */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">
            Не нашли ответ на свой вопрос?
          </p>
          <button
            onClick={() => {
              document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-4 bg-[#002D62] text-white font-semibold rounded-xl hover:bg-[#003870] transition-all duration-300 hover:shadow-xl hover:scale-105 active:scale-95"
          >
            Получить бесплатную консультацию
          </button>
        </div>
      </div>
    </section>
  );
}
