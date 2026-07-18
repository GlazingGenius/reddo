import { motion } from "motion/react";
import {
  Quote,
  ChevronLeft,
  ChevronRight,
  Star,
} from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    company: "South Central Railway",
    location: "Kacheguda, Hyderabad",
    person: "Chief Health Inspector",
    designation: "",
    text:
      "Since commissioning the RN125 Fully Automatic Organic Waste Converter, we have had a very satisfying experience. The machine consistently produces over 100 kg of high-quality compost and has demonstrated excellent technical performance. The service provided by the Reddonatura team has been highly efficient, and we confidently recommend this solution to other organizations."
  },

  {
    company: "Hindustan Petroleum Corporation Limited (HPCL)",
    location: "",
    person: "Sanjiv Kumar",
    designation: "Deputy Manager – HSSE",
    text:
      "Reddonatura installed a 100 kg Organic Waste Converter at our premises, and its performance has been consistently very good. We are satisfied with the reliability and efficiency of the system."
  },

  {
    company: "Madhya Pradesh State Tourism Development Corporation",
    location: "",
    person: "Sub Engineer",
    designation: "",
    text:
      "Reddonatura successfully supplied and commissioned the R Nature Fully Automatic Organic Waste Composter (100 kg/day) at our facility. The installation was completed as specified, and the machine was commissioned to our complete satisfaction."
  },

  {
    company: "INS Mandovi – Indian Navy",
    location: "",
    person: "Lt. Cdr. Dhirendra Mishra",
    designation: "Logistics Officer",
    text:
      "The 25 kg Fully Automatic Food Waste Composter supplied by Reddonatura was delivered and commissioned as specified. The system has been performing satisfactorily since installation, and we are pleased with its performance."
  },
  {
    company: "Hindustan Petroleum Corporation Limited (HPCL)",
    location: "",
    person: "Sanjiv Kumar",
    designation: "Deputy Manager – HSSE",
    text:
      "Reddonatura installed a 100 kg Organic Waste Converter at our premises, and its performance has been consistently very good. We are satisfied with the reliability and efficiency of the system."
  }
];

export default function Testimonials() {
  return (
    <section
      className="relative overflow-hidden py-16"
      style={{
        backgroundColor: "#F5F4EF",
      }}
    >
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{opacity:0,y:30}}
          whileInView={{opacity:1,y:0}}
          viewport={{once:true}}
          transition={{duration:.6}}
          className="text-center mb-14"
        >

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
   Trusted By Leading
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
    Organizations
  </span>

          

          

          <p
            className="max-w-2xl mx-auto mt-5 text-lg leading-8"
            style={{color:"#617061"}}
          >
            Hear what government departments,
            public sector organizations and industry
            leaders say about Reddonatura's waste
            management solutions.
          </p>

        </motion.div>

        <div className="relative px-12 overflow-hidden">

          <button
  className="testimonial-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white border border-gray-200 shadow-xl flex items-center justify-center hover:bg-[#178B4C] hover:text-white transition-all duration-300"
>
  <ChevronLeft size={24} />
</button>

<button
  className="testimonial-next absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white border border-gray-200 shadow-xl flex items-center justify-center hover:bg-[#178B4C] hover:text-white transition-all duration-300"
>
  <ChevronRight size={24} />
</button>
<Swiper
  modules={[Navigation, Pagination, Autoplay]}
  navigation={{
    prevEl: ".testimonial-prev",
    nextEl: ".testimonial-next",
  }}
  pagination={{
    clickable: true,
  }}
  autoplay={{
  delay:2500,
  disableOnInteraction:false,
  pauseOnMouseEnter:false,
}}
  loop={true}
  speed={800}
  grabCursor={true}
  watchOverflow={false}
  
  centeredSlides={false}
  spaceBetween={24}
  breakpoints={{
    0: {
      slidesPerView: 1,
      spaceBetween: 16,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
  }}
  className="px-16 py-6 pb-16"
>

          {testimonials.map((item, index) => (
  <SwiperSlide key={index}>
   <motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: .5 }}
  whileHover={{ y: -8 }}
  className="group relative h-[500px] bg-white rounded-3xl border border-[#E7ECE8] shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col overflow-hidden">

  {/* Green Top Line */}

  <div className="absolute top-0 left-0 w-full h-1 bg-[#178B4C]" />

  <div className="p-6 flex flex-col h-full">

      {/* Rating */}

      <div className="flex gap-1 mb-4">

        {[...Array(5)].map((_,i)=>(

          <Star
            key={i}
            size={13}
            fill="#F5B301"
            color="#F5B301"
          />

        ))}

      </div>

      {/* Quote */}

      <Quote
        size={26}
        className="text-[#178B4C] mb-3"
      />

      {/* Company */}

      <h3 className="text-[18px] font-bold leading-6 text-[#063516] mb-3">

          {item.company}

      </h3>

      {/* Text */}

      <p className="text-[13px] leading-6 text-[#5E6B61] flex-1 overflow-hidden">

          {item.text}

      </p>

      <div className="border-t mt-5 pt-4">

          <h4 className="font-semibold text-[#063516]">

              {item.person}

          </h4>

          {item.designation && (

          <p className="text-sm text-[#178B4C] mt-1">

              {item.designation}

          </p>

          )}

          {item.location && (

          <p className="text-xs text-gray-500 mt-1">

              {item.location}

          </p>

          )}

      </div>

  </div>

</motion.div>
  </SwiperSlide>
))}

          </Swiper>

        </div>

      </div>

      {/* Swiper Custom Styles */}
      <style>{`

     .swiper {
  position: relative !important;
  overflow: hidden !important;
  padding-bottom: 60px;
}

.swiper-wrapper {
  position: relative !important;
  display: flex;
  align-items: stretch;
}

.swiper-slide {
  position: relative !important;
  height: auto !important;
  display: flex;
}

.swiper-pagination {
  position: relative !important;
  bottom: 0 !important;
  margin-top: 20px;
}
      `}</style>

    </section>
    
  );
}