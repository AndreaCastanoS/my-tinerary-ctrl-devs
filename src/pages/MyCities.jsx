import React from "react";
import { useEffect, useState } from "react";
import MyCityCard from "../components/MyCityCard";
import { useDispatch, useSelector } from "react-redux";
import mycitiesActions from "../redux/actions/mycitiesActions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Cities() {
  let [reload, setReload] = useState(false);
  const dispatch = useDispatch();
  const { getMyCities, deleteMyCities } = mycitiesActions;
  const { cities } = useSelector((state) => state.mycities);
  const { idUser} = useSelector((state) => state.user);
  // eslint-disable-next-line
  const { id, idCity } = useSelector((state) => state.mycities);
// eslint-disable-next-line
  const notify = () => {
    toast();
  };

  useEffect(() => {
    let userId = idUser;
    dispatch(getMyCities({ id: userId }));
    // eslint-disable-next-line
  }, [reload]);

  return (
    <div className="flex justify-center column main-full">
      <div className="container-header">
        <img src="./img/fondo.png" className="img-mycity" alt="map img" />
      </div>
      <h2 className="tittle-find text-center">MY CITIES</h2>
      <ToastContainer autoClose={8000} />
      <div className="flex wrap w-100 justify-center align-center g-25 pb-3">
        {cities.cities?.map((item) => {
          function deleteFunc() {
            if (dispatch(deleteMyCities({ idCity: item._id }))) {
              toast.success("the city was deleted successfully", {
                position: toast.POSITION.TOP_RIGHT,
              });
              setReload(!reload)
            }
          }
          return (
            <MyCityCard
              id={item._id}
              key={item._id}
              img={item.photo}
              name={item.name}
              onClick={deleteFunc}
            ></MyCityCard>
          );
        })}
      </div>
    </div>
  );
}
