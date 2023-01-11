import React from "react";
import { useState } from "react";
import { Link as NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import usersActions from "../redux/actions/usersActions";
import Swal from "sweetalert2";

export default function NavBar() {
  let [mostrarOcultar, setMostrarOcultar] = useState(false);
  let [mostrar, setMostrar] = useState(false);
  let dispatch = useDispatch();
  const { signOff } = usersActions;
  const { photo, name, token } = useSelector((state) => state.user);
  let user = useSelector((store) => store.user);
  let hide = () => {
    setMostrarOcultar(!mostrarOcultar);
    setMostrar(false);
  };
  let cualquierNombre = () => {
    setMostrar(!mostrar);
    setMostrarOcultar(false);
  };

  function signout() {
    Swal.fire({
      icon: "question",
      title: "Would do you like close your session?",
      showConfirmButton: true,
      iconColor: "#01344f",
      confirmButtonColor: "#01344f",
      confirmButtonText: "Yes",
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(signOff(token));
      }
    });
  }

  const userPages = [
    {
      name: "My Shows",
      route: "/myshows",
    },
    {
      name: "My Tineraries",
      route: "/mytineraries",
    },
    {
      name: "New Tinerary",
      route: "/newtinerary",
    },

    {
      name: "New Show",
      route: "newshow",
    },
    {
      name: "My Reactions",
      route: "/myreactions",
    },
  ];
  const adminPages = [
    {
      name: "New City",
      route: "/newcity",
    },
    {
      name: "New Hotel",
      route: "/newHotel",
    },
    {
      name: "My Cities",
      route: "/mycities",
    },
    {
      name: "My Hotels",
      route: "/myhotels",
    },
    {
      name: "New Reaction",
      route: "/reactions",
    },
    {
      name: "My Reactions",
      route: "/myreactions",
    },
  ];
  const noLogged = [
    {
      name: "Sign Up",
      route: "/signup",
    },
    {
      name: "Sign In",
      route: "/signin",
    },
  ];

  return (
    <header className="navG  flex justify-between p-1">
      <img className="logo" src="../img/logo.png" alt="logo" />
      <div className="btnN g-25 ">
        <div className="flex justify-center">
          <img onClick={hide} src="../img/home.png" width="57%" className="home" alt="home" />

          {mostrarOcultar ? (
            <>
              <div className="flex column justify-center align-center p-absolute btnDespl mt-10">
                <NavLink to="/index" className="text-decoration">
                  <h3 className="bt-nav-c bt-nav-c1">Home</h3>
                </NavLink>
                <NavLink to="/cities" className="text-decoration">
                  <h3 className="bt-nav-c ">Cities</h3>
                </NavLink>
                <NavLink to="/hotels" className="text-decoration">
                  <h3 className="bt-nav-c ">Hotels</h3>
                </NavLink>
                {user.role === "user" &&
                  userPages.map((route) => (
                    <NavLink
                      to={route.route}
                      className="text-decoration"
                      key={route.name}
                    >
                      <h3 className="bt-nav-c ">{route.name}</h3>
                    </NavLink>
                  ))}
                {user.role === "admin" &&
                  adminPages.map((route) => (
                    <NavLink
                      to={route.route}
                      className="text-decoration"
                      key={route.name}
                    >
                      <h3 className="bt-nav-c ">{route.name}</h3>
                    </NavLink>
                  ))}
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
        <div>
          {(user.role === "admin" || user.role === "user") && (
            <h3
              className="bt-nav flex column justify-center align-center g-5"
              onClick={cualquierNombre}
            >
              <img src={photo} className="photo-user" alt="img-user" />
              {name}
            </h3>
          )}
          {user.role !== "admin" && user.role !== "user" && (
            <h3 className="bt-nav" onClick={cualquierNombre}>
              <img
                src="../img/user.png"
                className="photo-user"
                alt="img-user"
              />
            </h3>
          )}
          {mostrar ? (
            <>
              <div className="flex column justify-center align-center p-absolute btnDespl ">
                {(user.role === "admin" || user.role === "user") && (
                  <>
                    <NavLink to="/profile" className="text-decoration">
                      <h3 className="bt-nav-c ">My Profile</h3>
                    </NavLink>
                    <div to="/signin" className="text-decoration">
                      <h3 className="bt-nav-c " onClick={signout}>
                        Sign Off
                      </h3>
                    </div>
                  </>
                )}
                {user.role !== "admin" &&
                  user.role !== "user" &&
                  noLogged.map((route) => (
                    <NavLink
                      to={route.route}
                      className="text-decoration"
                      key={route.name}
                    >
                      <h3 className="bt-nav-c ">{route.name}</h3>
                    </NavLink>
                  ))}
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
