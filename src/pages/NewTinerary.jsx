import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import apiUrl from "../url";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useSelector } from "react-redux";

export default function NewTinerary() {
  const { idUser, token } = useSelector((state) => state.user);
  let information = useRef();
  let name = useRef();
  let photo1 = useRef();
  let photo2 = useRef();
  let photo3 = useRef();
  let description = useRef();
  let price = useRef();
  let duration = useRef();
  let cityId = useRef();
  let navegation = useNavigate();
  let [citiesSelect, setCitiesSelect] = useState([]);

  useEffect(() => {
    axios
      .get(`${apiUrl}api/cities`)
      .then((res) => setCitiesSelect(res.data.response));
    // eslint-disable-next-line
  }, []);

  async function NewTinerary(event) {
    event.preventDefault();
    let NewTinerary = {
      name: name.current.value,
      photo: [photo1.current.value, photo2.current.value, photo3.current.value],
      description: description.current.value,
      price: price.current.value,
      duration: duration.current.value,
      cityId: cityId.current.value,
      userId: idUser,
    };
    let headers = { headers: { Authorization: `Bearer ${token}` } };
    try {
      let res = await axios.post(`${apiUrl}api/itineraries`, NewTinerary, headers);
      console.log(res);

      if (res.data.success) {
        Swal.fire({
          icon: "success",
          title: res.data.message,
          showConfirmButton: true,
          iconColor: "#01344f",
          confirmButtonColor: "#01344f",
          confirmButtonText:
            'See my tinerary <i class="fa fa-arrow-right"></i>',
        }).then((result) => {
          if (result.isConfirmed) {
            navegation(`/mytineraries`);
          }
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "warning",
        confirmButtonColor: "#01344f",
        iconColor: "#01344f",
        title: error.response.data.message.join("<br/>"),
        showConfirmButton: true,
      });
    }
  }

  return (
    <>
      <div className="w-100 h-100 flex justify-center column align-center p-5 bg-form">
        <div className="div-new">
          <div>
            <div className="flex column justify-center">
              <div className="card1 text-center">
                <h1 className="text-center p-1">New Tinerary</h1>
                <div className="p-2">
                  <form
                    className="new column"
                    onSubmit={NewTinerary}
                    ref={information}
                  >
                    <div>
                      <input
                        placeholder="Name of Tinerary"
                        type="text"
                        name="name"
                        className="form-control form-sign"
                        ref={name}
                      />
                    </div>
                    <div>
                      <input
                        placeholder="URL of the photo"
                        className="form-control form-sign"
                        type="text"
                        name="photo1"
                        ref={photo1}
                      />
                    </div>
                    <div>
                      <input
                        placeholder="URL of the photo"
                        className=" form-control form-sign"
                        type="text"
                        name="photo2"
                        ref={photo2}
                      />
                    </div>
                    <div>
                      <input
                        placeholder="URL of the photo"
                        className="form-control form-sign"
                        type="text"
                        name="photo3"
                        ref={photo3}
                      />
                    </div>
                    <div>
                      <input
                        placeholder="Description"
                        className="form-control form-sign"
                        type="text"
                        name="description"
                        ref={description}
                      />
                    </div>
                    <div>
                      <input
                        placeholder="Price"
                        type="text"
                        name="price"
                        className="form-control form-sign"
                        ref={price}
                      />
                    </div>
                    <div>
                      <input
                        placeholder={"Duration"}
                        type="text"
                        name="duration"
                        className="form-control form-sign"
                        ref={duration}
                      />
                    </div>
                    <div>
                      <select
                        ref={cityId}
                        className="form-control form-sign"
                        id="cityId"
                      >
                        <option>Select the city</option>
                        {citiesSelect.map((city) => (
                          <option key={city._id} value={city._id}>
                            {city.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="flex justify-around  p-1 wrap g-25">
                      <input
                        type="submit"
                        className="btn"
                        required
                        value="CREATE A NEW TINERARY"
                      />
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
