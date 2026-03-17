import { AlertTriangle } from "lucide-react";

export function DontRush() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 max-w-[1240px]">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-red-50 to-orange-50 border-2 border-red-200 rounded-3xl p-8 lg:p-12">
            {/* Icon */}
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 rounded-2xl bg-red-100 flex items-center justify-center">
                <AlertTriangle className="w-10 h-10 text-red-600" strokeWidth={2} />
              </div>
            </div>

            {/* Header */}
            <div className="text-center mb-8">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#002D62] mb-6 leading-tight">
                Самая дорогая ошибка — быстро "перевести" бренд без проверки
              </h2>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <p className="text-lg lg:text-xl text-gray-700 leading-relaxed text-center">
                Если в спешке просто перевести или переписать название на русский, можно попасть уже не только на штрафы по закону о языке, но и на конфликт с чужим товарным знаком.
              </p>

              {/* Highlight box */}
              <div className="bg-white border-2 border-red-300 rounded-2xl p-6 lg:p-8">
                <p className="text-xl lg:text-2xl font-bold text-red-600 text-center">
                  То есть вы можете заменить одну проблему на другую — ещё более дорогую.
                </p>
              </div>

              {/* Final line */}
              <p className="text-xl font-semibold text-[#002D62] text-center pt-4">
                Поэтому сначала проверка. Потом изменения.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
