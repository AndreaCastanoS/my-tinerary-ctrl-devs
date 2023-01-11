import React, { useState } from "react";
import Reaction from "../components/Reaction";
import CommentsCard from "./CommentsCard";

export default function CardItinerary(props) {
  let { name, price, description, photo, duration, id } = props;
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    open ? setOpen(false) : setOpen(true);
  };

  return (
    <div>
      <div className="card2">
        <div className="card-header">
          <img src={photo} alt="city" />
        </div>
        <div className="card-body">
          <h4>{name}</h4>
          <p>{description}</p>
          <p>
            Duration:
            {duration}
            hour
          </p>
          <p>USD ${price}</p>
        
        </div>
        <div className="flex justify-center w-100 g-15 p-0-5">
          <Reaction eventId={id} type="itineraryId" />
        </div>
        <div className="btn-view">
          <button onClick={handleOpen}>
            {open ? "Close " : ""}
            Comments
          </button>
        </div>
      </div>
      {open && (
        <div className="input-comment">
          <CommentsCard eventId={id}></CommentsCard>
        </div>
      )}
    </div>
  );
}
