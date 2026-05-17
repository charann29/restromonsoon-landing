// Monsoon shared components — primitives + animated dashboard mock
// Globals: React, ReactDOM available. Components attached to window at bottom.

const { useState, useEffect, useRef, useMemo } = React;

/* ---------- Scroll-reveal hook: adds .is-visible when element enters viewport ---------- */
function useReveal(threshold = 0.12) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.classList.add("is-visible"); io.disconnect(); }
    }, { threshold });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}

/* ---------- Wrapper: applies reveal to any section ---------- */
function Reveal({ children, className = "", delay = 0, style = {} }) {
  const ref = useReveal();
  return (
    <div ref={ref} className={`reveal ${className}`} style={{ ...style, transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

Object.assign(window, { useReveal, Reveal });

/* ---------- icon helpers (thin maroon stroke) ---------- */
const Icon = {
  Check: (p) => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" {...p}>
      <circle cx="12" cy="12" r="11" fill="currentColor" opacity="0.12" />
      <path d="M7 12.5l3.2 3 6.8-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  Arrow: (p) => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" {...p}>
      <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  Lock: (p) => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" {...p}>
      <rect x="4" y="11" width="16" height="10" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8 11V8a4 4 0 1 1 8 0v3" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  ),
  Truck: (p) => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" {...p}>
      <path d="M3 7h11v9H3zM14 11h4l3 3v2h-7z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <circle cx="7" cy="18" r="1.5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17" cy="18" r="1.5" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  ),
  Cross: (p) => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" {...p}>
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.6" />
      <path d="M9 9l6 6M15 9l-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  Clock: (p) => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" {...p}>
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  Rupee: (p) => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" {...p}>
      <path d="M7 6h10M7 10h10M9 6c4 0 5 2 5 4s-1 4-5 4H7l7 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  Dish: (p) => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" {...p}>
      <path d="M4 16a8 8 0 0 1 16 0" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M2 18h20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="12" cy="7" r="1.4" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  ),
  Box: (p) => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" {...p}>
      <path d="M3 7l9-4 9 4-9 4-9-4z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M3 7v10l9 4 9-4V7M12 11v10" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  ),
  Users: (p) => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" {...p}>
      <circle cx="9" cy="9" r="3" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17" cy="10" r="2.4" stroke="currentColor" strokeWidth="1.6" />
      <path d="M3 19c1-3 3-5 6-5s5 2 6 5M15 19c.6-2 1.8-3.5 4-3.5s3.4 1.2 4 3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  Staff: (p) => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" {...p}>
      <circle cx="12" cy="8" r="3.2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M5 20c0-3.6 3-6 7-6s7 2.4 7 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  Trend: (p) => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" {...p}>
      <path d="M3 17l5-5 4 3 8-9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 6h6v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  Whatsapp: (p) => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M12 2C6.5 2 2 6.5 2 12c0 1.9.5 3.6 1.4 5.2L2 22l4.9-1.3c1.5.8 3.3 1.3 5.1 1.3 5.5 0 10-4.5 10-10S17.5 2 12 2zm5.6 14.3c-.2.7-1.4 1.4-1.9 1.5-.5.1-1.1.1-1.8-.1-.4-.1-.9-.3-1.6-.6-2.7-1.2-4.5-4-4.6-4.2-.1-.2-1.1-1.5-1.1-2.9 0-1.4.7-2.1 1-2.4.3-.3.6-.3.8-.3.2 0 .4 0 .6 0 .2 0 .4 0 .7.5.2.6.8 2 .9 2.1.1.1.1.3 0 .5-.1.2-.2.3-.3.5-.2.2-.3.4-.5.6-.2.2-.3.4-.1.7.2.3.8 1.4 1.8 2.3 1.3 1.1 2.3 1.5 2.7 1.7.3.1.5.1.7-.1.2-.2.8-.9 1-1.2.2-.3.4-.2.7-.1.3.1 1.8.8 2.1 1 .3.1.5.2.6.3.1.1.1.7-.1 1.3z"/>
    </svg>
  ),
  Mail: (p) => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" {...p}>
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M3 7l9 6 9-6" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  ),
  Star: (p) => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M12 2l3 7 7 .6-5.3 4.6 1.7 7.2L12 17.7 5.6 21.4l1.7-7.2L2 9.6l7-.6z"/>
    </svg>
  ),
  Quote: (p) => (
    <svg width="40" height="32" viewBox="0 0 40 32" fill="currentColor" {...p}>
      <path d="M0 32V18C0 8 6 2 14 0v6c-4 1-7 4-7 9h7v17H0zm22 0V18C22 8 28 2 36 0v6c-4 1-7 4-7 9h7v17H22z" opacity=".22"/>
    </svg>
  ),
  Chevron: (p) => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" {...p}>
      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  Sparkle: (p) => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M12 2l1.7 6.3L20 10l-6.3 1.7L12 18l-1.7-6.3L4 10l6.3-1.7z" opacity=".95"/>
    </svg>
  ),
};

