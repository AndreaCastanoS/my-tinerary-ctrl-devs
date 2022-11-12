import React, { useRef } from "react";

export default function NewHotel() {
  let information = useRef();
  let nameNewHotel = useRef();
  let photoNewHotel = useRef();
  let capacityNewHotel = useRef();
  let descriptionNewHotel = useRef();
  let city = useRef();

  function newHotel() {
    let newHotel = {
      id: nameNewHotel.current.value,
      name: nameNewHotel.current.value,
      photo: photoNewHotel.current.value,
      capacity: capacityNewHotel.current.value,
      description: descriptionNewHotel.current.value,
      adminId: "admn0",
    };

    localStorage.setItem("newHotel", JSON.stringify(newHotel));
    information.current.reset();
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
          ></input>
                </div>
                <div>
                <input
                placeholder="photo"
            className="      form-control"
            type="file"
            name="photoNewCity"
            accept="image/png, image/jpeg"
            multiple
            ref={photoNewHotel}
          />
                </div>
                <div >
                <input
                placeholder="Capacity"
            className=" form-control"
            type="text"
            name="capacity"
            ref={capacityNewHotel}
          ></input>
                </div>
                <div >
                <input
                placeholder="City"
            className=" form-control"
            type="text"
            name="city"
            ref={city}
          ></input>
          </div>
                <div >
                <input
                placeholder="Description"
            className="form-control"
            type="text"
            name="descripition"
            ref={descriptionNewHotel}
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
