import { useState } from "react";
import { motion } from "motion/react";
import { PageLayout, Section, PageCTA,  } from "../PageLayout";
import { Building2, CheckCircle2, UserCog } from "lucide-react";
import img1 from "../../../imports/image-1.png";
import img3 from "../../../imports/image-3.png";
import img5 from "../../../imports/image-5.png";
import heroVideo from "../../../imports/Wetwastemanagement.webp";
import Nonheating from "../../../imports/non-heating .png";
import Biofilter from "../../../imports/biofilter.webp";
import Shredders from "../../../imports/shredders.png";
import Testimonials from "../../components/Testimonials";
import EnquiryModal from "../../components/EnquiryModal";
import binfilter from "../../../imports/bin lifter  (1).png";
import pretreatment from "../../../imports/pretreatment.png";
import Owcfull from "../../../imports/owc1.jpg";
import Owcfull2 from "../../../imports/owcf2.jpg";
import Binlifter1 from "../../../imports/binlifter1.jpg";
import Binlifter2 from "../../../imports/Biolifter2.jpg";
import Binlifter3 from "../../../imports/Biolifter3.jpg";

import {
  Gauge,
  ChartColumnIncreasing,
  ShieldCheck,
  Maximize2,
  Sprout,
  PackageCheck,
} from "lucide-react";

import {
  Hand,
  Cog,
  CircleDollarSign,
  SlidersHorizontal,
  
 // UserCog,
} from "lucide-react";
import {
  Leaf,
  Wind,
  Recycle,
  Trees,
  Flower2,
  BatteryCharging,
} from "lucide-react";

import {
  ArrowUpFromLine,
  Weight,
  Settings2,
  Hammer,
  HandMetal,
  
} from "lucide-react";

import {
 
  Trash2,
  Package,
  Construction,
   Factory,
} from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

/* ── Composting Machine types ─────────────────────────── */
const composingSubTabs = [
  {
    id: "automatic",
    label: "Automatic",
    title: "Fully Automatic OWC",
    subtitle: "CE Certified · Zero Manual Intervention",
    desc: (
  <>
    <p className="mb-4">
      The automatic organic waste composting/converter machine efficiently converts food and organic waste into a pre-compostable matter, nutrient-rich, soil-like compostable output within 24–36 hours. Using high-performance microorganisms and a controlled biological process, it achieves 80–90% volume reduction and handles various organic waste types
    </p>

    

    
  </>
),
 features: [
  {
    icon: Gauge,
    title: "Reliable processing",
    desc: "Consistent decomposition cycles with stable output quality.",
  },
  {
    icon: ChartColumnIncreasing,
    title: "Scalable Capacity",
    desc: "Available in standard and customized configurations based on waste volume.",
  },
  {
    icon: ShieldCheck,
    title: "Durable Construction",
    desc: "Built for continuous operation with minimal maintenance.",
  },
  {
    icon: Maximize2,
    title: "Space-Conscious Design",
    desc: "Compact footprint suitable for restricted installation areas.",
  },
  {
    icon: Sprout,
    title: "Final product ",
    desc: "suitable for landscaping, gardening, and agricultural applications.",
  },
  {
    icon: PackageCheck,
    title: "Automatic Output Removal",
    desc: "Automatic discharge minimizes manual handling.",
  },
],
  specs: [
  ["Capacity", "Length (mm)", "Width (mm)", "Height (mm)", "Connected Load (kW)", "Machine Weight (Approx)"],
  ["25 KG", "1493", "580", "1188", "1.86", "350 kg"],
  ["50 KG", "1676", "700", "1341", "1.98", "450 kg"],
  ["75 KG", "1860", "792", "1127", "4.25", "550 kg"],
  ["125 KG", "2286", "944", "1432", "5.35", "700 kg"],
  ["200 KG", "2500", "975", "1432", "6.6", "750 kg"],
  ["250 KG", "2750", "1158", "1554", "8", "1020 kg"],
  ["500 KG", "3000", "1432", "1860", "16.5", "1650 kg"],
  ["750 KG", "3535", "1402", "1950", "22.5", ""],
  ["1000 KG", "3962", "2100", "2133", "21.5", "2900 kg"],
  ["1500 KG", "4600", "2100", "2347", "30", ""],
  ["2000 KG", "4100", "2011", "2500", "58", "3900 kg"],
],
    image: [img1,  Owcfull, Owcfull2],
  },
  {
    id: "semiauto",
    label: "Semi-Automatic",
    title: "Semi-Automatic Composters",
    subtitle: "Operator-Assisted · Cost Effective",
    desc: "Semi-automatic composting machines combine the efficiency of mechanised processing with operator-guided loading and unloading. Ideal for facilities that prefer greater control over the process while still benefiting from automated aeration, mixing, and temperature management.",
  features: [
  {
    icon: Hand,
    title: "Manual Loading",
    desc: "Operator-assisted waste loading with automated composting process.",
  },
  {
    icon: Cog,
    title: "Automated Processing",
    desc: "Automatic mixing, aeration, and temperature management.",
  },
  {
    icon: CircleDollarSign,
    title: "Cost Effective",
    desc: "Lower initial investment while maintaining reliable performance.",
  },
  {
    icon: SlidersHorizontal,
    title: "Flexible Capacity",
    desc: "Available in multiple capacities to match daily waste generation.",
  },
  {
    icon: Building2,
    title: "Ideal Applications",
    desc: "Suitable for hotels, resorts, hospitals, and commercial kitchens.",
  },
  {
    icon: UserCog,
    title: "Easy Operation",
    desc: "Simple controls with minimal operator training required.",
  },
], specs: [
      ["Model", "Capacity", "Operation", "Power"],
      ["RN-SA 50",  "50 kg/day",  "Semi-Auto", "2.2 kW, 3Ph"],
      ["RN-SA 150", "150 kg/day", "Semi-Auto", "6.5 kW, 3Ph"],
      ["RN-SA 300", "300 kg/day", "Semi-Auto", "12 kW, 3Ph"],
    ],
    image: [Nonheating, img3, img3]
  },
  {
    id: "nonheating",
    label: "Non-Heating",
    title: "Non-Heating Cold Composters",
    subtitle: "Natural Aerobic · Energy Efficient",
    desc: "Non-heating composters rely on natural aerobic microbial activity to decompose organic waste without any external heat source. These systems are the most energy-efficient option, suited for facilities with lower waste volumes and longer processing windows. Ideal for gardens, parks, small communities.",
  features: [
  {
    icon: Leaf,
    title: "No External Heating",
    desc: "Natural aerobic composting without any external heat source.",
  },
  {
    icon: BatteryCharging,
    title: "Energy Efficient",
    desc: "Consumes minimal power, reducing operating costs.",
  },
  {
    icon: Recycle,
    title: "Natural Process",
    desc: "Relies on microbial activity for effective decomposition.",
  },
  {
    icon: Wind,
    title: "Low Maintenance",
    desc: "Simple construction with minimal servicing requirements.",
  },
  {
    icon: Trees,
    title: "Green Waste Ready",
    desc: "Suitable for garden waste, leaves, and organic waste streams.",
  },
  {
    icon: Flower2,
    title: "Compact Design",
    desc: "Portable design suitable for parks, gardens, and small communities.",
  },
],  specs: [
  ["Capacity", "Power", "Height (mm)", "Width (mm)", "Length (mm)"],
  ["200 KGS", "2.5 kW", "2000", "1700", "4300"],
  ["500 KGS", "3.5 kW", "2100", "1800", "5000"],
  ["750 KGS", "5.5 kW", "2600", "2200", "6025"],
  ["1000 KGS", "5.5 kW", "2700", "2190", "6025"],
  ["2000 KGS", "10.5 kW", "2746", "2340", "8100"],
],
    image:  [heroVideo, Nonheating, img3]
  },
];



