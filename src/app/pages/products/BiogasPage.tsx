import { motion } from "motion/react";
import { PageLayout, Section, SectionLabel, FeatureCard, SpecsTable, FAQItem, IndustriesServed, PageCTA, Testimonials, MachineGallery } from "../PageLayout";
import { Zap, Settings, Leaf, BarChart3, CheckCircle2 } from "lucide-react";
import img2 from "../../../imports/image-2.png";

const processSteps = [
  { step: "01", title: "Organic Waste Collection", desc: "Vehicles transport segregated organic waste into the reception area where trained personnel manually separate organic from inorganic materials." },
  { step: "02", title: "Secondary Segregation", desc: "Waste undergoes further sorting on stainless steel tables to remove any remaining inorganic materials, ensuring only the highest quality substrates enter production." },
  { step: "03", title: "Crushing", desc: "Segregated biodegradable food waste is finely crushed to increase surface area, accelerating degradation during anaerobic digestion." },
  { step: "04", title: "Pumping", desc: "Crushed food waste is mixed with water to form a slurry, then pumped into the main digestion process as feedstock for the anaerobic digestion machine." },
  { step: "05", title: "Anaerobic Digestion", desc: "Biological degradation occurs in the absence of oxygen at 40°C with continuous mixing, converting dissolved organic matter into biogas through hydrolysis, acidogenesis, and methanogenesis." },
  { step: "06", title: "Gas Processing", desc: "Biogas passes through a moisture trap, H₂S scrubber, and compressor before storage in a gas receiver tank, ready for use as cooking fuel or for electricity generation." },
];

const features = [
  { icon: <Zap className="w-5 h-5" />, title: "Advanced Digestion Technology", desc: "Utilizes state-of-the-art anaerobic digestion technology to maximize biogas production efficiency from organic waste streams." },
  { icon: <Settings className="w-5 h-5" />, title: "Modular Design", desc: "Flexible and scalable design allows for easy installation and expansion to meet growing energy demands across different facility sizes." },
  { icon: <BarChart3 className="w-5 h-5" />, title: "Smart Monitoring System", desc: "Integrated smart technology for real-time monitoring and optimization of the biogas production process with minimal manual intervention." },
  { icon: <Leaf className="w-5 h-5" />, title: "Low Maintenance", desc: "Engineered for reliability and ease of maintenance, ensuring consistent biogas output with minimal downtime and operational disruption." },
];

const benefits = [
  "Reduced Carbon Footprint: Lowers greenhouse gas emissions by up to 90% compared to fossil fuels.",
  "Cost Savings: Reduces energy costs by utilizing organic waste as a free and abundant resource.",
  "Energy Independence: Enables self-sufficiency in energy production, reducing reliance on traditional power grids.",
  "Waste Reduction: Effective waste management solution that dramatically reduces landfill use and pollution.",
  "Liquid Fertilizer: The digestate produced is a nutrient-rich biofertilizer that enhances soil fertility.",
  "Compliance: Dramatically minimize landfill contributions and meet environmental regulations.",
];

const specs = {
  headers: ["Model", "Capacity/Day", "Biogas Output (nm³/day)", "Electricity (kWh/day)", "LPG Equiv (kg/day)", "Min Area (m²)"],
  rows: [
    ["RN BG 300",  "300 Kg",  "30–36",   "7",  "16",  "18"],
    ["RN BG 500",  "500 Kg",  "60–64",   "10", "30",  "21"],
    ["RN BG 750",  "750 Kg",  "90–95",   "12", "45",  "30"],
    ["RN BG 1000", "1000 Kg", "120–130", "18", "60",  "38"],
    ["RN BG 1500", "1500 Kg", "180–190", "25", "90",  "50"],
    ["RN BG 2000", "2000 Kg", "240–260", "31", "120", "65"],
    ["RN BG 2500", "2500 Kg", "330–340", "38", "165", "75"],
    ["RN BG 5000", "5000 Kg", "660–680", "60", "330", "300"],
  ],
};

const faqs = [
  { q: "What is Biogas?", a: "Biogas is a byproduct of the decomposition of organic matter by anaerobic bacteria. Composed of approximately 60% methane and 40% CO₂, it is a clean and renewable energy source that can be used for cooking, heating, generating electricity, and more." },
  { q: "How does the biogas system work?", a: "Organic waste is collected, segregated, crushed, and mixed with water to form a slurry. This is fed into an anaerobic digestion machine where bacteria break down the organic matter in the absence of oxygen, producing methane-rich biogas." },
  { q: "What type of waste produces biogas?", a: "All organic waste including food scraps, kitchen waste, agricultural residues, and garden waste can be used to produce biogas. The system is designed to handle a wide variety of organic substrates." },
  { q: "How much biogas can I get from my waste?", a: "Output depends on the type and volume of organic waste. On average, 1 kg of food waste produces approximately 0.1–0.12 nm³ of biogas. Our models range from 30 nm³/day (RN BG 300) to 660–680 nm³/day (RN BG 5000)." },
  { q: "Is biogas good for the environment?", a: "Yes. Biogas can reduce life cycle greenhouse gas emissions by up to 90% compared to fossil fuels. It also prevents organic waste from going to landfills, where it would produce uncontrolled methane emissions." },
  { q: "What happens to the waste after digestion?", a: "After digestion, the remaining slurry becomes a nutrient-rich liquid fertilizer (digestate) that can be used for agriculture. The separated water can be recycled within the processing system." },
];

