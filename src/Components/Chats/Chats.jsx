import React from 'react'
import SideBarChats from './SideBarChats'
import Users from './Users'
import Chat from './Chat'
import SideBar from '../SideBar/SideBar'
import { SidebarProvider } from '../SideBar/SideBarContext'

function Chats() {
  return (
    <div className="flex h-full w-full">
      <SidebarProvider collapsed={true}>
        <SideBar />
      </SidebarProvider>
      <Users />
      <Chat />
    </div>
  )
}

export default Chats
