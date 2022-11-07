import React, { useRef } from "react";

export default function NewCity() {
  let information = useRef();
  let nameNEwCity = useRef();
  let photoNewCity = useRef();
  let zoneCity = useRef();
  let populationCity = useRef();

  function newCity() {
    let newCity = {
      id: nameNEwCity.current.value,
      name: nameNEwCity.current.value,
      photo: photoNewCity.current.value,
      zone: zoneCity.current.value,
      population: populationCity.current.value,
      adminId: "admn0",
    };
    localStorage.setItem("newCity", JSON.stringify(newCity));
    information.current.reset();
  }

  return (
    <>
      <div className="tittleNew flex p-1">
        <h2 className="titulonewCity">Create New City</h2>
      </div>

      <div className="new">
        <form className="new" onSubmit={newCity} ref={information}>
          <label className="label">
            Name of City
            <input
              type="text"
              name="nameNEwCity"
              className="input"
              ref={nameNEwCity}
            ></input>
          </label>

          <label className="label">
            Choose a city photos
            <input
              className="input"
              type="file"
              name="photoNewCity"
              accept="image/png, image/jpeg"
              multiple
              ref={photoNewCity}
            />
          </label>

          <label className="label">
            zone
            <input
              className="input"
              type="text"
              name="zone"
              ref={zoneCity}
            ></input>
          </label>
          <label className="label">
            Population
            <input
              className="input"
              type="text"
              name="descrpition"
              ref={populationCity}
            ></input>
          </label>
          <button className="btn-newCity">CREATE A NEW CITY</button>
        </form>
      </div>
    </>
  );
}
