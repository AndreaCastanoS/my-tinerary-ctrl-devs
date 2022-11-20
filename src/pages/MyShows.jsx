import React from "react";
import { useEffect } from "react";
import CardMyShows from "../components/CardMyShows";
import { useDispatch, useSelector } from "react-redux";
import myShowsActions from "../redux/actions/myShowsActions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function MyShows() {
  const dispatch = useDispatch();
  const { getMyShows, deleteMyShows } = myShowsActions;
  const { shows } = useSelector((state) => state.myshows);
  const { id, idShow } = useSelector((state) => state.myshows);

  const notify = () => {
    toast();
  };

  useEffect(() => {
    let userId = "636d8755f23e35d46c4c0862";
    dispatch(getMyShows({ id: userId }));

    // eslint-disable-next-line
  }, []);

  return (
    <div className="flex justify-center column main-full">
      <div className="container-header">
        <img src="./img/showimagen.jpg" className="img-mycity" alt="map img" />
      </div>
      <h2 className="tittle-find text-center">MY SHOWS</h2>
      <ToastContainer autoClose={8000} />
      <div className="flex wrap w-100 justify-center align-center g-25 pb-3">
        {shows.shows?.map((item) => {
          function deleteFunc() {
            if (dispatch(deleteMyShows({ idShow: item._id }))) {
              toast.success("the show was deleted successfully", {
                position: toast.POSITION.TOP_RIGHT,
              });
              setTimeout(function () {
                window.location.replace("");
              }, 1500);
            }
          }
          return (
            <CardMyShows
              key={item._id}
              name={item.name}
              photo={item.photo}
              description={item.description}
              price ={item.price}
              onClick={deleteFunc}
            ></CardMyShows>
          );
        })}
      </div>
    </div>
  );
}