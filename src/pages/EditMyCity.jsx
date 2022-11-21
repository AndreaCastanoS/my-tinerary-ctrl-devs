import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import apiUrl from "../url";
// eslint-disable-next-line
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useParams } from "react-router-dom";

export default function EditMyCity() {
  let [cities, setCities] = useState([]);

  const onInputChange = (e) => {
    setCities({ ...cities, [e.target.placeholder]: e.target.value });
  };
  let { id } = useParams();
  console.log(id);
  const notify = () => {
    toast();
  };

  useEffect(() => {
    axios
      .get(`${apiUrl}api/cities/${id}`)
      .then((res) => setCities(res.data.response));
    // eslint-disable-next-line
  }, []);

  let information = useRef();
  let nameNewCity = useRef();
  let photoNewCity = useRef();
  let zoneCity = useRef();
  let populationCity = useRef();

  async function newCity(event) {
    event.preventDefault();
    let newCity = {
      name: nameNewCity.current.value,
      zone: zoneCity.current.value,
      photo: photoNewCity.current.value,
      population: populationCity.current.value,
      userId: "636d82abcedcaf6f80f42e71",
    };

    try {
      let res = await axios.put(`${apiUrl}api/cities/${id}`, newCity);
      console.log(res);

      if (res.data.success) {
        toast.success("the city was successfully modified", {
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

  return (
    <>
      <div className="w-100 h-100 flex justify-center column align-center p-5 bg-form">
        <div className="p-1 div-new">
          <div>
            <div className="flex column justify-center">
              <div className="card1 text-center">
                <h1 className="text-center p-1">EDIT CITY</h1>
                <div className="p-2">
                  <form
                    className="new column"
                    onSubmit={newCity}
                    ref={information}
                  >
                    <div>
                      <input
                        value={cities.name}
                        placeholder={"name"}
                        type="text"
                        name={"nameNewCity"}
                        className="form-control form-sign"
                        ref={nameNewCity}
                        onChange={(e) => onInputChange(e)}
                      />
                    </div>
                    <div>
                      <input
                        value={cities.photo}
                        placeholder={"photo"}
                        className="form-control form-sign"
                        type="text"
                        name={"photoNewCity"}
                        ref={photoNewCity}
                        onChange={(e) => onInputChange(e)}
                      />
                    </div>
                    <div>
                      <input
                        value={cities.zone}
                        placeholder={"zone"}
                        className="form-control form-sign"
                        type="text"
                        name={"zone"}
                        ref={zoneCity}
                        onChange={(e) => onInputChange(e)}
                      />
                    </div>
                    <div>
                      <input
                        value={cities.population}
                        placeholder={"population"}
                        className="form-control form-sign"
                        type="text"
                        name={"populate"}
                        ref={populationCity}
                        onChange={(e) => onInputChange(e)}
                      />
                    </div>
                    <div className="flex justify-around  p-1 wrap g-25">
                      <input
                        type="submit"
                        onClick={notify}
                        className="btn"
                        required
                        value="EDIT CITY"
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
    </>
  );
}
