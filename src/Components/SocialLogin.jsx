import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export const SocialLogin = () => {
  return (
    <div>
        <h2 className='font-semibold mb-6'>Login With</h2>
        <div className="flex flex-col space-y-2">
            <button className="btn">
            <FcGoogle />
                <span>Login With Google</span>

            </button>
            <button className="btn">
                <FaGithub></FaGithub>
            <span>Login With Github</span>

            </button>
            </div>

    </div>
  )
}
