import React from "react";
import { Link as NavLink } from "react-router-dom";

export default function CallToAction(props) {
  let { text, rute } = props;
  return (
    <NavLink to={rute}>
      <button className="bt-CallToAction button">{text}</button>
    </NavLink>
  );
}
