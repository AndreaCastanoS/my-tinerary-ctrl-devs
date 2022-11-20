import React from "react";
import { Link as NavLink } from "react-router-dom";
export default function MyHotelsCard(props) {
  let { img } = props;
  let { name } = props;
  let { id } = props;
  let {onClick} = props 

  return (
    <div className="hero-section">
      <div className="card">
        <div className="card__background ">
          <img className="content" src={img} alt={name}></img>
        </div>

        <div className="card__content flex column justify-between h-100  w-100">
          <div>
            <p className="card__category">{name}</p>
          </div>
          <div className="flex justify-end w-100 g-25">
            <div>
            <NavLink to={`/hotels/${id}`}>
              <button className="delete border-none">View more</button>
            </NavLink>
            </div>
           
            <div className="delete">
              <button onClick={onClick}>Delete</button>
              <img src="./img/delete.png" width="15" alt="img" />
            </div>
            <div className="delete">
              <button>Edit</button>
              <img src="./img/edit.png" width="15" alt="img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}