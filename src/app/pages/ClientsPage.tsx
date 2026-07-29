import { motion } from "motion/react";
import { PageLayout, Section, SectionLabel, FeatureCard, PageCTA } from "./PageLayout";
import { Handshake, TrendingUp, Lightbulb, Star, Leaf } from "lucide-react";

import logoIbis from "../../imports/IBIS.png";
import logoGR from "../../imports/gr_constructions___1_.png";
import logoGaurs from "../../imports/GAURS.png";
//import logoDulsco from "../../imports/DULSCO.png";
//import logoDubai from "../../imports/DUBAI_EXPO_2020.png";
//import logoMarriott from "../../imports/MARRIOT_BANVOY.png";
import logoMcd from "../../imports/mc_donalds__1___1_.png";
import logoKraheja from "../../imports/k_raheja_group___1_.png";
import logoIkea from "../../imports/ikea.png";
import logoKia from "../../imports/kempegowda_international_airport___1_.png";
import logoArvind from "../../imports/ARVIND.png";
import logoAwal from "../../imports/awal_group_refrigeration_and_air_conditioning___1_.png";
import logoAdarsh from "../../imports/ADARSH_DEVELOPERS.png";
import logoNovotel from "../../imports/NOVOTEL.png";
import logoMdi from "../../imports/MDI.png";
import logoPalo from "../../imports/palo_alto_networks___1_.png";
import logoDell from "../../imports/DELL.png";
import logoPrestige from "../../imports/PRESTIGE.png";

import logoAbaCorp from "../../clientslogos/aba_corp__logo.jpeg";
import logoAlstom from "../../clientslogos/Alstom-logo.jpg";
import logoAmazon from "../../clientslogos/Amazon.jpg";
import logoAmbuja from "../../clientslogos/ambuja_neotia_group_logo.jpeg";
import logoApple from "../../clientslogos/apple logo black.png";
import logoAzim from "../../clientslogos/Azim_Premji_University_logo.png";

import logoBharatPetroleum from "../../clientslogos/barathpetroleum.png";
import logoIndianCentralBank from "../../clientslogos/indiancentralbank.png";
import logoIndianRailway from "../../clientslogos/indianrailway.png";
import logoRBI from "../../clientslogos/rbi.png";
import logoDharwad from "../../clientslogos/dharwad.png";
import logoPrisons from "../../clientslogos/prisons.png";
import logoEstateRailway from "../../clientslogos/estaterailwa.png";
import logoBSF from "../../clientslogos/bsf.png";
import logoGoodnessFood from "../../clientslogos/goodnessfood.png";
import logoRioTinto from "../../clientslogos/riotinto.png";
import logoEdama from "../../clientslogos/edama.png";
import logoPowerGrid from "../../clientslogos/powergrid.png";
import logoSirru from "../../clientslogos/sirru.png";
import logoVakkaru from "../../clientslogos/vakkaru.png";
import logoReethi from "../../clientslogos/reethi.png";
import logoWestin from "../../clientslogos/westin.png";
import logoBaglioni from "../../clientslogos/baglioni.png";
import logoNika from "../../clientslogos/nika.png";
import logoNoku from "../../clientslogos/noku.png";
//import logoOberoi from "../../clientslogos/oberoi.png";
//import logoMarriotNew from "../../clientslogos/marriot.png";
import logoTaj from "../../clientslogos/taj.png";
import logoLodha from "../../clientslogos/lodha.png";
import logoSixSenses from "../../clientslogos/sixsenses.png";
import logoOberoi from "../../clientslogos/oberoi.png";
import logoTrident from "../../clientslogos/trident.png";

