import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

export function FinalCTA() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    website: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send data to a backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: '', phone: '', website: '' });
      setSubmitted(false);
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact-form" className="relative py-24 bg-gradient-to-b from-white to-gray-100 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#50C878]/5 rounded-full blur-3xl" />

      <div className="relative z-10 container mx-auto px-4 max-w-4xl">
        {/* Section title */}
        <div className="text-center mb-12">
          <h2 className="font-['Montserrat'] font-bold text-4xl md:text-5xl lg:text-6xl text-[#002D62] mb-6 leading-tight">
            Получите проверку за 24 часа
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#D4AF37] to-[#50C878] mx-auto rounded-full mb-6" />
          <p className="font-['Montserrat'] text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Оставьте контакты — патентный поверенный проверит название/сайт и даст понятный план действий
          </p>
        </div>

        {/* Form card */}
        <div className="relative backdrop-blur-lg bg-white border border-gray-200/50 rounded-3xl p-8 md:p-10 shadow-2xl">
          {/* Gradient glow */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#002D62]/5 to-[#D4AF37]/5 opacity-50" />
          
          <div className="relative z-10">
            {submitted ? (
              // Success message
              <div className="text-center py-12">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[#50C878] to-[#3EA665] text-white mb-6 animate-pulse">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h3 className="font-['Montserrat'] font-bold text-3xl text-[#002D62] mb-4">
                  Заявка отправлена!
                </h3>
                <p className="font-['Montserrat'] text-lg text-gray-600">
                  Мы свяжемся с вами и пришлём результат. Если звонки неудобны — напишем в мессенджер и согласуем время.
                </p>
              </div>
            ) : (
              // Form
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block font-['Montserrat'] font-medium text-sm text-gray-700 mb-2">
                      Ваше имя
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 outline-none transition-all duration-300 font-['Montserrat']"
                      placeholder="Иван Иванов"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block font-['Montserrat'] font-medium text-sm text-gray-700 mb-2">
                      Телефон
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 outline-none transition-all duration-300 font-['Montserrat']"
                      placeholder="+7 (___) ___-__-__"
                    />
                  </div>
                </div>

                {/* Website */}
                <div>
                  <label htmlFor="website" className="block font-['Montserrat'] font-medium text-sm text-gray-700 mb-2">
                    Адрес сайта или название бренда
                  </label>
                  <input
                    type="text"
                    id="website"
                    name="website"
                    required
                    value={formData.website}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 outline-none transition-all duration-300 font-['Montserrat']"
                    placeholder="example.com или MyBrand"
                  />
                </div>

                {/* Submit button */}
                <div className="text-center pt-4">
                  <button
                    type="submit"
                    className="group relative inline-flex items-center justify-center gap-3 px-12 py-5 text-lg font-bold text-[#002D62] bg-gradient-to-r from-[#D4AF37] to-[#E5C158] rounded-full shadow-2xl hover:shadow-[#D4AF37]/50 transition-all duration-300 hover:scale-105 font-['Montserrat']"
                  >
                    <Send className="w-5 h-5" />
                    Получить бесплатную проверку
                    <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </button>

                  <p className="mt-6 text-sm text-gray-500 font-['Montserrat']">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
