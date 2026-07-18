import { useState } from "react";
import { motion } from "motion/react";
import { CheckCircle2, Flame, Zap, Recycle, BarChart3, Leaf, Droplets, Wind, Settings2, ArrowRight } from "lucide-react";
import Biomass from "../../../imports/biomas-pyrolysis.png";
 import Plastic from "../../../imports/Plasticpyrolysis.png";
 import { PageLayout, Section, PageCTA,  } from "../PageLayout";
  
import Plastichero from "../../../imports/plastichero.png";
import Biomashero from "../../../imports/biomasshero.png";


  // import { PageLayout, Section, SectionLabel, FeatureCard, PageCTA, AnimatedNumber } from "../PageLayout";
   import Testimonials from "../../components/Testimonials";
   import pyrolysis from "../../../imports/pyrolysis.png";


/* ── Stub shims so the file compiles standalone in the Make sandbox ── */
const C = {
  darkGreen:   "#053114",
  midGreen:    "#178B4C",
  amber:       "#A0780E",
  mutedText:   "#5A6B5C",
  offWhite:    "#F8FAF7",
  border:      "rgba(5,49,20,0.08)",
};





function SectionLabel({ label }: { label: string }) {
  return (
    <div className="inline-block text-[10px] tracking-[0.2em] uppercase mb-4 px-3 py-1"
      style={{ fontFamily: "'DM Mono', monospace", color: C.amber,
        background: "rgba(160,120,14,0.08)", border: "1px solid rgba(160,120,14,0.2)", borderRadius: 2 }}>
      {label}
    </div>
  );
}

function FeatureCard({ icon, title, description, centered }: {
  icon: React.ReactNode; title: string; description: string; centered?: boolean;
}) {
  return (
    <div className="p-6 h-full" style={{ background: C.offWhite, border: `1px solid ${C.border}`,
      borderTop: `3px solid ${C.midGreen}`, borderRadius: 4 }}>
      <div className="mb-3" style={{ color: C.midGreen }}>{icon}</div>
      <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "1rem",
        color: C.darkGreen, marginBottom: 8, textAlign: centered ? "left" : undefined }}>{title}</div>
      <div style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "0.875rem",
        color: C.mutedText, lineHeight: 1.7 }}>{description}</div>
    </div>
  );
}

function AnimatedNumber({ value }: { value: string }) {
  return <span>{value}</span>;
}


/* ── End of stub shims ── */


/* ═════════════════════════════════════════════════════════════════════════════
   SHARED COMPONENTS
═════════════════════════════════════════════════════════════════════════════ */

function SectionHeading({ green, amber }: { green: string; amber: string }) {
  return (
    <h3 className="mb-6" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "2rem" }}>
      <span style={{ color: C.midGreen }}>{green} </span>
      <span style={{ color: C.amber }}>{amber}</span>
    </h3>
  );
}

function FeatureCheck({ items }: { items: string[] }) {
  return (
    <div className="grid sm:grid-cols-2 gap-2">
      {items.map((f, i) => (
        <div key={i} className="flex items-start gap-2">
          <CheckCircle2 className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" style={{ color: C.midGreen }} />
          <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.85rem", color: C.mutedText }}>{f}</span>
        </div>
      ))}
    </div>
  );
}

/* ─── Specs Section ──────────────────────────────────────────────────────── */
interface SpecRow { label: string; value: string }
interface SpecBlock {
  title: string;
  subtitle: string;
  rows: SpecRow[];
  tableRows: string[][];
  notes: { highlight: string; rest: string[] };
}

