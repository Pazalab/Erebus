import logo from "../../assets/icon.PNG"
import { Link } from "react-scroll"
import { CgFacebook } from "react-icons/cg";
import { FaX, FaXTwitter } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";

const Footer = () => {
  return (
    <footer>
          <div className="inner-row">
                      <div className="footer-content">
                                <div className="footer-logo">
                                          <img src={logo} alt="" />
                                </div>
                                <nav>
                                        <ul>
                                                   <li><Link to="home" activeClass="active" spy={true} smooth={true}>Home</Link></li>
                                                   <li><Link to="about" smooth={true}>About</Link></li>
                                                    <li><Link to="features" smooth={true}>Features</Link></li>
                                                    <li><Link to="solution" smooth={true}>Solution</Link></li>
                                                    <li><Link to="contact" smooth={true}>Contact</Link></li>
                                        </ul>
                                </nav>
                                <div className="social-links">
                                        <ul>
                                                 <li><a href=""><CgFacebook /></a></li>
                                                 <li><a href=""><FaXTwitter /></a></li>
                                                 <li><a href=""><FiInstagram /></a></li>
                                        </ul>
                                </div>
                      </div>

                      <div className="copyright">
                            <p>All rights reserved { new Date().getFullYear() } Erebus LLC</p>
                            <div className="right-column">
                                      <a href="">Terms of Service</a>
                                      <span></span>
                                      <a href="">Privacy policy</a>
                            </div>
                      </div>
          </div>
    </footer>
  )
}

export default Footer