/* ---------- Logo ---------- */
function Wordmark({ size = 36, color = "currentColor", className = "" }) {
  return (
    <img
      src="sse.png"
      alt="Monsoon"
      className={"wordmark " + className}
      style={{
        height: size,
        width: "auto",
        display: "inline-block",
        verticalAlign: "middle",
        background: "#F8F5F2",
        borderRadius: Math.round(size * 0.2),
        padding: Math.round(size * 0.08),
      }}
    />
  );
}

/* ---------- Animated number that ticks up ---------- */
function AnimatedNumber({ value, duration = 1400, prefix = "", suffix = "", format = (n) => n.toLocaleString("en-IN"), play = true }) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!play) { setVal(value); return; }
    let start = null; let raf;
    const ease = (t) => 1 - Math.pow(1 - t, 3);
    const step = (ts) => {
      if (!start) start = ts;
      const p = Math.min(1, (ts - start) / duration);
      setVal(Math.round(value * ease(p)));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [value, duration, play]);
  return <span>{prefix}{format(val)}{suffix}</span>;
}

/* ---------- IntersectionObserver play trigger ---------- */
function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    if (!ref.current || seen) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setSeen(true); io.disconnect(); }
    }, { threshold });
    io.observe(ref.current);
    return () => io.disconnect();
  }, [seen, threshold]);
  return [ref, seen];
}

/* =========================================================================
   ANIMATED DASHBOARD MOCK
   ========================================================================= */

const DASH_TABS = [
  { id: "overview", label: "Overview" },
  { id: "sales", label: "Sales" },
  { id: "menu", label: "Menu Insights" },
  { id: "inventory", label: "Inventory" },
];

