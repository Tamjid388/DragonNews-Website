import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from '../Components/Navbar'

export default function AUTHLayout() {
  return (
    <div className='w-11/12 mx-auto font-poppins bg-[#F3F3F3]'>

<header className='py-3'>
<Navbar></Navbar>
</header>
      <Outlet></Outlet>
    </div>
  )
}
