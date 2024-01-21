import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Hero2 from "../components/Hero2/Hero2";
import AboutContent from "../components/AboutContent/AboutContent";

const About = () => {
  return (
    <div>
      <Navbar/>
      <Hero2 heading="ABOUT" text="I'm a friendly Front-End Developer" />
      <AboutContent />
      <Footer/>
    </div>
  )
}

export default About