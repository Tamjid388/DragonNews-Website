import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

export const FindUs = () => {
  return (
    <div>
           <h2 className='font-semibold'>Find Us On</h2>
           <div className="join w-full join-vertical">
  <button className="btn join-item justify-start">
    <FaFacebook></FaFacebook>
    Facebook</button>
  <button className="btn join-item justify-start">
    <FaTwitter></FaTwitter>
    Twitter</button>
  <button className="btn join-item justify-start">
    <FaInstagram></FaInstagram>
    Instagram</button>
</div>
    </div>
  )
}
