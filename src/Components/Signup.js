import React from 'react'
import "../index.css"
import logo from "../assets/Spotify-emblem.jpg"
import "../Styles/Signup.css"
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div className='Signup bg-black  w-100 text-white'>
      <div className='logo'>
      <img src={logo}  className='w-12'/>
      <p className='font-semibold text-xl'>Spotify</p>
      </div>
      <div className='Signup_container'> 
        <h1 className='font-bold text-3xl'>Sign up to start<br></br> Listening</h1>
        <form className='SignupForm' onSubmit={(e)=>(e.preventDefault())}>
            <p className='emailAddress mt-8 text-sm'>Email address</p>
            <input  className='emailInput' placeholder='name@gmail.com' />
            <br></br>
            <button className='nextButton mt-4'>Next</button>
           <div className='underlines mt-6 mb-6'>
           <label className='leftUnderline'>-------------------</label>
            <label> or </label>
            <label className='RightUnderline'>-------------------</label>
           </div>
           <div className='socialLogin'>
            <button className='google'><FcGoogle className='googleIcon' /> Sign up with Google </button>
            <button className='facebook'><BsFacebook className='facebookIcon ' /> Sign up with Facebook </button>
            <button className='apple'><FaApple className='appleIcon' /> Sign up with Apple </button>
           </div>
           <div className='under mt-10 mb-10'></div>
           <div className='alreadyLogin'>
                <p>Already have an account? <Link className='logInHere' to={"/login"}>Log in here</Link></p>
           </div>

        </form>
      </div>

    </div>
  )
}

export default Signup
