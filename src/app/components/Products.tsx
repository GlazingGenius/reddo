import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";
import { ArrowUpRight } from "lucide-react";
import img1 from "../../imports/image-1.png";
import img2 from "../../imports/image-2.png";
import img3 from "../../imports/image-3.png";
import img4 from "../../imports/image-4.png";
import img5 from "../../imports/image-5.png";
import img6 from "../../imports/image-6.png";
import { useState } from "react";

const products = [
  {
    title: "Organic Waste Digester",
    desc: "CE certified, fully automatic machines that convert organic waste into rich compostable matter — clean, fast, and odour-free.",
    image: img1,
  },
  {
    title: "Biogas Solutions",
    desc: "Transform daily organic waste into renewable biogas energy, reducing costs and carbon footprint simultaneously.",
    image: img2,
  },
  {
    title: "De-Watering Systems",
    desc: "Advanced liquid waste separation systems engineered to optimise water usage and support environmental conservation.",
    image: img3,
  },
  {
    title: "Solar Solutions",
    desc: "High-efficiency solar systems designed for resilience — powering your facility with clean, sustainable energy.",
    image: img4,
  },
  {
    title: "Industrial Shredders",
    desc: "Heavy-duty shredding equipment built for versatility — reducing materials to manageable sizes for recycling and reuse.",
    image: img5,
  },
  {
    title: "Trommel Screens",
    desc: "High-performance rotating screens engineered for precise waste sorting, segregation, and recycling efficiency.",
    image: img6,
  },
];

export function Products() {
  const { ref, inView } = useInView();

  return (
    <section id="products" ref={ref} style={{ backgroundColor: "#ffffff" }}>
      {/* Top border separator from Clients */}
      <div className="w-full h-1" style={{ backgroundColor: "#0D8239" }} />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="pt-20 pb-14 flex flex-col sm:flex-row sm:items-end justify-between gap-5"
        >
          <div className="flex items-end gap-4">
            <span style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: "clamp(2rem, 3.5vw, 3.5rem)",
              color: "#0D8239",
              lineHeight: 1,
            }}>
              Our
            </span>

            <span style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: "clamp(2rem, 3.5vw, 3rem)",
              color: "#A0780E",
              lineHeight: 1,
            }}>
              Products
            </span>
            
          </div>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 300,
            fontSize: "1.00rem",
            color: "#4A6B4D",
            maxWidth: "450px",
            lineHeight: 1.7,
          }}>
            Innovative, CE certified solutions engineered for a sustainable future — across waste, energy, and water.
          </p>
        </motion.div>
      </div>

      {/* Product grid */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.07 * index }}
              className="group flex flex-col"
              style={{
                border: "1px solid rgba(13,130,57,0.15)",
                backgroundColor: "#fff",
              }}
            >
              {/* Image */}
              <div
                className="overflow-hidden flex-shrink-0"
                style={{
                  aspectRatio: "4/3",
                  border: "1px solid #155A30",
                }}
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  draggable={false}
                />
              </div>

              {/* Card body — equal height via flex-1 */}
              <div
                className="flex flex-col px-5 py-5 gap-3 flex-1"
                style={{ backgroundColor: "#155A30" }}
              >
                <h3 style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontWeight: 600,
                  fontSize: "1.1rem",
                  color: "#ffffff",
                  lineHeight: 1.3,
                }}>
                  {product.title}
                </h3>

                <p className="flex-1" style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 300,
                  fontSize: "0.82rem",
                  color: "rgba(255,255,255,0.82)",
                  lineHeight: 1.65,
                }}>
                  {product.desc}
                </p>

                <div className="pt-1">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-[10.5px] tracking-[0.12em] uppercase transition-colors duration-200 hover:bg-white/90"
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontWeight: 600,
                      backgroundColor: "#ffffff",
                      color: "#155A30",
                      border: "1.5px solid rgba(255,255,255,0.5)",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Enquire
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom border separator */}
      <div className="w-full h-1" style={{ backgroundColor: "#0D8239" }} />
    </section>
  );
}
