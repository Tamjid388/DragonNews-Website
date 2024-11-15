import React from 'react'
import { Link } from 'react-router-dom'
import user from "../assets/user.png"

export const Navbar = () => {
  return (
    <div className='flex justify-between items-center'>
        <div className="">
           
       
        </div>
        <div className=" flex space-x-4 text-2xl font-medium items-center justify-center">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/career">Career</Link>
        </div>
        <div className="">
            <figure className='flex  items-center space-x-1'>
       
                <img src={user} alt="user" />
                <button className='btn btn-neutral rounded-none'>Login</button>
            </figure>

        </div>

    </div>
  )
}
