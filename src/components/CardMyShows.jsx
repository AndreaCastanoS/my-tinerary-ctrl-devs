import React from "react";
import { NavLink } from "react-router-dom";

export default function CardShow(props) {
  let { name, price, description, photo, date, onClick, id } = props;
  return (
    <div className="card2">
      <div className="card-header">
        <img src={photo} alt="hotel" />
      </div>
      <div className="card-body">
        <h3>{name}</h3>
        <h5>{description}</h5>
        <h5>USD ${price}</h5>
        <h5>
          Date:
          {date}
        </h5>
      </div>
      <div className="flex justify-end w-100 g-25 p-1">
      
          <div className="delete">
            <button onClick={onClick}>Delete</button>
            <img src="./img/delete.png" width="15" alt="img" />
          </div>
        
        < NavLink to={`/editshows/${id}`} className="delete margin-none">
        <div className="delete">
          <button>Edit</button>
          <img src="./img/edit.png" width="15" alt="img" />
        </div>
        </NavLink>
      </div>
    </div>
  );
}
