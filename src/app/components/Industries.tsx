import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import Muncipalimg from "../../imports/municipalimghero.jpeg";

const industries = [
  {
    name: "Restaurants &\nFood Chains",
    description: "Tailored organic waste digesters for high-volume kitchens and food service operations, converting daily food waste into compost on-site.",
    image: "https://images7.alphacoders.com/345/345182.jpg",
    accent: "#0D8239",
  },
  {
    name: "Hotels &\nResorts",
    description: "End-to-end waste management for luxury hospitality — from kitchen scraps to biogas energy recovery, reducing operational costs and carbon footprint.",
    image: "https://wallpaperaccess.com/full/902493.jpg",
    accent: "#64812C",
  },
  {
    name: "Hospitals &\nHealthcare",
    description: "Safe, hygienic, and compliant organic waste processing solutions designed for the strict standards of healthcare environments.",
    image: "https://static.vecteezy.com/system/resources/thumbnails/059/240/224/small_2x/modern-hospital-building-with-ambulance-entering-at-sunset-delivering-healthcare-services-photo.jpg",
    accent: "#178B4C",
  },
  {
    name: "Municipal\nCorporations",
    description: "Scalable trommel screens and de-watering systems that help cities manage organic waste streams efficiently at a community level.",
    image: "https://thumbs.dreamstime.com/b/brihanmumbai-municipal-corporation-bmc-building-mumbai-brihanmumbai-municipal-corporation-bmc-building-mumbai-maharashtra-india-256294928.jpg",
    accent: "#A0780E",
  },
  {
    name: "Airports &\nTransit Hubs",
    description: "High-capacity waste digestion systems built for the non-stop operations of airports, metro stations, and large transit facilities.",
    image: "https://static.vecteezy.com/system/resources/previews/035/851/832/non_2x/ai-generated-panoramic-view-of-an-airport-runway-with-planes-parked-and-in-motion-free-photo.jpg",
    accent: "#0D8239",
  },
  {
    name: "Food Processing &\nOrganic Waste",
    description: "Converting food processing waste and organic by-products into valuable compost and biogas — closing the loop on the food supply chain.",
    image: "https://www.lianmachinery.com/wp-content/uploads/2024/12/image-32.jpeg",
    accent: "#64812C",
  },
  {
    name: "Commercial\nComplexes",
    description: "Integrated waste solutions for malls, office parks, and mixed-use developments that simplify waste handling across multiple tenants.",
    image: "https://jll-global-gdim-res.cloudinary.com/image/upload/f_auto,dpr_auto,w_1920,q_70/v1505554323/IN_ML20170916/Downtown---The-City-Centre_7287_20170916_002.jpg",
    accent: "#178B4C",
  },
  {
    name: "Tourism &\nParks",
    description: "Eco-friendly waste management for national parks, eco-resorts, and tourist destinations committed to preserving natural beauty.",
    image: "https://images.pexels.com/photos/158063/bellingrath-gardens-alabama-landscape-scenic-158063.jpeg?cs=srgb&dl=pexels-pixabay-158063.jpg&fm=jpg",
    accent: "#A0780E",
  },
  {
    name: "Railway\nStations",
    description: "Robust organic waste processing for railway stations and transit corridors handling large volumes of food and organic waste daily.",
    image: "https://th.bing.com/th/id/R.31ffc50e1971b5c3d39be76a35a071ef?rik=g7uro4MavyVSsQ&riu=http%3a%2f%2f3.bp.blogspot.com%2f_5xkDx_-kv3I%2fTRVOZA-mfKI%2fAAAAAAAAA5Y%2fnE0yCwZa0xI%2fs1600%2fmum%2bcentral%2b5.jpg&ehk=taKzjIWrZ2PtVTu4o5vUrvCBb1Ic23KAfSDxUholntM%3d&risl=&pid=ImgRaw&r=0",
    accent: "#0D8239",
  },
  {
    name: "Residential\nApartments",
    description: "Compact, odour-free waste digesters designed for apartment complexes and gated communities, turning household waste into garden compost.",
    image: "https://luxuryproperties.in/wp-content/uploads/2019/03/Peninsula-Heights-View-1.jpg",
    accent: "#64812C",
  },
];