const logos = [
  { src: logoIbis, name: "IBIS Hotels" },
  //{ src: logoDubai, name: "Dubai Expo 2020" },
  //{ src: logoMarriott, name: "Marriott Bonvoy" },
  { src: logoPrestige, name: "Prestige" },
  { src: logoNovotel, name: "Novotel" },
  { src: logoDell, name: "Dell" },
  { src: logoArvind, name: "Arvind" },
  { src: logoIkea, name: "IKEA" },
  { src: logoMcd, name: "McDonald's" },
  { src: logoKia, name: "Kempegowda International Airport" },
  { src: logoGR, name: "GR Constructions" },
  { src: logoGaurs, name: "Gaurs Group" },
 // { src: logoDulsco, name: "DULSCO" },
  { src: logoKraheja, name: "K Raheja Group" },
  { src: logoAwal, name: "Awal Group" },
  { src: logoAdarsh, name: "Adarsh Developers" },
  { src: logoMdi, name: "MDI" },
  { src: logoPalo, name: "Palo Alto Networks" },
    { src: logoAbaCorp, name: "ABA Corp" },
  { src: logoAlstom, name: "Alstom" },
  { src: logoAmazon, name: "Amazon" },
  { src: logoAmbuja, name: "Ambuja Neotia Group" },
  { src: logoApple, name: "Apple" },
  { src: logoAzim, name: "Azim Premji University" },

  { src: logoBharatPetroleum, name: "Bharat Petroleum" },
{ src: logoIndianCentralBank, name: "Central Bank of India" },
{ src: logoIndianRailway, name: "Indian Railways" },
{ src: logoRBI, name: "Reserve Bank of India" },
{ src: logoDharwad, name: "Dharwad Municipal Corporation" },
{ src: logoPrisons, name: "Prisons Department" },
{ src: logoEstateRailway, name: "Estate Railway" },
{ src: logoBSF, name: "Border Security Force" },
{ src: logoGoodnessFood, name: "Goodness Food" },
{ src: logoRioTinto, name: "Rio Tinto" },
{ src: logoEdama, name: "Edama" },
{ src: logoPowerGrid, name: "Power Grid Corporation of India" },
{ src: logoSirru, name: "Sirru Fen Fushi" },
{ src: logoVakkaru, name: "Vakkaru Maldives" },
{ src: logoReethi, name: "Reethi Faru Resort" },
{ src: logoWestin, name: "The Westin" },
{ src: logoBaglioni, name: "Baglioni Resort" },
{ src: logoNika, name: "Nika Island Resort" },
{ src: logoNoku, name: "Noku Maldives" },
//{ src: logoOberoi, name: "The Oberoi" },
//{ src: logoMarriotNew, name: "Marriot" },
{ src: logoTaj, name: "Taj Hotels" },
{ src: logoLodha, name: "Lodha" },
{ src: logoSixSenses, name: "Six Senses" },
{ src: logoOberoi, name: "The Oberoi" },
{ src: logoTrident, name: "Trident Hotels" },
];

const pillars = [
  { icon: <Handshake className="w-5 h-5" />, title: "Building Strong Partnerships", desc: "We are proud to collaborate with industry-leading clients and partners who share our vision for sustainability and environmental responsibility." },
  { icon: <Star className="w-5 h-5" />, title: "Customer-Centric Approach", desc: "Our clients are at the heart of everything we do. We prioritize their needs through personalized services and tailored solutions." },
  { icon: <TrendingUp className="w-5 h-5" />, title: "Shared Success Stories", desc: "Together with our clients, we have achieved remarkable milestones — from optimizing recycling processes to implementing cutting-edge technologies." },
  { icon: <Lightbulb className="w-5 h-5" />, title: "Continuous Innovation", desc: "By fostering a culture of innovation, we empower our clients and partners to stay ahead in an ever-evolving industry." },
  { icon: <Star className="w-5 h-5" />, title: "Commitment to Excellence", desc: "We uphold the highest standards of integrity, professionalism, and ethical conduct, earning the trust and respect of our clients." },
  { icon: <Leaf className="w-5 h-5" />, title: "Driving Sustainable Growth", desc: "Together, we are driving sustainable growth and making a positive impact on the environment and society." },
];

export function ClientsPage() {
  return (
    <PageLayout
      title="Clients & Partners"
      subtitle="Building strong relationships with our clients and partners — the cornerstone of our success in the waste management industry."
      breadcrumb="Clients & Partners"
    >
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <SectionLabel label="Our Partnership" />
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "1.05rem", color: "#5A6B5C", lineHeight: 1.85 }}>
            At Reddonatura, we believe in fostering strong relationships with our clients and partners, as they are the cornerstone of our success. Through collaboration and mutual trust, we strive to achieve shared goals and drive innovation in the waste management industry. Here are some of our valued clients and partners who have taken a step to contribute towards the <em style={{ color: "#178B4C" }}>Garbage to Green</em> movement with us.
          </p>
        </div>
      </Section>

      <Section bg="#F5F4EF">
        <div className="text-center mb-10"><SectionLabel label="Trusted By" /></div>
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-8 gap-3">
          {logos.map((logo, i) => (
           <motion.div
  key={logo.name}
  initial={{ opacity: 0, scale: 0.95 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.35, delay: 0.04 * i }}
  className="flex items-center justify-center rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
  style={{
    backgroundColor: "#fff",
    border: "1px solid rgba(23,139,76,0.12)",
    boxShadow: "0 6px 18px rgba(0,0,0,.06)",
    height: "130px",
    padding: "8px",
  }}
>
  <img
    src={logo.src}
    alt={logo.name}
    className="w-full h-full object-contain"
    style={{
      maxWidth: "100%",
      maxHeight: "100%",
    }}
  />
</motion.div>
          ))}
        </div>
        <p className="text-center mt-8" style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", letterSpacing: "0.16em", textTransform: "uppercase", color: "#8A9E8B" }}>
          Delivering Sustainable Solutions to Global Partners
        </p>
      </Section>

      <Section>
        <div className="text-center mb-12"><SectionLabel label="Why Partners Choose Us" /></div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((p, i) => <FeatureCard key={i} title={p.title} description={p.desc} icon={p.icon} centered />)}
        </div>
      </Section>
      <PageCTA />
    </PageLayout>
  );
}
