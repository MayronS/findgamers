import React from 'react'
import User from './User'

import Groups from '../../assets/icons/groups.png'
import Search from '../../assets/icons/search.png'

import user1 from '../../assets/users/user1.png'
import user2 from '../../assets/users/user2.png'
import user3 from '../../assets/users/user3.png'
import user4 from '../../assets/users/user4.png'
import user5 from '../../assets/users/user5.png'
import user6 from '../../assets/users/user6.png'
import user7 from '../../assets/users/user7.png'
import user8 from '../../assets/users/user8.png'
import user9 from '../../assets/users/user9.png'

function Users() {
  return (
    <div className="min-w-[32rem]">
      <h1 className="mt-10 mb-10 font-semibold text-primary/base text-3xl">
        Chats
      </h1>
      <div className="flex items-center mb-10">
        <div className="pl-2 pr-2 flex w-96 items-center justify-between rounded-3xl bg-primary/200">
          <p>Pesquisar...</p>
          <img src={Search} alt="Pesquisar" />
        </div>
        <img className="ml-4" src={Groups} alt="Criar grupos" />
      </div>
      <div className="max-h-[29.3rem] overflow-auto desktop:max-h-[43rem] scrollbar scrollbar-thumb-scroll scrollbar-track-slate-100">
        <User profilePhoto={user1} />
        <User profilePhoto={user2} />
        <User profilePhoto={user3} />
        <User profilePhoto={user4} />
        <User profilePhoto={user5} />
        <User profilePhoto={user6} />
        <User profilePhoto={user7} />
        <User profilePhoto={user8} />
        <User profilePhoto={user9} />
        <User profilePhoto={user1} />
      </div>
    </div>
  )
}

export default Users
