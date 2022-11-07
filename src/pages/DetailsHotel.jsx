import React from "react";
export default function DetailsHotel(props) {
  let { img } = props;
  let { name } = props;
  let { capacity } = props;

  return (
    <div className=" w-100 flex column justify-center align-center p-2">
      <div className="container-card">
        <div className="container-img">
          <img
            className="projcard-img w-100 .card-header"
            src={img}
            alt={name}
          />
        </div>
        <h1 className="h1rojcard-title ">{name}</h1>
        <div className="text-deco"></div>
        <div>
          <h3 className="projcard-subtitle">{capacity}</h3>
        </div>
      </div>
    </div>
  );
}
