import Footer from "../components/common/Footer"
import Navbar from "../components/common/navigation/Navbar"
import AboutSection from "../components/home/AboutSection"
import ContactSection from "../components/home/ContactSection"
import FeaturesSection from "../components/home/FeaturesSection"
import HeroSection from "../components/home/HeroSection"
import SolutionSection from "../components/home/SolutionSection"
import "../css/home.css"
import { Element } from "react-scroll"

const Home = () => {
  return (
    <>    
          <Element name="home"><Navbar /> </Element>
          <HeroSection />
          <Element name="about"><AboutSection /></Element>
          <Element name="features"><FeaturesSection /></Element>
          <Element name="solution"><SolutionSection /></Element>
          <Element name="contact"><ContactSection /></Element>
          <Footer />
    </>
  )
}

export default Home