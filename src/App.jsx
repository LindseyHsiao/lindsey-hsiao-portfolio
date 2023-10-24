import Navigation from './Components/Navigation'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import Projects from './Pages/Projects'
import Resume from './Pages/Resume'
import './App.css'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
    <Navigation/>
    {/* <Home/> */}
    
    <Routes>
      <Route path='/lindsey-hsiao-portfolio' element={<Home />} />
      <Route path='/lindsey-hsiao-portfolio/Contact' element={<Contact />} />
      <Route path='/lindsey-hsiao-portfolio/Projects' element={<Projects />} />
      <Route path='/lindsey-hsiao-portfolio/Resume' element={<Resume />} />
    </Routes>
    </>
    
  )
}

export default App
