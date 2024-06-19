import React, { useState } from 'react';
import { useAuth } from '../store/auth';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

export const Student = () => {
  const { storeTokenInLS } = useAuth();
  const navigate = useNavigate();

  const [userdata, setuserdata] = useState({
    username: "",
    email: "",
    number: "",
    password: "",
  });

  const handlechange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setuserdata({
      ...userdata,
      [name]: value,
    });
  };

  const handlesubmit = async (e) => {
    console.log(userdata);
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userdata),
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log("after login: ", responseData);
        storeTokenInLS(responseData.token);
        toast("Registration Successful");
        navigate('/');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex w-full justify-center h-screen">
      <div className="form-body w-1/2 flex items-center h-screen justify-center">
        <div className="row">
          <div className="form-holder">
            <div className="form-content">
              <div className="form-items">
                <h3 className="mt-5 text-2xl">Register Today</h3>
                <form className="requires-validation mt-10" noValidate onSubmit={handlesubmit}>
                  <div className="mb-4">
                    <input
                      className="form-control w-full p-2 border border-gray-300 rounded"
                      type="text"
                      name="username"
                      placeholder="Full Name"
                      value={userdata.username}
                      required
                      onChange={handlechange}
                    />
                    <div className="valid-feedback">Username field is valid!</div>
                    <div className="invalid-feedback">Username field cannot be blank!</div>
                  </div>

                  <div className="mb-4">
                    <input
                      className="form-control w-full p-2 border border-gray-300 rounded"
                      type="email"
                      name="email"
                      placeholder="E-mail Address"
                      value={userdata.email}
                      required
                      onChange={handlechange}
                    />
                    <div className="valid-feedback">Email field is valid!</div>
                    <div className="invalid-feedback">Email field cannot be blank!</div>
                  </div>

                  <div className="mb-4">
                    <input
                      className="form-control w-full p-2 border border-gray-300 rounded"
                      type="number"
                      name="number"
                      placeholder="Class Number"
                      value={userdata.number}
                      required
                      onChange={handlechange}
                    />
                    <div className="valid-feedback">Number field is valid!</div>
                    <div className="invalid-feedback">Number field cannot be blank!</div>
                  </div>

                  <div className="mb-4">
                    <input
                      className="form-control w-full p-2 border border-gray-300 rounded"
                      type="password"
                      name="password"
                      placeholder="Password"
                      value={userdata.password}
                      required
                      onChange={handlechange}
                    />
                    <div className="valid-feedback">Password field is valid!</div>
                    <div className="invalid-feedback">Password field cannot be blank!</div>
                  </div>

                  <div className="form-button mt-3">
                    <button id="submit" type="submit" className="btn btn-primary bg-blue-500 text-white p-2 rounded">
                      Register
                    </button>
                  </div>
                </form>
                <ToastContainer />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
