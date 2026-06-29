import { useState } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, Quote } from "lucide-react";

interface PageLayoutProps {
  title: string;
  subtitle?: string;
  breadcrumb?: string;
  children: React.ReactNode;
}

export function PageLayout({ title, subtitle, breadcrumb, children }: PageLayoutProps) {
  return (
   <div
  style={{ backgroundColor: "#ffffff" }}
  className="pt-[72px] lg:pt-[112px]"
>
      <div className="relative overflow-hidden" style={{ backgroundColor: "#053114", minHeight: "220px" }}>
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: "radial-gradient(circle at 20% 50%, #178B4C 0%, transparent 50%), radial-gradient(circle at 80% 50%, #A0780E 0%, transparent 50%)" }} />
        <div className="relative max-w-7xl mx-auto px-6 py-16">
          {breadcrumb && (
            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
              className="flex items-center gap-2 mb-4">
              <Link to="/" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "10.5px", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)" }}
                className="hover:opacity-80 transition-opacity">Home</Link>
              <ArrowRight className="w-3 h-3" style={{ color: "rgba(255,255,255,0.3)" }} />
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "10.5px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#A0780E" }}>{breadcrumb}</span>
            </motion.div>
          )}
          <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.05 }}
            style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 700, fontSize: "clamp(1.8rem, 4vw, 3rem)", color: "#ffffff", lineHeight: 1.15 }}>
            {title}
          </motion.h1>
          {subtitle && (
            <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.12 }}
              className="mt-3 max-w-2xl"
              style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "1rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.7 }}>
              {subtitle}
            </motion.p>
          )}
        </div>
      </div>
      {children}
    </div>
  );
}

export function Section({ children, bg = "#ffffff", className = "" }: { children: React.ReactNode; bg?: string; className?: string }) {
  return (
    <section className={className} style={{ backgroundColor: bg }}>
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">{children}</div>
    </section>
  );
}

export function SectionLabel({ label }: { label: string }) {
  const parts = label.split(" ");
  return (
    <div className="flex items-end gap-3 mb-6">
      <span style={{ fontFamily: "'Playfair Display', Georgia, serif", fontStyle: "italic", fontWeight: 400, fontSize: "clamp(1.6rem, 3vw, 2.2rem)", color: "#178B4C", lineHeight: 1 }}>
        {parts[0]}
      </span>
      {parts.length > 1 && (
        <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: "13px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#A0780E", paddingBottom: "4px" }}>
          {parts.slice(1).join(" ")}
        </span>
      )}
    </div>
  );
}

export function FeatureCard({ title, description, icon }: { title: string; description: string; icon?: React.ReactNode }) {
  return (
    <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}
      className="p-6" style={{ border: "1px solid rgba(23,139,76,0.15)", backgroundColor: "#ffffff" }}>
      {icon && <div className="mb-4" style={{ color: "#178B4C" }}>{icon}</div>}
      <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 600, fontSize: "1rem", color: "#053114", marginBottom: "8px" }}>{title}</h3>
      <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "0.875rem", color: "#5A6B5C", lineHeight: 1.65 }}>{description}</p>
    </motion.div>
  );
}

export function SpecsTable({ headers, rows }: { headers: string[]; rows: (string | React.ReactNode)[][] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse text-left" style={{ minWidth: "600px" }}>
        <thead>
          <tr style={{ backgroundColor: "#053114" }}>
            {headers.map((h, i) => (
              <th key={i} className="px-4 py-3 text-[11px] tracking-[0.1em] uppercase"
                style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, color: "#ffffff", borderRight: "1px solid rgba(255,255,255,0.1)" }}>
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} style={{ backgroundColor: i % 2 === 0 ? "#ffffff" : "#F5F4EF", borderBottom: "1px solid rgba(5,49,20,0.06)" }}>
              {row.map((cell, j) => (
                <td key={j} className="px-4 py-3"
                  style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.85rem", color: "#053114", borderRight: "1px solid rgba(5,49,20,0.06)" }}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: "1px solid rgba(5,49,20,0.1)" }}>
      <button className="w-full flex items-center justify-between py-4 text-left hover:text-[#178B4C] transition-colors" onClick={() => setOpen(!open)}>
        <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500, fontSize: "0.95rem", color: "inherit" }}>{question}</span>
        <span style={{ color: "#178B4C", fontSize: "1.2rem", lineHeight: 1, flexShrink: 0, marginLeft: "12px" }}>{open ? "−" : "+"}</span>
      </button>
      {open && (
        <div className="pb-4">
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "0.9rem", color: "#5A6B5C", lineHeight: 1.7 }}>{answer}</p>
        </div>
      )}
    </div>
  );
}

const industriesList = ["Restaurant", "Resort", "Apartments", "Parks", "Tourism", "Municipality", "Hotel", "Airports", "Agriculture", "Railway Station"];

