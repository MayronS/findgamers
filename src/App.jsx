import React from 'react'
import './styles/styles.css'
import Home from './Components/Home/Home'
import Feed from './Components/Feed/Feed'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/feed" element={<Feed />} />
      </Routes>
    </BrowserRouter>
    // <Presentation/>
    //<Home/>
  )
}

export default App
