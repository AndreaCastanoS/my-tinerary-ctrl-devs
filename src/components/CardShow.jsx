import React from "react";
import CommentsCard from "./CommentsCard";
import Reaction from "../components/Reaction";

export default function CardShow(props) {
  let { name, price, description, photo, date, idShow } = props;

  return (
    <>
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
        <div className="flex justify-end w-100 g-25 p-0-5">
          <Reaction eventId={idShow} type="showId" />
        </div>
        <div className="input-comment">
          <CommentsCard eventId={idShow}></CommentsCard>
        </div>
      </div>
    </>
  );
}
