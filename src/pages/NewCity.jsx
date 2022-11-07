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
     
      <div className="w-100 h-100 flex justify-center column align-center p-5">
      <div className="p-1 div-new">
        <div>
          <div className="flex column justify-center">
            <div className="card1 text-center">
              <h1 className="text-center p-1">NEW CITY</h1>
              <div className="p-2">
               <form className="new column" onSubmit={newCity} ref={information}>
                  <div >
                  <input
                  placeholder="Name of city"
              type="text"
              name="nameNEwCity"
              className="form-control"
              ref={nameNEwCity}
            ></input>
                  </div>
                  <div>
                  <input
                  placeholder="photo"
              className="      form-control"
              type="file"
              name="photoNewCity"
              accept="image/png, image/jpeg"
              multiple
              ref={photoNewCity}
            />
                  </div>
                  <div >
                  <input
                  placeholder="Zone of the city"
              className=" form-control"
              type="text"
              name="zone"
              ref={zoneCity}
            ></input>
                  </div>
                  <div >
                  <input
                  placeholder="Population"
              className="form-control"
              type="text"
              name="descrpition"
              ref={populationCity}
            ></input>
                  </div>
                  <div className="flex justify-around  p-1 wrap g-25">
                    <button className="btn">CREATE A NEW CITY</button>
                    
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
