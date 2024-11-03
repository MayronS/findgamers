import React from 'react'
import SideBarChats from './SideBarChats'
import Users from './Users'
import Chat from './Chat'

function Chats() {
  return (
    <div className="flex">
      <SideBarChats />
      <Users />
      <Chat />
    </div>
  )
}

export default Chats
