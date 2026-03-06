import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { WhatYouGet } from "./components/WhatYouGet";
import { CTABlock } from "./components/CTABlock";
import { Cases } from "./components/Cases";
import { Pricing } from "./components/Pricing";
import { FAQ } from "./components/FAQ";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Sticky Header */}
      <Header />

      {/* Hero */}
      <Hero />

      {/* What You Get Section */}
      <WhatYouGet />

      {/* CTA Block #1 */}
      <CTABlock />

      {/* Cases Section */}
      <Cases />

      {/* CTA Block #2 */}
      <CTABlock />

      {/* Pricing */}
      <Pricing />

      {/* FAQ Section */}
      <FAQ />

      {/* Final CTA with Form */}
      <FinalCTA />

      {/* Footer */}
      <Footer />
    </div>
  );
}