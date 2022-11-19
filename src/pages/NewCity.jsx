import React, { useRef } from "react";
import axios from "axios";
import apiUrl from "../url";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function NewCity() {
  const notify = () => {
    toast();
  };

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
      let res = await axios.post(`${apiUrl}api/cities`, newCity);
      console.log(res);

      if (res.data.success) {
        toast.success("the city was created successfully", {
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
                      />
                    </div>
                    <div>
                      <input
                        placeholder="URL photo"
                        className="form-control form-sign"
                        type="text"
                        name="photoNewCity"
                        ref={photoNewCity}
                      />
                    </div>
                    <div>
                      <input
                        placeholder="Zone of the city"
                        className=" form-control form-sign"
                        type="text"
                        name="zone"
                        ref={zoneCity}
                      />
                    </div>
                    <div>
                      <input
                        placeholder="Population"
                        className="form-control form-sign"
                        type="text"
                        name="populate"
                        ref={populationCity}
                      />
                    </div>
                    <div className="flex justify-around  p-1 wrap g-25">
                      <input
                        type="submit"
                        onClick={notify}
                        className="btn"
                        required
                        value="CREATE A NEW CITY"
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
