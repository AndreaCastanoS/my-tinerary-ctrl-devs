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
        <header className="flex justify-end p-2 g-15 ">
            <img className="logo" src="" alt="" />
            <div>
                <button className="bt-nav " onClick={hide}>
                    Home
                </button>
                {mostrarOcultar ? (
                    <>
                        <div className="flex column p-absolute">
                            <NavLink to="/cities">
                                <button className="bt-nav-c">Cities</button>
                            </NavLink>
                            <NavLink to="/hotels">
                                <button className="bt-nav-c">Hotels</button>
                            </NavLink>
                        </div>
                    </>
                ) : (
                    <></>
                )}
            </div>
            <div>
                <button className="bt-nav" onClick={cualquierNombre}>
                    Ussers
                </button>
                {mostrar ? (
                    <>
                        <div className="flex column p-absolute">
                            <NavLink to="/signup">
                                <button className="bt-nav-c">Sign Up</button>
                            </NavLink>

                            <NavLink to="/login">
                                <button className="bt-nav-c">Log In</button>
                            </NavLink>
                        </div>
                    </>
                ) : (
                    <></>
                )}
            </div>
        </header>
    );
}
