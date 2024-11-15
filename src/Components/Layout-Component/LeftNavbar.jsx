import { useState } from "react"
import { NavLink } from "react-router-dom"


export const LeftNavbar = () => {
    const [categories,setCategories]=useState([])
    useState(()=>{
fetch("https://openapi.programming-hero.com/api/news/categories")
.then(res=>res.json())
.then(data=>setCategories(data.data.news_category))
    },[])
  return (
    <div className="  p-2">

        <h2 className="font-bold m-4">All Category({categories.length})</h2>
        <div className="flex flex-col gap-2">
            {
                categories.map(category=>
                <NavLink 
                to={`/category/${category.category_id}`}
                key={category.category_id}
                className="btn mx-4" >
                    {category.category_name}</NavLink>)
            }

        </div>
    </div>
  )
}
