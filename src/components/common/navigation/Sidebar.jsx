import { CgClose } from "react-icons/cg"
import logo from "../../../assets/logo.PNG"
import { Link } from "react-scroll"
import gsap from "gsap"
import { useContext, useEffect, useRef } from "react"
import { sidebarContext } from "./navcontext"

const Sidebar = () => {
    const [ sidebarStatus, setSidebarStatus ] = useContext(sidebarContext);
    const sidebarRef = useRef();

    useEffect(() => {
             if(sidebarStatus){
                   sidebarRef.current.classList.add("active");

                   const tl = gsap.timeline();

                   tl.to(sidebarRef.current.querySelector(".sidebar-overlay"), {
                           y: 0,
                           duration: 0.5
                   })
                   tl.to(sidebarRef.current.querySelector(".sidebar-content"), {
                           x: 0,
                           duration: 0.5
                   })
             }
    }, [sidebarStatus])

    const handleCloseSidebar = () => {
           const tl = gsap.timeline();

          tl.to(sidebarRef.current.querySelector(".sidebar-content"), {
                 x: "-100%",
                duration: 0.5
           })
        
         tl.to(sidebarRef.current.querySelector(".sidebar-overlay"), {
               y: "-100%",
              duration: 0.5
          })

          setTimeout(() => {
                 sidebarRef.current.classList.remove("active");
                 setSidebarStatus(false)
          }, 1200)
    }

  return (
    <div ref={sidebarRef} className="sidebar-section">
                <div className="sidebar-overlay"></div>
                <div className="sidebar-content">
                            <div className="sidebar-header">
                                         <img src={logo} alt="" />
                                         <span onClick={handleCloseSidebar}><CgClose /></span>
                            </div>
                            <div className="sidebar-nav">
                                    <ul>
                                          <li><Link onClick={handleCloseSidebar} to="home" smooth={true}>Home</Link></li>
                                          <li><Link onClick={handleCloseSidebar} to="about" smooth={true}>About</Link></li>
                                          <li><Link onClick={handleCloseSidebar} to="features" smooth={true}>Features</Link></li>
                                           <li><Link onClick={handleCloseSidebar} to="solution" smooth={true}>Solution</Link></li>
                                          <li ><Link to="contact" smooth={true} onClick={handleCloseSidebar}>Contact</Link></li>
                                   </ul>
                            </div>
                            <div className="sidebar-extra">
                                         <button>Sign in</button>
                                        <Link to="contact" smooth={true} onClick={handleCloseSidebar}>Request a Demo</Link>
                            </div>
                </div>
    </div>
  )
}

export default Sidebar