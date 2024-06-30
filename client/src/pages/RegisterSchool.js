import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';


export const RegisterSchool = () => {

    const [schoolData,setschoolData]=useState({
        schoolName : "",
        username : "",
        email : "",
        password : "",
    })

    const [cpassword,setcpassword]=useState("")

    const handleChange=(e)=>{
        try {
           const name=e.target.name
           const value=e.target.value
           setschoolData({
            ...schoolData,
            [name]:value
           }) 
          
        } catch (error) {
            console.log(error);
        }
    }
    const handleSubmit=async(e)=>{
        e.preventDefault()
        try {
            if(cpassword===schoolData.password){
                console.log("front")
                const response=await fetch("http://localhost:8000/registerSchool",{
                    method : "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body : JSON.stringify(schoolData)
                })

                if(response.ok){
                    const data=await response.json();
                    console.log(data.token)
                    Navigate('/')
                }
            }
            else{
                console.log("incorrect password")
            }
            
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <div className="flex">
      <div className="img w-[50vw] bg-blue-600 h-[100vh]"></div>
      <div className="w-[50vw] flex items-center justify-center p-8">
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold mb-6 text-blue-600 text-center">Register School</h1>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="school-name">Name of School</label>
              <input
                name='schoolName'
                type="text"
                id="school-name"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="username">Username</label>
              <input
                name='username'
                type="text"
                id="username"
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
              <input
                name='email'
                type="email"
                id="email"
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="password">Password</label>
              <input
                name='password'
                type="password"
                id="password"
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="confirm-password">Confirm Password</label>
              <input
                name='cpassword'
                type="password"
                id="confirm-password"
                onChange={(e)=>{setcpassword(e.target.value);}}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox text-blue-600"
                />
                <span className="ml-2 text-gray-700">I have read all instructions</span>
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
              onClick={handleSubmit}
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterSchool;
