// Monsoon — main canvas app
// Wires tweaks panel + 3 direction artboards into a DesignCanvas.

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "theme": "default",
  "dashDensity": "rich",
  "testimonialStyle": "imgquote",
  "headlineIdx": 0
}/*EDITMODE-END*/;

function MonsoonApp() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  const headlineOptions = HERO_HEADLINES.map((h, i) => ({
    value: String(i),
    label: `${i + 1}. ${h.lead} ${h.accent.replace(/\.$/, "")}`.slice(0, 64),
  }));

  return (
    <>
      <DesignCanvas>
        <DCSection
          id="monsoon-directions"
          title="Monsoon · Three landing-page directions"
          subtitle="Recreations of the ChatGPT mockups, faithful to your brand. Use the Tweaks panel to cycle headlines, dashboard density, testimonial layout and accent."
        >
          <DCArtboard id="dir-a" label="A · Faithful Premium — the mockup, refined" width={1440} height={6400}>
            <DirectionA tweaks={t} />
          </DCArtboard>
          <DCArtboard id="dir-b" label="B · Hospitality Editorial — italic display, magazine" width={1440} height={8000}>
            <DirectionB tweaks={t} />
          </DCArtboard>
          <DCArtboard id="dir-c" label="C · Operator Console — data-forward, dashboard-led" width={1440} height={7100}>
            <DirectionC tweaks={t} />
          </DCArtboard>
        </DCSection>
      </DesignCanvas>

      <TweaksPanel>
        <TweakSection label="Hero headline" />
        <TweakSelect
          label="Angle"
          value={String(t.headlineIdx)}
          options={headlineOptions}
          onChange={(v) => setTweak("headlineIdx", Number(v))}
        />

        <TweakSection label="Dashboard" />
        <TweakRadio
          label="Density"
          value={t.dashDensity}
          options={["rich", "minimal"]}
          onChange={(v) => setTweak("dashDensity", v)}
        />

        <TweakSection label="Testimonial" />
        <TweakSelect
          label="Style"
          value={t.testimonialStyle}
          options={[
            { value: "imgquote", label: "Image + quote" },
            { value: "metrics", label: "Metric cards" },
            { value: "video", label: "Video frame" },
          ]}
          onChange={(v) => setTweak("testimonialStyle", v)}
        />

        <TweakSection label="Accent theme" />
        <TweakSelect
          label="Theme"
          value={t.theme}
          options={[
            { value: "default", label: "Maroon + green (default)" },
            { value: "gold", label: "Maroon + gold" },
            { value: "green", label: "Deeper green positives" },
            { value: "ink", label: "Ink (warm dark)" },
          ]}
          onChange={(v) => setTweak("theme", v)}
        />
      </TweaksPanel>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<MonsoonApp />);
