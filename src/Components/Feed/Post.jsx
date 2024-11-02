import React from 'react'

import LOL from '../../assets/icons_games/LOL.png'
import post1 from '../../assets/images/post1.png'

function Post() {
  return (
    <div className="w-[90rem] flex justify-center overflow-auto">
      <div className="w-[50rem] bg-bg-post mt-10">
        <div className="ml-5 mr-5">
          <div className="gap-4 flex items-center ">
            <img src={LOL} alt="LOL" />
            <div className="">
              <h1 className="text-primary/base font-semibold text-2xl">
                League of legends
              </h1>
              <div className="flex">
                <p className=" font-semibold text-base">Paulo Muniz </p>
                <p className="ml-4 opacity-30 font-semibold text-base">
                  26/09/2024 ás 18:40
                </p>
              </div>
            </div>
          </div>
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <img className="" src={post1} alt="post1" />
        </div>
      </div>
    </div>
  )
}

export default Post
