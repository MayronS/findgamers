import React from 'react'
import SideBar from '../SideBar/SideBar'
import Profile from '../../assets/images/Profile_Jose.png'
import Icon_Yes from '../../assets/icons/Yes.png'
import Icon_Not from '../../assets/icons/Not.png'
import Next from '../../assets/icons/Next.png'
import RightSideBar from './RightSideBar'

function Home() {
  return (
    <div className="flex">
      <SideBar />
      <div className="flex mt-10 mx-auto my-0 w-[35rem] h-[54.3rem]">
        <div className=" flex justify-center">
          <img className="" src={Profile} alt="Profile" />
        </div>

        <div className="ml-[1.3rem] w-[28.5rem] mt-[39rem] fixed">
          <a
            className="font-semibold text-primary/100 flex items-center"
            href="./"
          >
            <h3 className="text-4xl">José •</h3>
            <p className="ml-2 text-2xl">league, Valorant, etc.</p>
          </a>
          <p className="mt-4 mb-8 text-primary/100 text-base font-normal">
            Jogador casual, procurando por um grupo para jogar League of
            legends, Valorant, CS2, ou outros jogos.
          </p>
          <div className="flex justify-between">
            <a className="mb-10" href="./">
              <img src={Icon_Yes} alt="Match" />
            </a>
            <a className="self-end" href="./">
              <img src={Next} alt="Proximo" />
            </a>
            <a className="mb-10" href="./">
              <img src={Icon_Not} alt="Recusar" />
            </a>
          </div>
        </div>
      </div>
      <RightSideBar />
    </div>
  )
}

export default Home
