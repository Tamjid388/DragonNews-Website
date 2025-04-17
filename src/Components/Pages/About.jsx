import React from 'react'
import { Navbar } from '../Navbar'

export const About = () => {
  return (
    <div className='container mx-auto mt-4'>
        <Navbar></Navbar>
        <section className="bg-white p-6 rounded shadow-md">
  <h1 className="text-3xl font-bold mb-4">About Us</h1>
  <p className="text-gray-700 mb-4">
    Welcome to <span className="font-semibold">Dragon News</span> — your trusted source for up-to-date, reliable, and unbiased news. Our goal is to keep you informed about what matters most, from breaking headlines to in-depth analysis.
  </p>

  <h2 className="text-2xl font-semibold mt-6 mb-2">Our Mission</h2>
  <p className="text-gray-700 mb-4">
    We aim to deliver accurate and timely news across categories like politics, sports, entertainment, culture, and more. We believe that access to trustworthy information empowers communities and drives change.
  </p>

  <h2 className="text-2xl font-semibold mt-6 mb-2">Why Choose Us?</h2>
  <ul className="list-disc list-inside text-gray-700 space-y-1">
    <li>Fact-checked and verified reporting</li>
    <li>Coverage across local and international topics</li>
    <li>Editorial integrity and transparency</li>
    <li>Responsive and user-friendly platform</li>
  </ul>

  <h2 className="text-2xl font-semibold mt-6 mb-2">Contact Us</h2>
  <p className="text-gray-700">
    Got questions, feedback, or a news tip? Reach out to us at <a href="mailto:contact@dragonnews.com" className="text-blue-600 hover:underline">contact@dragonnews.com</a>.
  </p>
</section>

    </div>
  )
}
