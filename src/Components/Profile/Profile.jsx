// import React from 'react'
import SideBar from '../SideBar/SideBar'
// import RightSideBar from './RightSideBar'

// import Profile from '../../assets/images/Profile_Jose.png'
// import Icon_Yes from '../../assets/icons/Yes.png'
// import Icon_Not from '../../assets/icons/Not.png'
// import Next from '../../assets/icons/Next.png'

import React from 'react';
import { FaGamepad, FaRegBell, FaUser, FaComments, FaCog } from 'react-icons/fa';
import { MdExitToApp, MdGamepad, MdModeEdit, MdSearch, MdVideogameAsset } from "react-icons/md";
import { RiEdit2Fill } from 'react-icons/ri';

import User1 from '../../assets/users/user1.png'
import LOLIcon from '../../assets/icons_games/LOL.png'

function LeftBar() {
    return (
        <div className='flex flex-col justify-between px-2 border-l-2 border-gray-300 mx-2'>
            <div className="mt-8 space-y-3 px-2">
                <p className="cursor-pointer text-2xl">Mudar tema</p>
                <p className="cursor-pointer text-2xl">Editar preferências</p>
                <p className="cursor-pointer text-2xl">Informações pessoais</p>
                <p className="cursor-pointer text-2xl">Configurações da conta</p>
            </div>
            <button className="flex justify-between items-center mt-4 mb-2 bg-primary/500 text-white px-4 py-2 w-full rounded-xl">
                <MdExitToApp />
                <span className='m-auto'>Sair</span>
            </button>
        </div>
    )
}

function CardGame() {
    return (
        <div className='flex items-center bg-primary/100 rounded-xl p-1'>
            <img src={LOLIcon} />
            <span>League of Legends</span>
        </div>
    )
}

function UserPicture() {
    return (
        <div className="flex gap-2 flex-col justify-center items-center mb-6">
            <div className="w-52 h-52 bg-blue-200 rounded-full">
                <img className='h-full w-full rounded-full' alt='Imagem usuário' src={User1} />
            </div>
            <h3 className="text-4xl font-semibold">José</h3>
            <button className="bg-primary/500 text-white px-4 py-1 rounded-xl flex items-center gap-2">
                <MdModeEdit /> Editar Perfil
            </button>
        </div>
    )

}

function UserProfile() {
    return (
        <div className='w-full h-full'>
            <div className='flex w-auto h-full'>
                <SideBar></SideBar>
                <div className="flex-1 w-full h-full ">
                    <UserPicture />

                    <div className="space-y-4">
                        <div className="bg-primary/200 p-4 rounded-xl">
                            <div className='mb-2 flex items-center gap-2 text-primary/base'>
                                <MdSearch />
                                <p className="font-semibold">Procurando</p>
                            </div>
                            <p>Grupo para jogar League of Legends, Valorant, CS2, e jogos competitivos</p>
                        </div>
                        <div className="bg-primary/200 p-4 rounded-xl">
                            <div className='mb-2 flex items-center gap-2 text-primary/base'>
                                <MdVideogameAsset />
                                <p className="font-semibold">Jogo favorito</p>
                            </div>
                            <CardGame />
                        </div>
                        <div className="bg-primary/200 p-4 rounded-xl">
                            <div className='mb-2 flex items-center gap-2 text-primary/base'>
                                <MdGamepad />
                                <p className="font-semibold">Procurando</p>
                            </div>
                            <ul className="list-disc ml-5">
                                <li>Competitivo</li>
                                <li>Casual</li>
                                <li>For fun</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <LeftBar></LeftBar>
            </div>
        </div>
    );
}

export default UserProfile;