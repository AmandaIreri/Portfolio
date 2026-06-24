/* MARKER-MAKE-KIT-INVOKED */
/* MARKER-MAKE-KIT-DISCOVERY-READ */
import { Routes, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";
import { Home } from "./pages/Home";
import { AllWorks } from "./pages/AllWorks";
import { FlockrCaseStudy } from "./pages/case-studies/flockr/FlockrCaseStudy";
import { PensionCaseStudy } from "./pages/case-studies/pension/PensionCaseStudy";
import { QaribiaCaseStudy } from "./pages/case-studies/qaribia/QaribiaCaseStudy";
import { HomabayCaseStudy } from "./pages/case-studies/homabay-hris/HomabayCaseStudy";

export default function App() {
  return (
    <div
      style={{
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        color: "#1C1A18",
        overflowX: "hidden",
      }}
    >
      <ScrollToTop />
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<AllWorks />} />
        <Route path="/work/flockr" element={<FlockrCaseStudy />} />
        <Route path="/work/fintech" element={<PensionCaseStudy />} />
        <Route path="/work/tourism" element={<QaribiaCaseStudy />} />
        <Route path="/work/homabay-hris" element={<HomabayCaseStudy />} />
      </Routes>
      <Footer />
    </div>
  );
}