// data per tab
const DASH_DATA = {
  overview: {
    metrics: [
      { label: "Total Revenue", value: 1875430, prefix: "₹", delta: "+12.5%", up: true, sub: "vs last month" },
      { label: "Gross Profit", value: 524890, prefix: "₹", delta: "+8.3%", up: true, sub: "vs last month" },
      { label: "Profit Margin", value: 27.9, format: (n) => n.toFixed(1) + "%", delta: "−2.1%", up: false, sub: "vs last month" },
      { label: "Avg Order Value", value: 487, prefix: "₹", delta: "+5.4%", up: true, sub: "vs last month" },
    ],
    chart: { thisMonth: [38,42,40,55,52,68,72,80,76,92,98,105,112,128], lastMonth: [30,34,36,40,44,48,52,56,60,64,68,72,78,86] },
    leaks: [
      { i: 1, label: "Food Waste", value: "₹66,430" },
      { i: 2, label: "Low Margin Items", value: "₹72,680" },
      { i: 3, label: "Overstaffing", value: "₹45,120" },
      { i: 4, label: "Discount Leakage", value: "₹38,760" },
    ],
  },
  sales: {
    metrics: [
      { label: "Dine-in Sales", value: 982400, prefix: "₹", delta: "+9.2%", up: true, sub: "this month" },
      { label: "Zomato", value: 521600, prefix: "₹", delta: "+18.4%", up: true, sub: "this month" },
      { label: "Swiggy", value: 371430, prefix: "₹", delta: "−3.1%", up: false, sub: "this month" },
      { label: "Direct Online", value: 124800, prefix: "₹", delta: "+24.6%", up: true, sub: "this month" },
    ],
    bars: [
      { day: "Mon", v: 62 }, { day: "Tue", v: 54 }, { day: "Wed", v: 66 },
      { day: "Thu", v: 72 }, { day: "Fri", v: 88 }, { day: "Sat", v: 100 }, { day: "Sun", v: 91 },
    ],
  },
  menu: {
    metrics: [
      { label: "Top Margin Dish", value: 64, format: (n) => n + "%", delta: "Paneer Tikka", up: true, sub: "60+ margin" },
      { label: "Bestseller Margin", value: 19, format: (n) => n + "%", delta: "Chicken Biryani", up: false, sub: "below average" },
      { label: "Hidden Stars", value: 7, suffix: " dishes", delta: "promote", up: true, sub: "underpromoted" },
      { label: "Drag Items", value: 4, suffix: " dishes", delta: "review", up: false, sub: "loss-making" },
    ],
    matrix: [
      { name: "Paneer Tikka", x: 22, y: 64, type: "puzzle" },
      { name: "Hyderabadi Biryani", x: 92, y: 19, type: "plowhorse" },
      { name: "Butter Chicken", x: 74, y: 48, type: "star" },
      { name: "Dal Makhani", x: 58, y: 52, type: "star" },
      { name: "Chicken 65", x: 70, y: 38, type: "star" },
      { name: "Veg Pulao", x: 36, y: 28, type: "plowhorse" },
      { name: "Mutton Korma", x: 18, y: 58, type: "puzzle" },
      { name: "Salads", x: 12, y: 14, type: "dog" },
      { name: "Cold Coffee", x: 44, y: 71, type: "star" },
    ],
  },
  inventory: {
    metrics: [
      { label: "Waste Rate", value: 12.4, format: (n) => n.toFixed(1) + "%", delta: "−3.2pp", up: true, sub: "vs last month" },
      { label: "Cost Creep", value: 23, format: (n) => n + "%", delta: "Tomato", up: false, sub: "in 4 months" },
      { label: "Dead Stock", value: 18400, prefix: "₹", delta: "review", up: false, sub: "slow-moving" },
      { label: "Reorder Alerts", value: 6, suffix: " items", delta: "this week", up: true, sub: "auto-flagged" },
    ],
    items: [
      { name: "Tomato", trend: "↑23%", risk: "high", note: "Price up — reprice menu" },
      { name: "Paneer", trend: "↑11%", risk: "med", note: "Supplier alt available" },
      { name: "Chicken", trend: "↑4%", risk: "low", note: "Within normal range" },
      { name: "Basmati Rice", trend: "−2%", risk: "low", note: "Stable" },
      { name: "Cooking Oil", trend: "↑8%", risk: "med", note: "Negotiate quarterly" },
    ],
  },
};

