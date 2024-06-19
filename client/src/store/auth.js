import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext =createContext()

export const AuthProvider = ({children})=>{
    const [token,settoken] =useState(localStorage.getItem("token"))
    const  [user,setuser]=useState()
    const storeTokenInLS =(serverToken)=>{
        return localStorage.setItem("token",serverToken);
    };
    let isloggedIn =!!token
    const logoutUser =()=>{
        settoken("")
        return localStorage.removeItem("token")
    }
    const userAuthentication=async()=>{
        try {
            console.log("auth");
            const response = await fetch("http://localhost:8000/userdetails",{
                method : "GET",
                headers :{
                    Authorization :`Bearer ${token},`
                },
            });
            if(response.ok){
                const data=await response.json();
                console.log("auth");
                console.log(data)
                setuser(data);
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        userAuthentication();
    },[])
    return <AuthContext.Provider value={{isloggedIn,storeTokenInLS ,logoutUser,user}}>
        {children}
    </AuthContext.Provider>
}

export const useAuth =()=>{
    
    return useContext(AuthContext)
}