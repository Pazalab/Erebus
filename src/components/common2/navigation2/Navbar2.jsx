import { useState } from "react"
// eslint-disable-next-line no-unused-vars
import { sidebarContext } from "../../common/navigation/navcontext"
import Header2 from "./Header2"
import Sidebar2 from "./Sidebar2"
import Sidebar from "../../common/navigation/Sidebar"
const Navbar2 = () => {
    const [ status, setStatus ] = useState(false)
  return (
    <sidebarContext.Provider value={[status, setStatus]}>
             <Header2 />
             <Sidebar />
    </sidebarContext.Provider>
  )
}

export default Navbar2