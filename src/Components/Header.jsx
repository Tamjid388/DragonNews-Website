import moment from "moment"
import logo from "../assets/logo.png"

export const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-2 py-2">
        <figure>
            <img className="" src={logo} alt="logo" />
        </figure>
        <h2 className="text-gray-400">Journalism Without Fear or Favour</h2>
       
        <p className="text-gray-400 font-bold ">
            {
            moment().format("dddd, MMMM Do YYYY")
            }
            </p>
    </div>
  )
}
