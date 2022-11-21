import React, { useRef, useEffect, useState } from "react";
import axios from "axios";
import apiUrl from "../url";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useParams } from "react-router-dom";

export default function EditHotel() {
  let [hotels, setHotels] = useState([]);
  let [citiesSelect, setCitiesSelect] = useState([]);
  let { id } = useParams();
  const notify = () => {
    toast();
  };
  let information = useRef();
  let nameNewHotel = useRef();
  let photo1 = useRef();
  let photo2 = useRef();
  let photo3 = useRef();
  let capacityNewHotel = useRef();
  let cityId = useRef();

  const onInputChange = (e) => {
    setHotels({ ...hotels, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    axios
      .get(`${apiUrl}api/cities`)
      .then((res) => setCitiesSelect(res.data.response));
  }, []);
  useEffect(() => {
    axios
      .get(`${apiUrl}api/hotels/${id}`)
      .then((res) => setHotels(res.data.response[0]));
  }, []);

  console.log(hotels);

  async function newHotel(event) {
    event.preventDefault();
    let newHotel = {
      name: nameNewHotel.current.value,
      photo: [photo1.current.value, photo2.current.value, photo3.current.value],
      capacity: capacityNewHotel.current.value,
      cityId: hotels.cityId,
      userId: "636d82abcedcaf6f80f42e70",
    };
    try {
      let res = await axios.patch(`${apiUrl}api/hotels/${id}`, newHotel);
      console.log(res);

      if (res.data.success) {
        toast.success("The hotel has  been successfully modified", {
          position: toast.POSITION.TOP_RIGHT,
        });
      } else {
        toast.error(res.data.message.join("&"), {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    } catch (error) {
      console.log(error);
    }
  }
  console.log(hotels);

  return (
    <div className="w-100 h-100 flex justify-center column align-center p-5">
      <div className="p-1 div-new">
        <div>
          <div className="flex column justify-center">
            <div className="card1 text-center">
              <h1 className="text-center p-1">EDIT HOTEL</h1>
              <div className="p-2">
                <form
                  className="new column"
                  onSubmit={newHotel}
                  ref={information}
                >
                  <div>
                    <input
                      placeholder={"Name the hotel"}
                      defaultValue={hotels.name}
                      type="text"
                      name={"name"}
                      className="form-control form-sign"
                      ref={nameNewHotel}
                      onChange={(e) => onInputChange(e)}
                    ></input>
                  </div>
                  <div>
                    <input
                      placeholder={"URL Photo 1"}
                      defaultValue={hotels.photo&&hotels.photo[0]}
                      className="form-control form-sign"
                      type="text"
                      name={"photo"}
                      ref={photo1}
                      onChange={(e) => onInputChange(e)}
                    />
                  </div>
                  <div>
                    <input
                      defaultValue={hotels.photo&&hotels.photo[1]}
                      placeholder={"URL Photo 2"}
                      className="form-control form-sign"
                      type="text"
                      name={"photo"}
                      accept="image/png, image/jpeg"
                      multiple
                      ref={photo2}
                      onChange={(e) => onInputChange(e)}
                    />
                  </div>
                  <div>
                    <input
                      defaultValue={hotels.photo&&hotels.photo[2]}
                      placeholder={"URL Photo 3"}
                      className="form-control form-sign"
                      type="text"
                      name={"photo"}
                      accept="image/png, image/jpeg"
                      multiple
                      ref={photo3}
                      onChange={(e) => onInputChange(e)}
                    />
                  </div>
                  <div>
                    <input
                      defaultValue={hotels.capacity}
                      placeholder={"Capacity"}
                      className=" form-control form-sign"
                      type="text"
                      name={"capacity"}
                      ref={capacityNewHotel}
                      onChange={(e) => onInputChange(e)}
                    ></input>
                  </div>
                  <div>
                    <select
                      ref={cityId}
                      className="form-control form-sign"
                      id="cityId"
                    >
                      <option>Select the city</option>
                      {citiesSelect.map((city) => (
                        <option key={city._id} defaultValue={city._id}>
                          {city.name}{" "}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="flex justify-around  p-1 wrap g-25">
                    <input
                      type="submit"
                      onClick={notify}
                      required
                      className="btn"
                      value="EDIT HOTEL"
                    />
                  </div>
                  <ToastContainer />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
