
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Home' 
import About from './About'

//hello world this is test
function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element = {<Home />} />
      <Route path='/about' element = {<About />} />
      <Route path='/contact' element ={<h2>Contact us</h2>} />
    </Routes>
    </BrowserRouter>

  )
}

export default App
