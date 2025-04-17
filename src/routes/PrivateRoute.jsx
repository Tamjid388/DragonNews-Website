import { useContext } from "react"
import { AuthContext } from "../Provider/AuthProvider"
import { Navigate } from "react-router-dom"


export const PrivateRoute = ({children}) => {
  
const {User}=useContext(AuthContext)
if(User&& User?.email){
  return children
}
  return (
    <Navigate to={'/auth/login'}></Navigate>
  )
}
