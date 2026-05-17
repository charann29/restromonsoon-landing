// Direction A — "Proof & Trust": Two-column hero, dashboard visual, metrics-driven testimonial.
// Conversion angle: credibility, social proof, data-backed confidence.

function DirectionA({ tweaks }) {
  const headline = HERO_HEADLINES[tweaks.headlineIdx];
  return (
    <div className="ml-root dir-a" data-theme={tweaks.theme}>
      <Nav />
      <HeroFaithful headline={headline} dashDensity={tweaks.dashDensity} />
      <LogoStrip />
      <StatsBar />
      <TestimonialAuto style={tweaks.testimonialStyle} />
      <MidPageCTA />
      <DiscoverSection heading="What you'll discover in your audit" />
      <StepsSection />
      <CompareSection />
      <SampleReport />
      <PricingSection />
      <FAQSection />
      <CTABanner />
      <Footer />
      <StickyMobileCTA />
    </div>
  );
}

window.DirectionA = DirectionA;
