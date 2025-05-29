import { Link } from "react-router-dom"
import dummy from "../../assets/dashboard2.png"
import { GoArrowUpRight } from "react-icons/go";
import FaqSection from "./FaqSection";
import { useState } from "react";
import { CgClose } from "react-icons/cg";

const SolutionSection = () => {
  const [ modalActive, setModalActive ] = useState(false)
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
                                                                 <h3>Explore Erebus in Action</h3>
                                                                 <Link to={"/"} onClick={() => setModalActive(true)}>Play Demo <span><GoArrowUpRight /></span></Link>
                                                        </div>
                                            </div>
                                              <img src={dummy} alt="" />
                                   </div>

                                       <div  className={ modalActive ? 'solution-video active' : 'solution-video'}>
                                                <span className="video-close-btn" onClick={()=> setModalActive(false)}><CgClose /></span>
                                              <div className="video-body">
                                                      <iframe src={modalActive ? "https://res.cloudinary.com/dq6subhaj/video/upload/v1748519105/Erebus_New_Timesheet_For_Regular_Hours_cignif.mp4": ""} allow="autoplay" allowFullScreen ></iframe>
                                              </div>
                                     </div>
                                  
                                   <FaqSection />
                       </div>
             </div>
    </div>
  )
}

export default SolutionSection