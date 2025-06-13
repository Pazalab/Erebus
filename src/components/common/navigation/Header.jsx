import { Link } from "react-scroll"
import logo from "../../../assets/logo.PNG"
import { TbMenu4 } from "react-icons/tb"
import { useContext } from "react"
import { sidebarContext } from "./navcontext"
import { useNavigate } from "react-router-dom"

const Header = () => {
  // eslint-disable-next-line no-unused-vars
  const [ sidebarStatus, setSidebarStatus ] = useContext(sidebarContext)
  const navigate = useNavigate();
  return (
    <header data-aos="fade-in">
            <div className="inner-row">
                      <div className="header-content">
                                <Link to="home" smooth={true} className="logo">
                                         <img src={logo} alt="Erebus logo" />
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

                                <div className="header-actions">
                                            <button onClick={() => navigate("/auth/login")}>Sign in</button>
                                            <Link to="contact"  smooth={true}>Request a Demo</Link>

                                            <span onClick={() => setSidebarStatus(true)}><TbMenu4 /></span>
                                </div>
                      </div>
            </div>
    </header>
  )
}

export default Header