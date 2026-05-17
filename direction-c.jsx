// Direction C — "Operator Console": dashboard-led hero, dense data, ops console feel.
// Dark maroon hero. Data-forward. Looks like the product itself.

function NavConsole() {
  return <Nav variant="dark" />;
}

// Live ticker-style "we just found" feed
function LiveFeed() {
  const items = [
    { c: "Banjara Hills · Casual dining", t: "₹72,400 in weekend discount leakage" },
    { c: "Gachibowli · Cloud kitchen", t: "₹54,800 in low-margin item promotion loss" },
    { c: "Madhapur · QSR chain", t: "₹38,200 in Tuesday overstaffing" },
    { c: "Jubilee Hills · Fine dining", t: "₹96,100 from menu repricing" },
    { c: "Kondapur · Family restaurant", t: "₹41,900 in dead inventory" },
    { c: "Kukatpally · Cafe", t: "₹28,600 in Swiggy promo over-spend" },
  ];
  // duplicate for seamless marquee
  const loop = [...items, ...items];
  return (
    <section className="live-feed-section">
      <div className="live-feed-header">
        <span className="pulse-dot"></span>
        <span className="live-feed-label">Live restaurant profit leaks · This week</span>
      </div>
      <div className="live-feed-track">
        {loop.map((it, i) => (
          <span key={i} className="live-feed-item">
            <span className="live-feed-dot"></span>
            <span className="live-feed-city">{it.c}</span>
            <span className="live-feed-finding">Monsoon found {it.t}</span>
          </span>
        ))}
      </div>
    </section>
  );
}