/* ── Main top-level tabs ──────────────────────────────── */
const mainTabs = [
  { id: "composting", label: "Composting Machines" },
  { id: "binfilter",  label: "Bin Lifter" },
  { id: "dewatering", label: "Pre-Treatment Machine" },
  { id: "biofilter",  label: "Bio-Filter" },
  { id: "shredders",  label: "Shredders" },
];

function SpecTable({
  rows,
  onQuote,
}: {
  rows: string[][];
  onQuote: (capacity: string) => void;
}) {
  return (
    <div
      className="overflow-x-auto mt-6"
      style={{
        border: "1px solid rgba(5,49,20,0.08)",
        boxShadow:
          "0 1px 2px rgba(5,49,20,0.04), 0 16px 32px rgba(5,49,20,0.06)",
      }}
    >
      <table
        className="w-full border-collapse text-left"
        style={{ minWidth: "820px" }}
      >
        <thead>
          <tr style={{ backgroundColor: "#053114" }}>
            {rows[0].map((h, i) => (
              <th
                key={i}
                className="px-4 py-3 text-[11px] tracking-[0.1em] uppercase"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 600,
                  color: "#fff",
                  borderRight: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                {h}
              </th>
            ))}

            <th
              className="px-4 py-3 text-center"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 600,
                color: "#fff",
              }}
            >
              Action
            </th>
          </tr>
        </thead>

        <tbody>
          {rows.slice(1).map((row, i) => (
            <tr
              key={i}
              className="transition-colors duration-150 hover:bg-[rgba(23,139,76,0.06)]"
              style={{
                backgroundColor: i % 2 === 0 ? "#fff" : "#F5F4EF",
                borderBottom: "1px solid rgba(5,49,20,0.06)",
              }}
            >
              {row.map((cell, j) => (
                <td
                  key={j}
                  className="px-4 py-3"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.85rem",
                    color: "#053114",
                    borderRight: "1px solid rgba(5,49,20,0.06)",
                  }}
                >
                  {cell}
                </td>
              ))}

              <td className="px-4 py-3 text-center">
                <button
                  onClick={() => onQuote(row[0])}
                  style={{
                    background: "#178B4C",
                    color: "#fff",
                    border: "none",
                    padding: "8px 16px",
                    borderRadius: "999px",
                    cursor: "pointer",
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 600,
                    fontSize: "13px",
                    transition: "0.25s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background = "#0D8239")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background = "#178B4C")
                  }
                >
                  Get Quote
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
function CompositingMachinesTab() {
  const [sub, setSub] = useState("automatic");
  const [showQuote, setShowQuote] = useState(false);
const [selectedCapacity, setSelectedCapacity] = useState("");
  const current = composingSubTabs.find(t => t.id === sub)!;
  return (
    <div>
      {/* Sub-tabs */}
     <div className="flex gap-3 mb-8 overflow-x-auto scrollbar-hide">
  {composingSubTabs.map((t) => (
    <button
      key={t.id}
      onClick={() => setSub(t.id)}
      className="flex-shrink-0 px-5 py-3 transition-all duration-300"
      style={{
        fontFamily: "'DM Sans', sans-serif",
        fontWeight: 600,
        fontSize: "11px",
        letterSpacing: "0.1em",
        textTransform: "uppercase",

        color: sub === t.id ? "#178B4C" : "#5A6B5C",

        background:
          sub === t.id
            ? "rgba(23,139,76,0.08)"
            : "transparent",

        border:
          sub === t.id
            ? "1px solid #178B4C"
            : "1px solid rgba(5,49,20,0.15)",

        borderRadius: "2px",
      }}
    >
      {t.label}
    </button>
  ))}
</div>

      <motion.div key={sub} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <div
  style={{
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    padding: "8px 16px",
    marginBottom: "16px",
    borderRadius: "999px",
    background: "linear-gradient(90deg, rgba(23,139,76,0.12), rgba(160,120,14,0.12))",
    border: "1px solid rgba(23,139,76,0.2)",
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "0.85rem",
    fontWeight: 700,
    color: "#053114",
    letterSpacing: "0.03em",
  }}
>
  <span style={{ color: "#178B4C" }}>✓ CE Certified</span>
  <span style={{ color: "#A0780E" }}></span>
  <span></span>
</div>           <h3
  style={{
    fontFamily: "'Playfair Display', serif",
    fontWeight: 700,
    fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
    marginBottom: "16px",
  }}
>
  <span style={{ color: "#178B4C" }}>
    {current.title.split(" ").slice(0, -1).join(" ")}{" "}
  </span>
  <span style={{ color: "#A0780E" }}>
    {current.title.split(" ").slice(-1)}
  </span>
</h3>



{sub === "automatic" && (
  <div
    style={{
      display: "inline-block",
      background: "rgba(23,139,76,0.12)",
      color: "#178B4C",
      padding: "4px 10px",
      borderRadius: "3px",
      fontFamily: "'DM Sans', sans-serif",
      fontWeight: 600,
      fontSize: "1rem",
      lineHeight: 1.5,
      marginBottom: "14px",
    }}
  >
    Engineered for sustainable food waste processing
  </div>
)}

            <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "0.975rem", color: "#5A6B5C", lineHeight: 1.8, marginBottom: "20px" }}>
              {current.desc}
            </p>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
  {current.features.map((item, i) => {
    const Icon = item.icon;

    return (
      <div key={i} className="flex items-start gap-4">
        <Icon
          size={28}
          strokeWidth={2}
          style={{ color: "#178B4C", flexShrink: 0 }}
        />

        <div>
          <h4
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 700,
              fontSize: "15px",
              color: "#053114",
              marginBottom: "6px",
              textTransform: "uppercase",
            }}
          >
            {item.title}
          </h4>

          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "14px",
              color: "#5A6B5C",
              lineHeight: 1.6,
            }}
          >
            {item.desc}
          </p>
        </div>
      </div>
    );
  })}
