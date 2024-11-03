import React from 'react'

import gallery from '../../assets/icons/gallery.png'
import user1 from '../../assets/users/user1.png'
import my_user from '../../assets/users/my_user.png'
import options_chat from '../../assets/icons/options_chat.png'
import to_send from '../../assets/icons/to_send.png'

function Chat() {
  return (
    <div className="w-screen">
      <div className="flex items-center justify-between ml-8 mr-8 mb-40 mt-10">
        <div className="flex items-center">
          <img src={user1} alt="" />
          <p>Usuário</p>
        </div>
        <img src={options_chat} alt="" />
      </div>
      <div className="h-[37rem]">
        <div className="flex items-end gap-2 ml-10 mb-8">
          <div>
            <img src={user1} alt="" />
          </div>
          <p className="w-96 p-2 bg-color/chat rounded-t-3xl rounded-br-3xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          </p>
        </div>
        <div className="flex items-end justify-end gap-2 mr-10">
          <p className="w-96 p-2 bg-color/chat rounded-t-3xl rounded-br-3xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          </p>
          <div>
            <img src={my_user} alt="" />
          </div>
        </div>
      </div>
      <div className="flex gap-4 ml-10">
        <div className="flex items-center bg-color/chat w-11/12 rounded-3xl justify-between pl-4 pr-4">
          <p>Escreva aqui...</p>
          <img src={gallery} alt="" />
        </div>
        <div className="grid place-items-center justify-center w-10 h-10 rounded-full bg-color/chat ">
          <img className="" src={to_send} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Chat
