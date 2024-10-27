import React from "react"


import Explorer from "../../assets/icons/Game_Icon.png"
import Feed from "../../assets/icons/Feed.png"
import Chat from "../../assets/icons/Chat_Icon.png"
import Notification from "../../assets/icons/Icon_Notification.png"
import Profile from "../../assets/icons/Profile_Icon.png"
import settings from "../../assets/icons/Configurações.png"

function SideBar(){
  return(
    <div className="max-w-72 font-semibold">
      <h1 className="ml-10 text-primary/base text-3xl  mt-5">Ache Games</h1>

      <ul className="ml-10">
        <a href="./"><li className="side_options"><img src={Explorer} alt="Explorar" /><p>Explorar</p></li></a>
        <a href="./"><li className="side_options"><img src={Feed} alt="Feed" /> Feed</li></a>
        <a href="./"><li className="side_options"><img src={Chat} alt="Chat" />Chat</li></a>
        <a href="./"><li className="side_options"><img src={Notification} alt="Notificação" />Notificação</li></a>
        <a href="./"><li className="side_options"><img src={Profile} alt="Perfil" />Perfil</li></a>
      </ul>
    
      <a href="./"><img className="mt-36 ml-6" src={settings} alt="Configurações" /></a>
    </div>
    

  )
}

export default SideBar