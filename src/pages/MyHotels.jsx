import React from "react";
import { useEffect } from "react";
import MyHotelsCard from "../components/MyHotelsCard";
import { useDispatch, useSelector } from "react-redux";
import myHotelsAction from "../redux/actions/myHotelsAction";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function MyHotels() {
  const dispatch = useDispatch();
  const { getMyHotels, deleteMyHotels } = myHotelsAction;
  const { hotels} = useSelector((state) => state.myhotels);
  console.log(hotels);
  // eslint-disable-next-line
  const { id, idHotel } = useSelector((state) => state.myhotels);
// eslint-disable-next-line
  const notify = () => {
    toast();
  };

  useEffect(() => {
    let userId = "636d82abcedcaf6f80f42e71";
    dispatch(getMyHotels({ id: userId }));
    // eslint-disable-next-line
  }, []);

  return (
    <div className="flex justify-center column main-full">
      <div className="container-header">
        <img src="./img/fondo.png" className="img-mycity" alt="map img" />
      </div>
      <h2 className="tittle-find text-center">MY HOTELS</h2>
      <ToastContainer autoClose={8000} />
      <div className="flex wrap w-100 justify-center align-center g-25 pb-3">
        {hotels.hotels?.map((item) => {
          function deleteFunc() {
            if (dispatch(deleteMyHotels({ idHotel: item._id }))) {
              toast.success("the hotel was deleted successfully", {
                position: toast.POSITION.TOP_RIGHT,
              });
              setTimeout(function () {
                window.location.replace("");
              }, 1500);
            }
          }
          return (
            <MyHotelsCard
              id={item._id}
              key={item._id}
              img={item.photo}
              name={item.name}
              onClick={deleteFunc}
            ></MyHotelsCard>
          );
        })}
      </div>
    </div>
  );
}