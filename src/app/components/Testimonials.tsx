import { motion } from "motion/react";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { useState } from "react";

import "swiper/css";
import "swiper/css/navigation";

import radissonLogo   from "@/testimonialslogos/radisson.png";
import tridentLogo    from "@/testimonialslogos/trident.png";
import monarchLogo    from "@/testimonialslogos/monarch.png";
import rbiLogo        from "@/testimonialslogos/rbi.png";
import navyLogo       from "@/testimonialslogos/navy.png";
import hpclLogo       from "@/testimonialslogos/hpcl.png";
import gangtokLogo    from "@/testimonialslogos/gangtok.png";
import mptdcLogo      from "@/testimonialslogos/mptdc.png";
import sattvaLogo     from "@/testimonialslogos/sattva.png";
import mantriLogo     from "@/testimonialslogos/mantri.png";
import goyalLogo      from "@/testimonialslogos/goyal.png";

type Testimonial = {
  company: string;
  sector: string;
  person: string;
  text: string;
  logo: string | null;
  initials: string;
  accentHex: string;
  logoBg?: string;
};

const T: Testimonial[] = [
  {
    company: "Radisson Hotels",
    sector: "Hospitality",
    person: "Chief Engineer",
    text: "The Organic Waste Converter has been performing exceptionally well. The machine operates reliably, while Reddonatura's responsive service team has ensured uninterrupted operations. The compost produced is effectively used in our gardens and landscaping.",
    logo: radissonLogo,
    initials: "RH",
    accentHex: "#4A5568",
  },
  {
    company: "Trident Hotels",
    sector: "Hospitality",
    person: "Chief Engineer",
    text: "The fully automatic Organic Waste Converter has significantly improved the management of our organic waste. We are highly satisfied with both the machine's performance and the after-sales support provided by Reddonatura.",
    logo: tridentLogo,
    initials: "TH",
    accentHex: "#C53030",
  },
  {
    company: "Monarch Luxury Hotel",
    sector: "Hospitality",
    person: "Chief Engineer",
    text: "We are extremely satisfied with the performance of the OWC machine. It efficiently converts food waste into quality compost, and the support team has always responded promptly whenever required.",
    logo: monarchLogo,
    initials: "ML",
    accentHex: "#C69320",
    logoBg: "#C69320",
  },
  {
    company: "Reserve Bank of India",
    sector: "Government – Finance",
    person: "Assistant Manager",
    text: "The design, supply, installation, testing and commissioning of the Organic Waste Composting Machines were successfully completed in accordance with our specifications, delivering satisfactory performance.",
    logo: rbiLogo,
    initials: "RBI",
    accentHex: "#1a6b3f",
  },
  {
    company: "Indian Navy – INS Mandovi",
    sector: "Defence",
    person: "Logistics Officer",
    text: "The fully automatic Organic Waste Converter supplied by Reddonatura has been operating to our satisfaction since commissioning.",
    logo: navyLogo,
    initials: "IN",
    accentHex: "#1E3A8A",
  },
  {
    company: "Hindustan Petroleum Corporation Ltd.",
    sector: "Public Sector – Energy",
    person: "Deputy Manager – HSSE",
    text: "The Organic Waste Converter installed at our facility has consistently delivered excellent performance and continues to operate to our satisfaction.",
    logo: hpclLogo,
    initials: "HP",
    accentHex: "#B91C1C",
  },
  {
    company: "Gangtok Municipal Corporation",
    sector: "Municipal Government",
    person: "Municipal Commissioner",
    text: "Reddonatura has consistently provided prompt technical support whenever required, ensuring reliable operation of the waste converter. We are pleased with both the product and the service.",
    logo: gangtokLogo,
    initials: "GMC",
    accentHex: "#1a6b3f",
  },
  {
    company: "Madhya Pradesh Tourism Development Corporation",
    sector: "State Government",
    person: "Sub Engineer",
    text: "The machines have been successfully commissioned and are performing excellently across all installed locations. Both the equipment and the services provided have met our expectations.",
    logo: mptdcLogo,
    initials: "MP",
    accentHex: "#78350F",
  },
  {
    company: "Sattva Aspire",
    sector: "Real Estate",
    person: "Facility Manager",
    text: "The machine has been operating smoothly, producing high-quality compost for our landscaping needs. We appreciate the dependable performance and excellent service support from the Reddonatura team.",
    logo: sattvaLogo,
    initials: "SA",
    accentHex: "#1E3A8A",
  },
  {
    company: "Senorita Apartments",
    sector: "Real Estate",
    person: "Facility Manager",
    text: "The machine continues to perform efficiently, while the service support has always been prompt and dependable. We are delighted with the quality of compost produced for our landscape.",
    logo: sattvaLogo,
    initials: "SE",
    accentHex: "#1E3A8A",
  },
  {
    company: "Esteem Classic Apartments",
    sector: "Real Estate",
    person: "Facility Manager",
    text: "We are extremely pleased with the machine and the professional support provided by Reddonatura. The compost enriches our gardens while the system operates with remarkably low power consumption.",
    logo: null,
    initials: "EC",
    accentHex: "#6B21A8",
  },
  {
    company: "Orchid Woods Apartments",
    sector: "Real Estate",
    person: "Property Manager",
    text: "The Organic Waste Converter has consistently delivered excellent performance. The machine output and the responsive after-sales service have exceeded our expectations.",
    logo: null,
    initials: "OW",
    accentHex: "#065F46",
  },
  {
    company: "Mantri Global",
    sector: "Real Estate",
    person: "Property Management",
    text: "We appreciate the reliable performance of the machine and the prompt response from the Reddonatura service team whenever assistance has been required.",
    logo: mantriLogo,
    initials: "MG",
    accentHex: "#9B1C1C",
  },
  {
    company: "Villas at Green Glen",
    sector: "Real Estate",
    person: "Community Management",
    text: "The Organic Waste Converter has been operating efficiently with dependable service support. The compost produced has become an important resource for maintaining our landscaped gardens.",
    logo: goyalLogo,
    initials: "VG",
    accentHex: "#1a4731",
    logoBg: "#1a1a1a",
  },
];

