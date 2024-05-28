import React, { useState } from 'react'
import Styles from "../Styles/Login.module.css"
import logo from "../assets/Spotify-emblem.jpg"
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { LiaToggleOnSolid } from "react-icons/lia";
import { LiaToggleOffSolid } from "react-icons/lia";
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {

  const [eyeButton,setEyeButton] = useState(false)
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [slideButton, setSlideButton] = useState(false)
  const navigate = useNavigate()

  const loginCheck = ()=>{
    console.log("Email: ",email,"\nPassword: ", password)
    if(email==="bisekhKarki@gmail.com" && password==="H@ppy123"){
      alert("Login Successful")
      navigate("/home")
    }else{
      alert("Invalid Email or Password")
      return
    }
  }

  
  return (
    <>
    <div className={`text-white ${Styles.login}`}>
       <div className={`${Styles.LoginLogo}`}>
      <img src={logo}  className='w-12'/>
      <p className='font-semibold text-xl'>Spotify</p>
      </div>
      <div className={`${Styles.loginContainer} `}> 
        <h1 className='text-2xl font-bold mt-12'>Log in to spotify</h1>
        <div className={`${Styles.loginSocial} mt-12`}>
            <button className='google'><FcGoogle className='googleIcon' /> Sign up with Google </button>
            <button className='facebook'><BsFacebook className='facebookIcon ' /> Sign up with Facebook </button>
            <button className='apple'><FaApple className='appleIcon' /> Sign up with Apple </button>
        </div>
        <div className={`${Styles.LoginUnder} mb-10 mt-10`}></div>
        <div className={`${Styles.inputUser}`}>
          <p>Email or username</p>
          <input  className={`${Styles.loginEmail}`} placeholder='Email or username' value={email}  onChange={(e)=>setEmail(e.target.value)}/>
          <p className='mt-4'>Password</p>
          <input  className={`${Styles.loginEmail}` } placeholder='Password' type={eyeButton? "Text" : "Password"} value={password}  onChange={(e)=>setPassword(e.target.value)} />
          <button className={`${Styles.buttonEye}`} onClick={()=>setEyeButton(!eyeButton)} >{ eyeButton ? <FaEye /> : <FaEyeSlash /> }</button>
        </div>
        <div className={`${Styles.RememberMe}`}>
        <button  className={`${Styles.sliding}`} onClick={()=>setSlideButton(!slideButton)}>
        {slideButton ? <LiaToggleOffSolid className={`${Styles.off}`} /> : <LiaToggleOnSolid className={`${Styles.onn}`} />}
        </button>
        <label>Remeber me</label>
        </div>
        <button className={`${Styles.loginButton}`} onClick={()=> loginCheck()}>Login</button>
        <p className='underline mt-4 mb-8'>Forgot your password?</p>
        <div className='under'></div>
        <div className={`${Styles.alreadySingup} mt-8 mb-12`}>
          <p >Don't have an account?<Link className={`${Styles.SignupInHere}`} to={"/"} >Sign up for Spotify</Link></p>
        </div>
      </div>
      
    </div>
    </>
    
  )
}

export default Login
