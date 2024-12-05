import { BrowserRouter as Router ,Route, Routes } from 'react-router-dom'
import './App.css'
import { Homepage } from './pages/Homepage'
import { Navbar } from './components/homepage/navbar'
import { Pricing } from './pages/pricing'
import { Footer } from './components/homepage/footer'
import { About } from './pages/about'

function App() {

  return (
    <> 
        <Router> 
          <Navbar></Navbar>
          <Routes>
            <Route path='/' element={<Homepage></Homepage>} />
            <Route path='/pricing' element={<Pricing></Pricing>} />
            <Route path='/about' element={<About></About>} />
          </Routes>
          <Footer></Footer>
        </Router>
         
    </>
  )
}

export default App
