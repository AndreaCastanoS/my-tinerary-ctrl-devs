import React from "react";
import { useEffect, useState  } from "react"
import CardMyTinerary from "../components/CardMyTinerary"
// import apiUrl from "../url";
// import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import mytinerariesActions from "../redux/actions/mytinerariesActions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



export default function MyTineraries() {
    // let [tineraries, setTineraries] = useState([]);
    let [count, setCount] = useState(0);
    let [reload, setReload] = useState(false);
    const dispatch = useDispatch();
    const { deleteMyTinerary, getMyTineraries } = mytinerariesActions;
      // eslint-disable-next-line
    const { idTinerary, tineraries } = useSelector((state) => state.mytineraries);
  // eslint-disable-next-line
  const notify = () => {
    toast();
  };
 


  useEffect(() => {
    let userId = "636d82abcedcaf6f80f42e72"
      dispatch(getMyTineraries({idTinerary: userId}));
    // eslint-disable-next-line
  }, [reload]);

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
          }
          setReload(!reload)
        }
        return (
          <CardMyTinerary
          id={item._id}
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
