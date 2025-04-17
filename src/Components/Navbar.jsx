import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import user from "../assets/user.png"
import { AuthContext } from '../Provider/AuthProvider'

export const Navbar = () => {
  const {User, logout}=useContext(AuthContext)
  return (
    <div className='flex justify-between items-center'>
        <div className="">
           
       {
        User && user.email
       }
        </div>
        <div className=" flex space-x-4 text-xl font-medium items-center justify-center">
            <NavLink 
     className={({ isActive }) => `${isActive ? "bg-gray-500 text-white p-2 rounded-lg" : 
      "bg-white"}`}
            to="/">Home</NavLink>
            <NavLink
            className={({ isActive }) => `${isActive ? "bg-gray-500 text-white p-2 rounded-lg" : 
              "bg-white"}`}
            to="/about">About</NavLink>
            <NavLink
            className={({ isActive }) => `${isActive ? "bg-gray-500 text-white p-2 rounded-lg" : 
              "bg-white"}`}
            to="/career">Career</NavLink>
        </div>
        <div className="">
            <figure className='flex  items-center space-x-1'>
       
                <img src={user} alt="user" />
                {
                 User && User?.email? <button onClick={logout}>Logout</button>:
                  <Link
                  to="/auth/login"
                  className='btn btn-neutral rounded-none'>Login</Link>
                }
              
            </figure>

        </div>

    </div>
  )
}
