import React from "react";
import CallToAction from "../components/CallToAction";

export default function NotFound() {
  return (
    <div className="NotFound">
      <img src="https://cdn.boletius.com/images/v3/search.png" alt="NotFound" />
      <h1>Oops! There are not results for your search Try another one!</h1>
      <div className="w-100 flex g-25 justify-center">
        <CallToAction text="HOME" rute="/index" />
      </div>
    </div>
  );
}
