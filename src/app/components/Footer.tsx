import { Shield } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-[#002D62] via-[#003870] to-[#002D62] text-white py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo and tagline */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#E5C158] flex items-center justify-center">
              <Shield className="w-7 h-7 text-[#002D62]" />
            </div>
            <div>
              <div className="font-['Montserrat'] font-bold text-xl text-white">
                Башук Чичканов
              </div>
              <div className="font-['Montserrat'] text-sm text-white/60">
                Защита вашего бренда
              </div>
            </div>
          </div>

          {/* Copyright and legal */}
          <div className="text-center md:text-right">
            <p className="font-['Montserrat'] text-sm text-white/80">
              © 2026 Все права защищены
            </p>
            <p className="font-['Montserrat'] text-xs text-white/60 mt-1">
              Информация на сайте не является публичной офертой
            </p>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 pt-8 border-t border-white/10">
          <p className="font-['Montserrat'] text-xs text-white/60 text-center max-w-4xl mx-auto leading-relaxed">
            Юридические услуги по регистрации товарных знаков. Консультации предоставляются квалифицированными специалистами. 
            Результат зависит от индивидуальных особенностей заявки и решения экспертизы Роспатента.
          </p>
        </div>
      </div>
    </footer>
  );
}