import React from "react";
import { Link as NavLink } from "react-router-dom";
import { useRef } from "react";

export default function SignUp() {
  let name = useRef();
  let lastName = useRef();
  let email = useRef();
  let password = useRef();

  let form = useRef();

  function submitInfo(event) {
    event.preventDefault();

    let infoUsser = {
      name: name.current.value,
      lastName: lastName.current.value,
      email: email.current.value,
      password: password.current.value,
    };
    console.log(infoUsser);

    localStorage.setItem("infoUsser", JSON.stringify(infoUsser));
    form.current.reset();
  }

  return (
    <div className="main-full flex justify-center column align-center p-5">
      <img src="./img/map.png" className="p-absolute h-90" alt="map img" />
      <div className="card1 bg-form">
        <h1 className="text-center p-1">Sign Up</h1>
        <div className="p-2">
          <form onSubmit={submitInfo} ref={form}>
            <div>
              <input
                type="text"
                className="form-control form-sign"
                id="name"
                placeholder="Name"
                ref={name}
              />
              <input
                type="text"
                className="form-control form-sign"
                id="LastName"
                placeholder="Last Name"
                ref={lastName}
              />
            </div>
            <div>
              <input
                type="email"
                className="form-control form-sign"
                id="email"
                placeholder="Email"
                ref={email}
              />
            </div>
            <div>
              <input
                type="password"
                className="form-control form-sign"
                id="password"
                placeholder="Password"
                ref={password}
              />
            </div>
            <div></div>
            <div className="flex justify-around  p-1 wrap g-25">
              <button className="btn-form text-center">Create Account</button>
              <div>
                <NavLink to="/signup" className="text-decoration list-none">
                  <button
                    className="btn-form  flex
  align-center"
                  >
                    <img
                      src="https://img.icons8.com/color/28/null/google-logo.png"
                      alt="Logo Google"
                    />
                    Sign up with Google
                  </button>
                </NavLink>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
