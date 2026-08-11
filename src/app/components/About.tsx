import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";
import { ImageWithFallback } from "./figma/ImageWithFallback";
//import { ArrowRight, CheckCircle2 } from "lucide-react";
import aboutImg from "../../imports/aboutimg.jpeg";
import { ArrowRight, Leaf } from "lucide-react";
import { Link } from "react-router-dom";

export function About() {
  const { ref, inView } = useInView();

  return (
    <section id="about" ref={ref} className="bg-[#F5F4EF] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section label */}
       <motion.div
  initial={{ opacity: 0, y: 16 }}
  animate={inView ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.55 }}
  className="pt-24 pb-10"
>
  {/* Title */}
  <div className="flex items-end gap-3">
    <span
      style={{
        fontFamily: "'Cormorant Garamond', serif",
       
        fontWeight: 400,
        fontSize: "clamp(2.4rem, 3.8vw, 3.3rem)",
        color: "#0D8239",
        lineHeight: 1,
        letterSpacing: "-0.02em",
      }}
    >
      About
    </span>

    <span
      style={{
        fontFamily: "'Cormorant Garamond', serif",
        
        fontWeight: 400,
        fontSize: "clamp(2.4rem, 3.8vw, 3.3rem)",
        color: "#A0780E",
        lineHeight: 1,
        letterSpacing: "-0.02em",
      }}
    >
      Reddonatura
    </span>
  </div>

  {/* Decorative Divider */}
  <div className="flex items-center gap-3 mt-5 w-fit">
    <div
      className="h-[1.5px] rounded-full"
      style={{
        width: "85px",
        backgroundColor: "#0D8239",
      }}
    />

    <Leaf
      size={16}
      strokeWidth={1.8}
      style={{
        color: "#0D8239",
        transform: "rotate(-20deg)",
      }}
    />

    <div
      className="h-[1.5px] rounded-full"
      style={{
        width: "85px",
        backgroundColor: "#0D8239",
      }}
    />
  </div>
</motion.div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-14 xl:gap-24 pb-24 items-start">
          {/* Left — editorial content */}
          <div>
            <motion.h2
  initial={{ opacity: 0, y: 20 }}
  animate={inView ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.7, delay: 0.1 }}
  className="mb-6"
  style={{
    fontFamily: "'Playfair Display', Georgia, serif",
    fontWeight: 550,
    fontSize: "clamp(1.8rem, 3vw, 2.2rem)", // slightly smaller
    color: "#0C1A0D",
    lineHeight: 1.2,
  }}
>
  Innovative Solutions for a{" "}
  <span style={{ color: "#0D8239" }}>
    Sustainable
  </span>{" "}
  Future
</motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6 leading-[1.8]"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 300,
                fontSize: "1.025rem",
                color: "#4A5C4B",
              }}
            >
              Reddonatura is a leading waste management and environmental
              technology company focused on transforming waste into valuable
              resources. With over a decade of industry experience, we design
              and manufacture innovative solutions for organic waste
              processing, composting, shredding, dewatering and resource
              recovery.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-6 leading-[1.8]"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 300,
                fontSize: "1.025rem",
                color: "#4A5C4B",
              }}
            >
              Serving clients across diverse sectors and international
              markets, we combine engineering expertise, smart technology and
              sustainable practices to deliver reliable, efficient and
              environmentally responsible waste management solutions.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-12 leading-[1.8]"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 500,
                fontSize: "1.025rem",
                color: "#0C1A0D",
              }}
            >
              Our mission is simple: Reduce waste. Recover resources. Build a
              sustainable future.
            </motion.p>

            <motion.a
  initial={{ opacity: 0 }}
  animate={inView ? { opacity: 1 } : {}}
  transition={{ duration: 0.5, delay: 0.55 }}
  href="#contact"
  className="group inline-flex items-center gap-3 text-[11.5px] tracking-[0.12em] uppercase pb-0.5 transition-all duration-200"
  style={{
    fontFamily: "'DM Sans', sans-serif",
    fontWeight: 500,
    color: "#0D8239",
    borderBottom: "1.5px solid #0D8239",
  }}
></motion.a>
          </div>

          {/* Right — image composition */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Main image */}
            <div className="relative overflow-hidden w-full" style={{ aspectRatio: "4/3", boxShadow: "0 30px 60px rgba(5,49,20,0.18)" }}>
              <ImageWithFallback
                src={aboutImg}
                alt="Reddonatura G2G facility — Garbage to Green"
                className="w-full h-full object-cover object-center"
              />
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(180deg, transparent 50%, rgba(11,31,16,0.6) 100%)",
                }}
              />
            </div>

            {/* Golden accent overlay block */}
            <div
              className="absolute -bottom-5 -left-5 p-4 md:p-5"
              style={{
                backgroundColor: "#A0780E",
                maxWidth: "160px",
              }}
            >
              <div
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontWeight: 700,
                  fontSize: "2rem",
                  color: "#fff",
                  lineHeight: 1,
                }}
              >
                13+
              </div>
              <div
                className="mt-1.5"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 400,
                  fontSize: "0.75rem",
                  color: "rgba(255,255,255,0.85)",
                  lineHeight: 1.4,
                }}
              >
                Years of sustainable innovation
              </div>
            </div>

            {/* Secondary small image */}
            
              
              
          </motion.div>
        </div>
      </div>
    </section>
  );
}
