import { Link } from "react-router-dom"
import dummy from "../../assets/dummy.png"
import { GoArrowUpRight } from "react-icons/go";
import FaqSection from "./FaqSection";

const SolutionSection = () => {
  return (
    <div className='solution-section'>
             <div className="inner-row">
                       <div className="solution-section-content">
                                   <div className="solution-intro">
                                               <h3 data-aos="zoom-in-down">Live Exploration</h3>
                                               <h2 data-aos="zoom-in-up">Experience Seamless Management in One Powerful Dashboard</h2>
                                   </div>

                                   <div className="solution-stage" data-aos="zoom-in">
                                            <div className="solution-overlay">
                                                        <div className="overlay-texts">
                                                                 <h3>Try Erebus before creating an Account</h3>
                                                                 <Link to={"/"}>View Demo <span><GoArrowUpRight /></span></Link>
                                                        </div>
                                            </div>
                                              <img src={dummy} alt="" />
                                   </div>

                                   <FaqSection />
                       </div>
             </div>
    </div>
  )
}

export default SolutionSection