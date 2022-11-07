import React from "react";
import { Link as NavLink } from "react-router-dom";
export default function CityCard(props) {
  let { img } = props;
  let { name } = props;
  let {id}=props

  return (
    <NavLink to={`/cities/${id}`}>
    <div className="hero-section">
      <div>
        <div class="card">
          <div class="card__background">
            <img className="content" src={img} alt={name}></img>
          </div>
          <div class="card__content">
            <p class="card__category">{name}</p>
          </div>
        </div>
      </div>
    </div>
    </NavLink>
  );
}
