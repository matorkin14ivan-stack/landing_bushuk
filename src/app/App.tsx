import { Header } from "./components/Header";
import { HeroVersionA } from "./components/HeroVersionA";
import { RiskItems } from "./components/RiskItems";
import { WhatYouGet } from "./components/WhatYouGet";
import { CTABlock } from "./components/CTABlock";
import { WhyNotJustTranslate } from "./components/WhyNotJustTranslate";
import { CanCant } from "./components/CanCant";
import { HowWeCheck } from "./components/HowWeCheck";
import { FinesAndLosses } from "./components/FinesAndLosses";
import { DontRush } from "./components/DontRush";
import { Exceptions } from "./components/Exceptions";
import { WhatYouGetAfterCheck } from "./components/WhatYouGetAfterCheck";
import { NewFinalCTA } from "./components/NewFinalCTA";
import { FAQ } from "./components/FAQ";
import { NewFooter } from "./components/NewFooter";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Sticky Header */}
      <Header />

      {/* 1. Hero Section */}
      <HeroVersionA />

      {/* 2. What We Check - Risk Items */}
      <RiskItems />

      {/* 3. When Foreign Words Become Risk */}
      <WhatYouGet />

      {/* CTA Block #1 */}
      <CTABlock />

      {/* 4. Why Not Just Translate */}
      <WhyNotJustTranslate />

      {/* 5. Can't / Can */}
      <CanCant />

      {/* 6. How We Check */}
      <HowWeCheck />

      {/* CTA Block #2 */}
      <CTABlock />

      {/* 7. Fines and Losses */}
      <FinesAndLosses />

      {/* 8. Don't Rush */}
      <DontRush />

      {/* 9. Exceptions */}
      <Exceptions />

      {/* 10. What You Get After Check */}
      <WhatYouGetAfterCheck />

      {/* 11. Final CTA */}
      <NewFinalCTA />

      {/* 12. FAQ */}
      <FAQ />

      {/* Footer */}
      <NewFooter />
    </div>
  );
}