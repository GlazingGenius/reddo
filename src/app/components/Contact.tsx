import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";
import { Phone, Mail, ArrowUpRight, MapPin } from "lucide-react";
import worldMap from "../../imports/image-13.png";
import quoteImage from "../../imports/reddonatura-garbage-to-green-logo.png";

export function Contact({ onOpenForm }: { onOpenForm: () => void }) {
  const { ref, inView } = useInView();

  return (
    <>
      {/* ── World Presence Map ───────────────────────── */}
      {/* ── CTA Section ──────────────────────────────── */}
      <section
  ref={ref}
  id="contact"
  className="relative overflow-hidden"
  style={{ backgroundColor: "#F5F4EF" }}
>
        {/* Decorative background circle */}
        <div
          className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ backgroundColor: "rgba(13,130,57,0.06)" }}
        />
        <div
          className="absolute -bottom-24 -left-24 w-[360px] h-[360px] rounded-full pointer-events-none"
          style={{ backgroundColor: "rgba(160,120,14,0.05)" }}
        />

        <div className="relative max-w-7xl mx-auto px-6 pt-0 pb-12">
          <div className="grid lg:grid-cols-[1fr_auto] gap-16 items-center">

            {/* Left — headline block */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {/* Label */}
              <div className="flex items-end gap-4 mb-8">
                 <span
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: "clamp(2.2rem, 3.5vw, 3.5rem)",
                color: "#0D8239",
                lineHeight: 1,
              }}
            >
              Connect
            </span>

               <span
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: "clamp(2.2rem, 3.5vw, 3rem)",
                color: "#A0780E",
                lineHeight: 1,
              }}
            >
               with Us
            </span>
              </div>

              <h2
  className="mb-6"
  style={{
    fontFamily: "'Playfair Display', Georgia, serif",
    fontWeight: 700,
    fontSize: "clamp(2.4rem, 5vw, 2.7rem)",
    color: "#0C1A0D",
    lineHeight: 1.1,
  }}
>
  Ready to Turn Your
  <br />
  <span
    style={{
      color: "#0D8239",
    }}
  >
    Waste into Value?
  </span>
</h2>

              <p
                className="mb-10 max-w-xl"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 300,
                  fontSize: "1.05rem",
                  color: "#5A6B5C",
                  lineHeight: 1.8,
                }}
              >
                Whether you're a municipality, hotel chain, hospital, or food processor — our team will design a waste management system built around your operations. Get in touch today.
              </p>

              {/* Contact details row */}
              <div className="flex flex-wrap gap-6 mb-10">
       <div className="group flex items-center gap-3">
  <div
    className="w-10 h-10 flex items-center justify-center flex-shrink-0"
    style={{ backgroundColor: "rgba(13,130,57,0.1)" }}
  >
    <Phone className="w-4 h-4" style={{ color: "#0D8239" }} />
  </div>

  <div>
    <div
      style={{
        fontFamily: "'DM Sans', sans-serif",
        fontSize: "10px",
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        color: "#8A9E8B",
        fontWeight: 500,
      }}
    >
      Call Us
    </div>

    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "4px",
        marginTop: "2px",
        fontFamily: "'DM Sans', sans-serif",
        fontSize: "0.95rem",
        fontWeight: 500,
      }}
    >
      <a
        href="tel:+917760987934"
        className="group-hover:text-[#0D8239] transition-colors"
        style={{ color: "#0C1A0D", textDecoration: "none" }}
      >
        +91 7760987934
      </a>

      <a
        href="tel:+919876543210"
        className="group-hover:text-[#0D8239] transition-colors"
        style={{ color: "#0C1A0D", textDecoration: "none" }}
      >
        +91  7338462806
      </a>
    </div>
  </div>
</div>

               <a
  href="mailto:info@reddonatura.com"
  className="group flex items-center gap-3"
