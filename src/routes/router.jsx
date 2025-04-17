import {
    createBrowserRouter,
    Navigate,
  
  } from "react-router-dom";
import { HomeLayout } from "../Layout/HomeLayout";
import { CategoryNews } from "../Components/Pages/CategoryNews";
import AUTHLayout from "../Layout/AUTHLayout";
import { Login } from "../Components/Pages/login";
import { Register } from "../Components/Pages/Register";
import { NewsDetails } from "../Components/Pages/NewsDetails";
import { PrivateRoute } from "./PrivateRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element:<HomeLayout></HomeLayout>,
      children:[
        {
          path:"",
          element:<Navigate to={"/category/01"}></Navigate>
        },
        {
          path:"category/:id",
          element:<CategoryNews></CategoryNews>,
          loader:({params})=>
      fetch(` https://openapi.programming-hero.com/api/news/category/${params.id}`)
          
        }
      ]
    },
    {
        path:"/news/:id",
        element:<PrivateRoute>
          <NewsDetails></NewsDetails>
        </PrivateRoute>,
        loader:({params})=>fetch(`https://openapi.programming-hero.com/api/news/${params.id}`)
    },
    {
        path:"/auth",
        element:<AUTHLayout></AUTHLayout>,
        children:[
          {
            path:"/auth/login",
            element:<Login></Login>
          },
          {
            path:"/auth/register",
            element:<Register></Register>
          }
        ]
    },
    {
      path:"/practice",
      element:<h1>wokerrfr</h1>
    }
  ]);
  export default router;