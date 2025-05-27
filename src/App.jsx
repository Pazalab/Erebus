import { Route, Routes } from 'react-router-dom'
import { useEffect } from 'react'
import './App.css'
import Home from './pages/Home'
import Aos from 'aos'
import "aos/dist/aos.css"

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
    </Routes>
  )
}

export default App