function SpecsSection({ block }: { block: SpecBlock }) {
  return (
    <div className="mt-16">
      <SectionHeading green="Technical" amber="Specifications" />

      {/* ① Custom-config highlight banner — first & most prominent note */}
      <div className="flex items-start gap-4 p-5 mb-8"
        style={{ background: "rgba(23,139,76,0.07)", border: `1px solid rgba(23,139,76,0.25)`,
          borderLeft: `4px solid ${C.midGreen}`, borderRadius: "0 6px 6px 0" }}>
        <Settings2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: C.midGreen }} />
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem",
          color: C.darkGreen, lineHeight: 1.75, fontWeight: 500 }}>
          {block.notes.highlight}
        </p>
      </div>

      {/* ② Spec overview cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {block.rows.map((r, i) => (
          <div key={i} className="p-4" style={{ background: "#fff", border: `1px solid ${C.border}`,
            borderTop: `3px solid ${i % 2 === 0 ? C.midGreen : C.amber}`, borderRadius: 4 }}>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.68rem",
              letterSpacing: "0.12em", textTransform: "uppercase", color: C.mutedText, marginBottom: 6 }}>
              {r.label}
            </div>
            <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700,
              fontSize: "1.05rem", color: C.darkGreen, lineHeight: 1.3 }}>
              {r.value}
            </div>
          </div>
        ))}
      </div>

      {/* ③ Detailed model table */}
      <div className="overflow-x-auto"
        style={{ border: `1px solid ${C.border}`,
          boxShadow: "0 1px 2px rgba(5,49,20,0.04), 0 16px 32px rgba(5,49,20,0.06)" }}>
        <table className="w-full border-collapse text-left" style={{ minWidth: 600 }}>
          <thead>
            <tr style={{ backgroundColor: C.darkGreen }}>
              {block.tableRows[0].map((h, i) => (
                <th key={i} className="px-4 py-3 text-[11px] tracking-[0.1em] uppercase"
                  style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, color: "#fff",
                    borderRight: "1px solid rgba(255,255,255,0.1)" }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {block.tableRows.slice(1).map((row, i) => (
              <tr key={i} className="transition-colors duration-150 hover:bg-[rgba(23,139,76,0.04)]"
                style={{ backgroundColor: i % 2 === 0 ? "#fff" : "#F5F4EF",
                  borderBottom: `1px solid ${C.border}` }}>
                {row.map((cell, j) => (
                  <td key={j} className="px-4 py-3"
                    style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.85rem",
                      color: j === 0 ? C.darkGreen : C.mutedText, fontWeight: j === 0 ? 700 : 400,
                      borderRight: `1px solid ${C.border}` }}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ④ Remaining notes */}
      <div className="mt-5 p-5" style={{ background: C.offWhite, border: `1px solid ${C.border}`, borderRadius: 6 }}>
        <h4 className="mb-3" style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, color: C.darkGreen }}>
          Additional Notes
        </h4>
        <ul className="space-y-2">
          {block.notes.rest.map((n, i) => (
            <li key={i} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.88rem",
              color: C.mutedText, lineHeight: 1.7 }}>• {n}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* ─── Full-width Architecture Banner ────────────────────────────────────── */
function ArchBanner({
  label,
  image,
}: {
  label: string;
  image: string;
}) {
  return (
    <div className="mt-16">
      <SectionHeading green="Process" amber="Overview" />  
      <div className="w-full overflow-hidden"
        style={{ borderRadius: 6, border: `1px solid ${C.border}`,
          boxShadow: "0 20px 45px rgba(5,49,20,0.12)" }}>
        <img
  src={image}
  alt={`${label} Architecture`}
  className="w-full h-auto block"
  style={{
    maxWidth: "100%",
  }}
/>
        
        
      </div>
    </div>
  );
}



/* ─── Process Flow ───────────────────────────────────────────────────────── */
function ProcessFlow({ steps }: { steps: { step: string; title: string; desc: string }[] }) {
  return (
    <div className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {steps.map((s, i) => (
        <motion.div key={i}
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.07 * i }}
          className="p-5"
          style={{ background: "#fff", border: `1px solid rgba(23,139,76,0.15)`,
            borderTop: `3px solid ${C.midGreen}` }}>
          <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700,
            fontSize: "1.4rem", color: C.amber, marginBottom: 8 }}>{s.step}</div>
          <h4 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600,
            fontSize: "0.9rem", color: C.darkGreen, marginBottom: 6 }}>{s.title}</h4>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300,
            fontSize: "0.8rem", color: C.mutedText, lineHeight: 1.65 }}>{s.desc}</p>
        </motion.div>
      ))}
    </div>
  );
}

