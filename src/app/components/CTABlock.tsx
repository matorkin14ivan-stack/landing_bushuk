export function CTABlock() {
  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4 max-w-[1240px]">
        <div className="bg-[#002D62] rounded-3xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
            Проверьте бизнес до того, как это сделает проверка со штрафом
          </h3>
          <p className="text-base md:text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Получите бесплатную проверку бизнеса и узнайте, где у вас риск штрафов и переделок
          </p>
          <button
            onClick={scrollToForm}
            className="w-full sm:w-auto px-8 py-4 bg-white text-[#002D62] text-base font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 hover:shadow-lg"
          >
            Проверить бизнес бесплатно
          </button>
        </div>
      </div>
    </section>
  );
}