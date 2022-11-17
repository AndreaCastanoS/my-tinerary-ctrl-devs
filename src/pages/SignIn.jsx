import React from "react";
import { Link as NavLink } from "react-router-dom";
import { useRef } from "react";

export default function SignIn() {
  let email = useRef();
  let password = useRef();

  let form = useRef();

  function submitLogin(event) {
    event.preventDefault();

    let loginUs = {
      email: email.current.value,
      password: password.current.value,
    };
    console.log(loginUs);

    localStorage.setItem("loginUs", JSON.stringify(loginUs));
    form.current.reset();
  }

  return (
    <div className="main-full flex justify-center column align-center p-5">
      <img src="./img/map.png" className="p-absolute h-90" alt="map img" />
      <div className="card1 bg-form">
        <h1 className="text-center  p-1">Sign In</h1>
        <div className="p-2">
          <form onSubmit={submitLogin} ref={form}>
            <div>
              <input
                type="email"
                className="form-control form-sign"
                id="emailL"
                placeholder="Email"
                ref={email}
              />
            </div>
            <div>
              <input
                type="password"
                className="form-control form-sign"
                id="passwordL"
                placeholder="Password"
                ref={password}
              />
            </div>
            <div></div>
            <div className="flex justify-around  p-1 wrap g-25">
              <button className="btn-form">Sign In</button>
              <div>
                <NavLink to="/signin" className="text-decoration list-none">
                  <button className="btn-form flex align-center">
                    <img
                      src="https://img.icons8.com/color/28/null/google-logo.png"
                      alt="Logo Google"
                    />
                    Sign in with Google
                  </button>
                </NavLink>
              </div>
            </div>
            <div className="text-center ">
              <h5 className="p-2 ">
                Don't you have an account yet?
                <a href="/signup" className="sign-up">
                  Sign up here
                </a>
              </h5>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
