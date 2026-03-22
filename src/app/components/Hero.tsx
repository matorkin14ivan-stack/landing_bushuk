import { CheckCircle2, ShieldCheck, BadgeCheck } from "lucide-react";

function TrustBadge({
  icon: Icon,
  text,
}: {
  icon: React.ComponentType<{ className?: string }>;
  text: string;
}) {
  return (
    <div className="flex items-center gap-2 rounded-xl bg-white/70 px-4 py-2 text-sm text-slate-700 shadow-sm ring-1 ring-black/5">
      <Icon className="h-4 w-4 text-slate-500" />
      <span>{text}</span>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* фон как на макете: светлый + мягкий градиент */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-[#f6f4f2] to-[#efe9e4]" />

<div className="relative container mx-auto px-4 max-w-[1240px] py-10 sm:py-12 lg:py-14">
  <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* ЛЕВАЯ КОЛОНКА */}
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900 leading-[1.05]">
              Юридическая
              <br />
              проверка бизнеса
              <br />
              на иностранные слова
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-slate-600 leading-relaxed max-w-xl">
              Новый закон — штрафы за нарушения.
              <br />
              Узнайте заранее о рисках и защитите свой бизнес
            </p>

            {/* CTA */}
            <div className="mt-8">
              <a
                href="#contact-form"
                className="inline-flex items-center justify-center rounded-xl bg-[#c43b3b] px-8 py-4 text-base font-semibold text-white shadow-lg shadow-red-500/20 hover:bg-[#b23333] transition"
              >
                Проверить бесплатно
              </a>
            </div>

            {/* Trust badges */}
            <div className="mt-8 flex flex-wrap gap-3">
              <TrustBadge icon={CheckCircle2} text="Быстро и законно" />
              <TrustBadge icon={ShieldCheck} text="Конфиденциально" />
              <TrustBadge icon={BadgeCheck} text="Экспертный аудит" />
            </div>
          </div>

          {/* ПРАВАЯ КОЛОНКА (ВИЗУАЛ) */}
          <div className="relative">
            {/* мягкое свечение вокруг */}
            <div className="absolute -inset-6 rounded-[32px] bg-white/40 blur-2xl" />

            <div className="relative overflow-hidden rounded-[28px] bg-white/60 shadow-2xl ring-1 ring-black/5">
              <img
                src="/hero-visual.png"
                alt="Проверка на иностранные слова"
                className="w-full h-auto object-cover"
              />

              {/* легкая вуаль, чтобы как на макете было “мягче” */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/10 via-transparent to-white/10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
