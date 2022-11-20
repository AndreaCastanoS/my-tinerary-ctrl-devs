import React from "react";
import { useEffect, useState  } from "react"
import CardMyTinerary from "../components/CardMyTinerary"
import apiUrl from "../url";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import mytinerariesActions from "../redux/actions/mytinerariesActions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



export default function MyTineraries() {
    let [tineraries, setTineraries] = useState([]);
    let [count, setCount] = useState(0);
    const dispatch = useDispatch();
    const { deleteMyTinerary } = mytinerariesActions;
      // eslint-disable-next-line
    const { idTinerary } = useSelector((state) => state.mytineraries);
  // eslint-disable-next-line
  const notify = () => {
    toast();
  };

  useEffect(() => {

    axios
      .get(`${apiUrl}api/itineraries`)
      .then((res) => setTineraries(res.data.response));
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    let interval = setInterval(() => {
      count < 2 ? setCount(++count) : setCount(0);
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, [count]);


  return (
    <div className="flex justify-center column main-full">
    <div className="container-header">
      <img src="./img/itinerary.jpg" className="img-mycity" alt="map img" />
    </div>
    <h2 className="tittle-find text-center ">MY TINERARIES</h2>
    <ToastContainer autoClose={8000} />
    <div className="flex wrap w-100 justify-center align-center p-3 g-25 pb-3">
      {tineraries?.map((item) => {
        function deleteFunc() {
          if (dispatch(deleteMyTinerary({ idTinerary: item._id }))) {
            toast.success("the city was deleted successfully", {
              position: toast.POSITION.TOP_RIGHT,
            });
            setTimeout(function () {
              window.location.replace("");
            }, 1500);
          }
        }
        return (
          <CardMyTinerary
          key={item._id}
          name={item.name}
          photo={item.photo[count]}
          description={item.description}
          price={item.price} duration={item.duration}
            onClick={deleteFunc}
          ></CardMyTinerary>
        );
      })}
    </div>
  </div>
  )
}
