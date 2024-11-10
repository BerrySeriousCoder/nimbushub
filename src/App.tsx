import { BrowserRouter as Router ,Route, Routes } from 'react-router-dom'
import './App.css'
import { Homepage } from './pages/Homepage'
import { Navbar } from './components/homepage/navbar'

function App() {

  return (
    <> 
        <Router> 
          <Navbar></Navbar>
          <Routes>
            <Route path='/' element={<Homepage></Homepage>} />
          </Routes>
        </Router>
         
    </>
  )
}

export default App
