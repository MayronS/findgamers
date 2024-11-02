import React from 'react'

import LOL from '../../assets/icons_games/LOL.png'
import CS2 from '../../assets/icons_games/CS2.png'
import Fortnite from '../../assets/icons_games/Fortnite.png'
import TF2 from '../../assets/icons_games/TF2.png'
import Valorant from '../../assets/icons_games/Valorant.png'

function Header() {
  return (
    <header>
      <ul className="flex overflow-y-auto max-w-[120rem] mt-16 text-primary/base desktop:mt-10">
        <a className="gamesHeader" href="./">
          <img src={LOL} alt="" />
          <div className="">
            <h3 className="text-primary/base text-base font-semibold">
              League of legends
            </h3>
            <p className="text-xs">Exemplo descrição</p>
          </div>
        </a>
        <a className="gamesHeader" href="./">
          <img src={CS2} alt="" />
          <div>
            <h3 className="text-primary/base text-base font-semibold">CS2</h3>
            <p className="text-xs">Exemplo descrição</p>
          </div>
        </a>
        <a className="gamesHeader" href="./">
          <img src={TF2} alt="" />
          <div>
            <h3 className="text-base font-semibold">Team Fortress 2</h3>
            <p className="text-xs">Exemplo descrição</p>
          </div>
        </a>
        <a className="gamesHeader" href="./">
          <img src={Valorant} alt="" />
          <div>
            <h3 className="text-primary/base text-base font-semibold">
              Valorant
            </h3>
            <p className="text-xs">Exemplo descrição</p>
          </div>
        </a>
        <a className="gamesHeader" href="./">
          <img src={Fortnite} alt="" />
          <div>
            <h3 className="text-primary/base text-base font-semibold">
              Fortnite
            </h3>
            <p className="text-xs">Exemplo descrição</p>
          </div>
        </a>
        <a className="gamesHeader" href="./">
          <img src={LOL} alt="" />
          <div className="">
            <h3 className="text-primary/base text-base font-semibold">
              League of legends
            </h3>
            <p className="text-xs">Exemplo descrição</p>
          </div>
        </a>
      </ul>
    </header>
  )
}

export default Header
