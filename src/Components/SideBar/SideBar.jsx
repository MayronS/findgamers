import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { MdChatBubble, MdDehaze, MdNotifications, MdPerson, MdSettings, MdVideogameAsset } from 'react-icons/md'
import { useSidebar } from './SideBarContext'
import Notifications from '../Notifications/Notifications'

function SideBar({collapsed = false, ronaldo}) {
  const { isCollapsed, toggleSidebar, setIsCollapsed, showNotifications, toggleNotifications } = useSidebar() ;
  
  const iconClass = "w-10 h-10"
  
  const activateNotifications = () => {
    toggleNotifications()
    setIsCollapsed(showNotifications ? false : true)
  }

  return (
    <div className='flex w-auto h-auto'>
      <div className={`flex flex-col font-semibold static ${isCollapsed ? 'max-w-20' : 'max-w-50'} px-4`}>
        <button onClick={toggleSidebar} className="flex items-center pt-2 text-gray-500">
          {isCollapsed ? <FaChevronRight /> : <FaChevronLeft />}
        </button>

        {!isCollapsed && (
          <h1 className="text-nowrap text-primary/base text-3xl pt-2 desktop:mt-12">
            Ache Games
          </h1>
        )}

        <ul className={` mt-12 desktop:mt-24 ${isCollapsed ? 'space-y-4' : ''} text-gray-600`}>
          <a href="./">
            <li className="sideOptions flex items-center gap-2">
              <MdVideogameAsset className={iconClass} />
              {!isCollapsed && <p>Explorar</p>}
            </li>
          </a>
          <Link to="/feed">
            <li className="sideOptions flex items-center gap-2">
              <MdDehaze className={iconClass} />
              {!isCollapsed && <p>Feed</p>}
            </li>
          </Link>
          <Link to="/chats">
            <li className="sideOptions flex items-center gap-2">
              <MdChatBubble className={iconClass} />
              {!isCollapsed && <p>Chat</p>}
            </li>
          </Link>
          <button onClick={activateNotifications}>
            <li className="sideOptions flex items-center gap-2">
              <MdNotifications className={iconClass} />
              {!isCollapsed && <p>Notificação</p>}
            </li>
          </button>
          <Link to="/profile">
            <li className="sideOptions flex items-center gap-2">
              <MdPerson className={iconClass} />
              {!isCollapsed && <p>Perfil</p>}
            </li>
          </Link>
        </ul>

        <a className="flex w-full h-full" href="./">
          <MdSettings className='mt-auto mb-3 text-gray-600 w-10 h-10' />
        </a>
      </div>
      <div className='h-full relative'>
        {showNotifications && <Notifications />}        
      </div>
      
    </div>
  );
}
      

export default SideBar
