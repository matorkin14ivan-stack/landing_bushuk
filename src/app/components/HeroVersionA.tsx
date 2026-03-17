import { Shield, CheckCircle, FileText } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function HeroVersionA() {
  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-28 sm:pt-32 pb-16 sm:pb-24 bg-gradient-to-br from-white via-gray-50/30 to-amber-50/20 overflow-hidden">
      {/* Subtle Background Grid - reduced opacity */}
      <div className="absolute inset-0 opacity-[0.015]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-a" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#D4AF37" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-a)" />
        </svg>
      </div>

      {/* Decorative Legal-Tech Shapes - Very Subtle */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Shield outline - золотой */}
        <div className="absolute top-1/4 left-[5%] opacity-[0.025]">
          <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 10 L170 40 L170 100 C170 140 140 170 100 190 C60 170 30 140 30 100 L30 40 Z" 
                  stroke="#D4AF37" strokeWidth="2" fill="none"/>
          </svg>
        </div>
        
        {/* Document outline - золотой */}
        <div className="absolute bottom-1/4 left-[10%] opacity-[0.025]">
          <svg width="150" height="180" viewBox="0 0 150 180" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="20" y="10" width="110" height="160" rx="8" stroke="#D4AF37" strokeWidth="2" fill="none"/>
            <line x1="40" y1="40" x2="110" y2="40" stroke="#D4AF37" strokeWidth="2"/>
            <line x1="40" y1="70" x2="110" y2="70" stroke="#D4AF37" strokeWidth="2"/>
            <line x1="40" y1="100" x2="90" y2="100" stroke="#D4AF37" strokeWidth="2"/>
          </svg>
        </div>
      </div>

      {/* Photo Background - Right Side with Gradient Mask */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-0 top-0 bottom-0 w-[60%] lg:w-[55%]">
          {/* Image with blur */}
          <div className="relative w-full h-full">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1589307904488-7d60ff29c975?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqdWRnZSUyMGdhdmVsJTIwd29vZGVuJTIwbGVnYWx8ZW58MXx8fHwxNzczMzE4NTUyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Legal gavel - судебный молоток"
              className="w-full h-full object-cover opacity-50"
            />
            {/* Gradient mask - мягкий переход слева */}
            <div className="absolute inset-0 bg-gradient-to-l from-white/60 from-10% via-white/80 via-40% to-white"></div>
            {/* Gold tint overlay - тонкий золотой оттенок */}
            <div className="absolute inset-0 bg-gradient-to-br from-amber-50/30 via-transparent to-yellow-50/20"></div>
          </div>
        </div>
      </div>

      {/* Radial Glow - золотое свечение */}
      <div className="absolute top-1/2 right-[15%] w-[600px] h-[600px] bg-gradient-radial from-[#D4AF37]/8 via-amber-100/5 to-transparent rounded-full blur-[100px] pointer-events-none" />
      
      {/* Soft accent shapes - светлые */}
      <div className="absolute top-20 right-[15%] w-96 h-96 bg-gradient-to-br from-amber-100/20 to-yellow-50/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-[5%] w-80 h-80 bg-gradient-to-tr from-[#D4AF37]/5 to-amber-50/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 max-w-[1240px] relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Left Column - Main Content */}
          <div className="space-y-8">
            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#002D62] leading-tight">
              Новый закон о запрете{" "}
              <span className="text-[#D4AF37]">иностранных слов</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed">
              Как не получить штраф до 500 000 ₽
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={scrollToForm}
                className="px-8 py-4 bg-[#002D62] text-white text-lg font-semibold rounded-xl hover:bg-[#003870] transition-all duration-300 hover:shadow-xl hover:scale-105 active:scale-95"
              >
                Проверить бесплатно
              </button>
            </div>

            {/* Micro text */}
            <div className="flex items-center gap-2 justify-center text-sm text-gray-600">
              <CheckCircle className="w-4 h-4 text-[#D4AF37]" />
              <p className="font-medium">Ответ юриста, а не менеджера</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}