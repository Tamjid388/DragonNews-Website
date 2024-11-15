import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { NewsCard } from '../NewsCard';

export const CategoryNews = () => {
  const {data:news}=useLoaderData()
  console.log(news);
  return (
    <div>
     <div className='m-4 space-y-2 '>
     <h2 className='font-bold'>News: Home</h2>
     <p className='font-semibold text-gray-400'>{news.length} found on this category</p>
     </div>
      <div className='m-4 space-y-4'>
        {
       news.map(singleNews=>
       <NewsCard key={singleNews.id}
        news={singleNews}></NewsCard>)
        }
      </div>
        
    </div>
  )
}
