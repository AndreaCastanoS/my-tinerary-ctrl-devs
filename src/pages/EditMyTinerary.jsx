import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import apiUrl from "../url";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useParams } from "react-router-dom";
import { Link as NavLink } from "react-router-dom";

export default function EditMyTinerary() {
  let [itinerary, setItinerary] = useState([]);
  // let [photos, setPhotos] = useState([]);

 
  let { id } = useParams();
  const notify = () => {
    toast();
  };

  useEffect(() => {
    axios
      .get(`${apiUrl}api/itineraries/${id}`)
      .then((res) => setItinerary(res.data.response))
    // eslint-disable-next-line
  }, []);

console.log(itinerary.photo);
console.log(itinerary);
  let information = useRef();
  let name = useRef();
  let photo1 = useRef();
  let photo2 = useRef();
  let photo3 = useRef();
  let description = useRef();
  let price = useRef();
  let duration = useRef();

  async function editTinerary(event) {
    event.preventDefault();
  
    let editTinerary = {
      cityId: itinerary.cityId,
      name: name.current.value,
      photo: [photo1.current.value, photo2.current.value, photo3.current.value],
      description: description.current.value,
      price: price.current.value,
      duration: duration.current.value,
      userId: "636d82abcedcaf6f80f42e72",
     
    };

    try {
      let res = await axios.put(`${apiUrl}api/itineraries/${id}`, editTinerary);
      console.log(res);

      if (res.data.success) {
        toast.success("The itinerary was successfully modified", {
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
                <h1 className="text-center p-1">EDIT TINERARY</h1>
                <div className="p-2">
                  <form
                    className="new column"
                    onSubmit={editTinerary}
                    ref={information}
                  >
                    <div>
                      <input
                        defaultValue={itinerary.name}
                        placeholder="Name of the itinerary"
                        type="text"
                        name="name"
                        className="form-control form-sign"
                        ref={name}
                    
                      />
                    </div>
                    <div>
                      <input
                        defaultValue={itinerary.photo&&itinerary.photo[0]}
                        placeholder="URL of the photo"
                        className="form-control form-sign"
                        type="text"
                        name="photo1"
                        ref={photo1}
                      />
                      <input
                        defaultValue={itinerary.photo&&itinerary.photo[1]}
                        placeholder={"URL of the photo"}
                        className="form-control form-sign"
                        type="text"
                        name="photo2"
                        ref={photo2}
                      />
                      <input
                        defaultValue={itinerary.photo&&itinerary.photo[2]}
                        placeholder="URL of the photo"
                        className="form-control form-sign"
                        type="text"
                        name="photo3"
                        ref={photo3}
                      />
                    </div>
                    <div>
                      <input
                        defaultValue={itinerary.description}
                        placeholder="Description"
                        className="form-control form-sign"
                        type="text"
                        name="description"
                        ref={description}
                      
                      />
                    </div>
                    <div>
                      <input
                        defaultValue={itinerary.price}
                        placeholder="Price"
                        type="text"
                        name="price"
                        className="form-control form-sign"
                        ref={price}
                      />
                    </div>
                    <div>
                      <input
                        defaultValue={itinerary.duration}
                        placeholder={"Duration"}
                        type="text"
                        name="duration"
                        className="form-control form-sign"
                        ref={duration}
                      />
                    </div>
                    <div className="flex justify-center wrap g-25 align-center">
                      <input
                        type="submit"
                        onClick={notify}
                        className="btn"
                        required
                        value="EDIT TINERARY"
                      />
                    </div>
                    <NavLink className="w-100 margin-none flex justify-end" to="/mytineraries">
                    <button className="back">Back my tineraries</button>
                    </NavLink>
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
