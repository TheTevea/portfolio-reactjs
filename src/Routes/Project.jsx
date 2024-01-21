import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Hero2 from "../components/Hero2/Hero2";
import PricingCart from "../components/PricingCart/PricingCart";
import Work from "../components/Work/Work";

const Project = () => {
  return (
    <div>
      <Navbar />
      <Hero2 heading="PROJECTS" text="Some of my most recent works" />
      <Work />
      <PricingCart />
      <Footer />
    </div>
  );
};

export default Project;
