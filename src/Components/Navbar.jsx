import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
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
        <div className=" flex space-x-4 text-2xl font-medium items-center justify-center">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/career">Career</Link>
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
