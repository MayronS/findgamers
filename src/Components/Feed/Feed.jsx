import React from 'react'
import Header from './Header'
import SideBarFeed from './SideBarFeed'
import Post from './Post'

function Feed() {
  return (
    <>
      <Header />
      <div className="flex">
        <SideBarFeed />
        <Post />
      </div>
    </>
  )
}

export default Feed
