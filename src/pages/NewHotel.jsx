import React, { useRef } from "react";

export default function NewHotel() {
  let information = useRef();
  let nameNewHotel = useRef();
  let photoNewHotel = useRef();
  let capacityNewHotel = useRef();
  let descriptionNewHotel = useRef();
  let city = useRef();

  function newHotel() {
    let newHotel = {
      id: nameNewHotel.current.value,
      name: nameNewHotel.current.value,
      photo: photoNewHotel.current.value,
      capacity: capacityNewHotel.current.value,
      description: descriptionNewHotel.current.value,
      adminId: "admn0",
    };

    localStorage.setItem("newHotel", JSON.stringify(newHotel));
    information.current.reset();
  }

  return (
    <>
      <div className="tittleNew flex p-1">
        <h2 className="tituloNewHotel">
          Create New Hotel
        </h2>
      </div>

      <div className="new">
        <form
          className="new"
          onSubmit={newHotel}
          ref={information}
        >
          <label className="label">
            Name of Hotel
            <input type="text" name="nameNewHotel" className="input" ref={nameNewHotel}></input>
          </label>

          <label className="label">
            Choose a hotel photos
            <input
            className="input"
              type="file"
              name="photoNewHotel"
              accept="image/png, image/jpeg"
              multiple
              ref={photoNewHotel}
            />
          </label >

          <label className="label">
            Capacity
            <input className="input" type="text" name="capacity" ref={capacityNewHotel}></input>
          </label>
          <label className="label">
            Description
            <input
            className="input"
              type="text"
              name="descrpition"
              ref={descriptionNewHotel}
            ></input>
          </label >
          <label className="label">
            Ciudad
            <input  type="text" name="ciudad" ref={city}></input>
          </label>
          <button className="btn-newhotel">CREATE A NEW HOTEL</button>
        </form>
      </div>
    </>
  );
}
