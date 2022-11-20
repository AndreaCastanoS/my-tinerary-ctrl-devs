import React from "react";
import { Link as NavLink } from "react-router-dom";

export default function HotelsCard(props) {
  let { img } = props;
  let { name } = props;
  let { id } = props;

  return (
    <NavLink to={`/hotels/${id}`}>
      <div className="hero-section">
        <div>
          <div className="card">
            <div className="card__background">
              <img className="content" src={img} alt={name}></img>
            </div>
            <div className="card__content">
              <p className="card__category">{name}</p>
            </div>
          </div>
        </div>
      </div>
    </NavLink>
  );
}
