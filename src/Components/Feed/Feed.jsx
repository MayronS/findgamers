import React from 'react'
import Header from './Header'
import Post from './Post'

import SideBarFeed from '../SideBar/SideBar2'
import { SidebarProvider } from '../SideBar/SideBarContext'

function Feed() {
  return (
    <>
      <Header />
      <div className="flex">
        <SidebarProvider>
          <SideBarFeed />
        </SidebarProvider>
        <Post />
      </div>
    </>
  )
}

export default Feed
