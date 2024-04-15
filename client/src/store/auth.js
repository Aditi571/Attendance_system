import { createContext, useContext, useState } from "react";

export const AuthContext =createContext()

export const AuthProvider = ({children})=>{
    const [token,settoken] =useState(localStorage.getItem("token"))
    const storeTokenInLS =(serverToken)=>{
        return localStorage.setItem("token",serverToken);
    };
    let isloggedIn =!!token
    const logoutUser =()=>{
        settoken("")
        return localStorage.removeItem("token")
    }
    return <AuthContext.Provider value={{isloggedIn,storeTokenInLS ,logoutUser}}>
        {children}
    </AuthContext.Provider>
}

export const useAuth =()=>{
    
    return useContext(AuthContext)
}