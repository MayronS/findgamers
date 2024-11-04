import React from 'react'

import gallery from '../../assets/icons/gallery.png'
import user1 from '../../assets/users/user1.png'
import my_user from '../../assets/users/my_user.png'
import options_chat from '../../assets/icons/options_chat.png'
import to_send from '../../assets/icons/to_send.png'
import { MdMoreVert, MdPhoto, MdSend } from 'react-icons/md'

function Chat() {
  return (
    <div className="flex flex-col w-full h-auto items-around mx-3 my-5 gap-5">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-2">
          <img src={user1} alt="" />
          <p>Usuário</p>
        </div>
        <MdMoreVert className='w-10 text-gray-500 h-10' />
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex items-end gap-2">
          <div className='w-16 h-16 shrink-0'>
            <img className='w-16 h-16' src={user1} alt="" />
          </div>
          <p className="p-2 bg-color/chat rounded-t-3xl rounded-br-3xl shrink">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="flex items-end justify-end gap-2">
          <p className="p-2 bg-color/chat rounded-t-3xl rounded-br-3xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className='w-16 h-16 shrink-0'>
            <img className='w-16 h-16' src={my_user} alt="" />
          </div>
        </div>
      </div>
      <div className="flex gap-4 mt-auto">
        <div className="flex items-center bg-color/chat w-11/12 rounded-3xl justify-between pl-4 pr-4">
          <p>Escreva aqui...</p>
          <MdPhoto className='w-6 h-6 text-gray-600' />
        </div>
        <div className="grid place-items-center justify-center w-10 h-10 rounded-full bg-color/chat ">
          <MdSend className='w-6 h-6 text-gray-600' />
        </div>
      </div>
    </div>
  )
}

export default Chat
