import { useEffect, useState } from "react"
import { createContext } from "react"
import { app } from "../Firebase/Firebase.Config"
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

 
export const AuthContext=createContext()
const auth =getAuth(app)
export const AuthProvider = ({children}) => {
    const [User,setuser]=useState("null")
    const [loading,setLoading]=useState(true)
    console.log(User)
    
    const createNewUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
const logout=()=>{
    return signOut(auth)
}
const userLogin=(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
}


    const authinfo={
        User,
        setuser,
        createNewUser,
        logout,userLogin
    }
    useEffect(()=>{
const unsubscribe= onAuthStateChanged(auth,(currentuser)=>{
    setuser(currentuser)
})
return ()=>{
    unsubscribe()
}
    },[])
  return (
    <AuthContext.Provider value={authinfo}>
{children}
    </AuthContext.Provider>
  )
}
