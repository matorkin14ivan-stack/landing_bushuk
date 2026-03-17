import { CheckCircle, FileCheck } from "lucide-react";

export function Exceptions() {
  const exceptions = [
    {
      icon: FileCheck,
      title: "Если рядом корректно указан перевод"
    },
    {
      icon: CheckCircle,
      title: "Если обозначение зарегистрировано как товарный знак или фирменное наименование"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 max-w-[1240px]">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#002D62] mb-6 leading-tight">
            Когда иностранное слово можно использовать
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {exceptions.map((exception, index) => {
            const Icon = exception.icon;
            return (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-3xl p-8 lg:p-10 hover:shadow-lg hover:border-green-200 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-green-600" strokeWidth={2} />
                </div>
                <h3 className="text-xl lg:text-2xl font-semibold text-gray-700 leading-snug">
                  {exception.title}
                </h3>
              </div>
            );
          })}
        </div>

        {/* Bottom text */}
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-gray-600 font-medium">
            Но применять это нужно не "на глаз", а по конкретной ситуации бизнеса.
          </p>
        </div>
      </div>
    </section>
  );
}
