import React from 'react'
import { Link } from 'react-router-dom'

import Explorer from '../../assets/icons/Game_Icon.png'
import Feed_img from '../../assets/icons/Feed.png'
import Chat from '../../assets/icons/Chat_Icon.png'
import Notification from '../../assets/icons/Icon_Notification.png'
import Profile from '../../assets/icons/Profile_Icon.png'
import settings from '../../assets/icons/Configurações.png'

function SideBarFeed() {
  return (
    <div className="ml-10 mr-40 font-semibold static">
      <ul className="ml-10 mt-10 desktop:mt-16">
        <Link to="/">
          <li className="sideOptions">
            <img src={Explorer} alt="Explorar" />
            <p>Explorar</p>
          </li>
        </Link>
        <Link to="/feed">
          <li className="sideOptions">
            <img src={Feed_img} alt="Feed" /> Feed
          </li>
        </Link>

        <Link to="/chats">
          <li className="sideOptions">
            <img src={Chat} alt="Chat" />
            Chat
          </li>
        </Link>
        <a href="./">
          <li className="sideOptions">
            <img src={Notification} alt="Notificação" />
            Notificação
          </li>
        </a>
        <a href="./">
          <li className="sideOptions">
            <img src={Profile} alt="Perfil" />
            Perfil
          </li>
        </a>
      </ul>

      <a href="./">
        <img
          className="mt-16 ml-6 desktop:mt-36"
          src={settings}
          alt="Configurações"
        />
      </a>
    </div>
  )
}

export default SideBarFeed