</div>
           </div> 
          
         <div className="w-full">
  <Swiper
    modules={[Autoplay, Pagination]}
    autoplay={{
      delay: 3000,
      disableOnInteraction: false,
    }}
    loop={true}
    pagination={{ clickable: true }}
    slidesPerView={1}
    className="rounded-lg"
  >
    {current.image.map((img, index) => (
      <SwiperSlide key={index}>
        <img
          src={img}
          alt={`${current.title} ${index + 1}`}
          className="w-full"
          style={{
            height: "500px",
            objectFit: "contain",
          }}
        />
      </SwiperSlide>
    ))}
  </Swiper>
</div>

</div>

<div className="mt-16">
  <h3
  className="mb-6"
  style={{
    fontFamily: "'Playfair Display', serif",
    fontWeight: 700,
    fontSize: "2rem",
  }}
>
  <span style={{ color: "#178B4C" }}>Technical </span>
  <span style={{ color: "#A0780E" }}>Specifications</span>
</h3>

<SpecTable
  rows={current.specs}
  onQuote={(capacity) => {
    setSelectedCapacity(capacity);
    setShowQuote(true);
  }}
/>

<EnquiryModal
  open={showQuote}
  onClose={() => setShowQuote(false)}
  product={current.title}
  capacity={selectedCapacity}
/>

  <div
  className="mt-6 rounded-lg p-5"
  style={{
    background: "#F8FAF7",
    border: "1px solid rgba(5,49,20,0.1)",
  }}
>
  <h4
    className="mb-3"
    style={{
      fontFamily: "'DM Sans', sans-serif",
      fontWeight: 600,
      color: "#053114",
    }}
  >
    Notes
  </h4>

  <ul
    className="space-y-2"
    style={{
      fontFamily: "'DM Sans', sans-serif",
      fontSize: "0.9rem",
      color: "#5A6B5C",
      lineHeight: 1.7,
    }}
  >
    <li>• Power supply can be configured as per country-specific standards (50 Hz / 60 Hz).</li>
    <li>• Machine dimensions and connected load are tentative and may change with design upgrades. Please confirm with the manufacturer prior to ordering.</li>
  </ul>
