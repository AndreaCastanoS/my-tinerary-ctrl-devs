import React from "react";
import { useState } from "react";
import { Link as NavLink } from "react-router-dom";

export default function NavBar() {
  let [mostrarOcultar, setMostrarOcultar] = useState(false);
  let [mostrar, setMostrar] = useState(false);
  let hide = () => {
    console.log(mostrarOcultar);
    setMostrarOcultar(!mostrarOcultar);
  };
  let cualquierNombre = () => {
    console.log(mostrar);
    setMostrar(!mostrar);
  };
  return (
   
    <header className="navG">
      <div className="logoN">
      <img className="logo" src="https://imagizer.imageshack.com/img923/4377/CiuV47.png" alt="" />
      </div>
      <div className="btnN">
      <div>
      <NavLink to="/index" className="text-decoration">
        <button className="bt-nav " onClick={hide}>
          Home
        </button>
        </NavLink>
        {mostrarOcultar ? (
          <>
            <div className="flex column justify-center align-center p-absolute">
              <NavLink to="/cities" className="text-decoration">
                <h3 className="bt-nav-c">Cities</h3>
              </NavLink>
              <NavLink to="/hotels" className="text-decoration">
                <h3 className="bt-nav-c">Hotels</h3>
              </NavLink>
              <NavLink to="/newcity" className="text-decoration">
                <h3 className="bt-nav-c">New City</h3>
              </NavLink>
              <NavLink to="/newHotel" className="text-decoration">
                <h3 className="bt-nav-c">New Hotel</h3>
              </NavLink>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
      <div>
        <button className="bt-nav" onClick={cualquierNombre}>
          Users
        </button>
        {mostrar ? (
          <>
            <div className="flex column justify-center align-center p-absolute">
              <NavLink to="/signup" className="text-decoration">
                <h3 className="bt-nav-c">Sign Up</h3>
              </NavLink>

              <NavLink to="/signin" className="text-decoration">
                <h3 className="bt-nav-c">Sign In</h3>
              </NavLink>
            </div>
          </>
        ) : (
          <></>
        )}
        </div>
      </div>
    </header>
   
  );
}