function DashboardMock({ density = "rich", inView = true, embedded = false }) {
  const [tab, setTab] = useState("overview");
  const [chartKey, setChartKey] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => { setChartKey((k) => k + 1); }, [tab]);

  // Auto-cycle tabs every 2s once dashboard is in view; pause on hover.
  useEffect(() => {
    if (!inView || paused) return;
    const id = setInterval(() => {
      setTab((cur) => {
        const i = DASH_TABS.findIndex((t) => t.id === cur);
        const next = DASH_TABS[(i + 1) % DASH_TABS.length];
        return next.id;
      });
    }, 2000);
    return () => clearInterval(id);
  }, [inView, paused]);

  const showSidebar = !embedded && density !== "minimal";

  return (
    <div
      className="dash-shell"
      data-density={density}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {showSidebar && (
        <aside className="dash-side">
          <div className="dash-side-brand">
            <Wordmark size={22} color="#fff" />
            <div className="dash-side-sub">Restaurant Intelligence</div>
          </div>
          <nav className="dash-nav">
            {[
              { id: "overview", label: "Overview", I: Icon.Trend },
              { id: "sales", label: "Sales", I: Icon.Rupee },
              { id: "menu", label: "Menu Insights", I: Icon.Dish },
              { id: "inventory", label: "Inventory", I: Icon.Box },
              { id: "customers", label: "Customers", I: Icon.Users, disabled: true },
              { id: "staff", label: "Staff", I: Icon.Staff, disabled: true },
            ].map((n) => (
              <button
                key={n.id}
                className={"dash-nav-btn " + (tab === n.id ? "is-active" : "") + (n.disabled ? " is-mute" : "")}
                onClick={() => !n.disabled && setTab(n.id)}
                disabled={n.disabled}
              >
                <n.I />
                <span>{n.label}</span>
              </button>
            ))}
          </nav>
          <div className="dash-side-foot">
            <div className="dash-side-status">
              <span className="pulse-dot"></span>
              <span>Live sync · Petpooja</span>
            </div>
          </div>
        </aside>
      )}

      <div className="dash-main">
        {embedded ? (
          <div className="dash-tabs-row">
            {DASH_TABS.map((t) => (
              <button
                key={t.id}
                className={"dash-tab " + (tab === t.id ? "is-active" : "")}
                onClick={() => setTab(t.id)}
              >
                {t.label}
              </button>
            ))}
            <div className="dash-tabs-spacer"></div>
            <div className="dash-range">This Month <Icon.Chevron /></div>
          </div>
        ) : (
          <div className="dash-top">
            <div>
              <h3 className="dash-title">{DASH_TABS.find((t) => t.id === tab)?.label || "Overview"}</h3>
              <p className="dash-sub">Spice Garden · Gachibowli</p>
            </div>
            <div className="dash-range">This Month <Icon.Chevron /></div>
          </div>
        )}

        <DashTabContent tab={tab} chartKey={chartKey} inView={inView} density={density} />
      </div>
    </div>
  );
}

