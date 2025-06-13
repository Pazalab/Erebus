import Navbar2 from "../components/common2/navigation2/Navbar2"
import AboutSection from "../components/home2/AboutSection"
import FeaturesSection2 from "../components/home2/FeaturesSection2"
import HeroSection2 from "../components/home2/HeroSection2"
import "../css/version2.css"
import { Element } from "react-scroll"
import SolutionSection from "../components/home/SolutionSection"
import ContactSection from "../components/home/ContactSection"
import Footer from "../components/common/Footer"

const HomeV2 = () => {
  return (
    <div className="version-2">
              <div className="top-section">
                      <Element name="home"><Navbar2 /> </Element>
                      <HeroSection2 />
              </div>
             <Element name="about"><AboutSection /></Element>
            <Element name="features"><FeaturesSection2 /></Element>
            <Element name="solution"><SolutionSection /></Element>
             <Element name="contact"><ContactSection /></Element>
             <Footer />
    </div>
  )
}

export default HomeV2