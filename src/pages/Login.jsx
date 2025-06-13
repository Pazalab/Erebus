import { Link } from "react-router-dom"
import "../css/auth.css"
import logo from "../assets/logo.PNG"
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { useState } from "react";
import { TbSquareRounded, TbSquareRoundedCheckFilled } from "react-icons/tb";
import illustration1 from "../assets/illustration1.png"
import illustration2 from "../assets/illustration2.png"
import illustration3 from "../assets/illustration3.png"
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const Login = () => {
  const [ passwordStatus, setPasswordStatus ] = useState(false);
  const [ choiceStatus, setChoiceStatus ] = useState(false);
  const [ slide, setSlide ] = useState(0)

  const handleNextBtn = () => {
         if(slide >= 2){
              return;
         }
         setSlide(prev => prev + 1)
  }
  const handlePrevBtn = () => {
        if(slide <= 0){
            return
        }
        setSlide(prev => prev - 1)
  }
  return (
    <div className="auth-wrapper">
               <div className="form-auth-column">
                         <Link to={"/"} className="auth-logo">
                                 <img src={logo} alt="" />
                         </Link>

                         <div className="form-grid-content">
                                  <div className="form-content-texts">
                                            <h2>Welcome Back to Erebus</h2>
                                            <p>Enter your email and password to access your account.</p>
                                  </div>

                                  <form>
                                           <div className="auth-form-row">
                                                     <label htmlFor="email">Email <span>*</span></label>
                                                    <input type="email" className="auth-input-control" placeholder="Enter your mail" />
                                           </div>
                                           <div className="auth-form-row">
                                                     <label htmlFor="password">Password <span>*</span></label>
                                                     <div className="password-input">
                                                               <input type={ passwordStatus ? "text" : "password"} placeholder="Enter your password" />
                                                               <div className="eye-stash" onClick={()=> setPasswordStatus(!passwordStatus)}>
                                                                         { passwordStatus ? <span><AiOutlineEye /></span> : <span><AiOutlineEyeInvisible /></span>}
                                                               </div>
                                                     </div>
                                           </div>
                                           <div className="extra-form-options">
                                                   <div className="remember-choice" onClick={() => setChoiceStatus(!choiceStatus)}>
                                                            { choiceStatus ? <span className="active"><TbSquareRoundedCheckFilled /></span> : <span><TbSquareRounded /></span>}
                                                            <h4>Remember me</h4>
                                                   </div>
                                                   <Link to={"/"} className="forgot">Forgot password?</Link>
                                           </div>
                                           <div className="auth-form-row">
                                                    <button type="submit">Login</button>
                                           </div>
                                  </form>
                         </div>
               </div>
               <div className="abstract-grid-column">
                        <div className="abstract-slider">
                                 <div className="abstract-slider-row">
                                            <div className={ slide === 0 ? "abstract-slide-moja active" : "abstract-slide-moja"}>
                                                      <img src={illustration1} alt="" />

                                                      <div className="abstract-slide-texts">
                                                               <h3>Take Control with One Powerful Platform</h3>
                                                               <p>Simplify your operations by managing time tracking, HR, invoicing, and approvals all in one place—no more juggling disconnected tools.</p>
                                                      </div>
                                            </div>
                                             <div className={ slide === 1 ? "abstract-slide-moja active" : "abstract-slide-moja"}>
                                                      <img src={illustration2} alt="" />

                                                      <div className="abstract-slide-texts">
                                                               <h3>Drive Smarter Decisions in Real Time</h3>
                                                               <p>Tap into live analytics to uncover trends, cut costs, and act fast with data that keeps your team and finances on track.</p>
                                                      </div>
                                            </div>

                                            <div className={ slide === 2 ? "abstract-slide-moja active" : "abstract-slide-moja"}>
                                                      <img src={illustration3} alt="" />

                                                      <div className="abstract-slide-texts">
                                                               <h3>Streamline How Your Team Works</h3>
                                                               <p>Equip your remote, on-site, or hybrid teams with tools that automate workflows, speed up approvals, and keep projects moving smoothly.</p>
                                                      </div>
                                            </div>

                                            <div className="slider-pagination">
                                                     <span className="arrow" onClick={handlePrevBtn}><BsChevronLeft /></span>
                                                     <div className="slider-dots">
                                                               <span className={ slide === 0 ? "active" : ''}></span>
                                                               <span className={ slide === 1 ? "active" : ''}></span>
                                                               <span className={ slide === 2 ? "active" : ""}></span>
                                                     </div>
                                                     <span className="arrow" onClick={handleNextBtn}><BsChevronRight /></span>
                                            </div>
                                 </div>

                        </div>
               </div>
    </div>
  )
}

export default Login