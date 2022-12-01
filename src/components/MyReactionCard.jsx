import React from "react";

export default function MyReactionCard(props) {
  let { name, nameReaction, photo, reaction, onClick } = props;
  return (
    <div
      className={
        // eslint-disable-next-line
        nameReaction === nameReaction
          ? `cardReaction ${nameReaction}`
          : "cardReaction"
      }
    >
      <div className="card-header card-header-reaction">
        <img src={photo} alt="city" />
      </div>
      <div className="card-body-reaction">
        <h5>{name}</h5>
      </div>
      <div className="flex justify-between w-100 align-center g-25 p-2">
        <div className="flex column align-center g-2">
          <img src={reaction} alt="reaction" width="15" />
          <h5>{nameReaction}</h5>
        </div>
          <img src="./img/recycle-bin.png" className="reaction" width="19" onClick={onClick} alt="img" />
      </div>
    </div>
  );
}
