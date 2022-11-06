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
    <div className="w-100 h-100 flex justify-center column align-center">
      <div className="container">
        <div>
          <div>
            <div className="card ">
              <h1 className="text-center p-1">Sign Up</h1>
              <div>
                <form onSubmit={submitInfo} ref={form}>
                  <div>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Name"
                      ref={name}
                    />
                    <input
                      type="text"
                      className="form-control"
                      id="LastName"
                      placeholder="Last Name"
                      ref={lastName}
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Email"
                      ref={email}
                    />
                  </div>

                  <div>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Password"
                      ref={password}
                    />
                  </div>
                  <div></div>
                  <div className="flex justify-around  p-1 wrap g-25">
                    <NavLink to="/signin" className="text-decoration list-none">
                      <h3>Login</h3>
                    </NavLink>
                    <button className="btn">Create Account</button>
                    <div>
                      <NavLink
                        to="/signup"
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
