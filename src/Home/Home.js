import React, { useRef } from 'react'
import Styles from "../Home/Home.module.css"
import SideNav from '../Navbar/SideNav'
import { FaRegCircleUser } from "react-icons/fa6";
import { IoMdArrowDropdown } from "react-icons/io";
const Home = () => {

  const dropDown = useRef()

  
  
  return (
    <div className={`${Styles.home} flex`}>
      <SideNav />
      <div className={`${Styles.homeContainer} text-white bg-gray`}>
        <div className={`${Styles.profile}`} ref={dropDown}>
          <FaRegCircleUser />
          <p>Bisekh</p>
          <IoMdArrowDropdown />
        </div>
      </div>
    </div>
  )
}

export default Home
