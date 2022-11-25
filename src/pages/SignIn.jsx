import React from "react";
import { Link as NavLink } from "react-router-dom";
import { useRef } from "react";
import Swal from "sweetalert2";
/* import axios from "axios";
import apiUrl from "../url"; */
import { useNavigate } from 'react-router-dom';
import usersActions from "../redux/actions/usersActions";
import { useDispatch } from "react-redux";

export default function SignIn() {
  let mail = useRef();
  let dispatch = useDispatch()
  let {enter} = usersActions
  let password = useRef();
  let form = useRef();
  let navegation = useNavigate()

  async function submitLogin(event) {
    event.preventDefault();

    let datos = {
      mail: mail.current.value,
      password: password.current.value,
    };
    try {
      let res = await dispatch(enter (datos));
      console.log(res.payload.response);
      if (res.payload.success) {
        Swal.fire({
          icon: "success",
          title: res.payload.res.message,
          showConfirmButton: true,
          iconColor: "#01344f",
          confirmButtonColor: "#01344f",
        }).then((result) => {
          if (result.isConfirmed) {
            navegation(`/index/`);
          }
        });
      }else{
        Swal.fire({
          icon: "error",
          confirmButtonColor: "#01344f",
          iconColor: "#01344f",
          title: res.payload.response,
          showConfirmButton: true,
        });

      }
    } catch (error) {
      console.log(error);
    /*   Swal.fire({
        icon: "error",
        confirmButtonColor: "#01344f",
        iconColor: "#01344f",
        title: error.message,
        showConfirmButton: true,
      }); */
    }
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
                id="mail"
                placeholder="Email"
                ref={mail}
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
