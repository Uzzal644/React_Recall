
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Home' 

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element = {<Home />} />
      <Route path='/about' element = {<h2>About us</h2>} />
      <Route path='/contact' element ={<h2>Contact us</h2>} />
    </Routes>
    </BrowserRouter>

  )
}

export default App
