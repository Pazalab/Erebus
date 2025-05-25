import { Link } from "react-scroll"
import dummy from "../../assets/dummy.png"
const HeroSection = () => {
  return (
    <div className="hero-section">
              <div className="inner-row">
                        <div className="hero-texts">
                                  <h1>Scalable, Smarter Government Staffing.</h1>
                                  <p>Easily manage your team, stay on top of compliance, and get more done with smart automation and real-time insights—all in one place.</p>

                                  <div className="hero-btns">
                                            <Link to="">Try it out</Link>
                                            <Link to="">How it works</Link>
                                  </div>
                        </div>

                        <div className="hero-image">
                                  <img src={dummy} alt="" />
                        </div>
              </div>
    </div>
  )
}

export default HeroSection