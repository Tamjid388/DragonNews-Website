import { useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../Provider/AuthProvider"
import Swal from "sweetalert2"


export const Login = () => {
  const{userLogin,setuser}=useContext(AuthContext)
  const navigate=useNavigate()
  const handleSubmit=(e)=>{
    e.preventDefault()
    const form=e.target
    const email=form.email.value
    const password=form.password.value
    userLogin(email,password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
     setuser(user)
     navigate("/")
    })
    .catch((error) => {
      Swal.fire({
        icon: 'error',
        title: 'Login Failed',
        text: 'Invalid email or password. Please try again.',
       
        confirmButtonColor: '#d33',
        confirmButtonText: 'Try Again',
      });
      
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
    });
  }
  return (
    <div className="min-h-screen ">
      
    <div className="max-w-screen-sm mx-auto  bg-base-100 py-10 my-14">
       <div className="text-center ">
        
      <h1 className="text-2xl font-bold py-8">Login now!</h1>
     
    </div>
     <form className="card-body" onSubmit={handleSubmit}>
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
        <div className="form-control mt-6">
          <button className=" bg-[#403F3F] hover:bg-[#403F3F] rounded-none btn text-base-100">Login</button>
        </div>
      </form>
      <p className="text-center font-semibold">Dont’t Have An Account ? 
        <Link to="/auth/register">
        <span className="text-red-600 underline"> Register</span>
        </Link></p>
    </div>
    </div>
  )
}