export function Industries() {
  const { ref, inView } = useInView();

  return (
    <section
      id="industries"
      ref={ref}
      style={{ backgroundColor: "#F5F4EF" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="pt-24 pb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-5"
        >
          <div className="flex items-end gap-4 self-start">
            <span
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
               // fontStyle: "normal",
                fontWeight: 400,
                fontSize: "clamp(2.2rem, 3.5vw, 3.5rem)",
                color: "#0D8239",
                lineHeight: 1,
              }}
            >
              Industries
            </span>

               <span
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                //fontStyle: "normal",
                fontWeight: 400,
                fontSize: "clamp(2.2rem, 3.5vw, 3rem)",
                color: "#A0780E",
                lineHeight: 1,
              }}
            >
               We Serve
            </span>
            
            
          </div>
          <h2
            className="hidden md:block"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontWeight: 600,
              fontSize: "clamp(1.3rem, 2.2vw, 1.9rem)",
              color: "#0C1A0D",
            }}
          >
            Eco-solutions across every sector
          </h2>
        </motion.div>

        {/* Descriptor */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-2xl mb-14"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 300,
            fontSize: "1rem",
            color: "#5A6B5C",
            lineHeight: 1.7,
          }}
        >
          Our innovative waste management systems are deployed across a
          broad spectrum of industries — from five-star hospitality to
          public infrastructure and agricultural processing.
        </motion.p>
      </div>

      {/* Full-width image grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5" style={{ backgroundColor: "#0B1F10" }}>
        {industries.map((industry, i) => (
          <motion.div
            key={industry.name}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.04 * i }}
            className="group relative overflow-hidden cursor-pointer"
            style={{ aspectRatio: "1/1.2", backgroundColor: "#0B1F10" }}
          >
            {/* Background image */}
            <ImageWithFallback
              src={industry.image}
              alt={industry.name.replace("\n", " ")}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />

            {/* Default dark overlay */}
            <div
              className="absolute inset-0 transition-opacity duration-400 group-hover:opacity-0"
              style={{ backgroundColor: "rgba(11,31,16,0.52)" }}
            />

            {/* Hover colour overlay */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
              style={{ backgroundColor: `${industry.accent}e0` }}
            />

            {/* Default state — name at bottom */}
            <div
              className="absolute inset-0 flex items-end p-5 transition-opacity duration-300 group-hover:opacity-0"
            >
              <p
                className="whitespace-pre-line leading-snug"
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontWeight: 600,
                  fontSize: "clamp(0.95rem, 1.4vw, 1.1rem)",
                  color: "#F5F0E8",
                }}
              >
                {industry.name}
              </p>
            </div>

            {/* Hover state — centred name + description */}
            <div
              className="absolute inset-0 flex flex-col items-center justify-center p-5 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-400"
            >
              <p
                className="whitespace-pre-line leading-tight mb-3"
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontWeight: 700,
                  fontSize: "clamp(1rem, 1.5vw, 1.15rem)",
                  color: "#fff",
                }}
              >
                {industry.name}
              </p>
              <div
                className="w-8 h-px mb-3"
                style={{ backgroundColor: "rgba(255,255,255,0.5)" }}
              />
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 300,
                  fontSize: "clamp(0.72rem, 1vw, 0.82rem)",
                  color: "rgba(255,255,255,0.88)",
                  lineHeight: 1.6,
                }}
              >
                {industry.description}
              </p>
            </div>

            {/* Accent bottom bar */}
            <div
              className="absolute bottom-0 left-0 w-full h-[3px] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
              style={{ backgroundColor: "rgba(255,255,255,0.6)" }}
            />
          </motion.div>
        ))}
      </div>

      <div className="h-20" />
    </section>
  );
}