/* ─── Product Output Cards ───────────────────────────────────────────────── */
function ProductOutputs({ outputs }: {
  outputs: { icon: React.ReactNode; product: string; yieldPct: string; use: string }[];
}) {
  return (
    <div style={{ background: C.darkGreen }} className="mt-16 -mx-6 px-6 py-14">
      <div className="max-w-none">
        <div className="text-center mb-10">
          <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700,
            fontSize: "clamp(1.4rem,2.5vw,2rem)", color: "#fff" }}>
            Product{" "}<em style={{ color: C.amber, fontStyle: "normal" }}>Outputs</em>
          </h3>
          <p className="mt-2" style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300,
            fontSize: "0.9rem", color: "rgba(255,255,255,0.6)", maxWidth: 480, margin: "8px auto 0" }}>
            Every kilogram of waste processed generates commercially valuable products.
          </p>
        </div>
        <div
  className={`grid gap-6 ${
    outputs.length === 3
      ? "grid-cols-1 md:grid-cols-3"
      : "grid-cols-1 md:grid-cols-2 xl:grid-cols-4"
  }`}
>
          {outputs.map((o, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.1 * i }}
              className="p-6 hover:-translate-y-1 transition-transform duration-200"
              style={{ border: "1px solid rgba(23,139,76,0.3)", borderRadius: 6,
                background: "rgba(23,139,76,0.08)" }}>
              <div className="mb-3" style={{ color: "#4ade80" }}>{o.icon}</div>
              <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700,
                fontSize: "1.5rem", color: "#4ade80", marginBottom: 2 }}>{o.yieldPct}</div>
              <h4 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700,
                fontSize: "1rem", color: C.amber, marginBottom: 8 }}>{o.product}</h4>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "0.82rem",
                color: "rgba(255,255,255,0.7)", lineHeight: 1.65 }}>{o.use}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}


/* ═════════════════════════════════════════════════════════════════════════════
   BIOMASS TAB DATA
═════════════════════════════════════════════════════════════════════════════ */
const biomassProcess = [
  { step: "01", title: "Feedstock Preparation", desc: "Biomass dried to <15% moisture and particle-sized to 20–50 mm for optimal reactor performance." },
  { step: "02", title: "Auto-Feeding", desc: "Sealed screw conveyor feeds biomass into the reactor continuously, preventing gas leakage." },
  { step: "03", title: "Pyrolysis Reactor", desc: "Thermal decomposition at 400–600 °C in an oxygen-free environment breaks biomass into vapour fractions." },
  { step: "04", title: "Char Discharge", desc: "Biochar continuously discharged via sealed screw conveyor and cooled for packaging." },
  { step: "05", title: "Oil Condensation", desc: "Pyrolysis vapours pass through multi-stage condensers to recover high-calorific bio-oil." },
];

const biomassFeatures = [
  { icon: <Flame className="w-5 h-5" />, title: "Continuous Rotary Reactor", desc: "Sealed, automated feeding enables 24/7 throughput without manual intervention or reactor shutdown." },
  { icon: <Zap className="w-5 h-5" />, title: "Syngas Heat Recycling", desc: "Non-condensable syngas recycled to sustain reactor temperature, cutting external fuel costs by up to 60%." },
  { icon: <Leaf className="w-5 h-5" />, title: "Biochar as Carbon Sink", desc: "High-carbon biochar output improves soil fertility, water retention, and qualifies for carbon credit programmes." },
  { icon: <BarChart3 className="w-5 h-5" />, title: "PLC Monitoring", desc: "Real-time temperature, pressure, and output monitoring ensures consistent product quality and safe operation." },
];

