import React, { useRef , useEffect, useState} from "react";
import axios from "axios";
import apiUrl from "../url";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useSelector } from "react-redux";
/* import withReactContent from 'sweetalert2-react-content'; */

export default function NewHotel() {
  const { idUser, token } = useSelector((state) => state.user);
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
  let navegation = useNavigate()
  
  let [citiesSelect, setCitiesSelect] = useState([])

  useEffect(() => {
    axios
      .get(`${apiUrl}api/cities`)
      .then((res) => setCitiesSelect(res.data.response));
  }, []);



  async function newHotel(event) {
    event.preventDefault();
    let newHotel = {
      name: nameNewHotel.current.value,
      photo: [photo1.current.value, photo2.current.value, photo3.current.value],
      capacity: capacityNewHotel.current.value,
      cityId: cityId.current.value,
      userId: idUser,
    };
    let headers = { headers: { Authorization: `Bearer ${token}` } };
   try{
    let res = await axios.post(`${apiUrl}api/hotels`, newHotel, headers);
    console.log(res);

    if (res.data.success) {
      Swal.fire({
        icon: "success",
        title: res.data.message,
        showConfirmButton: true,
        iconColor: "#01344f",
        confirmButtonColor: "#01344f",
        confirmButtonText: 'See my hotels <i class="fa fa-arrow-right"></i>',
      }).then((result) => {
        if (result.isConfirmed) {
          navegation(`/hotels/${res.data.response._id}`);
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
                    
                    />
                  </div>
                  <div>
                    <input
                      placeholder="Capacity"
                      className=" form-control form-sign"
                      type="text"
                      name="capacity"
                      ref={capacityNewHotel}
                      
                    ></input>
                  </div>
                  <div>
                    <select ref={cityId} className="form-control form-sign" id= "cityId">
                      <option>Select the city</option>
                      {citiesSelect.map(city=>  <option key = {city._id} value = {city._id}>{city.name} </option>)}
                    </select>
                  </div>
                  <div className="flex justify-around  p-1 wrap g-25">
                    <input 
                     type="submit"
                     onClick={notify}
                     required
                     className="btn" value = "CREATE A NEW HOTEL" />
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