export function BiogasPage() {
  return (
    <PageLayout
      title="RN Biogas Solutions"
      subtitle="Eco-Green Biogas Solutions: Sustainable Energy for the Future — A Waste Management System That Gives Back To Nature."
      breadcrumb="RN Biogas"
    >
      {/* Hero */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <SectionLabel label="Biogas Solutions" />
            <p className="mb-5" style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "0.975rem", color: "#5A6B5C", lineHeight: 1.8 }}>
              Biogas is a fully renewable and environmentally friendly fuel that can help to reduce life cycle greenhouse gas emissions by up to <strong style={{ color: "#053114", fontWeight: 600 }}>90%</strong> compared with fossil fuel use. Biogas can be used for all the same purposes as natural gas and for generating electricity.
            </p>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "0.975rem", color: "#5A6B5C", lineHeight: 1.8 }}>
              Eco-Green Biogas Solutions harness the latest advancements in biogas technology to offer efficient, reliable, and sustainable energy production, converting a wide range of organic waste materials into high-quality biogas.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-8">
              {[{ v: "90%", l: "GHG Reduction" }, { v: "60%", l: "Methane Content" }, { v: "100%", l: "Renewable" }, { v: "24/7", l: "Energy Output" }].map(s => (
                <div key={s.l} className="p-4 text-center" style={{ backgroundColor: "rgba(23,139,76,0.07)", border: "1px solid rgba(23,139,76,0.2)" }}>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "1.6rem", color: "#178B4C" }}>{s.v}</div>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.78rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#5A6B5C", marginTop: "4px" }}>{s.l}</div>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
            <div style={{ border: "2px solid #178B4C", overflow: "hidden" }}>
              <img src={img2} alt="RN Biogas Solution" className="w-full" style={{ maxHeight: "400px", objectFit: "cover" }} />
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Process */}
      <Section bg="#F5F4EF">
        <div className="text-center mb-10">
          <SectionLabel label="The Process" />
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "1rem", color: "#5A6B5C", maxWidth: "520px", margin: "0 auto" }}>
            From organic waste to clean energy — a seamless, scientifically engineered process.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {processSteps.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.07 * i }}
              className="p-6" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(23,139,76,0.15)" }}>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: "#A0780E", marginBottom: "8px" }}>{s.step}</div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600, fontSize: "1rem", color: "#053114", marginBottom: "8px" }}>{s.title}</h3>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "0.85rem", color: "#5A6B5C", lineHeight: 1.65 }}>{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Features */}
      <Section>
        <div className="text-center mb-10">
          <SectionLabel label="Innovative Features" />
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "1rem", color: "#5A6B5C", maxWidth: "480px", margin: "0 auto" }}>With R-Nature, you don't get just a machine.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f, i) => <FeatureCard key={i} title={f.title} description={f.desc} icon={f.icon} />)}
        </div>
      </Section>

      {/* Benefits */}
      <Section bg="#F5F4EF">
        <SectionLabel label="Key Benefits" />
        <div className="grid sm:grid-cols-2 gap-4 mt-4">
          {benefits.map((b, i) => (
            <div key={i} className="flex items-start gap-3 p-4" style={{ border: "1px solid rgba(23,139,76,0.12)", backgroundColor: "#ffffff" }}>
              <CheckCircle2 className="w-4 h-4 mt-1 flex-shrink-0" style={{ color: "#178B4C" }} />
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "0.875rem", color: "#5A6B5C", lineHeight: 1.65 }}>{b}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Specs */}
      <Section>
        <SectionLabel label="Technical Data" />
        <div className="mt-4"><SpecsTable headers={specs.headers} rows={specs.rows} /></div>
      </Section>

      {/* FAQ */}
      <Section bg="#F5F4EF">
        <SectionLabel label="FAQ" />
        <div className="mt-4 max-w-3xl">
          {faqs.map((f, i) => <FAQItem key={i} question={f.q} answer={f.a} />)}
        </div>
      </Section>

      <MachineGallery images={[
        { src: img2, caption: "Biogas Plant" },
        { src: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&h=400&fit=crop&auto=format", caption: "Digester Unit" },
        { src: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=400&h=400&fit=crop&auto=format", caption: "Gas Collection" },
        { src: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=400&h=400&fit=crop&auto=format", caption: "Digestate Output" },
      ]} />
      <Testimonials />
      <IndustriesServed />
      <PageCTA />
    </PageLayout>
  );
}
