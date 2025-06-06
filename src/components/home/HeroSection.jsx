import { Link } from "react-scroll"
// import dummy from "../../assets/dummy.png"
import hero from "../../assets/dashboard2.png"
const HeroSection = () => {
  return (
    <div className="hero-section">
              <div className="inner-row">
                        <div className="hero-texts">
                                  {/* <h1 data-aos="zoom-in-down">Scalable, Smarter Government Staffing.</h1> */}
                                  <h1 data-aos="zoom-in-down">Scalable, Smarter Workforce Management.</h1>
                                  <p data-aos="zoom-in">Easily manage your team, stay on top of compliance, and get more done with smart automation and real-time insights—all in one place.</p>

                                  <div className="hero-btns">
                                         <Link to="solution" smooth={true} data-aos="zoom-in-left">How it works</Link>
                                            {/* <Link to="/solution" data-aos="zoom-in-right">Try it out</Link> */}
                                            
                                  </div>
                        </div>

                        <div className="hero-image" data-aos="zoom-in-up">
                                  <div className="hero-image-inner">
                                           <img src={hero} alt="" />
                                  </div>
                        </div>
              </div>
    </div>
  )
}

export default HeroSection