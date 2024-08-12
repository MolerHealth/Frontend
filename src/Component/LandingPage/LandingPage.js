import Navbar from "./NavBar/NavBar";
import Hero from "./Hero/Hero";
import FeaturePage from "./FeaturePage/FeaturePage";
import ContactUsPage from "./ContactUsPage/ContactUsPage";
import TestimonialPage from "./TestimonialPage/TestimonialPage";
import Footer from "./Footer/Footer";

function LandingPage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <FeaturePage />
      <ContactUsPage />
      <TestimonialPage />
      <Footer />
    </div>
  );
}
export default LandingPage;