</div>
</div>


      </motion.div>
    </div>
  );
}
function BinFilterTab() {
  return (
    <div>
      {/* Top Section */}
      <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Left Content */}
        <div>
        <div
  style={{
    display: "inline-flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "12px",

    fontFamily: "'DM Mono', monospace",
    fontSize: "11px",
    fontWeight: 600,
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    color: "#A0780E",
  }}
>
  <span
    style={{
      width: "3px",
      height: "16px",
      background: "#A0780E",
      borderRadius: "999px",
    }}
  />
  Automatic waste loading  · Safe & Efficient
</div>
          <h3
  style={{
    fontFamily: "'Playfair Display', serif",
    fontWeight: 700,
    fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
    marginBottom: "16px",
  }}
>
  <span style={{ color: "#178B4C" }}>Automatic</span>
  <span style={{ color: "#A0780E" }}> Bin Lifter </span>
</h3>


<div
  style={{
    display: "inline-block",
    background: "rgba(23,139,76,0.12)",
    color: "#178B4C",
    padding: "4px 10px",
    borderRadius: "3px",
    fontFamily: "'DM Sans', sans-serif",
    fontWeight: 600,
    fontSize: "1rem", // Increase this value
    lineHeight: 1.5,
    marginBottom: "14px",
  }}
>
 Bin Lifters are engineered to ensure safe, efficient and hygienic handling of organic waste during feeding operations. 
</div>

          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 300,
              fontSize: "0.975rem",
              color: "#5A6B5C",
              lineHeight: 1.8,
              marginBottom: "20px",
            }}
          >
            
            Designed to eliminate manual lifting & reduce human intervention, they enable precise and controlled transfer of waste into the machines, significantly improving operational efficiency and operator safety. The bin lifter is compatible with composting machines having processing capacities of 125 kg per day and above. Each unit is custom-configured based on the machine model, bin size, and required lifting capacity, ensuring seamless integration with the composting system.
          </p>

<div className="block lg:hidden my-5">

  <Swiper
    modules={[Autoplay, Pagination]}
    autoplay={{
      delay: 2500,
      disableOnInteraction: false,
    }}
    speed={700}
    pagination={{ clickable: true }}
    loop
    className="w-full rounded-xl"
  >
    {[Binlifter1, Binlifter2, Binlifter3].map((img, i) => (
      <SwiperSlide
  key={i}
  className="flex justify-center items-center"
>
  <div
    className="flex justify-center items-center w-full"
    style={{
      height: "360px",
    }}
  >
    <img
      src={img}
      alt=""
      style={{
        maxWidth: "100%",
        maxHeight: "100%",
        objectFit: "contain",
        margin: "0 auto",
        display: "block",
      }}
    />
  </div>
</SwiperSlide>
    ))}
  </Swiper>
</div>
    


      <div className="grid sm:grid-cols-2 gap-4 mt-5">
  {[
  {
    icon: ArrowUpFromLine,
    text: "Safe bin handling with controlled lifting and tipping",
  },
  {
    icon: Factory,
    text: "Available for machines having processing capacities of 125 kg per day and above",
  },
  {
    icon: Package,
    text: "Configured lifting capacity to suit machine size requirements",
  },
  {
    icon: Construction,
    text: "Robust construction for repeated lifting cycles",
  },
  {
    icon: Hand,
    text: "Manual push-button operation for controlled movement",
  },
  {
    icon: ShieldCheck,
    text: "Integrated safety systems including limit switches",
  },
].map((item, i) => {
    const Icon = item.icon;

    return (
      <div key={i} className="flex items-start gap-3">
       <Icon
  size={24}
  strokeWidth={2.2}
  style={{
    color: "#4BAA63",
    flexShrink: 0,
    marginTop: "2px",
  }}
/>

<span
  style={{
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "0.95rem",
    fontWeight: 400,
    color: "#5A6B5C",
    lineHeight: 1.8,
  }}
>
  {item.text}
</span>
      </div>
    );
  })}
</div>
 </div> 
        {/* Right Image */}
      <div className="hidden lg:block w-full">
  <Swiper
    modules={[Autoplay, Pagination]}
    autoplay={{
      delay: 3000,
      disableOnInteraction: false,
    }}
    pagination={{ clickable: true }}
    loop
    slidesPerView={1}
    className="rounded-lg"
  >
    {[Binlifter1, Binlifter2, Binlifter3].map((img, index) => (
      <SwiperSlide key={index}>
        <img
          src={img}
          alt={`Bin Lifter ${index + 1}`}
          className="w-full"
          style={{
            height: "460px",
            objectFit: "contain",
          }}
        />
      </SwiperSlide>
    ))}
  </Swiper>
</div>
      </div>

      {/* System Integration */}
      <div className="mt-16">
       <h3
  className="mb-4"
  style={{
    fontFamily: "'Playfair Display', serif",
    fontWeight: 700,
    fontSize: "2rem",
  }}
>
  <span style={{ color: "#178B4C" }}>System </span>
  <span style={{ color: "#A0780E" }}>Integration</span>
</h3>

        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.95rem",
            color: "#5A6B5C",
            lineHeight: 1.9,
          }}
        >
          The bin lifter is engineered for direct integration with Reddonatura
          composting machines of 125 kg capacity and above. It lifts and
          positions waste bins at the required height and angle to ensure safe,
          controlled, and efficient discharge of food waste into the machine,
          supporting a streamlined waste management process.
        </p>
      </div>

      {/* Applications + Technical Overview */}
      <div className="mt-16 grid lg:grid-cols-2 gap-16">
        

        {/* Technical Overview */}
        <div>
         <h3
  className="mb-4"
  style={{
    fontFamily: "'Playfair Display', serif",
    fontWeight: 700,
    fontSize: "2rem",
  }}