const biomassOutputs = [
  { icon: <Droplets className="w-6 h-6" />, product: "Bio-Oil", yieldPct: "30–45%", use: "Industrial fuel equivalent to light diesel. Used in boilers, kilns, and generators." },
  { icon: <Leaf className="w-6 h-6" />, product: "Biochar", yieldPct: "25–35%", use: "Soil amendment for agriculture; high-carbon material qualifying for carbon credit revenue." },
  { icon: <Wind className="w-6 h-6" />, product: "Syngas", yieldPct: "20–30%", use: "Recycled internally to sustain reactor heating, reducing external fuel dependency." },
];

const biomassSpecs: SpecBlock = {
  title: "Biomass Pyrolysis",
  subtitle: "Continuous rotary kiln, 400–600 °C",
  rows: [
    { label: "Capacity Range",      value: "500 kg – 20 T/day" },
    { label: "Reactor Temperature", value: "400 – 600 °C" },
    { label: "Bio-Oil Yield",       value: "30 – 45%" },
    { label: "Operation Mode",      value: "Continuous / 24×7" },
  ],
  tableRows: [
    ["Model", "Capacity", "Bio-Oil Output", "Biochar Output", "Connected Load", "Footprint"],
    ["RN-BM 500",  "500 kg/hour",  "175–225 kg/hour",  "125–175 kg/hour",  "18 kW",  "~30 m²"],
   
  ],
  notes: {
    highlight:
      "All models are custom-engineered to project-specific requirements. Capacity, connected load, reactor dimensions, and output configuration are finalised after assessment of feedstock type, moisture content, site conditions, and operational duty cycle.",
    rest: [
      "Feedstock moisture content must not exceed 15% for optimal bio-oil yield. Pre-drying systems available.",
      "Actual yields vary based on biomass composition, particle size, and operating temperature.",
      "Power supply configurable as per country-specific standards (50 Hz / 60 Hz).",
      "Machine dimensions and connected load are indicative and subject to change with design revisions. Confirm with manufacturer prior to ordering.",
    ],
  },
};

/* ═════════════════════════════════════════════════════════════════════════════
   PLASTIC TAB DATA
═════════════════════════════════════════════════════════════════════════════ */
const plasticProcess = [
  { step: "01", title: "Sorting & Shredding", desc: "Non-recyclable plastics sorted; metals and PVC removed. Shredded to 30–50 mm for consistent reactor feed." },
  { step: "02", title: "Continuous Feeding", desc: "Sealed screw conveyor delivers shredded plastic into the reactor without gas leakage or pressure loss." },
  { step: "03", title: "Thermal Cracking", desc: "Plastic heated at 350–450 °C in oxygen-free environment; long-chain polymers crack into hydrocarbon vapours." },
  { step: "04", title: "Condensation", desc: "Vapours pass through multi-stage condensers, converting hydrocarbon gases into pyrolysis oil." },
  { step: "05", title: "Carbon Black & Gas", desc: "Residual carbon black discharged and packaged; non-condensable gas recycled to heat the reactor." },
];

const plasticFeatures = [
  { icon: <Flame className="w-5 h-5" />, title: "Continuous Feeding Reactor", desc: "Automated, sealed feeding system enables uninterrupted operation, maximising throughput and operator safety." },
  { icon: <Zap className="w-5 h-5" />, title: "Syngas Recycling", desc: "Non-condensable gases recycled back to the reactor burner, reducing external fuel consumption significantly." },
  { icon: <Recycle className="w-5 h-5" />, title: "Zero Liquid Discharge", desc: "Advanced water treatment ensures no process wastewater is discharged — all water recycled within the system." },
  { icon: <BarChart3 className="w-5 h-5" />, title: "Real-Time Monitoring", desc: "PLC-controlled operation with live temperature, pressure, and output monitoring for consistent quality." },
];

