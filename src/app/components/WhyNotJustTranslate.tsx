import { AlertTriangle, XCircle } from "lucide-react";

export function WhyNotJustTranslate() {
  const points = [
    "Если слова нет в одном из 4 нормативных словарей, оно всё равно остаётся в зоне риска",
    "Неважно, написано слово латиницей или кириллицей",
    "Быстрый перевод без проверки может создать новую проблему вместо старой",
    "Вы можете случайно выбрать обозначение, которое уже конфликтует с чужим товарным знаком"
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 max-w-[1240px]">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 border border-red-200 rounded-full mb-6">
              <AlertTriangle className="w-4 h-4 text-red-600" />
              <span className="text-sm font-medium text-red-600">Распространённая ошибка</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#002D62] mb-6 leading-tight">
              Просто переписать название русскими буквами — не решение
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              Многие думают: было Beauty Studio — напишем "Бьюти Студио" и вопрос закрыт.<br />
              <span className="font-semibold text-[#002D62]">Но так это не работает.</span>
            </p>
          </div>

          {/* Points */}
          <div className="bg-gray-50 border border-gray-200 rounded-3xl p-8 lg:p-12 space-y-6 mb-8">
            {points.map((point, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mt-0.5">
                  <XCircle className="w-4 h-4 text-red-600" />
                </div>
                <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
                  {point}
                </p>
              </div>
            ))}
          </div>

          {/* Final line */}
          <div className="text-center">
            <p className="text-xl lg:text-2xl font-semibold text-[#002D62] bg-white border border-gray-200 rounded-2xl p-6 inline-block">
              Поэтому сначала не меняют название, а сначала проверяют.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
