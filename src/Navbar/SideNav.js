import React from 'react'
import Styles from "../Navbar/SideNav.css"
import Logo from "../assets/Spotify-emblem.jpg"
import { nav, twoNav } from '../Navigation'
import { Link, useLocation } from 'react-router-dom'

const SideNav = () => {

  const location = useLocation();


  return (
    <>
    <div className="sideNavbar">
     <div className={`flex items-center p-5`}>
     <img src={Logo} className='w-12'  />
      <p className='text-white text-3xl font-bold'>Spotify</p>
     </div>
       <div className="navButtons">
       {
            nav.map((n,k)=>{
                return(
                    <>
                    <li className={location.pathname === n.path ? "active" : "navList"} key={k}>
                    <Link to={`${n.path}`} className={`${n.className} flex items-center gap-2 font-white text-xl border-white`}>
                      {n.icon}
                      {n.iconName}
                      </Link>
                    </li>
                    
                    </>
                )
            })
        }
        <div className='navbutton mt-16'>
        {
          twoNav.map((tw,key)=>{
            return(
              <>
              <li className={location.pathname === tw.path ? "active" : "navList"} key={key}>
                <Link to={`${tw.path}`} className={`${tw.className} flex items-center gap-2 font-white text-xl border-white`}>
                  {tw.icon}{tw.iconName}
                  </Link>
              </li>
              </>
            )
          })
        }
        </div>
        
       </div>
    </div>
    </>
    
  )
}

export default SideNav
