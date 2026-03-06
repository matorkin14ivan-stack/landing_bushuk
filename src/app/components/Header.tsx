import { Shield } from "lucide-react";
import { useState, useEffect } from "react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-sm' 
          : 'bg-white'
      }`}
    >
      <div className="container mx-auto px-4 max-w-[1240px]">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-2 md:gap-3">
            <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-[#002D62] flex items-center justify-center">
              <Shield className="w-5 h-5 md:w-6 md:h-6 text-white" strokeWidth={2} />
            </div>
            <div>
              <div className="font-semibold text-base md:text-lg text-[#002D62]">
                Башук Чичканов
              </div>
              <div className="text-xs text-gray-500 hidden sm:block">
                Патентные поверенные
              </div>
            </div>
          </div>

          {/* Right side - CTA Only */}
          <div className="flex items-center">
            {/* CTA Button */}
            <button
              onClick={scrollToForm}
              className="px-4 md:px-6 py-3 bg-[#002D62] text-white text-sm font-semibold rounded-xl hover:bg-[#003870] transition-all duration-300 hover:shadow-lg whitespace-nowrap"
            >
              Оставить заявку
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}