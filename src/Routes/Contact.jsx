import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Hero2 from "../components/Hero2/Hero2";
import Form from "../components/Form/Form";

const Contact = () => {
  return (
    <div>
      <Navbar/>
      <Hero2 heading="CONTACT" text="Lets have a chat" />
      <Form />
      <Footer/>
    </div>
  )
}

export default Contact