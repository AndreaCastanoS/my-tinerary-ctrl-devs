import React from "react";
import { Link as NavLink } from "react-router-dom";
export default function HCard(props) {
  let { img } = props;
  let { name } = props;

  return (
    <NavLink to="/detailscities">
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
