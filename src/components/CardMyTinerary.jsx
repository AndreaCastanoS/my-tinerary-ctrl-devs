import React from "react";
import { Link as NavLink } from "react-router-dom";

export default function CardMyTinerary(props) {
  let { name, price, description, photo, duration, onClick, id } = props;
  return (
    <div className="card2">
      <div className="card-header">
        <img src={photo} alt="city" />
      </div>
      <div className="card-body">
        <h3>{name}</h3>
        <h5>{description}</h5>
        <h5>USD ${price}</h5>
        <h5>
          Duration:
          {duration}
          hour
        </h5>
      </div>
      <div className="flex justify-center w-100 g-25">
        <div className="delete">
          <button onClick={onClick}>Delete</button>
          <img src="./img/delete.png" width="15" alt="img" />
        </div>
        <NavLink className="delete margin-none" to={`/mytineraries/${id}`}>
          <button>Edit</button>
          <img src="./img/edit.png" width="15" alt="img" />
        </NavLink>
      </div>
    </div>
  );
}