const plasticOutputs = [
  { icon: <Flame className="w-6 h-6" />, product: "Pyrolysis Oil", yieldPct: "40–45%", use: "Alternative fuel for industrial boilers, kilns, and generators. Equivalent to light diesel in calorific value." },
  { icon: <Recycle className="w-6 h-6" />, product: "Carbon Black", yieldPct: "30–35%", use: "Reinforcing filler in rubber goods, pigment in inks and coatings, or solid fuel for boilers." },
  { icon: <Wind className="w-6 h-6" />, product: "Steel Wire", yieldPct: "10–15%", use: "Recovered steel from tyre pyrolysis sold as scrap metal to steel mills for recycling." },
  { icon: <Zap className="w-6 h-6" />, product: "Syngas", yieldPct: "10–12%", use: "Recycled internally to maintain reactor temperature, replacing a significant portion of external energy input." },
];

const plasticSpecs: SpecBlock = {
  title: "Plastic Pyrolysis",
  subtitle: "Continuous, 350–450 °C",
  rows: [
    { label: "Capacity Range",      value: "3 T – 20 T/day" },
    { label: "Reactor Temperature", value: "350 – 450 °C" },
    { label: "Oil Yield",           value: "40 – 45%" },
    { label: "Operation Mode",      value: "Continuous / 24×7" },
  ],
  tableRows: [
    ["Model", "Capacity", "Oil Output", "Carbon Black", "Connected Load"],
    ["RN-PY 3",  "3 ton/day",  "1.2 – 1.35 ton/day", "0.9 – 1.05 ton/day", "30 kW"],
    ["RN-PY 5",  "5 ton/day",  "2.0 – 2.25 ton/day", "1.5 – 1.75 ton/day", "45 kW"],
    ["RN-PY 10", "10 ton/day", "4.0 – 4.5 ton/day",  "3.0 – 3.5 ton/day",  "75 kW"],
    ["RN-PY 20", "20 ton/day", "8.0 – 9.0 ton/day",  "6.0 – 7.0 ton/day",  "130 kW"],
  ],
  notes: {
    highlight:
      "All models are custom-configured to project-specific requirements. Capacity, reactor design, connected load, and condensation stages are finalised following site assessment of plastic waste type, contamination level, and daily volume.",
    rest: [
      "PVC content must not exceed 3% of total feed to prevent chlorine-related corrosion of reactor internals.",
      "Actual oil yield depends on plastic type (PP, PE, PS, ABS), moisture level, and operating temperature.",
      "Steel wire recovery applicable to tyre pyrolysis variants only.",
      "Power supply configurable as per country-specific standards (50 Hz / 60 Hz).",
      "Machine dimensions and connected load are indicative and subject to change with design revisions. Confirm with manufacturer prior to ordering.",
    ],
  },
};

