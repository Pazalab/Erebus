import { Link } from "react-scroll"
import logo from "../../../assets/logo.PNG"
import { useNavigate } from "react-router-dom"
import { TbMenu4 } from "react-icons/tb"
import { useContext } from "react"
import { sidebarContext } from "../../common/navigation/navcontext"
const Header2 = () => {
  // eslint-disable-next-line no-unused-vars
  const [ sidebarStatus, setSidebarStatus ] = useContext(sidebarContext);
  const navigate = useNavigate();
  return (
    <div className="header-2">
             <div className="inner-row">
                        <div className="header-2-content">
                                  <div className="header-2-column">
                                             <Link to={"/"} className="logo">
                                                      <img src={logo} alt="" />
                                             </Link>
                                             <nav>
                                                      <ul>
                                                               <li><Link to="home" activeClass="active" className="active" spy={true} smooth={true}>Home</Link></li>
                                                               <li><Link to="about" smooth={true}>About</Link></li>
                                                               <li><Link to="features" smooth={true}>Features</Link></li>
                                                               <li><Link to="solution" smooth={true}>Solution</Link></li>
                                                               <li><Link to="contact" smooth={true}>Contact</Link></li>
                                                      </ul>
                                             </nav>
                                  </div>
                                  <div className="header-actions">
                                              <button onClick={() => navigate("/auth/login")}>Sign in</button>
                                              <Link to="contact"  smooth={true}>Request a Demo</Link>
                               
                                              <span onClick={() => setSidebarStatus(true)}><TbMenu4 /></span>
                                  </div>
                        </div>
             </div>
    </div>
  )
}

export default Header2