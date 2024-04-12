import React, { useState } from 'react';

export const Student = () => {

  const [userdata,setuserdata]=useState({
    username : "",
    email : "",
    number : "",
    password : "",

  })

  const handlechange=(e)=>{
    const name=e.target.name;
    const value=e.target.value;
    setuserdata({
      ...userdata,
      [name] : value,

    })
  }
  const handlesubmit=async (e)=>{
    console.log(userdata)
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
        // toast.success("Registration Successful");
        
      }
    } catch (error) {
      console.log(error);
    }

  }
  return (
    <div className='flex w-[100vw] justify-center '>
      <div className="form-body w-[50vw]">
        <div className="row">
          <div className="form-holder">
            <div className="form-content">
              <div className="form-items">
                <h3>Register Today</h3>
                <p>Fill in the data below.</p>
                <form className="requires-validation" noValidate onSubmit={handlesubmit}>

                  <div className="col-md-12">
                    <input className="form-control" type="text" name="username" placeholder="Full Name" value={userdata.username} required onChange={handlechange}/>
                    <div className="valid-feedback">Username field is valid!</div>
                    <div className="invalid-feedback">Username field cannot be blank!</div>
                  </div>

                  <div className="col-md-12">
                    <input className="form-control" type="email" name="email" placeholder="E-mail Address" value={userdata.email} required onChange={handlechange}/>
                    <div className="valid-feedback">Email field is valid!</div>
                    <div className="invalid-feedback">Email field cannot be blank!</div>
                  </div>

                  <div className="col-md-12">
                    <input className="form-control" type="number" name="number" placeholder="className" value={userdata.number} required onChange={handlechange}/>
                    <div className="valid-feedback">Email field is valid!</div>
                    <div className="invalid-feedback">Email field cannot be blank!</div>
                  </div>

                  <div className="col-md-12">
                    <select className="form-select mt-3" >
                      {/* <option selected disabled value="">Section</option>
                      <option value="jweb">A</option>
                      <option value="sweb">B</option>
                      <option value="pmanager">C</option> */}
                    </select>
                    <div className="valid-feedback">You selected a position!</div>
                    <div className="invalid-feedback">Please select a position!</div>
                  </div>

                  <div className="col-md-12">
                    <input className="form-control" type="password" name="password" placeholder="Password" value={userdata.password} required onChange={handlechange}/>
                    <div className="valid-feedback">Password field is valid!</div>
                    <div className="invalid-feedback">Password field cannot be blank!</div>
                  </div>

                  <div className="col-md-12 mt-3">
                    <label className="mb-3 mr-1" htmlFor="gender">Gender: </label>

                    {/* <input type="radio" className="btn-check" name="gender" id="male" autocomplete="off" required />
                    <label className="btn btn-sm btn-outline-secondary" for="male">Male</label>

                    <input type="radio" className="btn-check" name="gender" id="female" autocomplete="off" required />
                    <label className="btn btn-sm btn-outline-secondary" for="female">Female</label> */}
{/* 
                    <input type="radio" className="btn-check" name="gender" id="secret" autocomplete="off" required />
                    <label className="btn btn-sm btn-outline-secondary" for="secret">Secret</label> */}
                    <div className="valid-feedback mv-up">You selected a gender!</div>
                    <div className="invalid-feedback mv-up">Please select a gender!</div>
                  </div>

                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required />
                    <label className="form-check-label">I confirm that all data are correct</label>
                    <div className="invalid-feedback">Please confirm that the entered data are all correct!</div>
                  </div>

                  <div className="form-button mt-3">
                    <button id="submit" type="submit" className="btn btn-primary">Login</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
