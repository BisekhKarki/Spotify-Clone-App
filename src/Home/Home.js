import React, { useEffect, useRef, useState } from 'react'
import Styles from "../Home/Home.module.css"
import SideNav from '../Navbar/SideNav'
import { FaRegCircleUser } from "react-icons/fa6";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link } from 'react-router-dom';
import { menuList } from '../Navigation';

const Home = () => {

  const [showMenu,setShowMenu]= useState(false)
  const dropDown = useRef()
  

  const hideMenu = ()=>{
    setShowMenu(!showMenu)
  }

  useEffect(()=>{
    const drop = (e)=>{
      if(!dropDown.current.contains(e.target)){
        setShowMenu(false)
      }
      }
      document.addEventListener("mousedown",drop);
      return ()=>{
        document.addEventListener("mousedown",drop);
      }
  })

  
  return (
   <>
    <div className={`${Styles.home} flex`}>
      <SideNav />
      <div className={`${Styles.homeContainer} text-white bg-gray`}>
        <div className={`${Styles.profile}`} ref={dropDown} onClick={hideMenu}>
          <div className={`${Styles.userProfile}`}>
          <FaRegCircleUser />
          <p>Bisekh</p>
          <IoMdArrowDropdown  />
          </div>
          {
            showMenu ? 
            <div className={`${Styles.menuItems}`} >
              {
                menuList.map((m,k)=>{
                  <li className={`${Styles.Items}`} key={k} >
                    <Link className={`${Styles.listItems}`}>{m.itemName}</Link>
                  </li>
                })
              }

            </div> : ""
          }
        </div>
      </div>
    </div>
   </>
  )
}

export default Home
