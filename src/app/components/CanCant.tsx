import { XCircle, CheckCircle } from "lucide-react";

export function CanCant() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 max-w-[1240px]">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* НЕЛЬЗЯ */}
          <div className="bg-white border-2 border-red-200 rounded-3xl p-8 lg:p-12">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-2xl bg-red-100 flex items-center justify-center">
                <XCircle className="w-8 h-8 text-red-600" strokeWidth={2.5} />
              </div>
              <h3 className="text-3xl font-bold text-red-600">НЕЛЬЗЯ</h3>
            </div>
            <p className="text-xl text-gray-700 leading-relaxed">
              Название без русского варианта или без правовой проверки
            </p>
          </div>

          {/* МОЖНО */}
          <div className="bg-white border-2 border-green-200 rounded-3xl p-8 lg:p-12">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-green-600" strokeWidth={2.5} />
              </div>
              <h3 className="text-3xl font-bold text-green-600">МОЖНО</h3>
            </div>
            <p className="text-xl text-gray-700 leading-relaxed">
              Русское оформление по правилам или законное использование через защищённое обозначение
            </p>
          </div>
        </div>

        {/* Bottom text */}
        <div className="max-w-3xl mx-auto text-center mt-12">
          <p className="text-lg text-gray-600 font-medium">
            Наша задача — не гадать, а показать, какой вариант законен именно для вас.
          </p>
        </div>
      </div>
    </section>
  );
}
