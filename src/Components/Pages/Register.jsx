import { useContext } from "react";
import {Link, useNavigate} from "react-router-dom"
import { AuthContext } from "../../Provider/AuthProvider";

export const Register = () => {

const {createNewUser,setuser}=useContext(AuthContext)
 const navigate=useNavigate()

  const handleSubmit=(e)=>{
    e.preventDefault();
    const form=new FormData(e.target)
    const name=form.get("name")
    const photo=form.get("photo")
    const email=form.get("email")
    const password=form.get("password")
    console.log({name, email,photo,password});
    createNewUser(email,password)
    .then(result=>{
      const user=result.user
      setuser(user)
      navigate("/")
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage)
 
    });
  }
  return (
    <div className="min-h-screen ">
    <div className="max-w-screen-sm mx-auto  bg-base-100 py-10 my-14">
       <div className="text-center ">
      <h1 className="text-2xl font-bold py-8">Register your account</h1>
     
    </div>
     <form className="card-body" onSubmit={handleSubmit}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Name</span>
          </label>
          <input name="name" type="textbox" placeholder="Enter your name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input name="photo" type="" placeholder="Enter your password" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input name="email" type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input name="password" type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
      
        <div className="form-control">
  <label className="label cursor-pointer flex justify-start space-x-1">
  <input name="checkbox" type="checkbox"  className="checkbox" />
    <span className="label-text text-gray-500">Accept Term & Conditions</span>
   
  </label>
</div>
        <div className="form-control mt-6">
          <button className=" bg-[#403F3F] hover:bg-[#403F3F] rounded-none btn text-base-100">Register</button>
        </div>
      </form>
   
    </div>
    </div>
  )
}