/* ═════════════════════════════════════════════════════════════════════════════
   TAB COMPONENTS
═════════════════════════════════════════════════════════════════════════════ */
function BiomassTab() {
  return (
    <div>
      {/* Hero */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div>
          <div className="text-[10px] tracking-[0.18em] uppercase mb-2"
            style={{ fontFamily: "'DM Mono', monospace", color: C.amber }}>
            Continuous Operation · Zero Landfill
          </div>
          <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700,
            fontSize: "clamp(1.4rem,2.5vw,2rem)", marginBottom: 16 }}>
            <span style={{ color: C.midGreen }}>Continuous Biomass </span>
            <span style={{ color: C.amber }}>Pyrolysis Plant</span>
          </h3>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "0.975rem",
            color: C.mutedText, lineHeight: 1.8, marginBottom: 16 }}>
            Our continuous biomass pyrolysis plant thermally decomposes agricultural residues,
            wood chips, rice husks, coconut shells, and other organic feedstocks in a fully sealed,
            oxygen-free environment operating at 400–600 °C. The rotary reactor runs uninterrupted
            around the clock, converting raw biomass into bio-oil, biochar, and syngas with zero
            harmful emissions — turning agricultural waste liabilities into commercially valuable resources.
          </p>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "0.975rem",
            color: C.mutedText, lineHeight: 1.8, marginBottom: 20 }}>
            The closed-loop design recycles syngas to sustain reactor heat, maximising energy
            efficiency while keeping operational costs low. PLC automation manages temperature
            profiles and output quality without requiring continuous operator presence.
          </p>
          <FeatureCheck items={[
            "Continuous 24/7 operation — no batch shutdown",
            "Processes rice husk, wood chips, bagasse & more",
            "Closed-loop design — zero harmful gas emissions",
            "Auto-feed & auto-discharge, minimal manual work",
            "PLC temperature management with remote monitoring",
            "Syngas heat recycling — cuts external fuel by 60%",
            "Biochar suitable as soil conditioner and carbon sink",
            "Scalable from 500 kg/day to 20 T/day",
          ]} />
        </div>
        <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.55 }}
          className="overflow-hidden h-[260px] lg:h-[460px]"
          style={{ border: `2px solid ${C.midGreen}`, boxShadow: "0 20px 45px rgba(5,49,20,0.15)" }}>
          <img
            src={Biomashero }
            className="w-full h-full" style={{ objectFit: "cover" }} />
        </motion.div>
      </div>

      {/* Stats strip */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
        {[
          { v: "30–45%", l: "Bio-oil yield" },
          { v: "400–600 °C", l: "Reactor temperature" },
          { v: "0", l: "Harmful emissions" },
          { v: "24/7", l: "Continuous operation" },
        ].map((s, i) => (
          <div key={i} className="p-4"
            style={{ background: "rgba(23,139,76,0.07)", border: "1px solid rgba(23,139,76,0.2)" }}>
            <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700,
              fontSize: "1.55rem", color: C.midGreen }}>{s.v}</div>
            <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.78rem",
              letterSpacing: "0.08em", color: C.mutedText, marginTop: 4 }}>{s.l}</div>
          </div>
        ))}
      </div>

      {/* Process */}
      <div className="mt-16">
        <SectionHeading green="Process" amber="Flow" />
        <ProcessFlow steps={biomassProcess} />
      </div>

      {/* Features */}
      <div className="mt-16">
        <SectionHeading green="Innovative" amber="Features" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {biomassFeatures.map((f, i) => (
            <FeatureCard key={i} icon={f.icon} title={f.title} description={f.desc} />
          ))}
        </div>
      </div>

      {/* Outputs */}
      <ProductOutputs outputs={biomassOutputs} />

      {/* Architecture */}
      <ArchBanner
  label="Biomass Pyrolysis"
  image={Biomass}
