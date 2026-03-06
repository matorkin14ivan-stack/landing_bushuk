import { Shield, CheckCircle2 } from "lucide-react";

export function Hero() {
  const scrollToForm = () => {
    document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="pt-28 md:pt-36 pb-16 md:pb-24 bg-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(0,45,98,0.06),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(212,175,55,0.08),transparent_55%)]" />
        {/* Photo layer (soft) */}
        <div className="absolute top-0 right-0 h-full w-[52%] hidden lg:block">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-gradient-to-l from-white/0 via-white/70 to-white" />
          <div className="absolute inset-0 bg-[#002D62]/5" />
        </div>
        {/* Subtle grid */}
        <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,#002D62_1px,transparent_1px),linear-gradient(to_bottom,#002D62_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <div className="relative container mx-auto px-4 max-w-[1240px]">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* Left */}
          <div className="lg:col-span-7">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 border border-red-100 text-red-600 text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-red-500" />
              Закон действует с 1 марта 2026
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#002D62] leading-tight">
              Иностранные слова на вывеске и в рекламе —
              <span className="text-[#D4AF37]"> риск штрафов до 500&nbsp;000&nbsp;₽</span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl">
              Проверим название и ваш сайт за 24 часа и дадим чёткий план: что перевести, что заменить,
              а что выгоднее закрыть товарным знаком — чтобы сохранить узнаваемость и не попасть в
              ненужные расходы.
            </p>

            {/* Bullets */}
            <div className="mt-8 space-y-4">
              {[
                "Покажем зоны риска: вывеска, сайт, карточки на маркетплейсах, упаковка",
                "Дадим готовый план действий: перевод / замена / регистрация товарного знака",
                "Проверим риск «перевода» — чтобы не попасть на чужой товарный знак и претензии",
              ].map((t, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <div className="mt-0.5 w-6 h-6 rounded-full bg-[#002D62] flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-base md:text-lg text-gray-700">{t}</p>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToForm}
                className="px-8 py-4 rounded-2xl bg-[#002D62] text-white font-semibold text-base hover:bg-[#003870] transition-all duration-300 shadow-sm hover:shadow-lg"
              >
                Проверить название бесплатно
              </button>
              <button
                onClick={scrollToForm}
                className="px-8 py-4 rounded-2xl bg-white border-2 border-[#002D62] text-[#002D62] font-semibold text-base hover:bg-[#002D62]/5 transition-all duration-300"
              >
                Получить список рисков
              </button>
            </div>

            <p className="mt-4 text-sm text-gray-500 max-w-2xl">
              Важно: на практике штрафы отличаются в зависимости от квалификации (реклама vs информация для ознакомления).
              Мы оцениваем риск и предлагаем безопасный сценарий.
            </p>
          </div>

          {/* Right trust card */}
          <div className="lg:col-span-5">
            <div className="bg-white border border-gray-200 rounded-3xl p-6 md:p-8 shadow-sm relative">
              <div className="absolute -inset-1 rounded-3xl bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.18),transparent_55%)] -z-10" />

              <div className="flex items-start gap-4 pb-6 border-b border-gray-100">
                <div className="w-12 h-12 rounded-2xl bg-[#002D62] flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-lg font-semibold text-[#002D62]">Проверяет юрист</div>
                  <div className="text-sm text-gray-500">Патентный поверенный РФ</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6 py-6">
                <div>
                  <div className="text-3xl font-extrabold text-[#002D62]">12+</div>
                  <div className="text-sm text-gray-600">лет опыта в патентном праве</div>
                </div>
                <div>
                  <div className="text-3xl font-extrabold text-[#002D62]">850+</div>
                  <div className="text-sm text-gray-600">зарегистрированных знаков</div>
                </div>
                <div>
                  <div className="text-3xl font-extrabold text-[#002D62]">94%</div>
                  <div className="text-sm text-gray-600">успешных регистраций</div>
                </div>
                <div>
                  <div className="text-3xl font-extrabold text-[#002D62]">24ч</div>
                  <div className="text-sm text-gray-600">ответ после заявки</div>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-100 flex gap-3 items-start">
                <div className="w-9 h-9 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center flex-shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <path d="M14 2v6h6" />
                  </svg>
                </div>
                <p className="text-sm text-gray-600">
                  Проверку проводит дипломированный патентный поверенный — не менеджер отдела продаж.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
