import React from 'react'
import Styles from "../library/Library.module.css"
import SideNav from '../Navbar/SideNav'

const Library = () => {
  return (
    <div className={`${Styles.library} flex`}>
      <SideNav />
      <div className={`${Styles.libraryContainer} text-white bg-gray`}>
        Library
      </div>
    </div>
  )
}

export default Library
