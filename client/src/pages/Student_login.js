import React, { useState } from "react";

export const Student_login = () => {
  const [userdata, setuserdata] = useState({
    email: "",
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
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/login", {
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
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-[100vw] h-[100vh] bg-black">
      <div className="flex w-[100vw] justify-center  bg-black">
        <div class="form-body w-[50vw]">
          <div class="row">
            <div class="form-holder">
              <div class="form-content">
                <div class="form-items">
                  <h3>Register Today</h3>
                  <p>Fill in the data below.</p>
                  <form
                    class="requires-validation"
                    novalidate
                    onSubmit={handlesubmit}
                  >
                    <div class="col-md-12">
                      <input
                        class="form-control"
                        type="email"
                        name="email"
                        placeholder="E-mail Address"
                        required
                        onChange={handlechange}
                      />
                      <div class="valid-feedback">Email field is valid!</div>
                      <div class="invalid-feedback">
                        Email field cannot be blank!
                      </div>
                    </div>

                    <div class="col-md-12">
                      <input
                        class="form-control"
                        type="password"
                        name="password"
                        placeholder="Password"
                        required
                        onChange={handlechange}
                      />
                      <div class="valid-feedback">Password field is valid!</div>
                      <div class="invalid-feedback">
                        Password field cannot be blank!
                      </div>
                    </div>

                    <div class="form-button mt-3">
                      <button id="submit" type="submit" class="btn btn-primary">
                        Login
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
