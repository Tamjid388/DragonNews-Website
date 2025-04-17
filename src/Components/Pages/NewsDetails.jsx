import React from 'react'
import { Header } from '../Header'
import { RIghtNavbar } from '../Layout-Component/RIghtNavbar'
import { Link, useLoaderData } from 'react-router-dom'

export const NewsDetails = () => {
    const data=useLoaderData()
    const news= data.data[0]
    console.log();
  return (
    <div>
        <Header></Header>

        <main className='w-11/12 mx-auto grid md:grid-cols-12'>
            <section className='col-span-9'>
            <div className="card bg-base-100  shadow-xl">
  <figure className="px-10 pt-10">
    <img
      src={news.image_url}
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{news.title}</h2>
    <p>{news.details}</p>
    <div className="card-actions">
      <Link to="/" className="btn btn-primary">Back TO Category</Link>
    </div>
  </div>
</div>


            </section>
            <aside className='col-span-3'>
                <RIghtNavbar></RIghtNavbar>
            </aside>
        </main>
    </div>
  )
}
