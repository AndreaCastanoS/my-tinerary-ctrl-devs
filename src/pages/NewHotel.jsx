import React, { useRef, } from "react";
import axios from "axios";


export default function NewHotel() {
  
  
  
  let information = useRef();
  let nameNewHotel = useRef();
  let photoNewHotel = useRef();
  let capacityNewHotel = useRef();
  let descriptionNewHotel = useRef();
  let city = useRef();
  
  function newHotel() {
    let newHotel = {
      name: nameNewHotel.current.value,
      photo: photoNewHotel.current.value,
      capacity: capacityNewHotel.current.value,
      cityId: "636d975f45f1e59ed7a377b7" ,
      userId: "636d82abcedcaf6f80f42e70",
    };
    
    axios.post(`http://localhost:8000/api/hotels`, newHotel)
   
    information.current.reset();
    alert("The hotel was successfully created")
  }

  return (

     
    <div className="w-100 h-100 flex justify-center column align-center p-5">
    <div className="p-1 div-new">
      <div>
        <div className="flex column justify-center">
          <div className="card1 text-center">
            <h1 className="text-center p-1">NEW HOTEL</h1>
            <div className="p-2">
             <form className="new column" onSubmit={newHotel} ref={information}>
                <div >
                <input
                placeholder="Name of hotel"
            type="text"
            name="nameNewHotel"
            className="form-control"
            ref={nameNewHotel}
            required
          ></input>
                </div>
                <div>
                <input
                placeholder="photo"
            className="      form-control"
            type="text"
            name="photoNewCity"
            accept="image/png, image/jpeg"
            multiple
            ref={photoNewHotel}
            required
          />
                </div>
                <div >
                <input
                placeholder="Capacity"
            className=" form-control"
            type="text"
            name="capacity"
            ref={capacityNewHotel}
            required
          ></input>
                </div>
                <div >
                <input
                placeholder="City"
            className=" form-control"
            type="text"
            name="city"
            ref={city}
            required
          ></input>
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
  )
   
}
