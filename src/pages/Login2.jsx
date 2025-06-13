import { useState } from "react";
import logo from "../assets/logo.PNG"
// import logo2 from "../assets/logo2.png"
import { Link } from "react-router-dom";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { TbSquareRounded, TbSquareRoundedCheckFilled } from "react-icons/tb";

const Login2 = () => {
    const [ passwordStatus, setPasswordStatus ] = useState(false);
    const [ choiceStatus, setChoiceStatus ] = useState(false);

  return (
    <div className="auth-wrapper-2">
              <div className="auth-bg-side">
                       <img src={logo} alt="" />
              </div>
              <div className="auth-form-body">
                        <div className="form-grid-content">
                                    <Link to={"/"}>
                                            <img src={logo} alt="" />
                                    </Link>
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
    </div>
  )
}

export default Login2