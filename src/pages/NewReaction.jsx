import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import apiUrl from "../url";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import reactionsActions from "../redux/actions/reactionsActions";


export default function NewReaction() {
  const {  token } = useSelector((state) => state.user);

   
    let dispatch = useDispatch()
    let {createReaction} = reactionsActions
    let information = useRef();
    let name = useRef();
    let icon = useRef();
    let iconBack = useRef();
    let itineraryId = useRef();
    let [itinerariesSelect, setItinerariesSelect] = useState([]);


    useEffect(() => {
        axios
          .get(`${apiUrl}api/itineraries`)
          .then((res) => setItinerariesSelect(res.data.response));
        // eslint-disable-next-line
      }, []);


      async function NewReaction(event) {
        event.preventDefault();
        console.log(itineraryId.current.value);
        let datos = {
          name: name.current.value,
          icon: icon.current.value ,
          iconBack: iconBack.current.value,
          itineraryId: itineraryId.current.value,
          userId: [],
        };
        Swal.fire({
          icon: "question",
          title: "Do you want to create the reaction?",
          showConfirmButton: true,
          iconColor: "#01344f",
          confirmButtonColor: "#01344f",
          confirmButtonText: "Yes",
          showCancelButton: true,
        }).then(async result => {
          try {
          if(result.isConfirmed){
             let res = await dispatch(createReaction({datos, token}))
             if(res.payload.success){
              Swal.fire({
                icon: "success",
                confirmButtonColor: "#01344f",
                iconColor: "#01344f",
                title: res.payload.response.data.message,
                showConfirmButton: true,
              });
             }else{
              Swal.fire({
                icon: "error",
                confirmButtonColor: "#01344f",
                iconColor: "#01344f",
                title: res.payload.response,
                showConfirmButton: true,
              });
             }
            }
          } catch (error) {
            console.log(error);
          }
        })
      }
 
  return (
    <div className="w-100 h-100 flex justify-center column align-center p-5 bg-form">
    <div className="p-1 div-new">
      <div>
        <div className="flex column justify-center">
          <div className="card1 text-center">
            <h1 className="text-center p-1">New Reaction</h1>
            <div className="p-2">
              <form
                className="new column"
                onSubmit={NewReaction}
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
                    placeholder="URL of the icon"
                    className="form-control form-sign"
                    type="text"
                    name="icon"
                    ref={icon}
                  />
                </div>
                <div>
                  <input
                    placeholder="URL of the iconBack"
                    className=" form-control form-sign"
                    type="text"
                    name="photo2"
                    ref={iconBack}
                  />
                </div>
                <div>
                  <select
                    ref={itineraryId}
                    className="form-control form-sign"
                    id="itineraryId"
                  >
                    <option>Select the itinerary</option>
                    {itinerariesSelect.map((itinerary) => (
                      <option key={itinerary._id} value={itinerary._id}>
                        {itinerary.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex justify-around  p-1 wrap g-25">
                  <input
                    type="submit"
                    className="btn"
                    required
                    value="CREATE A NEW REACTION"
                  />
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
