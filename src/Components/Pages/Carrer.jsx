import React from 'react'
import { Navbar } from '../Navbar'

export const Carrer = () => {
  return (
    <div className='container mx-auto mt-4'>
        <Navbar></Navbar>
        <div className="">
      

      <div className="hero bg-base-100 shadow-xl mt-6 rounded-xl">
        <div className="hero-content flex-col lg:flex-row-reverse">
      
          <div>
            <h1 className="text-4xl font-bold text-primary">Join Our Team</h1>
            <p className="py-4 text-base-content">
              At <span className="font-semibold">Dragon News</span>, we’re on a mission to deliver truthful, engaging, and impactful news. We're looking for passionate writers, editors, developers, and creatives to help us build the future of journalism.
            </p>

            <div className="divider"></div>

            <h2 className="text-2xl font-semibold mb-2">🌟 Current Openings:</h2>
            <ul className="list-disc list-inside space-y-2 text-base-content">
              <li><strong>📝 News Reporter</strong> – Full-time, Remote/On-site</li>
              <li><strong>✍️ Content Editor</strong> – Part-time, Remote</li>
              <li><strong>🎓 Intern – Journalism</strong> – Paid Internship</li>
              <li><strong>📱 Social Media Manager</strong> – Full-time</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-6 mb-2">📤 How to Apply:</h2>
            <p className="mb-2">
              Email your resume, a short cover letter, and relevant work samples to:
              <br />
              <a
                href="mailto:careers@dragonnews.com"
                className="text-blue-600 hover:underline"
              >
                careers@dragonnews.com
              </a>
            </p>
            <p className="text-sm text-gray-500">
              We review applications on a rolling basis.
            </p>

          
          </div>
        </div>
      </div>
    </div>
        </div>
  )
}
