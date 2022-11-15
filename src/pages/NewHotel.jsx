import React, { useRef , useEffect, useState} from "react";
import axios from "axios";
import apiUrl from "../url";

export default function NewHotel() {
  let information = useRef();
  let nameNewHotel = useRef();
  let photo1 = useRef();
  let photo2 = useRef();
  let photo3 = useRef();
  let capacityNewHotel = useRef();
  let cityId = useRef();
  
  let [citiesSelect, setCitiesSelect] = useState([])

  useEffect(() => {
    axios
      .get(`${apiUrl}api/cities`)
      .then((res) => setCitiesSelect(res.data.response));
  }, []);



  function newHotel() {
    let newHotel = {
      name: nameNewHotel.current.value,
      photo: [photo1.current.value, photo2.current.value, photo3.current.value],
      capacity: capacityNewHotel.current.value,
      cityId: cityId.current.value,
      userId: "636d82abcedcaf6f80f42e70",
    };

    axios.post(`${apiUrl}api/hotels`, newHotel);

    information.current.reset();
    alert("The hotel was successfully created");
  }

  return (
    <div className="w-100 h-100 flex justify-center column align-center p-5">
      <div className="p-1 div-new">
        <div>
          <div className="flex column justify-center">
            <div className="card1 text-center">
              <h1 className="text-center p-1">NEW HOTEL</h1>
              <div className="p-2">
                <form
                  className="new column"
                  onSubmit={newHotel}
                  ref={information}
                >
                  <div>
                    <input
                      placeholder="Name of hotel"
                      type="text"
                      name="nameNewHotel"
                      className="form-control form-sign"
                      ref={nameNewHotel}
                      required
                    ></input>
                  </div>
                  <div>
                    <input
                      placeholder="Photo 1"
                      className="form-control form-sign"
                      type="text"
                      name="photo1"
                      accept="image/png, image/jpeg"
                      multiple
                      ref={photo1}
                      required
                    />
                  </div>
                  <div>
                    <input
                      placeholder="Photo 2"
                      className="form-control form-sign"
                      type="text"
                      name="photo2"
                      accept="image/png, image/jpeg"
                      multiple
                      ref={photo2}
                      required
                    />
                  </div>
                  <div>
                    <input
                      placeholder="Photo 3"
                      className="form-control form-sign"
                      type="text"
                      name="photo3"
                      accept="image/png, image/jpeg"
                      multiple
                      ref={photo3}
                      required
                    />
                  </div>
                  <div>
                    <input
                      placeholder="Capacity"
                      className=" form-control form-sign"
                      type="text"
                      name="capacity"
                      ref={capacityNewHotel}
                      required
                    ></input>
                  </div>
                  <div>
                    <select ref={cityId} className="form-control form-sign" id= "cityId">
                      <option>Select the city</option>
                      {citiesSelect.map(city=>  <option key = {city._id} value = {city._id}>{city.name} </option>)}
                    </select>
                  </div>
                  <div className="flex justify-around  p-1 wrap g-25">
                    <button className="btn">CREATE A NEW HOTEL</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