export function IndustriesServed() {
  return (
    <section style={{ backgroundColor: "#053114" }}>
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="text-center mb-10">
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 700, fontSize: "clamp(1.5rem, 2.5vw, 2.2rem)", color: "#ffffff" }}>
            Industries <em style={{ color: "#A0780E", fontStyle: "italic" }}>We Serve</em>
          </h2>
          <p className="mt-3 max-w-xl mx-auto" style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "0.9rem", color: "rgba(255,255,255,0.6)" }}>
            Our eco-solutions are deployed across a broad spectrum of industries.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {industriesList.map((ind) => (
            <span key={ind} className="px-4 py-2 text-[11px] tracking-[0.12em] uppercase"
              style={{ border: "1px solid rgba(23,139,76,0.4)", color: "rgba(255,255,255,0.8)", fontFamily: "'DM Sans', sans-serif", fontWeight: 500 }}>
              {ind}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

const testimonials = [
  { name: "Rajesh Kumar", role: "F&B Manager, The Leela Palace", text: "Reddonatura's OWC has transformed how we handle our kitchen waste. The installation was seamless and the after-sales support is exceptional. We've reduced our waste disposal costs by over 60%." },
  { name: "Priya Mehta", role: "Sustainability Head, ITC Hotels", text: "We installed the rNature system across 3 of our properties. The results have been outstanding — zero landfill waste from our kitchens and a consistent supply of compost for our gardens." },
  { name: "Ahmed Al-Rashid", role: "Operations Director, DULSCO UAE", text: "Reddonatura has been a reliable partner in our sustainability journey. Their biogas solution has significantly reduced our energy costs and our carbon footprint simultaneously." },
];

export function Testimonials() {
  return (
    <section style={{ backgroundColor: "#F5F4EF" }}>
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="text-center mb-12">
          <div className="flex items-end gap-3 mb-4 justify-center">
            <span style={{ fontFamily: "'Playfair Display', Georgia, serif", fontStyle: "italic", fontWeight: 400, fontSize: "clamp(1.6rem, 3vw, 2.2rem)", color: "#178B4C", lineHeight: 1 }}>Client</span>
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: "13px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#A0780E", paddingBottom: "4px" }}>Testimonials</span>
          </div>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "1rem", color: "#5A6B5C", maxWidth: "480px", margin: "0 auto" }}>
            Hear from our clients who have made the switch from garbage to green.
          </p>
        </div>
        <div className="grid sm:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: 0.1 * i }}
              className="p-7 flex flex-col" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(23,139,76,0.15)" }}>
              <Quote className="w-7 h-7 mb-4 flex-shrink-0" style={{ color: "#A0780E" }} />
              <p className="flex-1 mb-6" style={{ fontFamily: "'DM Sans', sans-serif", fontStyle: "italic", fontWeight: 300, fontSize: "0.9rem", color: "#5A6B5C", lineHeight: 1.75 }}>
                "{t.text}"
              </p>
              <div>
                <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 600, fontSize: "0.95rem", color: "#053114" }}>{t.name}</div>
                <div className="mt-0.5" style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400, fontSize: "0.78rem", color: "#178B4C", letterSpacing: "0.05em" }}>{t.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function MachineGallery({ images }: { images: { src: string; caption?: string }[] }) {
  return (
    <section style={{ backgroundColor: "#ffffff" }}>
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="flex items-end gap-3 mb-10">
          <span style={{ fontFamily: "'Playfair Display', Georgia, serif", fontStyle: "italic", fontWeight: 400, fontSize: "clamp(1.6rem, 3vw, 2.2rem)", color: "#178B4C", lineHeight: 1 }}>Machine</span>
          <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: "13px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#A0780E", paddingBottom: "4px" }}>Gallery</span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((img, i) => (
            <motion.div key={i} initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.06 * i }}
              className="overflow-hidden group" style={{ border: "1px solid rgba(23,139,76,0.15)", aspectRatio: "1/1" }}>
              <img src={img.src} alt={img.caption || "Machine"} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              {img.caption && (
                <div className="px-3 py-2" style={{ backgroundColor: "#053114" }}>
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.75)" }}>{img.caption}</span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PageCTA() {
  const openForm = () => window.dispatchEvent(new Event("openLeadForm"));
  return (
    <section style={{ backgroundColor: "#053114" }}>
      <div className="max-w-7xl mx-auto px-6 py-14 flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 700, fontSize: "clamp(1.4rem, 2.5vw, 2rem)", color: "#ffffff" }}>
            Ready to get <em style={{ color: "#A0780E", fontStyle: "italic" }}>started?</em>
          </h2>
          <p className="mt-2" style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "0.95rem", color: "rgba(255,255,255,0.7)" }}>
            Talk to our experts and get a tailored solution for your specific requirements.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 flex-shrink-0">
          <button onClick={openForm}
            className="px-7 py-3 text-[11px] tracking-[0.12em] uppercase hover:opacity-90 transition-opacity"
            style={{ backgroundColor: "#178B4C", color: "#ffffff", fontFamily: "'DM Sans', sans-serif", fontWeight: 600 }}>
            Get a Free Quote
          </button>
          <Link to="/contact"
            className="px-7 py-3 text-[11px] tracking-[0.12em] uppercase hover:opacity-90 transition-opacity"
            style={{ border: "1.5px solid rgba(255,255,255,0.4)", color: "#ffffff", fontFamily: "'DM Sans', sans-serif", fontWeight: 600 }}>
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
