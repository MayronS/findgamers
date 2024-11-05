import React from 'react'
import './styles/styles.css'
import Home from './Components/Home/Home'
import Feed from './Components/Feed/Feed'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Chats from './Components/Chats/Chats'
import ProfilePage from './Components/Profile/Profile'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/findgamers" element={<Home />} />
        <Route path="/findgamers/feed" element={<Feed />} />
        <Route path="/findgamers/chats" element={<Chats />} />
        <Route path="/findgamers/profile" element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
    // <Presentation/>
    //<Home/>
  )
}

export default App
