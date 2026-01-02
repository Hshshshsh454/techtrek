import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import HeroSection from "./components/HeroSection";
import Curriculum from "./components/Curriculum";
import Testimonials from "./components/Testimonials";
import Faculty from "./components/Faculty";
import LearnerStats from "./components/LearnerStats";
import Plan from "./components/Plan";
import CTA from "./components/CTA";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import CommunitySection from "./components/Community";
import BootcampBenefits from "./components/BootcampBenefits";
import PlacementBenefits from "./components/PlacementBenefit";
import TopNavbar from "./components/TopNavbar";
// import FloatingNavbar from "./components/FloatingNavbar";
import Highlights from "./components/Highlights"; // ✅ Added missing import
import LogoRun from "./components/LogoRun";
// Pages
import Careers from "./pages/Careers";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import PricingRefundPolicy from "./pages/PricingRefundPolicy";
import BugBounty from "./pages/BugBounty";
import Review from "./pages/Review";
import PressRelease from "./pages/PressRelease";

// Home Page Component
const HomePage = () => {
  return (
    <>
      <TopNavbar />
      {/* <FloatingNavbar /> */}
      <HeroSection />
      <Highlights /> {/* ✅ This now works */}
      <Curriculum />
      <PlacementBenefits />
      <BootcampBenefits />
      <CommunitySection />
      <Testimonials />
      <Faculty />
      <LearnerStats />
      <Plan />
      <CTA />
      <FAQ />
      <LogoRun />
      <Footer />
    </>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
        <Route path="/pricing-refund" element={<PricingRefundPolicy />} />
        <Route path="/bug-bounty" element={<BugBounty />} />
        <Route path="/review" element={<Review />} />
        <Route path="/press-release" element={<PressRelease />} />
      </Routes>
    </Router>
  );
}

export default App;
