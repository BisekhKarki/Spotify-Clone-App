import React from 'react'
import SideNav from '../Navbar/SideNav'
import Styles from "../Favourites/Favourites.module.css"


const Favourite = () => {
  return (
    <div className={`${Styles.favourite} flex`} >
      <SideNav />
      <div className={`${Styles.favouriteContainer} text-white bg-gray`}>
        Favourite
      </div>
    </div>
  )
}

export default Favourite
