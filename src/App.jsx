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
      <Route path='/' element={<Home />} />
      <Route path='/Contact' element={<Contact />} />
      <Route path='/Projects' element={<Projects />} />
      <Route path='/Resume' element={<Resume />} />
    </Routes>
    </>
    
  )
}

export default App