>
  <span style={{ color: "#178B4C" }}>Technical </span>
  <span style={{ color: "#A0780E" }}>Overview</span>
</h3>

          {[
            "Applicable for composting machines: 125kg capacity and above",
            "Lifting capacity: 60L, 120L, & 240L as per cycle",
            "Power supply: Customizable based on country-specific electrical standards (50 Hz / 60 Hz)",
            "Operation: Manual control for precise and safe handling",
            "Safety: Equipped with limit switches and an overload relay for enhanced operational safety",
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-2 mb-3">
              <CheckCircle2
                className="w-3.5 h-3.5 mt-0.5 flex-shrink-0"
                style={{ color: "#178B4C" }}
              />
              <span
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.9rem",
                  color: "#5A6B5C",
                }}
              >
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
function DewateringTab() {
  return (
    <>
      <div className="grid lg:grid-cols-2 gap-12 items-start">
      <div>
        <div className="text-[10px] tracking-[0.18em] uppercase mb-2" style={{ fontFamily: "'DM Mono', monospace", color: "#A0780E" }}>60–70% Volume Reduction · Plug & Play</div>
       <h3
  style={{
    fontFamily: "'Playfair Display', serif",
    fontWeight: 700,
    fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
    marginBottom: "16px",
  }}
>
  <span style={{ color: "#178B4C" }}>Pre-Treatment </span>
  <span style={{ color: "#A0780E" }}>Machine</span>
</h3>
        <div style={{ marginBottom: "22px" }}>
  {/* Highlight Strip */}
  <div
    style={{
      display: "inline-block",
      background: "rgba(23,139,76,0.12)",
      color: "#178B4C",
      padding: "4px 10px",
      borderRadius: "3px",
      fontFamily: "'DM Sans', sans-serif",
      fontWeight: 600,
      fontSize: "1rem",
      lineHeight: 1.5,
      marginBottom: "14px",
    }}
  >
    Designed to efficiently reduce food waste volume prior to composting or
    further processing.
  </div>

  <p
    style={{
      fontFamily: "'DM Sans', sans-serif",
      fontWeight: 300,
      fontSize: "0.975rem",
      color: "#5A6B5C",
      lineHeight: 1.9,
      marginBottom: "14px",
    }}
  >
    Reddonatura pre-treatment machines operate on a two-stage processing
    system. In the first stage, food waste is shredded into smaller particle
    sizes. In the second stage, excess moisture is removed through a
    centrifugal dewatering mechanism. This process achieves a volume reduction
    of approximately 60–70%, making the waste highly suitable for further
    composting, storage, or transportation.
  </p>

  <p
    style={{
      fontFamily: "'DM Sans', sans-serif",
      fontWeight: 300,
      fontSize: "0.975rem",
      color: "#5A6B5C",
      lineHeight: 1.9,
      marginBottom: "14px",
    }}
  >
    By significantly reducing moisture content, the system improves handling
    efficiency and enhances the performance of downstream composting processes.
  </p>

  <p
    style={{
      fontFamily: "'DM Sans', sans-serif",
      fontWeight: 300,
      fontSize: "0.975rem",
      color: "#5A6B5C",
      lineHeight: 1.9,
      marginBottom: "14px",
    }}
  >
    Each machine is configured based on the quantity of food waste generated
    per hour. Motor rating, throughput capacity, and internal components are
    selected to match site-specific conditions and duty cycles, ensuring stable
    and reliable performance in high-volume operating environments.
  </p>

  <p
    style={{
      fontFamily: "'DM Sans', sans-serif",
      fontWeight: 300,
      fontSize: "0.975rem",
      color: "#5A6B5C",
      lineHeight: 1.9,
    }}
  >
    Design priorities focus on durability, operational simplicity, and long
    service life—delivering dependable performance without unnecessary
    complexity.
  </p>
</div>
       {[
  "Effective dewatering for substantial reduction in food waste volume.",
  "Throughput capacity configured based on hourly waste generation.",
  "Motor rating matched to processing load and operating conditions.",
  "Robust cutting and dewatering components for continuous operation.",
  "Compact, standalone design suitable for confined service areas.",
  "Low-maintenance construction with easy access to components.",
].map((f, i) => (
  <div key={i} className="flex items-start gap-2 mb-2">
    <CheckCircle2
      className="w-3.5 h-3.5 mt-0.5 flex-shrink-0"
      style={{ color: "#178B4C" }}
    />
    <span
      style={{
        fontFamily: "'DM Sans', sans-serif",
        fontSize: "0.85rem",
        color: "#5A6B5C",
        lineHeight: 1.8,
      }}
    >
      {f}
    </span>
  </div>
))}
        
      </div>
      <div
  className="flex justify-center items-start"
  style={{
    minHeight: "620px", // increase from 460px
    paddingTop: "40px", // move image down slightly
  }}
>
  <img
    src={pretreatment}
    alt="Pre-Treatment Machine"
    style={{
      width: "100%",
      maxWidth: "520px",
      height: "auto",
      objectFit: "contain",
    }}
  />
</div>
    </div>

{/* ================= TECHNICAL OVERVIEW ================= */}

<div className="mt-20 w-full">
  <h3
    className="mb-8"
    style={{
      fontFamily: "'Playfair Display', serif",
      fontWeight: 700,
      fontSize: "2rem",
    }}
  >
    <span style={{ color: "#178B4C" }}>Technical </span>
    <span style={{ color: "#A0780E" }}>Overview</span>
  </h3>

  <div
    style={{
      border: "1px solid rgba(5,49,20,0.08)",
      borderRadius: "8px",
      overflow: "hidden",
    }}
  >
    {[
      [
        "Working Capacity",
        "Customizable based on waste availability, from 100 kg/hr to 500 kg/hr",
      ],
      [
        "Power Supply",
        "Configurable as per country-specific standards (50 Hz / 60 Hz)",
      ],
      [
        "Mobility Arrangement",
        "Available",
      ],
      [
        "Outer Body Material",
        "Stainless Steel (SS)",
      ],
    ].map(([title, value], i) => (
      <div
        key={i}
        className="grid md:grid-cols-[320px_1fr]"
        style={{
          borderBottom:
            i !== 3 ? "1px solid rgba(5,49,20,0.08)" : "none",
        }}
      >
        <div
          style={{
            background: "#F8FAF7",
            padding: "18px 24px",
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 700,
            color: "#053114",
          }}
        >
          {title}
        </div>

        <div
          style={{
            padding: "18px 24px",
            fontFamily: "'DM Sans', sans-serif",
            color: "#5A6B5C",
            lineHeight: 1.8,
          }}
        >
          {value}
        </div>
      </div>
    ))}
  </div>
</div>


{/* ================= SYSTEM INFORMATION ================= */}

<div className="mt-20 w-full">
  <div className="grid lg:grid-cols-2 gap-10">

    {/* System Integration */}
    <div
      style={{
        background: "#F8FAF7",
        border: "1px solid rgba(5,49,20,0.08)",
        borderRadius: "12px",
        padding: "32px",
      }}
    >
      <h3
        style={{
          fontFamily: "'Playfair Display', serif",
          fontWeight: 700,
          fontSize: "1.8rem",
          marginBottom: "18px",
        }}
      >
        <span style={{ color: "#178B4C" }}>System </span>
        <span style={{ color: "#A0780E" }}>Integration</span>
      </h3>

      <p
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "0.95rem",
          color: "#5A6B5C",
          lineHeight: 1.9,
        }}
      >
        The pre-treatment machine can operate as a standalone unit or as part
        of an integrated waste management system. Separated grey water can be
        discharged to a sewage treatment plant or drainage line, while the
        reduced solid fraction can be directly fed into composting systems or
        stored and transported efficiently.
      </p>
    </div>

    {/* Capacity & Configuration */}
    <div
      style={{
        background: "#F8FAF7",
        border: "1px solid rgba(5,49,20,0.08)",
        borderRadius: "12px",
        padding: "32px",
      }}
    >
      <h3
        style={{
          fontFamily: "'Playfair Display', serif",
          fontWeight: 700,
          fontSize: "1.8rem",
          marginBottom: "18px",
        }}
      >
        <span style={{ color: "#178B4C" }}>Capacity & </span>
        <span style={{ color: "#A0780E" }}>Configuration</span>
      </h3>

      <p
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "0.95rem",
          color: "#5A6B5C",
          lineHeight: 1.9,
        }}
      >
        Available in multiple throughput ranges. Motor rating and internal
        components are configured based on hourly waste generation and
        operational requirements. Higher capacities and customized
        configurations are available following site assessment.
      </p>
    </div>

  </div>
