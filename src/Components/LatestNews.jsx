import React from 'react'
import Marquee from 'react-fast-marquee'
import { Link } from 'react-router-dom'

export const LatestNews = () => {
    return (
        <div className='flex gap-2 items-center'>
            <p className='bg-[#D72050] text-base-300 px-3 py-2'>Latest</p>
            <Marquee pauseOnHover={true} className='space-x-2'>

                <Link>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, voluptatum!

                </Link>
                <Link>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, voluptatum!

                </Link>
            </Marquee>
        </div>
    )
}