function DashTabContent({ tab, chartKey, inView, density }) {
  const data = DASH_DATA[tab];
  const minimal = density === "minimal";
  return (
    <div className="dash-content" key={tab}>
      <div className={"dash-metrics " + (minimal ? "is-minimal" : "")}>
        {data.metrics.map((m, i) => (
          <div className="dash-metric" key={m.label} style={{ animationDelay: `${i * 80}ms` }}>
            <div className="dash-metric-label">{m.label}</div>
            <div className="dash-metric-value">
              {m.prefix || ""}
              <AnimatedNumber value={m.value} format={m.format} play={inView} />
              {m.suffix || ""}
            </div>
            <div className={"dash-metric-delta " + (m.up ? "is-up" : "is-down")}>
              <span>{m.up ? "↑" : "↓"} {m.delta}</span>
              <span className="dash-metric-sub">{m.sub}</span>
            </div>
          </div>
        ))}
      </div>

      {tab === "overview" && (
        <div className="dash-row">
          <div className="dash-card dash-chart">
            <div className="dash-card-head">
              <h4>Revenue Trend</h4>
              <div className="dash-legend">
                <span><i style={{ background: "var(--maroon-800)" }}></i> This Month</span>
                <span><i style={{ background: "#C9C2BB" }}></i> Last Month</span>
              </div>
            </div>
            <LineChart key={chartKey} thisMonth={data.chart.thisMonth} lastMonth={data.chart.lastMonth} play={inView} />
          </div>
          <div className="dash-card dash-leaks">
            <div className="dash-card-head"><h4>Top Loss Areas</h4></div>
            <ul className="leak-list">
              {data.leaks.map((l) => (
                <li key={l.i}>
                  <span className="leak-i">{l.i}</span>
                  <span className="leak-label">{l.label}</span>
                  <span className="leak-val">{l.value}</span>
                </li>
              ))}
            </ul>
            <a className="dash-card-link" href="#">View Full Report <Icon.Arrow /></a>
          </div>
        </div>
      )}

      {tab === "sales" && (
        <div className="dash-row">
          <div className="dash-card dash-chart">
            <div className="dash-card-head">
              <h4>Day of Week · Revenue</h4>
              <div className="dash-legend"><span><i style={{ background: "var(--maroon-800)" }}></i> This Week</span></div>
            </div>
            <BarChart key={chartKey} bars={data.bars} play={inView} />
          </div>
          <div className="dash-card dash-leaks">
            <div className="dash-card-head"><h4>Channel Mix</h4></div>
            <ChannelDonut play={inView} />
          </div>
        </div>
      )}

      {tab === "menu" && (
        <div className="dash-row">
          <div className="dash-card dash-chart">
            <div className="dash-card-head">
              <h4>Menu Engineering Matrix</h4>
              <div className="dash-legend">
                <span><i style={{ background: "var(--accent-pos)" }}></i> Star</span>
                <span><i style={{ background: "var(--maroon-700)" }}></i> Puzzle</span>
                <span><i style={{ background: "#C9C2BB" }}></i> Plowhorse</span>
                <span><i style={{ background: "var(--accent-neg)" }}></i> Dog</span>
              </div>
            </div>
            <ScatterChart key={chartKey} points={data.matrix} play={inView} />
          </div>
          <div className="dash-card dash-leaks">
            <div className="dash-card-head"><h4>Recommendations</h4></div>
            <ul className="reco-list">
              <li>
                <Icon.Sparkle style={{ color: "var(--accent-pos)" }} />
                <div><b>Promote Paneer Tikka</b><span>64% margin, only 22 plates/day. Push it.</span></div>
              </li>
              <li>
                <Icon.Sparkle style={{ color: "var(--accent-amber)" }} />
                <div><b>Reprice Biryani</b><span>92 plates/day at 19% margin. +₹20 = +₹54k/mo.</span></div>
              </li>
              <li>
                <Icon.Sparkle style={{ color: "var(--accent-neg)" }} />
                <div><b>Remove Salads</b><span>14% margin, 12 plates/day. Drag on menu.</span></div>
              </li>
            </ul>
          </div>
        </div>
      )}

      {tab === "inventory" && (
        <div className="dash-row">
          <div className="dash-card dash-chart" style={{ flex: "1.4" }}>
            <div className="dash-card-head"><h4>Ingredient Cost Creep · Last 4 months</h4></div>
            <table className="inv-table">
              <thead>
                <tr><th>Item</th><th>Trend</th><th>Risk</th><th>Recommended Action</th></tr>
              </thead>
              <tbody>
                {data.items.map((it) => (
                  <tr key={it.name}>
                    <td>{it.name}</td>
                    <td className={it.trend.startsWith("↑") ? "is-up" : "is-flat"}>{it.trend}</td>
                    <td><span className={"inv-risk r-" + it.risk}>{it.risk}</span></td>
                    <td>{it.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="dash-card dash-leaks">
            <div className="dash-card-head"><h4>Waste vs Sales</h4></div>
            <WasteGauge play={inView} />
          </div>
        </div>
      )}
    </div>
  );
}

/* ---------- Charts ---------- */
function LineChart({ thisMonth, lastMonth, play }) {
  const W = 540, H = 230, P = { l: 36, r: 12, t: 16, b: 28 };
  const n = thisMonth.length;
  const max = Math.max(...thisMonth, ...lastMonth) * 1.15;
  const x = (i) => P.l + (i / (n - 1)) * (W - P.l - P.r);
  const y = (v) => P.t + (1 - v / max) * (H - P.t - P.b);
  const path = (arr) => arr.map((v, i) => (i === 0 ? "M" : "L") + x(i) + "," + y(v)).join(" ");
  const pathA = path(thisMonth);
  const pathB = path(lastMonth);
  const yTicks = [0, 50, 100, 150].filter((t) => t < max);
  const xLabels = ["1 Apr", "8 Apr", "15 Apr", "22 Apr", "30 Apr"];
  return (
    <svg viewBox={`0 0 ${W} ${H}`} width="100%" style={{ display: "block" }}>
      {yTicks.map((t) => (
        <g key={t}>
          <line x1={P.l} x2={W - P.r} y1={y(t)} y2={y(t)} stroke="#EDE6DF" strokeWidth="1" />
          <text x={P.l - 8} y={y(t) + 4} fontSize="10" fill="#9A938C" textAnchor="end">{t === 0 ? "₹0" : "₹" + t + "K"}</text>
        </g>
      ))}
      <path d={pathB} stroke="#C9C2BB" strokeWidth="2" fill="none"
        style={play ? { strokeDasharray: 1000, animation: "drawLine 1.6s ease forwards" } : null} />
      <path d={pathA} stroke="var(--maroon-800)" strokeWidth="2.4" fill="none" strokeLinecap="round"
        style={play ? { strokeDasharray: 1000, animation: "drawLine 1.6s .15s ease forwards" } : null} />
      {thisMonth.map((v, i) => (
        <circle key={i} cx={x(i)} cy={y(v)} r="2.6" fill="var(--maroon-800)"
          style={play ? { opacity: 0, animation: `fadeUp .3s ${0.8 + i * 0.05}s ease forwards` } : null} />
      ))}
      {xLabels.map((l, i) => (
        <text key={l} x={x(Math.round((i / (xLabels.length - 1)) * (n - 1)))} y={H - 8} fontSize="10" fill="#9A938C" textAnchor="middle">{l}</text>
      ))}
    </svg>
  );
}

function BarChart({ bars, play }) {
  const W = 540, H = 230, P = { l: 28, r: 12, t: 16, b: 32 };
  const max = Math.max(...bars.map((b) => b.v)) * 1.1;
  const bw = (W - P.l - P.r) / bars.length;
  return (
    <svg viewBox={`0 0 ${W} ${H}`} width="100%" style={{ display: "block" }}>
      {[0, 25, 50, 75, 100].map((t) => (
        <g key={t}>
          <line x1={P.l} x2={W - P.r} y1={P.t + (1 - t / max) * (H - P.t - P.b)} y2={P.t + (1 - t / max) * (H - P.t - P.b)} stroke="#EDE6DF" />
        </g>
      ))}
      {bars.map((b, i) => {
        const bh = (b.v / max) * (H - P.t - P.b);
        const bx = P.l + i * bw + bw * 0.18;
        const by = P.t + (H - P.t - P.b) - bh;
        return (
          <g key={b.day}>
            <rect x={bx} y={by} width={bw * 0.64} height={bh} rx="4" fill="var(--maroon-800)"
              style={play ? { transformOrigin: `${bx + bw * 0.32}px ${P.t + (H - P.t - P.b)}px`, transform: "scaleY(0)", animation: `growBar .6s ${i * 0.06}s ease forwards` } : null} />
            <text x={bx + bw * 0.32} y={H - 12} fontSize="10" fill="#5B5B5B" textAnchor="middle">{b.day}</text>
          </g>
        );
      })}
    </svg>
  );
}

function ScatterChart({ points, play }) {
  const W = 540, H = 230, P = { l: 36, r: 16, t: 16, b: 32 };
  const colorFor = (t) => ({ star: "var(--accent-pos)", puzzle: "var(--maroon-700)", plowhorse: "#C9C2BB", dog: "var(--accent-neg)" }[t]);
  const sx = (v) => P.l + (v / 100) * (W - P.l - P.r);
  const sy = (v) => P.t + (1 - v / 100) * (H - P.t - P.b);
  return (
    <svg viewBox={`0 0 ${W} ${H}`} width="100%" style={{ display: "block" }}>
      <line x1={P.l} x2={W - P.r} y1={sy(50)} y2={sy(50)} stroke="#EDE6DF" />
      <line x1={sx(50)} x2={sx(50)} y1={P.t} y2={H - P.b} stroke="#EDE6DF" />
      <text x={P.l} y={P.t + 12} fontSize="10" fill="#9A938C">High Margin →</text>
      <text x={W - P.r} y={H - 10} fontSize="10" fill="#9A938C" textAnchor="end">Popularity →</text>
      {points.map((p, i) => (
        <g key={p.name} style={play ? { opacity: 0, animation: `fadeUp .5s ${i * 0.07}s ease forwards` } : null}>
          <circle cx={sx(p.x)} cy={sy(p.y)} r="9" fill={colorFor(p.type)} opacity=".85" />
          <text x={sx(p.x) + 12} y={sy(p.y) + 3} fontSize="10" fill="#2A2A2A">{p.name}</text>
        </g>
      ))}
    </svg>
  );
}

function ChannelDonut({ play }) {
  const segs = [
    { label: "Dine-in", v: 49, c: "var(--maroon-800)" },
    { label: "Zomato", v: 26, c: "var(--maroon-600)" },
    { label: "Swiggy", v: 19, c: "#D6906F" },
    { label: "Direct", v: 6, c: "#C9C2BB" },
  ];
  const total = 100, R = 60, C = 2 * Math.PI * R;
  let offset = 0;
  return (
    <div className="donut-wrap">
      <svg width="160" height="160" viewBox="0 0 160 160">
        <circle cx="80" cy="80" r={R} fill="none" stroke="#F1ECE6" strokeWidth="18" />
        {segs.map((s, i) => {
          const len = (s.v / total) * C;
          const dash = `${len} ${C - len}`;
          const rot = (offset / total) * 360 - 90;
          offset += s.v;
          return (
            <circle key={s.label} cx="80" cy="80" r={R} fill="none" stroke={s.c} strokeWidth="18"
              strokeDasharray={dash} strokeDashoffset="0"
              transform={`rotate(${rot} 80 80)`}
              style={play ? { strokeDasharray: dash, opacity: 0, animation: `fadeUp .5s ${i * 0.12}s ease forwards` } : null} />
          );
        })}
        <text x="80" y="78" fontSize="22" fontWeight="700" fill="#111" textAnchor="middle">₹18.7L</text>
        <text x="80" y="96" fontSize="10" fill="#5B5B5B" textAnchor="middle">total</text>
      </svg>
      <ul className="donut-legend">
        {segs.map((s) => (
          <li key={s.label}><i style={{ background: s.c }}></i>{s.label}<b>{s.v}%</b></li>
        ))}
      </ul>
    </div>
  );
}

function WasteGauge({ play }) {
  const pct = 12.4, target = 8;
  return (
    <div className="gauge-wrap">
      <svg width="100%" height="120" viewBox="0 0 240 120">
        <path d="M20 110 A100 100 0 0 1 220 110" stroke="#F1ECE6" strokeWidth="16" fill="none" />
        <path d="M20 110 A100 100 0 0 1 220 110" stroke="var(--maroon-800)" strokeWidth="16" fill="none"
          strokeDasharray="314" strokeDashoffset={play ? 314 - (pct / 20) * 314 : 314}
          style={{ transition: "stroke-dashoffset 1.4s ease" }} />
        <text x="120" y="92" fontSize="34" fontWeight="700" textAnchor="middle" fill="#111">{pct}%</text>
        <text x="120" y="110" fontSize="11" fill="#5B5B5B" textAnchor="middle">your waste rate</text>
      </svg>
      <div className="gauge-foot">
        <span>Industry avg <b>{target}%</b></span>
        <span className="gauge-pill">−₹52k/mo opportunity</span>
      </div>
    </div>
  );
}

/* Attach */
Object.assign(window, {
  Icon, Wordmark, AnimatedNumber, useInView,
  DashboardMock, LineChart, BarChart, ScatterChart, ChannelDonut, WasteGauge,
});
