// Monsoon — shared landing-page section components used across directions

const { useState: useStateS, useEffect: useEffectS, useRef: useRefS } = React;

const WA_NUMBER = "918688664337";
const WA_TEXT = encodeURIComponent("Hi, I want my restaurant profit audit");
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${WA_TEXT}`;

/* ───── Sticky bottom WhatsApp CTA (mobile only, CSS hides on desktop) ───── */
function StickyMobileCTA() {
  return (
    <div className="sticky-wa-bar">
      <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="sticky-wa-btn">
        <Icon.Whatsapp />
        <span>Get Your Audit — ₹249</span>
      </a>
    </div>
  );
}

/* ───── Mid-page CTA (inserted after testimonial) ───── */
function MidPageCTA() {
  const ref = window.useReveal();
  return (
    <section className="ml-section mid-cta-section reveal" ref={ref}>
      <div className="mid-cta-card">
        <h3>Your restaurant is losing money every single day.</h3>
        <p>500+ restaurant owners already found out exactly where their profit was going. It took them 2 minutes to start. Don't wait another week.</p>
        <div className="mid-cta-urgency">
          <span className="pulse-dot"></span>
          <span>Only <strong>7 spots left</strong> this week</span>
        </div>
        <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="ml-btn wa-btn">
          <Icon.Whatsapp /> Get My Audit — ₹249
        </a>
      </div>
    </section>
  );
}

/* ───── Hero social proof strip (avatars + text, right under CTA) ───── */
function HeroSocialProof() {
  return (
    <div className="hero-social-proof">
      <div className="hero-social-avatars">
        <img className="av" src="uploads/avatar1.png" alt="Restaurant owner" style={{ objectFit: "cover" }} />
        <img className="av" src="uploads/avatar2.png" alt="Restaurant operator" style={{ objectFit: "cover" }} />
        <img className="av" src="uploads/avatar3.png" alt="Restaurant owner" style={{ objectFit: "cover" }} />
        <img className="av" src="uploads/avatar4.png" alt="Restaurant owner" style={{ objectFit: "cover" }} />
        <img className="av" src="uploads/avatar5.png" alt="Restaurant owner" style={{ objectFit: "cover" }} />
      </div>
      <span className="hero-social-text"><strong>500+ owners</strong> already got their report</span>
    </div>
  );
}

/* ───── Urgency badge (reusable) ───── */
function UrgencyBadge() {
  return (
    <div className="urgency-badge">
      <span className="pulse-dot"></span>
      <span>Only <strong>7 spots left</strong> this week — we do max 20 audits</span>
    </div>
  );
}

/* HERO HEADLINES — cycled via tweaks */
const HERO_HEADLINES = [
  { lead: "Your restaurant is losing money.", accent: "You just can't see it yet.", sub: "Every month, ₹87,000 leaks out of your restaurant — wrong pricing, extra staff, bad discounts. Your billing software won't show this. We will. In 3 days. For just ₹249." },
  { lead: "₹18 lakh revenue.", accent: "But where is the profit?", sub: "You see the top line. But you don't see the ₹87,000 leaking out every month — extra staff on slow days, bestseller with no margin, delivery discounts costing more than they earn. We find it all." },
  { lead: "Your bestseller dish?", accent: "It's actually losing you money.", sub: "You sell 90+ plates a day. But the margin is only 19%. Your most popular dish is keeping you busy — and keeping you broke. We show you exactly which dishes to push and which to fix." },
  { lead: "Every week you wait,", accent: "₹22,000 gone.", sub: "That's ₹87,000 per month. Just sitting there in your POS data — leaking out. Other owners fixed it in 30 days. You can too. It starts with one WhatsApp message." },
  { lead: "We read your POS data.", accent: "We tell you what to fix.", sub: "Works with Petpooja, Restroworks, Zomato, Swiggy, any billing system. You send us 3 months of data. We send you a clear report — what's wrong, how much it costs you, and what to do about it." },
];

const TESTIMONIAL = {
  quote: "I thought my restaurant was profitable. Monsoon showed me that ₹1.2 lakh was leaking every month — menu pricing, extra staff, delivery discounts. We fixed it in 30 days. Best ₹249 I ever spent.",
  name: "Arun Kumar",
  role: "Owner, Spice Garden",
  short: "₹1.2L recovered in 30 days.",
};

const FAQS = [
  { q: "What data do I need to share?", a: "Just your POS export — Petpooja, Restroworks, SlickPOS, or a plain Excel file. 3 months of data is enough. No bank login or GST access needed." },
  { q: "How is this different from my POS reports?", a: "Your POS tells you what happened. Monsoon tells you what to do — which dish to push, where extra staff is costing you, which discounts are losing money. POS describes. Monsoon recommends." },
  { q: "Is my data safe?", a: "100% safe. Encrypted and used only to create your report. Never shared with anyone — not other restaurants, not tax authorities, nobody. You can request deletion anytime." },
  { q: "I'm not good with technology. Will this work for me?", a: "Absolutely. Send one file. Get a simple PDF on WhatsApp in 3 days. Plain English. Numbers in rupees. No dashboard, no login needed." },
  { q: "What if the report doesn't help me?", a: "Full ₹249 refund. No questions asked. But in 500+ audits, that has never happened. Average restaurant finds ₹87,000/month in leaks." },
  { q: "My restaurant is small. Will this still work?", a: "Especially for small restaurants. Even at ₹3 lakh/month revenue, we typically find ₹30,000–₹40,000/month in leaks. When margins are tight, every leak matters." },
  { q: "How quickly will I see results?", a: "Most owners fix the #1 issue in the first week — usually a reprice or staff adjustment. Within 30 days, typical recovery is ₹40,000 to ₹1.2 lakh per month. The report tells you exactly what to do." },
];

/* ───── HERO (two-column, faithful) ───── */
function HeroFaithful({ headline, dashDensity }) {
  const [ref, inView] = useInView();
  return (
    <div className="hero-faithful" ref={ref}>
      <div className="hero-faithful-left">
        <span className="ml-eyebrow hero-entrance">Restaurant Profit Audit · ₹249 only</span>
        <h1 className="hero-h1 hero-entrance">
          {headline.lead}<br />
          <span className="accent">{headline.accent}</span>
        </h1>
        <p className="hero-lead hero-entrance">{headline.sub}</p>
        <ul className="hero-checks hero-entrance">
          <li><Icon.Check style={{ color: "var(--maroon-800)" }} /><span>Report in 3 days — delivered on WhatsApp. No login.</span></li>
          <li><Icon.Check style={{ color: "var(--maroon-800)" }} /><span>Simple language. All numbers in rupees. No jargon.</span></li>
          <li><Icon.Check style={{ color: "var(--maroon-800)" }} /><span>Works with Petpooja, Restroworks, any POS system.</span></li>
          <li><Icon.Check style={{ color: "var(--maroon-800)" }} /><span>Not useful? Full ₹249 refund. No questions.</span></li>
        </ul>
        <div className="hero-cta-row hero-entrance">
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="ml-btn wa-btn"><Icon.Whatsapp /> Get My Audit — ₹249</a>
          <span className="hero-secure"><Icon.Lock /> Data 100% safe</span>
        </div>
        <UrgencyBadge />
        <HeroSocialProof />
        <div className="hero-meta-row hero-entrance">
          <span><Icon.Clock style={{ color: "var(--maroon-800)" }} /> No setup</span>
          <span><Icon.Truck style={{ color: "var(--maroon-800)" }} /> 3-day delivery</span>
          <span><Icon.Cross style={{ color: "var(--maroon-800)" }} /> Full refund guarantee</span>
        </div>
      </div>
      <div className="hero-faithful-right hero-dashboard-desktop">
        <DashboardMock density={dashDensity} inView={inView} />
      </div>
    </div>
  );
}

/* ───── HERO (editorial — single column big italic) ───── */
function HeroEditorial({ headline, dashDensity }) {
  const [ref, inView] = useInView();
  return (
    <div className="hero-edit" ref={ref}>
      <div className="hero-edit-top hero-entrance">
        <span className="ml-eyebrow">Find your profit leaks. ₹249. 3 days. WhatsApp delivery.</span>
        <div className="hero-edit-pill">
          <span className="pulse-dot"></span>
          <span>Only 7 spots left this week</span>
        </div>
      </div>
      <h1 className="hero-edit-h1 hero-entrance">
        <span className="line">{headline.lead}</span>
        <span className="line italic">{headline.accent}</span>
      </h1>
      <div className="hero-edit-grid hero-entrance">
        <p className="hero-edit-lead">{headline.sub}</p>
        <div className="hero-edit-cta">
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="ml-btn wa-btn"><Icon.Whatsapp /> Get My Audit — ₹249</a>
          <UrgencyBadge />
          <HeroSocialProof />
          <p className="hero-edit-fine">₹249 · 3 days · No setup · Refund if not useful</p>
        </div>
      </div>
      <div className="hero-edit-dash hero-dashboard-desktop">
        <DashboardMock density={dashDensity} inView={inView} embedded={true} />
      </div>
    </div>
  );
}

/* ───── HERO (console — dashboard-led) ───── */
function HeroConsole({ headline, dashDensity }) {
  const [ref, inView] = useInView();
  return (
    <div className="hero-console" ref={ref}>
      <div className="hero-console-bg"></div>
      <div className="hero-console-grid">
        <div className="hero-console-left">
          <span className="ml-eyebrow hero-entrance" style={{ color: "#F2B97D" }}>Restaurant Profit Audit · Live</span>
          <h1 className="hero-console-h1 hero-entrance">
            <span className="hero-console-lead-text">{headline.lead}</span><br />
            <span className="accent">{headline.accent}</span>
          </h1>
          <p className="hero-console-lead hero-entrance">{headline.sub}</p>
          <div className="hero-console-row hero-entrance">
            <div className="hc-stat"><div className="n">3 days</div><div className="l">Report ready</div></div>
            <div className="hc-stat"><div className="n">₹87k</div><div className="l">Avg. leak found</div></div>
            <div className="hc-stat"><div className="n">500+</div><div className="l">Restaurants done</div></div>
          </div>
          <div className="hero-console-cta hero-entrance">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="ml-btn light wa-btn"><Icon.Whatsapp /> Start ₹249 Audit</a>
            <button className="ml-btn ghost ghost-light">See sample report</button>
          </div>
          <UrgencyBadge />
          <HeroSocialProof />
        </div>
        <div className="hero-console-right hero-dashboard-desktop">
          <div className="hero-console-frame">
            <div className="hero-console-frame-top">
              <span className="dot d1"></span><span className="dot d2"></span><span className="dot d3"></span>
              <span className="url">monsoon.ai/operator/spice-garden</span>
            </div>
            <DashboardMock density={dashDensity} inView={inView} />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ───── Logo strip ───── */
function LogoStrip() {
  const brands = [
    { name: "Petpooja", c: "#FF6B35", img: "uploads/petpooja.png" },
    { name: "Restroworks", c: "#1E40AF", img: "uploads/restroworks.png" },
    { name: "Zomato", c: "#E23744", img: "uploads/zomato.png" },
    { name: "Swiggy", c: "#FC8019", img: "uploads/swiggy.png" },
    { name: "Razorpay", c: "#3395FF", img: "uploads/razorpay.png" },
    { name: "Tally", c: "#1A6B3F", img: "uploads/tally.png" },
  ];
  return (
    <div className="logo-strip">
      <span className="lbl">Works with:</span>
      {brands.map((b) => (
        <span className="brand-chip" key={b.name}>
          <img src={b.img} alt={`${b.name} integration`} style={{ width: 28, height: 28, borderRadius: 6, objectFit: "cover" }} />
          {b.name}
        </span>
      ))}
    </div>
  );
}

/* ───── What you'll discover ───── */
const DISCOVER = [
  { I: Icon.Rupee, h: "Where your money is going", p: "Discounts that don't work. Staff on slow days. Dead stock in the kitchen. Waste nobody is tracking. Your POS won't show this. We will — in exact rupees." },
  { I: Icon.Dish, h: "Which dishes make money, which don't", p: "Your bestseller might have the lowest margin. We rank every dish by real profit per plate. You'll know exactly what to push and what to reprice." },
  { I: Icon.Box, h: "Inventory eating your profit", p: "Prices going up, stock sitting too long, ingredients spoiling. We catch what your manager is missing — and tell you where to cut." },
  { I: Icon.Users, h: "Which customers actually matter", p: "High-order customers are not always high-profit customers. We show you who brings real margin — so you stop giving discounts to the wrong people." },
  { I: Icon.Staff, h: "Extra staff you're paying for", p: "Saturday peak staff on a Tuesday afternoon. 2 extra waiters every slow shift. That's ₹38,000–₹45,000/month wasted. We show you exactly where." },
  { I: Icon.Trend, h: "A clear list: do this, save this much", p: "No charts. No dashboards. Just 3–6 things to do this week. With exact rupee amounts you'll save. \"Reprice biryani = +₹54k/month.\" That simple." },
];

function DiscoverSection({ heading = "What we find in your data" }) {
  const ref = window.useReveal();
  return (
    <section className="ml-section reveal" ref={ref} id="features">
      <div className="ml-section-head" style={{ textAlign: "center", marginBottom: 56 }}>
        <span className="ml-eyebrow" style={{ display: "block", marginBottom: 14 }}>What we check</span>
        <h2 style={{ textAlign: "center", margin: "0 auto" }}>{heading}</h2>
      </div>
      <div className="feat-grid reveal-stagger">
        {DISCOVER.map((f) => (
          <div className="feat-card" key={f.h}>
            <div className="ic-wrap"><f.I /></div>
            <h3>{f.h}</h3>
            <p>{f.p}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ───── How it works ───── */
const STEPS = [
  { n: "01", h: "Send your data on WhatsApp", p: "Export 3 months from Petpooja, Restroworks, or any POS. CSV or Excel. Takes 2 minutes. Or just forward the file on WhatsApp — we handle the rest." },
  { n: "02", h: "We check everything", p: "Our team + AI looks at 50+ things — menu margins, staffing patterns, discount costs, inventory waste. We compare with 500+ similar restaurants." },
  { n: "03", h: "Report comes on WhatsApp", p: "In 3 days — a short PDF in simple language. Every number in rupees. Top 3–6 fixes, ranked by how much money you'll save. Plus a voice note summary." },
  { n: "04", h: "Fix it. Keep the profit.", p: "Most owners fix the #1 thing in the first week. Average saving: ₹40,000 to ₹1.2 lakh per month. Within 30 days. That's real money back in your pocket." },
];

function StepsSection() {
  const ref = window.useReveal();
  return (
    <section className="ml-section reveal" ref={ref} id="steps">
      <div style={{ textAlign: "center", marginBottom: 64 }}>
        <span className="ml-eyebrow" style={{ display: "block", marginBottom: 14 }}>Very simple process</span>
        <h2>WhatsApp us today. <em>Report in 3 days.</em></h2>
        <p className="lead" style={{ margin: "16px auto 0" }}>4 steps. 3 days. One report that tells you exactly what to fix and how much you'll save.</p>
      </div>
      {/* Desktop: horizontal 4-col */}
      <div className="steps-wrap steps-desktop">
        {STEPS.map((s, i) => (
          <div className="step" key={s.n}>
            <div className="step-num">{s.n}</div>
            <h4>{s.h}</h4>
            <p>{s.p}</p>
          </div>
        ))}
      </div>
      {/* Mobile: vertical flowchart */}
      <div className="steps-flow">
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

/* ───── Stats bar ───── */
function StatsBar() {
  const ref = window.useReveal();
  return (
    <section className="ml-section dense stats-section reveal" ref={ref}>
      <div className="stats-bar">
        <div className="stat-cell">
          <div className="stat-num">500+</div>
          <div className="stat-lbl">Restaurants audited</div>
        </div>
        <div className="stat-cell">
          <div className="stat-num">₹87k</div>
          <div className="stat-lbl">Average leak found per restaurant</div>
        </div>
        <div className="stat-cell">
          <div className="stat-num">3 days</div>
          <div className="stat-lbl">Data to report — that's it</div>
        </div>
        <div className="stat-cell">
          <div className="stat-num">₹249</div>
          <div className="stat-lbl">Full audit cost. Refund if not useful.</div>
        </div>
      </div>
    </section>
  );
}

/* ───── Testimonial — three variants ───── */
function TestimonialImageQuote() {
  const ref = window.useReveal();
  return (
    <section className="ml-section reveal" ref={ref} id="why">
      <div className="testi-imgquote">
        <div className="testi-left">
          <span className="ml-eyebrow">Restaurant Owner</span>
          <p className="testi-quote">"{TESTIMONIAL.quote}"</p>
          <div className="testi-stars">
            <Icon.Star /><Icon.Star /><Icon.Star /><Icon.Star /><Icon.Star />
          </div>
          <div>
            <div className="testi-name">{TESTIMONIAL.name}</div>
            <div className="testi-role">{TESTIMONIAL.role}</div>
          </div>
        </div>
        <div className="testi-right">
          <div className="testi-portrait">
            <img src="uploads/testimonial-portrait.png" alt="Arun Kumar, Owner of Spice Garden" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "inherit", display: "block" }} />
            <div className="testi-glow"></div>
          </div>
          <div className="testi-reco">
            <h5 style={{ color: "var(--maroon-800)" }}>Monsoon recommended</h5>
            <p>Reduce weekend delivery discount by 5%. Push 3 high-margin dishes harder.</p>
            <div className="impact">
              <div className="impact-lbl">Impact</div>
              <div className="impact-val">+ ₹92,400 / month</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialMetrics() {
  const ref = window.useReveal();
  return (
    <section className="ml-section reveal" ref={ref} id="why">
      <div className="testi-metrics">
        <div className="quote-card">
          <Icon.Quote style={{ color: "var(--maroon-800)" }} />
          <p className="qt">
            "{TESTIMONIAL.quote}"
          </p>
          <div>
            <div style={{ fontWeight: 600 }}>{TESTIMONIAL.name}</div>
            <div style={{ color: "var(--muted)", fontSize: 14, marginTop: 2 }}>{TESTIMONIAL.role}</div>
          </div>
        </div>
        <div className="mcards">
          <div className="mcard">
            <div className="lbl">Profit recovered</div>
            <div className="num">₹1.2L</div>
            <div className="sub">in just 30 days</div>
          </div>
          <div className="mcard alt">
            <div className="lbl">Waste reduced</div>
            <div className="num">−47%</div>
            <div className="sub">ingredient waste down</div>
          </div>
          <div className="mcard alt">
            <div className="lbl">Time saved</div>
            <div className="num">6 hrs</div>
            <div className="sub">no more manual tracking</div>
          </div>
          <div className="mcard">
            <div className="lbl">Margin improved</div>
            <div className="num">+5.4%</div>
            <div className="sub">gross margin increase</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialVideo() {
  return (
    <section className="ml-section">
      <div className="testi-video">
        <div className="testi-video-frame">
          <div className="testi-video-play"></div>
          <div className="testi-video-meta">
            <div className="who">{TESTIMONIAL.name}<span>{TESTIMONIAL.role}</span></div>
            <div className="dur">2:14</div>
          </div>
        </div>
        <div className="testi-video-body">
          <Icon.Quote style={{ color: "#F2B97D" }} />
          <p className="vquote">
            "I've been running my restaurant for 14 years. I thought everything was fine. <em>Monsoon showed me ₹1.2 lakh monthly leak</em> that I had no idea about."
          </p>
          <div className="testi-video-meta-bottom">
            <div className="stat"><div className="n">₹1.2L</div><div className="l">recovered month 1</div></div>
            <div className="stat"><div className="n">−47%</div><div className="l">waste reduced</div></div>
            <div className="stat"><div className="n">3 days</div><div className="l">report time</div></div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───── Comparison: POS vs Monsoon ───── */
function CompareSection() {
  const ref = window.useReveal();
  const rows = [
    { l: "What it shows", a: "How much you sold. That's it.", b: "Where money is leaking. And how to stop it." },
    { l: "Data it uses", a: "Only your billing data.", b: "POS + Zomato + Swiggy + Razorpay + ingredient costs." },
    { l: "What you get", a: "Charts and tables. Figure it out yourself.", b: "Simple PDF on WhatsApp. Clear instructions. In rupees." },
    { l: "Comparison", a: "Nothing. No idea how others are doing.", b: "Compared with 500+ similar restaurants." },
    { l: "What to do next", a: "Nothing. No advice given.", b: "3–6 fixes. This week. With exact rupee impact." },
    { l: "Made for", a: "Your accountant.", b: "You. The owner. Busy person. No time for dashboards." },
  ];
  return (
    <section className="ml-section reveal" ref={ref} id="compare">
      <div style={{ textAlign: "center", marginBottom: 56 }}>
        <span className="ml-eyebrow" style={{ display: "block", marginBottom: 14 }}>POS reports vs Monsoon</span>
        <h2>Your POS shows <em>what happened.</em><br />We tell you <em>what to do.</em></h2>
      </div>
      <div className="compare-card">
        <div className="compare-grid">
          <div className="head"></div>
          <div className="head pos">Your POS reports</div>
          <div className="head mon">Monsoon Audit</div>
          {rows.map((r) => (
            <React.Fragment key={r.l}>
              <div className="row-lbl">{r.l}</div>
              <div className="row-pos">{r.a}</div>
              <div className="row-mon"><Icon.Check className="ck" style={{ display: "inline", verticalAlign: "-2px" }} />{r.b}</div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───── Sample report preview ───── */
function SampleReport() {
  const ref = window.useReveal();
  return (
    <section className="ml-section reveal" ref={ref} id="sample">
      <div className="sample-shell">
        <div>
          <span className="ml-eyebrow">Sample report</span>
          <h2 style={{ marginTop: 14 }}>This is what you get on <em>WhatsApp</em> in 3 days.</h2>
          <p className="lead">No login. No dashboard. No app download. Just a short PDF that tells you: this is where you're losing money, this is how much, and this is what to do. Plus a voice note so you can listen on the go.</p>
          <ul className="hero-checks" style={{ marginTop: 24 }}>
            <li><Icon.Check style={{ color: "var(--maroon-800)" }} /><span>3–6 fixes ranked by rupee impact</span></li>
            <li><Icon.Check style={{ color: "var(--maroon-800)" }} /><span>Menu analysis — which dishes make money, which don't</span></li>
            <li><Icon.Check style={{ color: "var(--maroon-800)" }} /><span>Staff optimization — where you have extra people</span></li>
            <li><Icon.Check style={{ color: "var(--maroon-800)" }} /><span>Comparison with 500+ similar restaurants</span></li>
          </ul>
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="ml-btn wa-btn" style={{ marginTop: 32 }}><Icon.Whatsapp /> See a real sample</a>
        </div>
        <div style={{ position: "relative" }}>
          <div className="sample-doc-2"></div>
          <div className="sample-doc">
            <div className="sample-head">
              <Wordmark size={24} color="#fff" />
              <div className="meta">
                Audit Report · #SG-04287<br />
                Spice Garden<br />
                30 April 2026
              </div>
            </div>
            <div className="sample-body">
              <h5>Executive Summary</h5>
              <h3>3 things to fix this month.</h3>
              <div className="sample-stat-row">
                <div className="sample-stat">
                  <div className="n">₹1,12,400</div>
                  <div className="l">Monthly leak found</div>
                </div>
                <div className="sample-stat">
                  <div className="n">21 days</div>
                  <div className="l">To recover this</div>
                </div>
              </div>
              <div className="sample-bullet"><span className="b"></span><span><b>Increase biryani price by ₹20.</b> 92 plates/day at 19% margin — bestseller but lowest-margin dish. (+₹54,000/mo)</span></div>
              <div className="sample-bullet"><span className="b"></span><span><b>Reduce weekend staff by 2.</b> Saturday lunch has more staff than demand needs. (−₹38,000/mo)</span></div>
              <div className="sample-bullet"><span className="b"></span><span><b>Push 3 hidden stars on delivery apps.</b> Paneer Tikka, Mutton Korma, Cold Coffee — high margin, low orders. (+₹20,400/mo)</span></div>
              <div className="sample-foot">
                <span>Page 1 of 6</span>
                <span>monsoon · audit #SG-04287</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───── Pricing ───── */
function PricingSection() {
  const ref = window.useReveal();
  return (
    <section className="ml-section reveal" ref={ref} id="pricing">
      <div style={{ textAlign: "center", marginBottom: 56 }}>
        <span className="ml-eyebrow" style={{ display: "block", marginBottom: 14 }}>Price</span>
        <h2>₹249. That's it. <em>Full audit.</em></h2>
        <p className="lead" style={{ margin: "16px auto 0" }}>Less than one plate of biryani. No subscription. No hidden charges. Not useful? Full refund.</p>
      </div>
      <div className="pricing-grid">
        <div className="price-card">
          <div className="p-name">One-time audit</div>
          <div className="p-price"><span className="amt">₹249</span><span className="per">one-time</span></div>
          <p className="p-meta">Complete restaurant audit. 50+ metrics checked. Top 3 fixes with rupee impact. Delivered on WhatsApp in 3 working days.</p>
          <ul className="p-feat">
            <li><Icon.Check /> 3 months POS data analysed</li>
            <li><Icon.Check /> Simple PDF report — no jargon</li>
            <li><Icon.Check /> WhatsApp delivery + voice note</li>
            <li><Icon.Check /> Compared with similar restaurants</li>
            <li><Icon.Check /> Full refund if not useful</li>
          </ul>
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="ml-btn wa-btn">
            <Icon.Whatsapp /> Get My Audit — ₹249
          </a>
          <UrgencyBadge />
        </div>
        <div className="price-card featured mobile-price-secondary">
          <span className="p-tag">Most chosen after audit</span>
          <div className="p-name">Monthly tracking</div>
          <div className="p-price"><span className="amt">₹999</span><span className="per">/ month</span></div>
          <p className="p-meta">Weekly WhatsApp reports. Monthly call with analyst. Real-time alerts when costs go up or margins drop. Cancel anytime.</p>
          <ul className="p-feat">
            <li><Icon.Check /> Live POS + Zomato + Swiggy connected</li>
            <li><Icon.Check /> Weekly profit brief on WhatsApp</li>
            <li><Icon.Check /> Monthly 30-min call with analyst</li>
            <li><Icon.Check /> Instant alerts on rising costs</li>
            <li><Icon.Check /> First month free with your audit</li>
          </ul>
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="ml-btn">Talk to us <Icon.Arrow className="arr" /></a>
        </div>
      </div>
    </section>
  );
}

/* ───── FAQ ───── */
function FAQSection() {
  const [open, setOpen] = useStateS(0);
  const ref = window.useReveal();
  return (
    <section className="ml-section reveal" ref={ref} id="faq">
      <div style={{ textAlign: "center", marginBottom: 56 }}>
        <span className="ml-eyebrow" style={{ display: "block", marginBottom: 14 }}>Common questions</span>
        <h2>Got questions? <em>Read this first.</em></h2>
      </div>
      <div className="faq-list" style={{ maxWidth: 820, margin: "0 auto" }}>
        {FAQS.map((f, i) => (
          <div className={"faq-item " + (open === i ? "open" : "")} key={f.q}>
            <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)}>
              <span>{f.q}</span>
              <Icon.Chevron className="chev" />
            </button>
            <div className="faq-a">{f.a}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ───── CTA banner ───── */
function CTABanner() {
  const ref = window.useReveal();
  return (
    <section className="ml-section ml-section-cta reveal" ref={ref}>
      <div className="cta-banner">
        <div className="cta-seal">₹249</div>
        <div className="cta-text">
          <h3>Every day you wait, ₹2,900 walks out the door. <em>Stop it now.</em></h3>
          <div className="row">
            <span><Icon.Check style={{ color: "var(--accent-pos)" }} /> No setup</span>
            <span><Icon.Check style={{ color: "var(--accent-pos)" }} /> Data 100% safe</span>
            <span><Icon.Check style={{ color: "var(--accent-pos)" }} /> Report in 3 days</span>
            <span><Icon.Check style={{ color: "var(--accent-pos)" }} /> Refund guarantee</span>
          </div>
          <div className="cta-avatars">
            <div className="stack">
              <img className="av" src="uploads/avatar1.png" alt="Restaurant owner" style={{ objectFit: "cover" }} />
              <img className="av" src="uploads/avatar2.png" alt="Restaurant operator" style={{ objectFit: "cover" }} />
              <img className="av" src="uploads/avatar3.png" alt="Restaurant owner" style={{ objectFit: "cover" }} />
              <img className="av" src="uploads/avatar4.png" alt="Restaurant operator" style={{ objectFit: "cover" }} />
              <img className="av" src="uploads/avatar5.png" alt="Restaurant owner" style={{ objectFit: "cover" }} />
            </div>
            <span style={{ fontSize: 13, color: "var(--muted)" }}>500+ owners already fixed their leaks</span>
          </div>
        </div>
        <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="ml-btn wa-btn"><Icon.Whatsapp /> Get My Audit — ₹249</a>
      </div>
    </section>
  );
}

/* ───── Nav ───── */
function Nav({ variant = "light" }) {
  const [menuOpen, setMenuOpen] = useStateS(false);
  return (
    <div className="ml-nav-wrap" data-variant={variant}>
      <nav className="ml-nav" data-variant={variant}>
        <div className="ml-nav-brand">
          <Wordmark size={26} color={variant === "dark" ? "#fff" : "var(--maroon-800)"} />
        </div>
        <div className={`ml-nav-links ${menuOpen ? "is-open" : ""}`}>
          <a href="#why" onClick={() => setMenuOpen(false)}>Why Monsoon</a>
          <a href="#features" onClick={() => setMenuOpen(false)}>Features</a>
          <a href="#sample" onClick={() => setMenuOpen(false)}>Sample report</a>
          <a href="#pricing" onClick={() => setMenuOpen(false)}>Pricing</a>
          <a href="#faq" onClick={() => setMenuOpen(false)}>FAQs</a>
        </div>
        <button className="ml-hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          <span className={`hb-line ${menuOpen ? "open" : ""}`}></span>
          <span className={`hb-line ${menuOpen ? "open" : ""}`}></span>
          <span className={`hb-line ${menuOpen ? "open" : ""}`}></span>
        </button>
      </nav>
      {menuOpen && <div className="mobile-menu-overlay" onClick={() => setMenuOpen(false)}></div>}
    </div>
  );
}

/* ───── Footer ───── */
function Footer() {
  return (
    <footer className="ml-foot">
      {/* Desktop: full grid */}
      <div className="foot-grid foot-desktop">
        <div className="foot-col foot-about">
          <Wordmark size={32} color="#fff" />
          <div style={{ fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", marginTop: 8, color: "rgba(255,255,255,.6)" }}>Sales intelligence for restaurants</div>
          <p>The intelligence layer your POS doesn't ship. Built for Indian restaurant operators.</p>
          <div className="foot-socials">
            <a href="#" aria-label="Instagram">IG</a>
            <a href="#" aria-label="LinkedIn">in</a>
            <a href="#" aria-label="YouTube">▶</a>
            <a href="#" aria-label="Facebook">f</a>
          </div>
        </div>
        <div className="foot-col">
          <h5>Product</h5>
          <ul>
            <li><a href="#">Features</a></li>
            <li><a href="#">Sample report</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Integrations</a></li>
          </ul>
        </div>
        <div className="foot-col">
          <h5>Company</h5>
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div className="foot-col">
          <h5>Resources</h5>
          <ul>
            <li><a href="#">Guides</a></li>
            <li><a href="#">Case studies</a></li>
            <li><a href="#">ROI calculator</a></li>
            <li><a href="#">Glossary</a></li>
          </ul>
        </div>
        <div className="foot-col">
          <h5>Legal</h5>
          <ul>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Terms</a></li>
            <li><a href="#">Refund policy</a></li>
            <li><a href="#">Data security</a></li>
          </ul>
        </div>
        <div className="foot-col foot-contact">
          <h5>Have questions?</h5>
          <div className="row"><Icon.Whatsapp style={{ color: "#5ED69E" }} /><span>8688664337</span></div>
          <div className="row"><Icon.Mail style={{ color: "#F2B97D" }} /><span>hello@monsoon.ai</span></div>
          <div className="row"><Icon.Clock style={{ color: "#fff" }} /><span>Mon – Sat, 10am – 7pm IST</span></div>
        </div>
      </div>

      {/* Mobile: compact footer */}
      <div className="foot-compact">
        <Wordmark size={28} color="#fff" />
        <p className="foot-compact-tagline">Restaurant profit audit. ₹249. 3 days. On WhatsApp.</p>
        <div className="foot-compact-contact">
          <a href="https://wa.me/918688664337" className="foot-compact-wa">
            <Icon.Whatsapp /> WhatsApp us
          </a>
          <a href="mailto:hello@monsoon.ai" className="foot-compact-email">
            <Icon.Mail /> hello@monsoon.ai
          </a>
        </div>
        <div className="foot-compact-copy">© 2026 Monsoon Intelligence Labs · India</div>
      </div>
    </footer>
  );
}

/* Choose testimonial by style */
function TestimonialAuto({ style }) {
  if (style === "metrics") return <TestimonialMetrics />;
  if (style === "video") return <TestimonialVideo />;
  return <TestimonialImageQuote />;
}

Object.assign(window, {
  HERO_HEADLINES, TESTIMONIAL, FAQS, DISCOVER, STEPS,
  WA_LINK, WA_NUMBER,
  HeroFaithful, HeroEditorial, HeroConsole,
  LogoStrip, DiscoverSection, StepsSection, StatsBar,
  TestimonialImageQuote, TestimonialMetrics, TestimonialVideo, TestimonialAuto,
  CompareSection, SampleReport, PricingSection, FAQSection, CTABanner,
  Nav, Footer,
  StickyMobileCTA, MidPageCTA, HeroSocialProof, UrgencyBadge,
});
