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
      {/* Фоновая картинка на весь hero */}
      <div className="absolute inset-0">
        <img
  src="/hero-visual.png"
  alt=""
className="h-full w-full object-cover object-[85%_center] scale-[1.18] contrast-105 saturate-105"/>
 {/* лёгкая общая вуаль */}
<div className="absolute inset-0 bg-white/35" />

{/* слева плотнее под текст, справа почти прозрачно */}
<div className="absolute inset-0 bg-gradient-to-r from-white/85 via-white/45 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16 lg:py-20">
<div className="grid items-center gap-12 lg:grid-cols-1">
  {/* ЛЕВАЯ КОЛОНКА */}
<div className="max-w-3xl text-left">
  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900 text-left leading-[1.05]">
              Юридическая
              <br />
              проверка бизнеса
              <br />
              на иностранные слова
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-slate-600 text-left leading-relaxed max-w-xl">
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
                Проверить сейчас
              </a>
            </div>

            {/* Trust badges */}
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
