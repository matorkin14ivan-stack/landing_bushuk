import { AlertCircle, TrendingUp } from "lucide-react";

export function FinesAndLosses() {
  const losses = [
    "новая вывеска",
    "перевёрстка макетов",
    "срочная правка сайта",
    "перепечатка материалов",
    "потеря узнаваемости бренда"
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 max-w-[1240px]">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#002D62] mb-6 leading-tight">
            Чем это может закончиться для бизнеса
          </h2>
        </div>

        {/* Fines Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Card 1 */}
          <div className="bg-white border border-gray-200 rounded-3xl p-8 lg:p-10">
            <div className="w-12 h-12 rounded-xl bg-yellow-100 flex items-center justify-center mb-6">
              <AlertCircle className="w-6 h-6 text-yellow-600" strokeWidth={2} />
            </div>
            <div className="text-4xl lg:text-5xl font-bold text-[#002D62] mb-4">
              До 10 000 ₽
            </div>
            <p className="text-lg text-gray-700">
              если нарушение связано с информацией для потребителей
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white border border-gray-200 rounded-3xl p-8 lg:p-10">
            <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center mb-6">
              <AlertCircle className="w-6 h-6 text-red-600" strokeWidth={2} />
            </div>
            <div className="text-4xl lg:text-5xl font-bold text-[#002D62] mb-4">
              От 100 000 до 500 000 ₽
            </div>
            <p className="text-lg text-gray-700">
              если нарушение квалифицируют как рекламу
            </p>
          </div>
        </div>

        {/* Additional losses section */}
        <div className="bg-white border border-gray-200 rounded-3xl p-8 lg:p-12">
          <div className="max-w-3xl mx-auto">
            {/* Alert text */}
            <div className="mb-8">
              <p className="text-xl lg:text-2xl font-semibold text-[#002D62] mb-4">
                Но штраф — не единственная проблема.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Часто бизнес теряет больше на срочной переделке вывески, сайта, меню, баннеров и упаковки.
              </p>
            </div>

            {/* Losses list */}
            <div className="grid sm:grid-cols-2 gap-4">
              {losses.map((loss, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-xl p-4"
                >
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-[#D4AF37]"></div>
                  <p className="text-base text-gray-700">{loss}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
