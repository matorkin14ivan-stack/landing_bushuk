import { Shield, Mail, MessageCircle } from "lucide-react";

export function NewFooter() {
  return (
    <footer className="bg-[#002D62] text-white py-12 md:py-16">
      <div className="container mx-auto px-4 max-w-[1240px]">
        <div className="grid sm:grid-cols-2 md:grid-cols-12 gap-8 md:gap-12 mb-8 md:mb-12">
          {/* Left - Logo and description */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center">
                <Shield className="w-6 h-6 text-[#002D62]" strokeWidth={2} />
              </div>
              <div>
                <div className="font-semibold text-lg">
                  Башук Чичканов
                </div>
                <div className="text-sm text-white/60">
                  Патентные поверенные
                </div>
              </div>
            </div>
            <p className="text-sm text-white/70 leading-relaxed">
              Регистрация товарных знаков и защита интеллектуальной собственности. 
              Аккредитованные представители в Роспатенте.
            </p>
          </div>

          {/* Middle - Contacts */}
          <div className="md:col-span-3">
            <h4 className="font-semibold text-base mb-4">Контакты</h4>
            <div className="space-y-3">
              
            </div>
          </div>

          {/* Right - Info */}
          <div className="md:col-span-4">
            <h4 className="font-semibold text-base mb-4">Информация</h4>
            <div className="space-y-2 text-sm text-white/70">
              <p>ИНН: 0000000000</p>
              <p>ОГРН: 0000000000000</p>
              <p>Патентный поверенный РФ</p>
              <p>Рег. номер: 0000</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/60">
              © 2026 Башук Чичканов. Все права защищены
            </p>
            <div className="flex gap-6 text-sm text-white/60">
              <a href="#" className="hover:text-white transition-colors">
                Политика конфиденциальности
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Оферта
              </a>
            </div>
          </div>

          <p className="text-xs text-white/50 mt-6 text-center md:text-left max-w-4xl">
            Информация на сайте не является публичной офертой. Результат оказания услуг зависит 
            от индивидуальных обстоятельств каждого случая и решения экспертизы Роспатента.
          </p>
        </div>
      </div>
    </footer>
  );
}
