import React from "react";
import { CheckCircle2, ShieldCheck, BadgeCheck } from "lucide-react";

type IconType = React.ComponentType<{ className?: string }>;

function TrustBadge({
  icon: Icon,
  text,
}: {
  icon: IconType;
  text: string;
}) {
  return (
    <div className="flex items-center gap-2 rounded-xl bg-white/70 px-4 py-2 text-sm text-slate-700 shadow-sm ring-1 ring-black/5">
      <Icon className="h-4 w-4 text-slate-500" />
      <span>{text}</span>
    </div>
  );
}

export function HeroVersionA() {
  return (
    <section className="relative overflow-hidden min-h-[75vh] flex items-center">
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <picture className="block h-full w-full">
          <source media="(max-width: 639px)" srcSet="/hero-visual-mobile.png" />
          <img
            src="/hero-visual.png"
            alt=""
            className="block h-full w-full object-cover object-[60%_30%] scale-[1.12] sm:object-[88%_center] sm:scale-[1.22] contrast-105 saturate-105"
          />
        </picture>

        {/* Общая вуаль */}
        <div className="absolute inset-0 bg-white/55 sm:bg-white/20" />

        {/* Мобилка: вертикальная подложка под текст */}
        <div className="absolute inset-0 sm:hidden bg-gradient-to-b from-white/95 via-white/75 to-white/55" />

        {/* Десктоп: мягкий свет слева */}
        <div className="absolute inset-0 hidden sm:block bg-[radial-gradient(ellipse_at_left,rgba(255,255,255,0.95)_0%,rgba(255,255,255,0.70)_42%,rgba(255,255,255,0.25)_68%,rgba(255,255,255,0)_82%)]" />
      </div>

      {/* CONTENT */}
      <div className="relative container mx-auto px-4 max-w-[1240px] pt-28 pb-16 sm:pt-32 sm:pb-20">
        <div className="grid items-center gap-12 lg:grid-cols-1">
          <div className="max-w-3xl text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900 leading-[1.05]">
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

            <div className="mt-8">
              <a
                href="#contact-form"
                className="inline-flex items-center justify-center rounded-xl bg-[#c43b3b] px-8 py-4 text-base font-semibold text-white shadow-lg shadow-red-500/20 hover:bg-[#b23333] transition"
              >
                Проверить сейчас
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <TrustBadge icon={CheckCircle2} text="Быстро и законно" />
              <TrustBadge icon={ShieldCheck} text="Конфиденциально" />
              <TrustBadge icon={BadgeCheck} text="Экспертный аудит" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
