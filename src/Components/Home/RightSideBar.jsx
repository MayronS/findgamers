import React from "react";
import LOL from "../../assets/icons_games/LOL.png"
import CS2 from "../../assets/icons_games/CS2.png"
import Fortnite from "../../assets/icons_games/Fortnite.png"
import TF2 from "../../assets/icons_games/TF2.png"
import Valorant from "../../assets/icons_games/Valorant.png"

function RightSideBar(){
  return(
    <div>
      <ul className="ml-28 mt-40 mr-20 text-primary/base">
        <a className="gamesSideBar" href="./">
        <img src={LOL} alt="" />
        <div className="">
        <h3 className="text-primary/base text-base font-semibold">League of legends</h3>
        <p className="text-xs">Exemplo descrição</p></div>
        
        </a>
        <a className="gamesSideBar" href="./">
        <img src={CS2} alt="" />
        <div>
        <h3 className="text-primary/base text-base font-semibold">CS2</h3>
        <p className="text-xs">Exemplo descrição</p>
        </div>
        
        </a>
        <a className="gamesSideBar" href="./">
        <img src={TF2} alt="" />
        <div>
        <h3 className="text-base font-semibold">Team Fortress 2</h3>
        <p className="text-xs">Exemplo descrição</p>
        </div>
        </a>
        <a className="gamesSideBar" href="./">
        <img src={Valorant} alt="" />
        <div>
        <h3 className="text-primary/base text-base font-semibold">Valorant</h3>
        <p className="text-xs">Exemplo descrição</p>
        </div>
        </a>
        <a className="gamesSideBar" href="./">
        <img src={Fortnite} alt="" />
        <div>
        <h3 className="text-primary/base text-base font-semibold">Fortnite</h3>
        <p className="text-xs">Exemplo descrição</p>
        </div>
        </a>
      </ul>
    </div>
  )
}

export default RightSideBar