import React from "react";
import Reaction from "../components/Reaction";
import CommentsCard from "./CommentsCard";

export default function CardItinerary(props) {
  let { name, price, description, photo, duration, id} = props;
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
      <div className="flex justify-end w-100 g-25 p-0-5">
       <Reaction eventId={id} type="itineraryId"  />
      </div>
      <div className="input-comment">
          <CommentsCard eventId={id}></CommentsCard>
        </div>
    </div>
  );
}