import React from 'react'
import SideBar from '../SideBar/SideBar'
import RightSideBar from './RightSideBar'

import Profile from '../../assets/images/Profile_Jose.png'
import Icon_Yes from '../../assets/icons/Yes.png'
import Icon_Not from '../../assets/icons/Not.png'
import Next from '../../assets/icons/Next.png'

function Home() {
  return (
    <div className="flex">
      <SideBar />
      <div className="flex mt-8 mx-auto my-0 w-[30rem] h-[41rem] desktop:mt-10 desktop:w-[35rem] desktop:h-[54.3rem]">
        <div className=" flex justify-center">
          <img className="" src={Profile} alt="Profile" />
        </div>

        <div className="rounded-b-2xl bg-gradient-to-t from-black w-[23.4rem] mt-[27.5rem] absolute desktop:w-[31rem] desktop:mt-[38.4rem]">
          <a
            className="font-semibold text-primary/100 flex items-center"
            href="./"
          >
            <h3 className="ml-4 text-2xl desktop:text-4xl">José •</h3>
            <p className="ml-2 text-xl desktop:text-2xl">
              league, Valorant, etc.
            </p>
          </a>
          <p className="ml-4 mt-2 mb-8 mr-2 text-primary/100 text-sm font-normal desktop:text-base desktop:mt-4 desktop:mr-4">
            Jogador casual, procurando por um grupo para jogar League of
            legends, Valorant, CS2, ou outros jogos.
          </p>
          <div className="flex justify-between">
            <a className="ml-4 mb-6 desktop:mb-8" href="./">
              <img className="h-16 desktop:h-auto" src={Icon_Yes} alt="Match" />
            </a>
            <a className="self-end" href="./">
              <img className="h-16 desktop:h-auto" src={Next} alt="Proximo" />
            </a>
            <a className="mr-4 mb-6 desktop:mb-8" href="./">
              <img
                className="h-16 desktop:h-auto"
                src={Icon_Not}
                alt="Recusar"
              />
            </a>
          </div>
        </div>
      </div>
      <RightSideBar />
    </div>
  )
}

export default Home