function LogoArea({ t }: { t: Testimonial }) {
  if (t.logo) {
    return (
      <div
        className="rounded-2xl flex items-center justify-center p-3 shrink-0"
        style={{
          background: t.logoBg ?? "#ffffff",
          width: "88px",
          height: "72px",
          border: "1.5px solid rgba(0,0,0,0.07)",
        }}
      >
        <img
          src={t.logo}
          alt={t.company}
          style={{ maxWidth: "72px", maxHeight: "52px", objectFit: "contain" }}
        />
      </div>
    );
  }
  return (
    <div
      className="rounded-2xl flex items-center justify-center font-bold text-white text-xl shrink-0"
      style={{
        background: t.accentHex,
        width: "88px",
        height: "72px",
        fontFamily: "'Playfair Display', Georgia, serif",
        letterSpacing: "-0.02em",
      }}
    >
      {t.initials}
    </div>
  );
}

function TestimonialCard({ t, index }: { t: Testimonial; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
      whileHover={{ y: -8, transition: { duration: 0.22 } }}
      className="group relative flex flex-col overflow-hidden rounded-3xl h-full"
      style={{
        background: "#ffffff",
        boxShadow: "0 2px 20px rgba(6,53,22,0.08), 0 1px 4px rgba(0,0,0,0.04)",
        border: "1px solid rgba(6,53,22,0.08)",
        minHeight: "460px",
      }}
    >
      {/* Bold left accent stripe */}
      <div
        className="absolute left-0 top-0 bottom-0 w-1.5 rounded-l-3xl"
        style={{ background: t.accentHex }}
      />

      {/* Decorative quote watermark */}
      <div
        className="absolute top-4 right-5 select-none pointer-events-none"
        style={{
          fontFamily: "Georgia, serif",
          fontSize: "120px",
          lineHeight: 1,
          color: t.accentHex,
          opacity: 0.06,
          fontWeight: 900,
        }}
      >
        "
      </div>

      <div className="flex flex-col flex-1 pl-8 pr-6 pt-7 pb-6">
        {/* Logo + sector */}
        <div className="flex items-start justify-between mb-5 gap-3">
          <LogoArea t={t} />
          <span
            className="text-[10px] font-bold uppercase tracking-widest rounded-full px-3 py-1.5 shrink-0 mt-1"
            style={{
              color: t.accentHex,
              background: t.accentHex + "15",
              border: `1px solid ${t.accentHex}30`,
            }}
          >
            {t.sector}
          </span>
        </div>

        {/* Stars */}
        <div className="flex gap-1 mb-4">
          {[0,1,2,3,4].map((i) => (
            <Star key={i} size={14} fill="#F5B301" color="#F5B301" />
          ))}
        </div>

        {/* Quote icon */}
        <Quote size={28} className="mb-3 shrink-0" style={{ color: t.accentHex, opacity: 0.7 }} />

        {/* Quote text */}
        <p
          className="flex-1 leading-7 text-[#4B5A50]"
          style={{
            fontSize: "15px",
            display: "-webkit-box",
            WebkitLineClamp: 5,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {t.text}
        </p>

        {/* Divider + attribution */}
        <div className="mt-5 pt-4" style={{ borderTop: `1.5px solid ${t.accentHex}20` }}>
          <p
            className="font-bold leading-snug"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "17px",
              color: "#071f0f",
            }}
          >
            {t.company}
          </p>
          <p className="text-sm font-semibold mt-1" style={{ color: t.accentHex }}>
            — {t.person}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Testimonials() {
  const [realIdx, setRealIdx] = useState(0);

  return (
 <section
  className="relative overflow-hidden"
  style={{
    background: "linear-gradient(170deg, #071f0f 0%, #0b3520 40%, #0f4a28 100%)",
  }}
>
 
 {/* Top Wave */}
<div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-20">
  <svg
    viewBox="0 0 1440 120"
    preserveAspectRatio="none"
    className="block w-full h-[90px]"
    style={{
      display: "block",
      marginBottom: "-1px",
    }}
  >
    <path
      fill="#F5F5EF"
      d="M0,40
         C250,100 500,0 720,40
         C980,90 1180,10 1440,50
         L1440,0
         L0,0
         Z"
    />
  </svg>
</div>



      {/* Decorative rings */}
      <div className="absolute pointer-events-none" style={{ top: "-120px", right: "-120px", width: "500px", height: "500px", borderRadius: "50%", border: "1px solid rgba(255,255,255,0.05)" }} />
      <div className="absolute pointer-events-none" style={{ top: "-60px", right: "-60px", width: "300px", height: "300px", borderRadius: "50%", border: "1px solid rgba(255,255,255,0.07)" }} />
      <div className="absolute pointer-events-none" style={{ bottom: "-100px", left: "5%", width: "400px", height: "400px", borderRadius: "50%", border: "1px solid rgba(255,255,255,0.04)" }} />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 70% 40% at 50% 0%, rgba(26,159,88,0.12) 0%, transparent 65%)" }}
      />
      
      {/* ── Header ── */}
     <div className="relative z-10 max-w-7xl mx-auto px-6 pt-0 pb-14 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
        >
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-3 mb-7">
            <div style={{ height: "1px", width: "40px", background: "rgba(255,255,255,0.25)" }} />
            <span style={{ fontFamily: "Inter, sans-serif", fontSize: "11px", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)" }}>
              Client Testimonials
            </span>
            <div style={{ height: "1px", width: "40px", background: "rgba(255,255,255,0.25)" }} />
          </div>

         <h2
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontWeight: 700,
              fontSize: "clamp(2rem,4vw,3.2rem)",
              color: "#F5F0E8",
              lineHeight: 1.15,
            }}
          >
            Trusted by Industry Leaders
          </h2>
          <p
            className="max-w-2xl mx-auto leading-8"
            style={{ fontFamily: "Inter, sans-serif", fontSize: "17px", color: "rgba(255,255,255,0.6)", fontWeight: 400 }}
          >
            Government departments, defence establishments, public sector corporations
            and leading real estate developers — all relying on Reddonatura.
          </p>
        </motion.div>

        {/* Stats strip */}
        
      </div>

      {/* ── Cards carousel ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20">
        <div className="relative">
          <button
            className="testimonials-prev-btn absolute left-0 top-1/2 z-20 flex items-center justify-center rounded-full transition-all duration-300"
            style={{
              width: "48px", height: "48px",
              transform: "translate(-50%, -50%)",
              background: "rgba(255,255,255,0.12)",
              border: "1px solid rgba(255,255,255,0.2)",
              color: "#fff",
              backdropFilter: "blur(10px)",
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = "#22c55e"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.12)"; }}
          >
            <ChevronLeft size={22} />
          </button>
          <button
            className="testimonials-next-btn absolute right-0 top-1/2 z-20 flex items-center justify-center rounded-full transition-all duration-300"
            style={{
              width: "48px", height: "48px",
              transform: "translate(50%, -50%)",
              background: "rgba(255,255,255,0.12)",
              border: "1px solid rgba(255,255,255,0.2)",
              color: "#fff",
              backdropFilter: "blur(10px)",
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = "#22c55e"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.12)"; }}
          >
            <ChevronRight size={22} />
          </button>

          <Swiper
            modules={[Navigation, Autoplay]}
            navigation={{ prevEl: ".testimonials-prev-btn", nextEl: ".testimonials-next-btn" }}
            autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }}
            loop
            speed={750}
            grabCursor
            spaceBetween={22}
            onSlideChange={(s: { realIndex: number }) => setRealIdx(s.realIndex)}
            breakpoints={{
              0:    { slidesPerView: 1 },
              640:  { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-4"
          >
            {T.map((item, i) => (
              <SwiperSlide key={i} style={{ height: "auto", display: "flex" }}>
                <TestimonialCard t={item} index={i} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Custom dot bar */}
        <div className="flex justify-center mt-8 gap-2">
          {T.map((_, i) => (
            <div
              key={i}
              style={{
                height: "3px",
                borderRadius: "2px",
                transition: "all 0.35s",
                width: i === realIdx % T.length ? "28px" : "6px",
                background: i === realIdx % T.length ? "#22c55e" : "rgba(255,255,255,0.2)",
              }}
            />
          ))}
        </div>
      </div>

{/* Bottom Wave */}
  <div className="absolute -bottom-px left-0 w-full overflow-hidden leading-none z-20">
    <svg
      viewBox="0 0 1440 120"
      preserveAspectRatio="none"
      className="block w-full h-[90px]"
    >
      <path
        fill="#F5F5EF"
        d="M0,120
           L0,70
           C250,20 500,120 720,70
           C980,20 1180,120 1440,70
           L1440,120
           Z"
      />
    </svg>
  </div>
  
      <style>{`
        .swiper-slide { height: auto !important; display: flex !important; }
      `}</style>
    </section>
  );
}