>
  <div
    className="w-10 h-10 flex items-center justify-center flex-shrink-0"
    style={{ backgroundColor: "rgba(13,130,57,0.1)" }}
  >
    <Mail className="w-4 h-4" style={{ color: "#0D8239" }} />
  </div>

  <div>
    <div
      style={{
        fontFamily: "'DM Sans', sans-serif",
        fontSize: "10px",
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        color: "#8A9E8B",
        fontWeight: 500,
      }}
    >
      Email Us
    </div>

    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "4px",
        marginTop: "2px",
        fontFamily: "'DM Sans', sans-serif",
        fontSize: "0.95rem",
        fontWeight: 500,
      }}
    >
      <a
        href="mailto:naziya@reddonatura.com"
        className="group-hover:text-[#0D8239] transition-colors"
        style={{ color: "#0C1A0D", textDecoration: "none" }}
      >
        naziya@reddonatura.com
      </a>

      <a
        href="mailto:geetha@reddonatura.com"
        className="group-hover:text-[#0D8239] transition-colors"
        style={{ color: "#0C1A0D", textDecoration: "none" }}
      >
        geetha@reddonatura.com
      </a>
    </div>
  </div>
</a>

                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "rgba(13,130,57,0.1)" }}
                  >
                    <MapPin className="w-4 h-4" style={{ color: "#0D8239" }} />
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "10px",
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        color: "#8A9E8B",
                        fontWeight: 500,
                      }}
                    >
                      Headquarters
                    </div>
                    <div
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "0.95rem",
                        fontWeight: 500,
                        color: "#0C1A0D",
                      }}
                    >
                      Bengaluru, India
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA buttons */}
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={onOpenForm}
                  className="group inline-flex items-center gap-3 px-8 py-4 text-[11.5px] tracking-[0.14em] uppercase transition-all duration-200 hover:bg-[#0B6E30] hover:-translate-y-0.5"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 600,
                    backgroundColor: "#0D8239",
                    color: "#fff",
                    boxShadow: "0 10px 28px rgba(13,130,57,0.3)",
                  }}
                >
                  Get a Quote
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
                <a
                  href="tel:+917760987934"
                  className="group inline-flex items-center gap-3 px-8 py-4 text-[11.5px] tracking-[0.14em] uppercase transition-all duration-200 hover:border-[#0D8239] hover:text-[#0D8239]"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 600,
                    border: "1.5px solid rgba(12,26,13,0.2)",
                    color: "#0C1A0D",
                  }}
                >
                  Call Now
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </motion.div>

            {/* Right — bold quote card */}
            {/* Right — Premium Quote Card */}
<motion.div
  initial={{ opacity: 0, x: 24 }}
  animate={inView ? { opacity: 1, x: 0 } : {}}
  transition={{ duration: 0.7, delay: 0.25 }}
  className="flex flex-col justify-between p-8 lg:p-10 w-full max-w-[380px] mx-auto lg:mx-0 rounded-[28px] relative overflow-hidden"
  style={{
    background: "linear-gradient(145deg, #071A0D 0%, #0B2A16 55%, #12351D 100%)",
    minHeight: "520px",
    border: "1px solid rgba(160,120,14,0.18)",
    boxShadow:
      "0 35px 80px rgba(5,49,20,0.35), inset 0 1px 0 rgba(255,255,255,0.06)",
    transform: "translateY(-20px)",
  }}
>
  {/* Accent Line */}
  <div
    className="w-12 h-[2px] mb-6"
    style={{ backgroundColor: "#A0780E" }}
  />

  {/* Logo */}
  <div className="flex justify-center mb-8">
    <img
      src={quoteImage}
      alt="Reddonatura"
      className="w-56 h-auto object-contain"
    />
  </div>

  {/* Quote */}
  <blockquote
    style={{
      fontFamily: "'Playfair Display', Georgia, serif",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "1.4rem",
      color: "#F5F0E8",
      lineHeight: 1.7,
      textAlign: "center",
    }}
  >
    "From garbage to green — a smooth transition engineered for the planet."
  </blockquote>

  {/* Bottom */}
  <div className="mt-10 text-center">
    <div
      style={{
        fontFamily: "'DM Sans', sans-serif",
        fontWeight: 700,
        fontSize: "12px",
        letterSpacing: "0.18em",
        textTransform: "uppercase",
        color: "#A0780E",
      }}
    >
      REDDONATURA
    </div>

    <div
      style={{
        fontFamily: "'DM Sans', sans-serif",
        fontWeight: 400,
        fontSize: "12px",
        letterSpacing: "0.08em",
        color: "rgba(245,240,232,0.65)",
        marginTop: "6px",
      }}
    >
      G2G — Garbage to Green
    </div>
  </div>
</motion.div>

          </div>
        </div>
      </section>
    </>
  );
}
