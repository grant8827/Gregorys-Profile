import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/pages/Home'
import Resume from './components/pages/Resume'
import CoverLetter from './components/pages/CoverLetter'
import Contact from './components/pages/Contact'
import Header from './components/Header'

function App() {

  return (
    <Router>
      < Header />
      <Routes>
        <Route path="/" element={<Home/>} />
          <Route path="/resume" element={<Resume/>} />
          <Route path="/coverletter" element={<CoverLetter/>} />
          <Route path="/contact" element={<Contact/>} />
      </Routes>
   
    </Router>
  )
}

export default App
