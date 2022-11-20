import React from "react";
import { useEffect } from "react";
import HotelsCard from "../components/HotelsCard";
import { useRef } from "react";
import hotelsActions from "../redux/actions/hotelsActions";
import { useDispatch, useSelector } from "react-redux";

export default function Hotels() {
  const dispatch = useDispatch();
  const { getHotels, getHotelsFilter, getHotelsSelect } = hotelsActions;
  const { hotels } = useSelector((state) => state.hotels);
  const { order, name } = useSelector((state) => state.hotels);
  console.log(order);
  console.log(name);
  useEffect(() => {
    if (hotels.length === 0) {
      dispatch(getHotels());
    }
    // eslint-disable-next-line
  }, []);

  const search = useRef();
  const select = useRef();

  let filter = () => {
    let text = search.current.value;
    let selectFil = select.current.value;

    if (selectFil !== "asc" && selectFil !== "desc") {
      dispatch(getHotelsFilter({ name: text }));
    } else {
      dispatch(getHotelsSelect({ order: selectFil, name: text }));
    }
  };

  return (
    <>
      <div className= "flex justify-center column main-full">
      <div className="container-header">
        <img src="./img/hotel.jpg" className="img-city" alt="map img" />
      </div>
      <h2 className="tittle-find text-center">!ENJOY OUR HOTELS!</h2>

        <div className=" g-25 flex column align-center pt-1 ">
          <input
            ref={search}
            type="search"
            className="form-control me-2 form-search"
            placeholder="Type Hotel Name"
            onChange={filter}
          />
        
   <div className="flex g-25 wrap checks">
        <select onChange={filter} ref={select} className="form-control1 ">
          <option>Select Order</option>
          <option value="asc">Ascend</option>
          <option value="desc">Descend</option>
        </select>
        </div>
        </div>
      </div>

      <div className="flex wrap w-100 justify-center align-center g-25 pb-3">
        {hotels.map((item) => {
          return (
            <HotelsCard
              id={item._id}
              key={item._id}
              img={item.photo}
              name={item.name}
            ></HotelsCard>
          );
        })}
      </div>
    </>
  );
}
