import efficiency from "../../assets/efficacy.png"
import realtime from "../../assets/real-time.png"
import development from "../../assets/development.png"
import trust from "../../assets/trustworthiness.png"
import about1 from "../../assets/about1.jpg"
import { Link } from "react-scroll"
import { IoIosArrowRoundDown } from "react-icons/io";

const AboutSection = () => {
  return (
    <div className="about-section-2">
             <div className="inner-row">
                        <div className="about-section-2-content">
                                   <div className="about-intro">
                                            <h3 data-aos="zoom-in-down">The Advantage</h3>
                                            <h2 data-aos="zoom-in-up">What Sets Erebus Apart</h2>
                                   </div>
                                   <div className="about-row-2-content">
                                                <div className="benefit-moja" data-aos="zoom-in">
                                                          <img src={efficiency} alt="" />
                                                          <h3>Improved Efficiency & Accuracy</h3>
                                                          <p>Save time and cut costs by eliminating manual processes. With intelligent HR automation and error-free data capture, your team can focus on what matters most.</p>
                                               </div>
                                               <div className="benefit-moja" data-aos="zoom-in">
                                                         <img src={realtime} alt="" />
                                                         <h3>Real-Time Visibility and Smarter Decisions</h3>
                                                         <p>Make confident, data-driven choices with real-time workforce insights and transparent financial tracking—all from one centralized dashboard.</p>
                                               </div>
                                               <div className="benefit-moja" data-aos="zoom-in">
                                                         <img src={development} alt="" />
                                                        <h3>Seamless Project & Workforce Management</h3>
                                                        <p>Assign, monitor and adjust projects effortlessly while managing payroll, leave and compliance—all in one intuitive, secure platform.</p>
                                               </div>
                                               <div className="benefit-moja" data-aos="zoom-in">
                                                        <img src={trust} alt="" />
                                                         <h3>Elevated Experience & Trust</h3>
                                                         <p>Boost satisfaction across the board—from contractors to HR teams—with a streamlined, user-friendly interface and enterprise-grade data security.</p>
                                               </div>
                                   </div>

                                   <div className="about-description">
                                             <img src={about1} alt="" data-aos="zoom-in-right" />
                                             <div className="about-description-texts">
                                                     <h3 data-aos="zoom-in-left">At Erebus, we believe that managing teams and projects should be seamless, efficient and data-driven. Our platform is designed to simplify HR operations, automate repetitive tasks, and provide real-time insights to enhance workforce productivity.</h3>
                                                     <Link data-aos="zoom-in-left" to="">Request Demo <span><IoIosArrowRoundDown /></span></Link>
                                             </div>
                                   </div>
                        </div>
             </div>
    </div>
  )
}

export default AboutSection