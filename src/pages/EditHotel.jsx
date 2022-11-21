import React, { useRef, useEffect, useState } from "react";
import axios from "axios";
import apiUrl from "../url";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useParams } from "react-router-dom";

export default function EditHotel() {
  let [hotels, setHotels] = useState([]);
  let [citiesSelect, setCitiesSelect] = useState([])
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
    setHotels({ ...hotels, [e.target.placeholder]: e.target.value });
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
      cityId: cityId.current.value,
      userId: "636d82abcedcaf6f80f42e70",
    };
    try {
      let res = await axios.patch(`${apiUrl}api/hotels/${id}`, newHotel);
      console.log(res);

      if (res.data.success) {
        toast.success("The hotel has  been created satisfactorily", {
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
                      placeholder={"name"}
                      /* value={hotels.name} */
                      type="text"
                      name="nameNewHotel"
                      className="form-control form-sign"
                      ref={nameNewHotel}
                      onChange={(e) => onInputChange(e)}
                    ></input>
                  </div>
                  <div>
                    <input
                      placeholder={"Photo1"}
                       /* value={hotels.photo} */ 
                      className="form-control form-sign"
                      type="text"
                      name={"photo1"}
                      ref={photo1}
                      onChange={(e) => onInputChange(e)}
                    />
                  </div>
                  <div>
                    <input
                     /*  value={hotels.photo} */
                      placeholder={"Photo 2"}
                      className="form-control form-sign"
                      type="text"
                      name={"photo2"}
                      accept="image/png, image/jpeg"
                      multiple
                      ref={photo2}
                      onChange={(e) => onInputChange(e)}
                    />
                  </div>
                  <div>
                    <input
                      /* value={hotels.photo} */
                      placeholder={"Photo 3"}
                      className="form-control form-sign"
                      type="text"
                      name={"photo3"}
                      accept="image/png, image/jpeg"
                      multiple
                      ref={photo3}
                      onChange={(e) => onInputChange(e)}
                    />
                  </div>
                  <div>
                    <input
                      /* value={hotels.capacity} */
                      placeholder={"Capacity"}
                      className=" form-control form-sign"
                      type="text"
                      name={"capacity"}
                      ref={capacityNewHotel}
                      onChange={(e) => onInputChange(e)}
                    ></input>
                  </div>
                  <div>
                    <select ref={cityId} className="form-control form-sign" id= "cityId" value={hotels.cityId}
                    >
                      <option>Select the city</option>
                      {citiesSelect.map(city=>  <option key = {city._id} value = {city._id}>{city.name} </option>)}
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
