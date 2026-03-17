import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

export function NewFinalCTA() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const checks = [
    "бренд и логотип",
    "сайт",
    "названия товаров и услуг",
    "риск штрафов и переделок"
  ];

  return (
    <section id="contact-form" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 max-w-[1240px]">
        <div className="bg-gray-50 border border-gray-200 rounded-3xl p-6 md:p-12 lg:p-16">
          <div className="max-w-3xl mx-auto">
            {/* Header */}
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#002D62] mb-6 md:mb-8 leading-tight">
                Проверьте бизнес до того, как это сделает проверка со штрафом
              </h2>
              
              <div className="mb-8">
                <p className="text-xl lg:text-2xl font-semibold text-gray-700 mb-6">
                  Мы бесплатно проверим:
                </p>
                <div className="grid sm:grid-cols-2 gap-3 max-w-2xl mx-auto mb-8">
                  {checks.map((check, index) => (
                    <div key={index} className="flex items-center gap-3 bg-white border border-gray-200 rounded-xl p-4">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#D4AF37] flex items-center justify-center text-white font-bold text-sm">
                        {index + 1}
                      </div>
                      <p className="text-base text-gray-700">{check}</p>
                    </div>
                  ))}
                </div>
                <p className="text-lg text-gray-600 font-medium">
                  Вы бесплатно получите разбор и рекомендации юриста
                </p>
              </div>
              
              {/* CTA Button */}
              <button
                onClick={scrollToTop}
                className="w-full md:w-auto px-10 py-5 bg-[#002D62] text-white text-lg font-semibold rounded-xl hover:bg-[#003870] transition-all duration-300 hover:shadow-xl hover:scale-105 active:scale-95"
              >
                Проверить бесплатно
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}