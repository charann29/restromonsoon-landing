// Direction B — "Fear & Urgency": Editorial single-column hero, manifesto-driven,
// urgency-first copy. Conversion angle: loss aversion, FOMO, emotional storytelling.

function NavEditorial() {
  return <Nav variant="editorial" />;
}

// Manifesto / mission section unique to direction B
function ManifestoSection() {
  const ref = window.useReveal();
  return (
    <section className="ml-section manifesto manifesto-section reveal" ref={ref} style={{ textAlign: "center" }}>
      <span className="ml-eyebrow" style={{ marginBottom: 24, display: "inline-block" }}>The problem nobody talks about</span>
      <h2 className="manifesto-h" style={{ maxWidth: 920, margin: "0 auto" }}>
        Most restaurants in India are run on <em>gut feeling</em>, kept alive by <em>hard work</em>, and quietly losing money to things <em>nobody is measuring</em>.
      </h2>
      <p className="lead" style={{ maxWidth: 680, margin: "32px auto 0", fontSize: 20 }}>
        Your billing software already knows where the leaks are. It just doesn't know how to tell you. We do. For ₹249.
      </p>
    </section>
  );
}

// Three-up philosophy strip — urgency angle
function PhilosophyStrip() {
  const ref = window.useReveal();
  const items = [
    { n: "01", h: "Plain English, not dashboards", p: "Your report reads like a friend who studied your books — not like enterprise software nobody opens." },
    { n: "02", h: "Rupees, not percentages", p: "Every insight comes with an exact rupee amount. \"Save ₹38,000/month\" — not \"reduce waste by 3.4%.\"" },
    { n: "03", h: "3 fixes, not 300 charts", p: "We rank your problems by money impact and only give you the top handful. You're busy running a restaurant." },
  ];
  return (
    <section className="ml-section philosophy-strip reveal" ref={ref}>
      <div className="philosophy-grid">
        {items.map((it) => (
          <div key={it.n} className="philosophy-item">
            <div className="philosophy-num">{it.n}</div>
            <h3 className="philosophy-h">{it.h}</h3>
            <p className="philosophy-p">{it.p}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function DirectionB({ tweaks }) {
  const headline = HERO_HEADLINES[tweaks.headlineIdx];
  return (
    <div className="ml-root dir-b" data-theme={tweaks.theme}>
      <NavEditorial />
      <HeroEditorial headline={headline} dashDensity={tweaks.dashDensity} />
      <LogoStrip />
      <ManifestoSection />
      <PhilosophyStrip />
      <TestimonialAuto style={tweaks.testimonialStyle} />
      <MidPageCTA />
      <DiscoverSection heading="Six things we show you that your POS never will." />
      <StepsSection />
      <CompareSection />
      <SampleReport />
      <StatsBar />
      <PricingSection />
      <FAQSection />
      <CTABanner />
      <Footer />
      <StickyMobileCTA />
    </div>
  );
}

window.DirectionB = DirectionB;