</div>
{/* ================= KEY SPECIFICATIONS ================= */}

<div className="mt-20 w-full">
  <h3
    className="mb-8"
    style={{
      fontFamily: "'Playfair Display', serif",
      fontWeight: 700,
      fontSize: "2rem",
    }}
  >
    <span style={{ color: "#178B4C" }}>Key </span>
    <span style={{ color: "#A0780E" }}>Specifications</span>
  </h3>

  <div className="grid md:grid-cols-2 gap-x-12 gap-y-4">
    {[
      "Designed to efficiently reduce food waste volume before composting or further processing.",
      "Operates on a two-stage processing system.",
      "Stage 1: High-efficiency food waste shredding.",
      "Stage 2: Centrifugal dewatering mechanism.",
      "Top inlet for easy waste feeding.",
      "Inbuilt water sprinkling system for smooth operation.",
      "Outlet provided for processed waste collection.",
      "Designed with enhanced safety features.",
      "User-friendly and intuitive control panel.",
      "Heavy-duty, rock-solid locking feet for stability.",
      "Working capacity: 350 kg per hour.",
      "Customizable capacity from 100 kg/hr to 500 kg/hr.",
      "Compact, standalone design suitable for limited spaces.",
      "Robust shredding teeth for reliable performance.",
      "Improves efficiency of downstream processing.",
      "Excess moisture discharged to STP or drainage line.",
      "Achieves 60–70% volume reduction.",
      "Ideal for facilities where waste handling cost is based on volume or weight.",
    ].map((item, index) => (
      <div key={index} className="flex items-start gap-3">
        <CheckCircle2
          className="w-5 h-5 mt-1 flex-shrink-0"
          style={{ color: "#178B4C" }}
        />
        <span
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.95rem",
            color: "#5A6B5C",
            lineHeight: 1.8,
          }}
        >
          {item}
        </span>
      </div>
    ))}
  </div>
</div>

</>
  );
}
  