function DiscoverDark() {
  const [expanded, setExpanded] = React.useState(-1);
  return (
    <section className="ml-section console-dark discover-dark-section" id="features">
      <div className="discover-dark-head">
        <span className="ml-eyebrow" style={{ display: "block", marginBottom: 14 }}>What Monsoon restaurant analytics analyses</span>
        <h2>50+ restaurant operational metrics. <em>One ranked list of fixes for profit optimization.</em></h2>
        <p className="lead" style={{ margin: "16px auto 0" }}>From hour-by-hour staffing analysis to ingredient cost creep — pulled from your Petpooja or Restroworks data, compared against restaurants like yours, ranked by rupee impact.</p>
      </div>

      {/* Desktop: standard 3-col grid */}
      <div className="feat-grid discover-desktop">
        {DISCOVER.map((f) => (
          <div className="feat-card" key={f.h}>
            <div className="ic-wrap"><f.I /></div>
            <h3>{f.h}</h3>
            <p>{f.p}</p>
          </div>
        ))}
      </div>

      {/* Mobile: 2-col compact tap-to-expand */}
      <div className="discover-mobile-grid">
        {DISCOVER.map((f, i) => (
          <div
            className={`dm-card ${expanded === i ? "is-expanded" : ""}`}
            key={f.h}
            onClick={() => setExpanded(expanded === i ? -1 : i)}
          >
            <div className="dm-card-top">
              <div className="dm-card-icon"><f.I /></div>
              <h4 className="dm-card-title">{f.h}</h4>
            </div>
            <div className="dm-card-body">
              <p>{f.p}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function StepsDark() {
  return (
    <section className="ml-section console-dark">
      <div style={{ textAlign: "center", marginBottom: 64 }}>
        <span className="ml-eyebrow" style={{ display: "block", marginBottom: 14 }}>From upload to insight in 3 days</span>
        <h2>Four steps. <em>One short report.</em></h2>
      </div>
      {/* Desktop: horizontal 4-col */}
      <div className="steps-wrap steps-desktop">
        {STEPS.map((s) => (
          <div className="step" key={s.n}>
            <div className="step-num">{s.n}</div>
            <h4>{s.h}</h4>
            <p>{s.p}</p>
          </div>
        ))}
      </div>
      {/* Mobile: vertical flowchart */}
      <div className="steps-flow steps-flow-dark">
        {STEPS.map((s, i) => (
          <div className="sf-step" key={s.n}>
            <div className="sf-num">{s.n}</div>
            <h4 className="sf-title">{s.h}</h4>
            <p className="sf-desc">{s.p}</p>
            {i < STEPS.length - 1 && <div className="sf-line"></div>}
          </div>
        ))}
      </div>
    </section>
  );
}

// data-source connection visualization
function DataSourcesViz() {
  const sources = [
    { name: "Petpooja", c: "#FF6B35", role: "POS billing data", img: "uploads/petpooja.png" },
    { name: "Restroworks", c: "#1E40AF", role: "POS billing data", img: "uploads/restroworks.png" },
    { name: "Zomato", c: "#E23744", role: "Aggregator orders", img: "uploads/zomato.png" },
    { name: "Swiggy", c: "#FC8019", role: "Aggregator orders", img: "uploads/swiggy.png" },
    { name: "Razorpay", c: "#3395FF", role: "Payment settlements", img: "uploads/razorpay.png" },
    { name: "Tally", c: "#1A6B3F", role: "Inventory & vendors", img: "uploads/tally.png" },
  ];
  return (
    <section className="ml-section datasources-section">
      <div className="datasources-head">
        <span className="ml-eyebrow" style={{ display: "block", marginBottom: 14 }}>Where we pull from</span>
        <h2>Connects to the POS tools <em>you already use.</em></h2>
        <p className="lead" style={{ margin: "16px auto 0" }}>No new software to install. No staff to retrain. Hand us a CSV export from Petpooja, Restroworks, or any POS — or grant read-only access — we do the restaurant data analysis.</p>
      </div>

      {/* Desktop: SVG visualization */}
      <div className="datasources-svg-wrap">
        <svg width="100%" height="280" viewBox="0 0 1000 280" style={{ display: "block" }}>
          {sources.map((s, i) => {
            const x = 80 + (i / (sources.length - 1)) * 840;
            return (
              <g key={s.name + "-line"}>
                <path d={`M ${x} 60 Q ${x} 140, 500 220`}
                  stroke="var(--maroon-800)" strokeWidth="1.5"
                  strokeDasharray="4 4" fill="none" opacity=".35" />
              </g>
            );
          })}
          {sources.map((s, i) => {
            const x = 80 + (i / (sources.length - 1)) * 840;
            return (
              <g key={s.name}>
                <circle cx={x} cy="50" r="28" fill="#fff" stroke={s.c} strokeWidth="2.5" />
                <clipPath id={`clip-${s.name}`}>
                  <circle cx={x} cy="50" r="25" />
                </clipPath>
                <image
                  href={s.img}
                  x={x - 20} y={30}
                  width="40" height="40"
                  clipPath={`url(#clip-${s.name})`}
                  preserveAspectRatio="xMidYMid slice"
                />
                <text x={x} y={94} fontSize="12" textAnchor="middle" fill="var(--ink)" fontWeight="600">{s.name}</text>
                <text x={x} y={110} fontSize="11" textAnchor="middle" fill="var(--muted)">{s.role}</text>
              </g>
            );
          })}
          <circle cx="500" cy="220" r="42" fill="var(--maroon-800)" />
          <text x="500" y="218" fontSize="14" fontWeight="600" textAnchor="middle" fill="#fff" fontFamily="var(--font-italic)" fontStyle="italic">monsoon</text>
          <text x="500" y="234" fontSize="9" textAnchor="middle" fill="rgba(255,255,255,.7)" letterSpacing="2">INTELLIGENCE</text>
        </svg>
      </div>

      {/* Mobile: card grid */}
      <div className="datasources-mobile-grid">
        {sources.map((s) => (
          <div className="ds-chip" key={s.name}>
            <img src={s.img} alt={`${s.name} integration for restaurant data analysis`} className="ds-chip-img" />
            <div className="ds-chip-info">
              <span className="ds-chip-name">{s.name}</span>
              <span className="ds-chip-role">{s.role}</span>
            </div>
            <div className="ds-chip-line" style={{ background: s.c }}></div>
          </div>
        ))}
        <div className="ds-hub">
          <div className="ds-hub-circle">
            <Wordmark size={16} color="#fff" />
          </div>
          <span className="ds-hub-label">All data flows into one intelligence layer</span>
        </div>
      </div>
    </section>
  );
}

function DirectionC({ tweaks }) {
  const headline = HERO_HEADLINES[tweaks.headlineIdx];
  return (
    <div className="ml-root dir-c" data-theme={tweaks.theme}>
      <div style={{ position: "relative" }}>
        <NavConsole />
        <HeroConsole headline={headline} dashDensity={tweaks.dashDensity} />
      </div>
      <LiveFeed />
      <StatsBar />
      <DataSourcesViz />
      <DiscoverDark />
      <TestimonialAuto style={tweaks.testimonialStyle} />
      <MidPageCTA />
      <StepsDark />
      <SampleReport />
      <CompareSection />
      <PricingSection />
      <FAQSection />
      <CTABanner />
      <Footer />
      <StickyMobileCTA />
    </div>
  );
}

window.DirectionC = DirectionC;
