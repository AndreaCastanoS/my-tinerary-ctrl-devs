import React, { useEffect, useRef } from "react";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import reactionsActions from "../redux/actions/reactionsActions";

export default function NewReaction() {
  const { token } = useSelector((state) => state.user);
  const { shows, itineraries } = useSelector((state) => state.reactions);
  const { getShows, getTineraries, createReaction } = reactionsActions;
  const events = shows.concat(itineraries);
  console.log(itineraries);
  console.log(shows);

  let dispatch = useDispatch();
  let information = useRef();
  let name = useRef();
  let icon = useRef();
  let iconBack = useRef();
  let eventId = useRef();

  console.log(events);
  useEffect(() => {
    dispatch(getShows());
    dispatch(getTineraries());
    // eslint-disable-next-line
  }, []);

  async function NewReaction(event) {
    event.preventDefault();
    let itinerariesId = itineraries.find(
      (e) => e._id === eventId.current.value
    );
    let showsId = shows.find((e) => e._id === eventId.current.value);
    let datos = {
      name: name.current.value,
      icon: icon.current.value,
      iconBack: iconBack.current.value,
      userId: [],
    };
    if (itinerariesId) {
      datos.itineraryId = eventId.current.value;
    } else if (showsId) {
      datos.showId = eventId.current.value;
    }
    Swal.fire({
      icon: "question",
      title: "Do you want to create the reaction?",
      showConfirmButton: true,
      iconColor: "#01344f",
      confirmButtonColor: "#01344f",
      confirmButtonText: "Yes",
      showCancelButton: true,
    }).then(async (result) => {
      try {
        if (result.isConfirmed) {
          let res = await dispatch(createReaction({ datos, token }));
          if (res.payload.success) {
            Swal.fire({
              icon: "success",
              confirmButtonColor: "#01344f",
              iconColor: "#01344f",
              title: res.payload.response.data.message,
              showConfirmButton: true,
            });
          } else {
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
    });
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
                      ref={eventId}
                      className="form-control form-sign"
                      id="eventId"
                    >
                      <option>Select the itinerary or the Show</option>
                      {events.map((e) => (
                        <option key={e._id} value={e._id}>
                          {e.name}
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
  );
}
