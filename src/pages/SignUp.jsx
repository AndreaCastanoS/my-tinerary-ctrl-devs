import React from "react";
import { Link as NavLink, useHref } from "react-router-dom";
import { useRef } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import apiUrl from "../url";

export default function SignUp(props) {
  let {role} = props
  let name = useRef();
  let lastName = useRef();
  let photo = useRef();
  let age = useRef();
  let mail = useRef();
  let password = useRef();
  // let confirmPassword = useRef();
  let form = useRef();


  async function newUser(event) {
    event.preventDefault();
    
    let newUser = {
      name: name.current.value,
      lastName: lastName.current.value,
      role,
      photo: photo.current.value,
      age: age.current.value,
      mail: mail.current.value,
      password: password.current.value,
      // confirmPassword: confirmPassword.current.value,
    };
    try {
      let res = await axios.post(`${apiUrl}api/auth/sign-up`, newUser);
      console.log(res);

      if (res.data.success) {
        Swal.fire({
          icon: "success",
          title: res.data.message,
          text: `MyTinerary sent a notification to your email ${newUser.mail}, open the Gmail app and tap Verify my account prompt to verify its you`,
          showConfirmButton: true,
          iconColor: "#01344f",
          confirmButtonColor: "#01344f",
        })
        form.current.reset();
      } 
    
    } catch (error) {
      Swal.fire({
        icon: "error",
        confirmButtonColor: "#01344f",
        iconColor: "#01344f",
        title: error.response.data.message,
        showConfirmButton: true,
      });
    }
   
  }
  
 
  return (
    <div className="main-full flex justify-center column align-center p-5">
      <img src="./img/map.png" className="p-absolute h-90" alt="map img" />
      <div className="card1 bg-form">
        <h1 className="text-center p-1">Sign Up</h1>
        <div className="p-2">
          <form onSubmit={newUser} ref={form}>
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
               <input
                type="text"
                className="form-control form-sign"
                id="photo"
                placeholder="URL photo"
                ref={photo}
              />
                <input
                type="number"
                className="form-control form-sign"
                id="age"
                placeholder="Age"
                ref={age}
              />
            </div>
            <div>
              <input
                type="email"
                className="form-control form-sign"
                id="mail"
                placeholder="Email"
                ref={mail}
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
              {/* <input
                type="password"
                className="form-control form-sign"
                id="confirmPassword"
                placeholder="Confirm Password"
                ref={confirmPassword}
              /> */}
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
