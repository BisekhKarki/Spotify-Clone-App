import React from 'react'
import SideNav from '../Navbar/SideNav'
import Styles from "../Playlists/Playlist.module.css"

const Playlist = () => {
  return (
    <div className={`${Styles.playlist} flex`} >
      <SideNav />
      <div className={`${Styles.playlistContainer} text-white bg-gray`}>
        Playlist
      </div>
    </div>
  )
}

export default Playlist
