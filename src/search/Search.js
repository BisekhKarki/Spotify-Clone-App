import React from 'react'
import SideNav from '../Navbar/SideNav'
import Styles from "../search/Search.module.css"


const Search = () => {
  return (
    <div className={`${Styles.search} flex`}>
      <SideNav />
      <div className={`${Styles.searchContainer} text-white bg-gray`}>
        Search
      </div>
    </div>
  )
}

export default Search
