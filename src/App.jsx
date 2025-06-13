import { Route, Routes } from 'react-router-dom'
import { useEffect } from 'react'
import './App.css'
import Home from './pages/Home'
import Aos from 'aos'
import "aos/dist/aos.css"
import Login from './pages/Login'
import HomeV2 from './pages/HomeV2'
import Login2 from './pages/Login2'

function App() {
    useEffect(() => {
         Aos.init({
              duration: 1800,
              once: true
         })
    }, [])

  return (
    <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/version-2" element={<HomeV2 />} />
            <Route path="/auth/login" element={<Login />} />
            <Route path='/auth/login-2' element={<Login2 />} />
    </Routes>
  )
}

export default App
