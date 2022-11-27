import React, { useRef , useEffect, useState} from "react";
import axios from "axios";
import apiUrl from "../url";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useSelector } from "react-redux";
/* import withReactContent from 'sweetalert2-react-content'; */

export default function NewShow() {
    const { idUser,  token } = useSelector((state) => state.user);
  const notify = () => {
    toast();
  };

  console.log(token);

  let information = useRef();
  let hotelId = useRef();
  let name = useRef();
  let description = useRef();
  let photo = useRef();
  let price = useRef();
  let date = useRef();
  let navegation = useNavigate()
  
  let [hotels, setHotels] = useState([])

  useEffect(() => {
    axios
      .get(`${apiUrl}api/hotels`)
      .then((res) => setHotels(res.data.response));
  }, []);



  async function newShow(event) {
    event.preventDefault();
    let newShow = {
      name: name.current.value,
      description: description.current.value,
      photo: photo.current.value,
      price: price.current.value,
      date: date.current.value,
      hotelId: hotelId.current.value,
      userId: idUser,
    };

    let headers = { headers: { Authorization: `Bearer ${token}` } };
   try{
    let res = await axios.post(`${apiUrl}api/shows`,  newShow, headers);
    console.log(res);

    if (res.data.success) {
      Swal.fire({
        icon: "success",
        title: res.data.message,
        showConfirmButton: true,
        iconColor: "#01344f",
        confirmButtonColor: "#01344f",
        confirmButtonText: 'See my shows <i class="fa fa-arrow-right"></i>',
      }).then((result) => {
        if (result.isConfirmed) {
          navegation(`/myshows`);
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
              <h1 className="text-center p-1">NEW SHOW</h1>
              <div className="p-2">
                <form
                  className="new column"
                  onSubmit={newShow}
                  ref={information}
                >
                  <div>
                    <input
                      placeholder="Name of show"
                      type="text"
                      name="name"
                      className="form-control form-sign"
                      ref={name}
                      
                    ></input>
                  </div>
                  <div>
                    <input
                      placeholder="Description"
                      className="form-control form-sign"
                      type="text"
                      name="Description"
                      ref={description}
                      
                    />
                  </div>
                  <div>
                    <input
                      placeholder="Photo"
                      className="form-control form-sign"
                      type="text"
                      name="photo"
                      accept="image/png, image/jpeg"
                      multiple
                      ref={photo}
                     
                    />
                  </div>
                  <div>
                    <input
                      placeholder="Price"
                      className="form-control form-sign"
                      type="number"
                      name="Price"
                      accept="image/png, image/jpeg"
                      multiple
                      ref={price}
                    
                    />
                  </div>
                  <div>
                    <input
                      placeholder="Date"
                      className=" form-control form-sign"
                      type="date"
                      name="Date"
                      ref={date}
                      
                    ></input>
                  </div>
                  <div>
                    <select ref={hotelId} className="form-control form-sign" id= "cityId">
                      <option>Select the hotel</option>
                      {hotels.map(hotel=>  <option key = {hotel._id} value = {hotel._id}>{hotel.name} </option>)}
                    </select>
                  </div>
                  <div className="flex justify-around  p-1 wrap g-25">
                    <input 
                     type="submit"
                     onClick={notify}
                     required
                     className="btn" value = "CREATE A NEW SHOW" />
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