function BioFilterTab() {
  return (
    <>
      <div className="grid lg:grid-cols-2 gap-12 items-start">
      <div>
        <div className="text-[10px] tracking-[0.18em] uppercase mb-2" style={{ fontFamily: "'DM Mono', monospace", color: "#A0780E" }}>Biological Filtration · Odour Free</div>
        

  <h3
  className="mb-8"
  style={{
    fontFamily: "'Playfair Display', serif",
    fontWeight: 700,
    fontSize: "2rem",
  }}
>
  <span style={{ color: "#178B4C" }}>Bio-Filter With</span>
  <span style={{ color: "#A0780E" }}> UV Treatment</span>
</h3>
        
        <div
  style={{
    display: "inline-block",
    background: "rgba(23,139,76,0.12)",
    color: "#178B4C",
    padding: "4px 10px",
    borderRadius: "3px",
    fontFamily: "'DM Sans', sans-serif",
    fontWeight: 600,
    fontSize: "1rem", // Increase this value
    lineHeight: 1.5,
    marginBottom: "14px",
  }}
>
  Reddonatura Bio Filter systems are engineered to treat exhaust air generated during organic waste processing. 
</div>

        <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "0.975rem", color: "#5A6B5C", lineHeight: 1.8, marginBottom: "20px" }}>
        By combining biological filtration,
  activated carbon media, and UV treatment, the system effectively reduces
  odour-causing compounds and delivers clean, safe air for discharge. Designed
  for continuous operation, each unit is configured to match processing
  capacity, ensuring reliable performance, long service life, and efficient
  odour control as part of a complete waste management solution.        </p>
        {[
  "Effective odour control using biological filtration, UV lights, and activated carbon media.",
  "Eliminates the need for additional ventilation systems.",
  "Continuous operation suitable for daily processing environments.",
  "Durable stainless steel construction for extended service life.",
  "Integrated safety and filtration stages for cleaner air discharge.",
].map((f, i) => (
          <div key={i} className="flex items-start gap-2 mb-2">
            <CheckCircle2 className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" style={{ color: "#178B4C" }} />
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.85rem", color: "#5A6B5C" }}>{f}</span>
          </div>
        ))}
      </div>
      <div
  className="overflow-hidden h-[260px] lg:h-[460px]"
  style={{
    boxShadow: "0 20px 45px rgba(5,49,20,0.15)",
  }}
>
  <img
    src={Biofilter}
    alt="Bio-Filter System"
    className="w-full h-full"
    alt="Bio-Filter"
    className="w-full h-full"
    style={{
      objectFit: "contain",
    }}
  />
</div>


    </div>
    
    {/* ================= TECHNICAL OVERVIEW ================= */}

<div className="mt-20 w-full">
  <h3
    className="mb-8"
    style={{
      fontFamily: "'Playfair Display', serif",
      fontWeight: 700,
      fontSize: "2rem",
    }}
  >
    <span style={{ color: "#178B4C" }}>Technical </span>
    <span style={{ color: "#A0780E" }}>Overview</span>
  </h3>

  <div className="space-y-5">
    <div
      style={{
        fontFamily: "'DM Sans', sans-serif",
        fontSize: "0.95rem",
        color: "#5A6B5C",
      }}
    >
      <strong style={{ color: "#053114" }}>Power Supply:</strong>{" "}
      Configurable as per country-specific standards (50 Hz / 60 Hz)
    </div>

    <div
      style={{
        fontFamily: "'DM Sans', sans-serif",
        fontSize: "0.95rem",
        color: "#5A6B5C",
      }}
    >
      <strong style={{ color: "#053114" }}>Outer Body Material:</strong>{" "}
      Stainless Steel (SS)
    </div>

    <div
      style={{
        fontFamily: "'DM Sans', sans-serif",
        fontSize: "0.95rem",
        color: "#5A6B5C",
      }}
    >
      <strong style={{ color: "#053114" }}>Process Type:</strong>{" "}
      Continuous
    </div>

    <div
      style={{
        fontFamily: "'DM Sans', sans-serif",
        fontSize: "0.95rem",
        color: "#5A6B5C",
      }}
    >
      <strong style={{ color: "#053114" }}>Odour Control Method:</strong>{" "}
      Biological filtration with UV treatment and activated carbon adsorption.
    </div>

    <div
      className="md:col-span-2"
      style={{
        fontFamily: "'DM Sans', sans-serif",
        fontSize: "0.95rem",
        color: "#5A6B5C",
      }}
    >
      <strong style={{ color: "#053114" }}>Ventilation:</strong>{" "}
      Designed with inbuilt ventilation system.
    </div>
  </div>
</div>
  </>
  );
}

