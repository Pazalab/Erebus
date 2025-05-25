import { Link } from "react-scroll"
import logo from "../../../assets/logo.PNG"
import { NavLink } from "react-router-dom"
import { TbMenu4 } from "react-icons/tb"

const Header = () => {
  return (
    <header>
            <div className="inner-row">
                      <div className="header-content">
                                <Link to="home" smooth={true} className="logo">
                                         <img src={logo} alt="Erebus logo" />
                                </Link>

                                <nav>
                                         <ul>
                                                  <li><Link to="about" smooth={true}>About</Link></li>
                                                  <li><Link to="features" smooth={true}>Features</Link></li>
                                                  <li><Link to="solution" smooth={true}>Solution</Link></li>
                                                  <li><Link to="contact" smooth={true}>Contact</Link></li>
                                         </ul>
                                </nav>

                                <div className="header-actions">
                                            <button>Sign in</button>
                                            <Link to="contact">Request a Demo</Link>

                                            <span><TbMenu4 /></span>
                                </div>
                      </div>
            </div>
    </header>
  )
}

export default Header