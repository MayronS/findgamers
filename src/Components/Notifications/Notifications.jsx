import React from 'react'
import User from '../Chats/User'

import user1 from '../../assets/users/user1.png'
import user2 from '../../assets/users/user2.png'
import user3 from '../../assets/users/user3.png'
import user4 from '../../assets/users/user4.png'
import user5 from '../../assets/users/user5.png'
import user6 from '../../assets/users/user6.png'
import user7 from '../../assets/users/user7.png'
import user8 from '../../assets/users/user8.png'
import user9 from '../../assets/users/user9.png'


function Notifications() {
    return (
        <div className='flex flex-col p-2 bg-primary/100 absolute z-40 top-0 h-full gap-5'>
            <h1 className='text-2xl text-primary/base'>
                Notificações
            </h1>
            <div className='overflow-y-auto'>
                <User profilePhoto={user1} name='Roberto' content='Te enviou uma mensagem' />
                <User profilePhoto={user2} name='Amanda' content='Te convidou para um groupo' />
                <User profilePhoto={user3} name='João' content='Te convidou para um groupo' />
                <User profilePhoto={user4} name='Maria' content='Te convidou para um groupo' />
                <User profilePhoto={user5} name='Matheus' content='Te convidou para uma comunidade' />
                <User profilePhoto={user6} name='Anderson' content='Te convidou para um groupo' />
                <User profilePhoto={user7} name='Cássio' content='Te enviou uma mensagem' />
                <User profilePhoto={user8} name='Mayron' content='Te convidou para um groupo' />
                <User profilePhoto={user9} name='Gabriel' content='Te convidou para um groupo' />
                <User profilePhoto={user5} name='Bruna' content='Te convidou para um groupo' />
                <User profilePhoto={user6} name='Marcelo' content='Te convidou para um groupo' />
                <User profilePhoto={user7} name='Camila' content='Te convidou para um groupo' />
            </div>
        </div>
    );
}

export default Notifications