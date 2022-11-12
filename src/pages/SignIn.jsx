import React from "react";
import { Link as NavLink } from "react-router-dom";
import { useRef } from "react";

export default function SignIn() {
  let emailL = useRef();
  let passwordL = useRef();

  let form = useRef();

  function submitLogin(event) {
    event.preventDefault();

    let loginUs = {
      emailL: emailL.current.value,
      passwordL: passwordL.current.value,
    };
    console.log(loginUs);

    localStorage.setItem("loginUs", JSON.stringify(loginUs));
    form.current.reset();
  }

  return (
    <div className="w-100 h-100 flex justify-center column align-center p-5">
      <div className="formSi p-5">
        <div>
          <div>
            <div className="card1 ">
              <h1 className="text-center p-1">Sign In</h1>
              <div className="p-2">
                <form onSubmit={submitLogin} ref={form}>
                  <div >
                    <input
                      type="email"
                      className="form-control"
                      id="emailL"
                      placeholder="Email"
                      ref={emailL}
                    />
                  </div>
                  <div>
                    <input
                      type="password"
                      className="form-control"
                      id="passwordL"
                      placeholder="Password"
                      ref={passwordL}
                    />
                  </div>
                  <div></div>
                  <div className="flex justify-around  p-1 wrap g-25">
                    <button className="btn">Sign In</button>
                     <div>
                      <NavLink
                        to="/signin"
                        className="text-decoration list-none"
                      >
                        <button className="buttonGoogle">
                          <img
                            src="https://img.icons8.com/color/28/null/google-logo.png"
                            alt="Logo Google"
                          />
                          Sign in with Google
                        </button>
                      </NavLink>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
