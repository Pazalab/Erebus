import { useState } from "react"
// eslint-disable-next-line no-unused-vars
import { sidebarContext } from "./navcontext";
import Header from "./Header";
const Navbar = () => {
    const [ active, setActive ] = useState(false);
  return (
    <sidebarContext.Provider value={[active, setActive]}>
               <Header />
    </sidebarContext.Provider>
  )
}

export default Navbar