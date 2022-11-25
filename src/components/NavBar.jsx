import React from "react";
import { useState } from "react";
import { Link as NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

export default function NavBar() {
  let [mostrarOcultar, setMostrarOcultar] = useState(false);
  let [mostrar, setMostrar] = useState(false);
  let user = useSelector((store) => store.user);
  let hide = () => {
    setMostrarOcultar(!mostrarOcultar);
    setMostrar(false)
  };
  let cualquierNombre = () => {
    setMostrar(!mostrar);
    setMostrarOcultar(false)
  };

 
  const userPages = [
    {
      name: "My Shows",
      route: "/myshows",
   
    },
    {
      name: "My Tineraries",
      route: "/mytineraries",
     
    },
  ];
  // const adminPages = [
  //   {
  //     name: "New City",
  //     route: "/newcity",
      
  //   },
  //   {
  //     name: "New Hotel",
  //     route: "/newHotel",
      
  //   },
  //   {
  //     name: "My Cities",
  //     route: "/mycities",
      
  //   },
  //   {
  //     name: "My Hotels",
  //     route: "/myhotels",
      
  //   },
  // ];

  return (
   
    <header className="navG">
      
      <img className="logo" src="../img/logo.png" alt="logo" />
     
      <div className="btnN g-25">
      <div>

        <h3 className="bt-nav " onClick={hide}>
          Home <img src="../img/desplegable.png" width="12px"  alt="img-flecha"/>
        </h3>
       
        {mostrarOcultar ? (
          <>
            <div className="flex column justify-center align-center p-absolute btnDespl">
            <NavLink to="/index" className="text-decoration">
                <h3 className="bt-nav-c bt-nav-c1">Home</h3>
              </NavLink>
              <NavLink to="/cities" className="text-decoration">
                <h3 className="bt-nav-c ">Cities</h3>
              </NavLink>
              <NavLink to="/hotels" className="text-decoration">
                <h3 className="bt-nav-c ">Hotels</h3>
              </NavLink>
              {(user.role === "user" || user.role === "admin") &&
              userPages.map((route) => (
              <NavLink to={route.route}  className="text-decoration" key={route.name}>
               <h3 className="bt-nav-c ">{route.name}</h3>
              </NavLink>
            ))
            }
             {/* {adminPages.map((route) => (
              <NavLink to={route.route}  className="text-decoration" key={route.name}>
               <h3 className="bt-nav-c ">{route.name}</h3>
              </NavLink>
            ))} */}
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
      <div>
        <h3 className="bt-nav" onClick={cualquierNombre}>
          Users <img src="../img/desplegable.png" width="12px" alt="img-flecha" />
        </h3>
        {mostrar ? (
          <>
            <div className="flex column justify-center align-center p-absolute btnDespl">
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
