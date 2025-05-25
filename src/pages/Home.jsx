import Navbar from "../components/common/navigation/Navbar"
import HeroSection from "../components/home/HeroSection"
import "../css/home.css"
import { Element } from "react-scroll"

const Home = () => {
  return (
    <>
          <Element><Navbar /></Element>
          {/* <HeroSection /> */}
    </>
  )
}

export default Home