function ShreddersTab() {
  return (
    <>
      {/* Top Section */}
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Left */}
        <div>
          <div
            className="text-[10px] tracking-[0.18em] uppercase mb-2"
            style={{
              fontFamily: "'DM Mono', monospace",
              color: "#A0780E",
            }}
          >
            High-Torque · Auto-Reverse · Low Noise
          </div>

         
          <h3
  className="mb-8"
  style={{
    fontFamily: "'Playfair Display', serif",
    fontWeight: 700,
    fontSize: "2rem",
  }}
>
  <span style={{ color: "#178B4C" }}>Shre</span>
  <span style={{ color: "#A0780E" }}>dders</span>
</h3>


<div
  style={{
    display: "inline-block",
    background: "rgba(23,139,76,0.12)",
    color: "#178B4C",
    padding: "4px 10px",
    borderRadius: "3px",
    fontFamily: "'DM Sans', sans-serif",
    fontWeight: 600,
    fontSize: "1rem", // Increase this value
    lineHeight: 1.5,
    marginBottom: "14px",
  }}
>
  Reddonatura shredders are engineered for efficient size reduction of
            food and organic waste to optimize composting efficiency and
            accelerate biodegradation.
</div>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 300,
              fontSize: "0.975rem",
              color: "#5A6B5C",
              lineHeight: 1.8,
              marginBottom: "20px",
            }}
          >
           Designed for continuous-duty operation,
            they deliver consistent throughput and reliable performance in
            demanding waste management environments. Each unit is configured
            based on waste characteristics and processing capacity, providing
            robust construction, high torque transmission, stable operation, and
            seamless integration with downstream composting systems.
          </p>

          {[
            "Purpose-built variants – Dedicated configurations for food waste and garden waste processing.",
            "Configured capacity – Motor power and throughput customized based on daily waste volume and project requirements.",
            "Robust construction – Heavy-duty structure engineered for continuous operation and extended service life.",
            "Controlled output – Uniform size reduction to improve downstream composting efficiency.",
            "Straightforward operation – Simple and safe control system designed for reliable daily use.",
            "Low-maintenance design – Easy access to components for inspection, servicing, and maintenance.",
          ].map((f, i) => (
            <div key={i} className="flex items-start gap-2 mb-2">
              <CheckCircle2
                className="w-3.5 h-3.5 mt-0.5 flex-shrink-0"
                style={{ color: "#178B4C" }}
              />
              <span
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.85rem",
                  color: "#5A6B5C",
                }}
              >
                {f}
              </span>
            </div>
          ))}
        </div>

        {/* Right */}
        <div
          className="overflow-hidden h-[260px] lg:h-[460px]"
          style={{
            boxShadow: "0 20px 45px rgba(5,49,20,0.15)",
          }}
        >
          <img
            src={Shredders}
            alt="Industrial Shredder"
            className="w-full h-full"
            style={{
              objectFit: "contain",
            }}
          />
        </div>
      </div>

      {/* ================= FULL WIDTH SECTION ================= */}

      <div className="mt-20 w-full">
        <h3
  className="mb-8"
  style={{
    fontFamily: "'Playfair Display', serif",
    fontWeight: 700,
    fontSize: "2rem",
  }}
>
  <span style={{ color: "#178B4C" }}>Shredder </span>
  <span style={{ color: "#A0780E" }}>Variants</span>
</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Food Waste */}
          <div>
            <h4
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 700,
                fontSize: "1.1rem",
                color: "#178B4C",
                marginBottom: "16px",
                textTransform: "uppercase",
              }}
            >
              Food Waste Shredder
            </h4>

            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                color: "#5A6B5C",
                lineHeight: 1.9,
              }}
            >
              Single-shaft and double-shaft options.
            </p>

            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                color: "#5A6B5C",
                lineHeight: 1.9,
              }}
            >
              Capacity: 100 kg/hour up to 1500 kg/day (customizable).
            </p>
          </div>

          {/* Garden Waste */}
          <div>
            <h4
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 700,
                fontSize: "1.1rem",
                color: "#178B4C",
                marginBottom: "16px",
                textTransform: "uppercase",
              }}
            >
              Garden Waste Shredder
            </h4>

            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                color: "#5A6B5C",
                lineHeight: 1.9,
              }}
            >
              Single-shaft and double-shaft options.
            </p>

            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                color: "#5A6B5C",
                lineHeight: 1.9,
              }}
            >
              Capacity: 100 kg/hour up to 3500 kg/hour (customizable).
            </p>
          </div>

          {/* Industrial */}
          <div>
            <h4
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 700,
                fontSize: "1.1rem",
                color: "#178B4C",
                marginBottom: "16px",
                textTransform: "uppercase",
              }}
            >
              Industrial Shredder
            </h4>

            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                color: "#5A6B5C",
                lineHeight: 1.9,
              }}
            >
              Designed for large-volume waste processing.
            </p>

            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                color: "#5A6B5C",
                lineHeight: 1.9,
              }}
            >
              Custom-built for higher capacities as per project requirements.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}


const tabContent: Record<string, JSX.Element> = {
  composting: <CompositingMachinesTab />,
  binfilter:  <BinFilterTab />,
  dewatering: <DewateringTab />,
  biofilter:  <BioFilterTab />,
  shredders:  <ShreddersTab />,
};

export function WetWasteManagementPage() {
  const [activeTab, setActiveTab] = useState("composting");

  return (
    <PageLayout
      title="Wet Waste Management"
      subtitle="Complete organic waste solutions — from collection and shredding through composting, dewatering, bio-filtration, and odour control."
      breadcrumb="Wet Waste Management"
    >
      {/* Tab navigation */}
      
      <div
  className="sticky top-[72px] md:top-[112px] z-40"
  style={{
    backgroundColor: "#053114",
  }}
>
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

            background:
              activeTab === tab.id
                ? "rgba(255,255,255,0.08)"
                : "transparent",

            border:
              activeTab === tab.id
                ? "1px solid #A0780E"
                : "1px solid rgba(255,255,255,0.12)",

            borderRadius: "2px",
          }}
        >
          {tab.label}
        </button>
      ))}
    </div>
  </div>
</div>

      {/* Tab content */}
     <Section className="pt-4 md:pt-0">
        <motion.div key={activeTab} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}>
          {tabContent[activeTab]}
        </motion.div>
      </Section>

      <Testimonials />
      <PageCTA />
    </PageLayout>
  );
}