/>

      {/* Specs */}
      <SpecsSection block={biomassSpecs} />

      {/* Feedstocks + Applications */}
      <div className="mt-16 grid lg:grid-cols-2 gap-10">
        <div style={{ background: C.offWhite, border: `1px solid ${C.border}`, borderRadius: 12, padding: 32 }}>
          <SectionHeading green="Suitable" amber="Feedstocks" />
          {["Agricultural residues — rice husk, wheat straw, corn cobs",
            "Wood chips, sawdust, bamboo, and timber offcuts",
            "Coconut shells and palm kernel shells",
            "Sugarcane bagasse and press mud",
            "Municipal green and garden waste",
            "Paper mill and cardboard processing waste",
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-2 mb-3">
              <CheckCircle2 className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" style={{ color: C.midGreen }} />
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem", color: C.mutedText }}>{item}</span>
            </div>
          ))}
        </div>
        <div style={{ background: C.offWhite, border: `1px solid ${C.border}`, borderRadius: 12, padding: 32 }}>
          <SectionHeading green="Key" amber="Applications" />
          {["Agro-industrial waste-to-energy projects",
            "Rural biomass energy centres",
            "Carbon credit generation programmes",
            "Soil biochar production for agriculture",
            "Industrial heat and power from bio-oil",
            "Municipal solid waste treatment facilities",
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-2 mb-3">
              <CheckCircle2 className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" style={{ color: C.midGreen }} />
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem", color: C.mutedText }}>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function PlasticTab() {
  return (
    <div>
      {/* Hero */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div>
          <div className="text-[10px] tracking-[0.18em] uppercase mb-2"
            style={{ fontFamily: "'DM Mono', monospace", color: C.amber }}>
            Waste Plastic to Fuel · Circular Economy
          </div>
          <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700,
            fontSize: "clamp(1.4rem,2.5vw,2rem)", marginBottom: 16 }}>
            <span style={{ color: C.midGreen }}>Continuous Plastic </span>
            <span style={{ color: C.amber }}>Pyrolysis Plant</span>
          </h3>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "0.975rem",
            color: C.mutedText, lineHeight: 1.8, marginBottom: 16 }}>
            Pyrolysis is the thermochemical decomposition of organic material at elevated temperatures
            in the absence of oxygen. Our plastic pyrolysis systems convert non-recyclable waste plastics,
            rubber, and tyres — PP, PE, PS, ABS — into high-value outputs: pyrolysis oil equivalent to
            diesel, carbon black, and syngas, achieving near-zero landfill outcomes.
          </p>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "0.975rem",
            color: C.mutedText, lineHeight: 1.8, marginBottom: 20 }}>
            The continuous-feed design eliminates batch downtime, significantly improving throughput
            and economic returns. Integrated condensation and gas-scrubbing ensures clean operation,
            while recovered pyrolysis oil serves as a direct substitute for diesel in industrial applications.
          </p>
          <FeatureCheck items={[
            "Continuous feeding — no reactor shutdown between cycles",
            "Processes PP, PE, PS, ABS and mixed plastic waste",
            "Fully sealed reactor — no gas leakage or open burning",
            "High-efficiency multi-stage condensation for max oil recovery",
            "Carbon black recovery for rubber and coating industries",
            "PLC-automated temperature and pressure monitoring",
            "Gas scrubbing and tail-gas treatment for clean emissions",
            "Scalable from 3 T/day to 20 T/day",
          ]} />
        </div>
        <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.55 }}
          className="overflow-hidden h-[260px] lg:h-[460px]"
          style={{ border: `2px solid ${C.midGreen}`, boxShadow: "0 20px 45px rgba(5,49,20,0.15)" }}>
          <img
            src={Plastichero}
            alt="Plastic Pyrolysis Plant"
            className="w-full h-full" style={{ objectFit: "cover" }} />
        </motion.div>
      </div>

      {/* Stats strip */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
        {[
          { v: "40–45%", l: "Oil yield from plastic" },
          { v: "350–450 °C", l: "Reactor temperature" },
          { v: "0", l: "Harmful emissions (controlled)" },
          { v: "24/7", l: "Continuous operation" },
        ].map((s, i) => (
          <div key={i} className="p-4"
            style={{ background: "rgba(23,139,76,0.07)", border: "1px solid rgba(23,139,76,0.2)" }}>
            <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700,
              fontSize: "1.55rem", color: C.midGreen }}>{s.v}</div>
            <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.78rem",
              letterSpacing: "0.08em", color: C.mutedText, marginTop: 4 }}>{s.l}</div>
          </div>
        ))}
      </div>

      {/* Process */}
      <div className="mt-16">
        <SectionHeading green="Process" amber="Flow" />
        <ProcessFlow steps={plasticProcess} />
      </div>

      {/* Features */}
      <div className="mt-16">
        <SectionHeading green="Innovative" amber="Features" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {plasticFeatures.map((f, i) => (
            <FeatureCard key={i} icon={f.icon} title={f.title} description={f.desc} />
          ))}
        </div>
      </div>

      {/* Outputs */}
      <ProductOutputs outputs={plasticOutputs} />

      {/* Architecture */}
      <ArchBanner
  label="Plastic Pyrolysis"
  image={Plastic}
