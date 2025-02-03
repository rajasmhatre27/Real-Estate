import React from 'react'
import {BrowserRouter , Routes, Route} from 'react-router-dom'
import SignOut from './pages/Signup'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import About from './pages/About'
import Profile from './pages/Profile'

const App = () => {
  return 
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sign-up" element={<Signup/>} />
      <Route path="/sign-in" element={<Signin/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/profile" element={<Profile/>} />
    </Routes>
  </BrowserRouter>
}
export default App