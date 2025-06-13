import { Link } from "react-scroll"
import hero1 from "../../assets/hero1.jpg"
import hero2 from "../../assets/hero3.jpg"
import { IoIosArrowRoundDown } from "react-icons/io";

const HeroSection2 = () => {
  return (
    <div className="hero-section-2">
           <div className="inner-row">
                    <div className="hero-section-2-content">
                             <div className="hero-section-texts">
                                      <h1 data-aos="zoom-in-down"><span className="main">Scalable</span>, <span className="secondary">Smarter</span> Workforce Management.</h1>
                                      <p data-aos="zoom-in-up">Easily manage your team, stay on top of compliance, and get more done with smart automation and real-time insights, all in one place.</p>
                                      <Link data-aos="zoom-in-up" to="solution" smooth={true}>Watch Demo <span><IoIosArrowRoundDown /></span></Link>
                             </div>
                             <div className="hero-section-images">
                                      <img src={hero1} alt="" data-aos="zoom-in" />
                                      <img src={hero2} alt="" data-aos="zoom-in-left" />
                             </div>
                    </div>
           </div>
    </div>
  )
}

export default HeroSection2