/>

      {/* Specs */}
      <SpecsSection block={plasticSpecs} />

      {/* Plastic types + Applications */}
      <div className="mt-16 grid lg:grid-cols-2 gap-10">
        <div style={{ background: C.offWhite, border: `1px solid ${C.border}`, borderRadius: 12, padding: 32 }}>
          <SectionHeading green="Accepted" amber="Plastic Types" />
          {["Polypropylene (PP) — packaging, containers, straws",
            "Polyethylene (PE) — HDPE, LDPE bags and films",
            "Polystyrene (PS) — foam packaging and disposables",
            "ABS — automotive parts and appliance casings",
            "Mixed unsorted plastic waste (non-PVC)",
            "Contaminated multi-layer films and laminates",
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-2 mb-3">
              <CheckCircle2 className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" style={{ color: C.midGreen }} />
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem", color: C.mutedText }}>{item}</span>
            </div>
          ))}
        </div>
        <div style={{ background: C.offWhite, border: `1px solid ${C.border}`, borderRadius: 12, padding: 32 }}>
          <SectionHeading green="Key" amber="Applications" />
          {["Industrial fuel oil production from waste plastic",
            "Carbon black supply for rubber and tyre industries",
            "Plastic waste management for municipalities",
            "Cement plant co-processing fuel supply",
            "EPR (Extended Producer Responsibility) compliance",
            "Waste-to-energy projects with carbon credit generation",
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-2 mb-3">
              <CheckCircle2 className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" style={{ color: C.midGreen }} />
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem", color: C.mutedText }}>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ═════════════════════════════════════════════════════════════════════════════
   MAIN TABS
═════════════════════════════════════════════════════════════════════════════ */
const mainTabs = [
  { id: "biomass", label: "Biomass Pyrolysis" },
  { id: "plastic", label: "Plastic Pyrolysis" },
];

const tabContent: Record<string, React.ReactElement> = {
  biomass: <BiomassTab />,
  plastic: <PlasticTab />,
};

/* ═════════════════════════════════════════════════════════════════════════════
   PYROLYSIS PAGE
═════════════════════════════════════════════════════════════════════════════ */
export function PyrolysisPage() {
  const [activeTab, setActiveTab] = useState("biomass");

  return (
    <PageLayout
      title="Pyrolysis Solutions"
      subtitle="Advanced thermal decomposition converting plastic and biomass waste into fuel oil, carbon black, biochar, and syngas — zero landfill, maximum resource recovery."
      breadcrumb="Pyrolysis"
    >
      {/* Sticky Tab Bar */}
      <div className="sticky top-[72px] md:top-[112px] z-40"
        style={{ backgroundColor: C.darkGreen }}>
        <div className="max-w-7xl mx-auto px-6 py-2">
          <div className="flex gap-3 overflow-x-auto scrollbar-hide">
            {mainTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="flex-shrink-0 px-5 py-3 transition-all duration-300"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 600,
                  fontSize: "11px",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: activeTab === tab.id ? "#FFFFFF" : "rgba(255,255,255,0.75)",
                  background: activeTab === tab.id ? "rgba(255,255,255,0.08)" : "transparent",
                  border: activeTab === tab.id ? "1px solid #A0780E" : "1px solid rgba(255,255,255,0.12)",
                  borderRadius: "2px",
                  cursor: "pointer",
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <Section className="pt-4 md:pt-0">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
        >
          {tabContent[activeTab]}
        </motion.div>
      </Section>

      <Testimonials />
      <PageCTA />
    </PageLayout>
  );
}

export default PyrolysisPage;
