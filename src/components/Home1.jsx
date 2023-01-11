import React from "react";
import CallToAction from "../components/CallToAction";


export default function Home1() {
  return (
    <div className="w-100 vh-100 flex justify-center ">
      <video className='videoHome' src="./img/Video.mp4" autoPlay muted loop></video>
        <div className="flex justify-center align-center column p-relative">
          <h1 className="shadow">My Tinerary</h1>
          <h3 className="shadow1">
            Find your perfect trip, designed by insiders who know and love their
            cities!
          </h3>
          <div className="w-100 flex g-25 justify-center">
            <CallToAction text="CITIES" rute="/cities" />
            <CallToAction text="HOTELS" rute="/hotels" />
          </div>
        </div>
    </div>
  );
}
