import React, { useRef } from "react";
import axios from "axios";
export default function NewCity() {
  let information = useRef();
  let nameNewCity = useRef();
  let photoNewCity = useRef();
  let zoneCity = useRef();
  let populationCity = useRef();

  function newCity() {
    let newCity = {
      name: nameNewCity.current.value,
      zone: zoneCity.current.value,
      photo: photoNewCity.current.value,
      population: populationCity.current.value,
      userId: "636d82abcedcaf6f80f42e71",
    };
   axios.post("http://localhost:8000/api/cities", newCity)
    information.current.reset();
    alert("the city was created successfully")
  }

  return (
    <>
      <div className="w-100 h-100 flex justify-center column align-center p-5 bg-form">
        <div className="p-1 div-new">
          <div>
            <div className="flex column justify-center">
              <div className="card1 text-center">
                <h1 className="text-center p-1">NEW CITY</h1>
                <div className="p-2">
                  <form
                    className="new column"
                    onSubmit={newCity}
                    ref={information}
                  >
                    <div>
                      <input
                        placeholder="Name of city"
                        type="text"
                        name="nameNewCity"
                        className="form-control form-sign"
                        ref={nameNewCity}
                        required
                      />
                    </div>
                    <div>
                      <input
                        placeholder="URL photo"
                        className="form-control form-sign"
                        type="text"
                        name="photoNewCity"
                        ref={photoNewCity}
                        required
                      />
                    </div>
                    <div>
                      <input
                        placeholder="Zone of the city"
                        className=" form-control form-sign"
                        type="text"
                        name="zone"
                        ref={zoneCity}
                        required
                      />
                    </div>
                    <div>
                      <input
                        placeholder="Population"
                        className="form-control form-sign"
                        type="text"
                        name="descrpition"
                        ref={populationCity}
                        required
                      />
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
