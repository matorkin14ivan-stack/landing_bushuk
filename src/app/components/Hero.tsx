import { Shield, AlertTriangle } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#002D62] via-[#003870] to-[#002D62]">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(212, 175, 55, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 80% 80%, rgba(80, 200, 120, 0.1) 0%, transparent 50%)`
        }} />
      </div>

      {/* Shield decoration */}
      <div className="absolute top-20 right-10 opacity-5">
        <Shield className="w-96 h-96 text-[#D4AF37]" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20 max-w-6xl">
        <div className="space-y-10">
          {/* Main headline */}
          <div className="text-center space-y-6">
            <h1 className="font-['Montserrat'] font-bold text-5xl md:text-6xl lg:text-7xl text-white leading-tight tracking-tight">
              С 1 марта вывеска может обойтись вам 
              <span className="block text-[#D4AF37] mt-2">в 200 000 ₽ убытков</span>
            </h1>
          </div>

          {/* Warning Banner with Image */}
          <div className="backdrop-blur-xl bg-gradient-to-br from-red-900/40 to-red-800/30 border-2 border-red-400/50 rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Image */}
              <div className="relative h-64 md:h-auto overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1731795472922-cd9590487468?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdG9yZWZyb250JTIwc2lnbiUyMHJlZ3VsYXRpb25zJTIwd2FybmluZ3xlbnwxfHx8fDE3NzEzMjYzNDF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Вывеска магазина"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-red-900/50 to-transparent" />
                
                {/* Warning badge on image */}
                <div className="absolute top-4 right-4 bg-red-600 text-white px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
                  <AlertTriangle className="w-5 h-5" />
                  <span className="font-['Montserrat'] font-bold text-sm">ВНИМАНИЕ!</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <h3 className="font-['Montserrat'] font-bold text-2xl md:text-3xl text-white mb-4 leading-tight">
                  Новые правила по вывескам с 1 марта 2026
                </h3>
                <ul className="space-y-3 text-white/90 font-['Montserrat'] text-base md:text-lg mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-1 text-xl">⚠</span>
                    <span>Иностранные слова должны быть переведены</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-1 text-xl">⚠</span>
                    <span>Штрафы до 500 000 ₽ для компаний</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-1 text-xl">⚠</span>
                    <span>Принудительная переделка вывесок</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Value proposition */}
          <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 md:p-12 shadow-2xl">
            <p className="font-['Montserrat'] font-medium text-xl md:text-2xl text-white/90 leading-relaxed mb-8 text-center">
              Мы знаем способ оставить название и не попасть на штраф и на переделки.
            </p>

            <div className="text-center">
              <button 
                onClick={scrollToForm}
                className="group relative inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-[#002D62] bg-gradient-to-r from-[#D4AF37] to-[#E5C158] rounded-full shadow-2xl hover:shadow-[#D4AF37]/50 transition-all duration-300 hover:scale-105 font-['Montserrat']"
              >
                Получить проверку названия
                <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>

              <p className="mt-6 text-sm text-white/60 font-['Montserrat']">
                Без спама. Ответ юриста, не менеджера.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white/60 rounded-full" />
        </div>
      </div>
    </section>
  );
}
