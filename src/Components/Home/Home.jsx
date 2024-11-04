import React from 'react'
import SideBar from '../SideBar/SideBar'
import RightSideBar from './RightSideBar'

import Profile from '../../assets/images/Profile_Jose.png'
import Icon_Yes from '../../assets/icons/Yes.png'
import Icon_Not from '../../assets/icons/Not.png'
import Next from '../../assets/icons/Next.png'
import { SidebarProvider } from '../SideBar/SideBarContext'

function Home() {
  return (
    <div className="flex h-full max-h-screen">
      <SidebarProvider>
        <SideBar />
      </SidebarProvider>

      <div className="flex grow justify-center h-full">
        <div className="relative flex m-5">
          <div className="flex ">
            <img
              className="object-cover rounded-2xl"
              src={Profile}
              alt="Profile"
            />
          </div>
          <div className="absolute bottom-0 right-0 rounded-b-2xl bg-gradient-to-t from-black w-auto">
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
                <img
                  className="h-16 desktop:h-auto"
                  src={Icon_Yes}
                  alt="Match"
                />
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
      </div>
      <RightSideBar />
    </div>
  )
}
export default Home
