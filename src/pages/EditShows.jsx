import React, { useRef, useEffect, useState } from "react";
import axios from "axios";
import apiUrl from "../url";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useParams } from "react-router-dom";
import { Link as NavLink } from "react-router-dom";

export default function EditShows() {
  let [shows, setShows] = useState([]);
  let { id } = useParams();
  const notify = () => {
    toast();
  };
  let information = useRef();
  let nameNewHotel = useRef();
  let hotelId = useRef();
  let name = useRef();
  let description = useRef();
  let photo = useRef();
  let price = useRef();
  let date = useRef();

  const onInputChange = (e) => {
    setShows({ ...shows, [e.target.placeholder]: e.target.value });
  };

  useEffect(() => {
    axios
      .get(`${apiUrl}api/shows/${id}`)
      .then((res) => setShows(res.data.response));
  }, []);

  console.log(shows);

  async function newHotel(event) {
    event.preventDefault();
    let newHotel = {
      hotelId: shows.hotelId,
      name: nameNewHotel.current.value,
      description: description.current.value,
      photo: photo.current.value,
      price: price.current.value,
      date: date.current.value,
      userId: "636d8755f23e35d46c4c0862",
    };
    try {
      let res = await axios.patch(`${apiUrl}api/shows/${id}`, newHotel);
      console.log(res);

      if (res.data.success) {
        toast.success("The show has  been successfully modified", {
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
    <div className="w-100 h-100 flex justify-center column align-center p-5">
      <div className="p-1 div-new">
        <div>
          <div className="flex column justify-center">
            <div className="card1 text-center">
              <h1 className="text-center p-1">EDIT SHOW</h1>
              <div className="p-2">
                <form
                  className="new column"
                  onSubmit={newHotel}
                  ref={information}
                >
                  <div>
                    <input
                      placeholder={"name"}
                      defaultValue={shows.name}
                      type="text"
                      name="nameNewHotel"
                      className="form-control form-sign"
                      ref={nameNewHotel}
                      onChange={(e) => onInputChange(e)}
                    ></input>
                  </div>
                  <div>
                    <input
                      placeholder={"description"}
                      defaultValue={shows.description}
                      className="form-control form-sign"
                      type="text"
                      name={"description"}
                      ref={description}
                      onChange={(e) => onInputChange(e)}
                    />
                  </div>
                  <div>
                    <input
                      defaultValue={shows.photo}
                      placeholder={"Photo"}
                      className="form-control form-sign"
                      type="text"
                      name={"photo"}
                      accept="image/png, image/jpeg"
                      multiple
                      ref={photo}
                      onChange={(e) => onInputChange(e)}
                    />
                  </div>
                  <div>
                    <input
                      defaultValue={shows.price}
                      placeholder={"price"}
                      className="form-control form-sign"
                      type="text"
                      name={"price"}
                      ref={price}
                      onChange={(e) => onInputChange(e)}
                    />
                  </div>
                  <div>
                    <input
                      defaultValue={shows.date}
                      placeholder={"Date"}
                      className=" form-control form-sign"
                      type="text"
                      name={"Date"}
                      ref={date}
                      onChange={(e) => onInputChange(e)}
                    ></input>
                  </div>
                  <div className="flex justify-around  p-1 wrap g-25">
                    <input
                      type="submit"
                      onClick={notify}
                      required
                      className="btn"
                      value="EDIT SHOW"
                    />
                    <NavLink className="w-100 margin-none flex justify-end" to="/myshows">
                    <button className="back">Back my shows</button>
                    </NavLink>
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
