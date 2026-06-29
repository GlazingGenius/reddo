import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Clients } from "./components/Clients";
import { Products } from "./components/Products";
//import { Statistics, VisionMission } from "./components/Statistics";
import { VisionMission } from "./components/Statistics";
import { Industries } from "./components/Industries";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { LeadFormModal } from "./components/LeadFormModal";

import { AboutPage } from "./pages/AboutPage";
import { ServicePage } from "./pages/ServicePage";
import { ClientsPage } from "./pages/ClientsPage";
import { ContactPage } from "./pages/ContactPage";
import { OrganicWasteDigesterPage } from "./pages/products/OrganicWasteDigesterPage";
import { ShreddersPage } from "./pages/products/ShreddersPage";
import { DewateringPage } from "./pages/products/DewateringPage";
import { TrommelScreensPage } from "./pages/products/TrommelScreensPage";
import { BiogasPage } from "./pages/products/BiogasPage";
import { SolarPage } from "./pages/products/SolarPage";

function HomePage({ onOpenForm }: { onOpenForm: () => void }) {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <main>
      <Hero onOpenForm={onOpenForm} />

      <About />

      <Clients />

      <Products />

     

      <div className="h-16"></div>

      <VisionMission />

      <div className="h-2"></div>

      <Industries />

      <Contact onOpenForm={onOpenForm} />
    </main>
  );
}

export default function App() {
  const [formOpen, setFormOpen] = useState(false);

  useEffect(() => {
    document.body.style.fontFamily = "'DM Sans', system-ui, sans-serif";
    document.body.style.WebkitFontSmoothing = "antialiased";
    document.body.style.MozOsxFontSmoothing = "grayscale";

    // Smooth scrolling
    document.documentElement.style.scrollBehavior = "smooth";

    // Allow any page/component to open the lead form
    const handler = () => setFormOpen(true);
    window.addEventListener("openLeadForm", handler);

    return () => {
      window.removeEventListener("openLeadForm", handler);
    };
  }, []);

  return (
    <BrowserRouter>
      <div
        className="min-h-screen"
        style={{
          backgroundColor: "#F5F4EF",
          fontFamily: "'DM Sans', system-ui, sans-serif",
          overflowX: "hidden",
        }}
      >
        <Header onOpenForm={() => setFormOpen(true)} />

        <Routes>
          <Route
            path="/"
            element={<HomePage onOpenForm={() => setFormOpen(true)} />}
          />

          <Route path="/about" element={<AboutPage />} />
          <Route path="/service" element={<ServicePage />} />
          <Route path="/clients" element={<ClientsPage />} />
          <Route path="/contact" element={<ContactPage />} />

          <Route
            path="/products/organic-waste-digester"
            element={<OrganicWasteDigesterPage />}
          />

          <Route
            path="/products/shredders"
            element={<ShreddersPage />}
          />

          <Route
            path="/products/dewatering"
            element={<DewateringPage />}
          />

          <Route
            path="/products/trommel-screens"
            element={<TrommelScreensPage />}
          />

          <Route
            path="/products/biogas"
            element={<BiogasPage />}
          />

          <Route
            path="/products/solar"
            element={<SolarPage />}
          />
        </Routes>

        <Footer />

        <LeadFormModal
          open={formOpen}
          onClose={() => setFormOpen(false)}
        />
      </div>
    </BrowserRouter>
  );
}