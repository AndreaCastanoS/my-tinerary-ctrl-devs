import React from "react";
import { useEffect, useState } from "react";
import HotelsCard from "../components/HotelsCard";
import axios from "axios";
import { useRef } from "react";
import apiUrl from "../url";

export default function Hotels() {
  let [hotels, setHotels] = useState([]);

  useEffect(() => {
    axios.get(`${apiUrl}api/hotels`)
      .then((res) => setHotels(res.data.response));
  }, []);

  const search = useRef();
  const select = useRef();

  let filter = () => {
    if(select.current.value !== "asc"  && select.current.value !== "desc"){
    axios
      .get(
        `${apiUrl}api/hotels?name=${search.current.value}`
      )
      .then((res) => setHotels(res.data.response));
    }else{
      axios
      .get(
        `${apiUrl}api/hotels?order=${select.current.value}&name=${search.current.value}`
        )
      .then((res) => setHotels(res.data.response));
    }
  };

  return (
    <>
      <div className="p-2 flex column justify-center align-center">
        <div>
          <input
            ref={search}
            type="search"
            className="form-control me-2 form-search"
            placeholder="Type Hotel Name"
            onChange={filter}
          />
        </div>

        <select onChange={filter} ref={select} className="form-control1">
          <option>Select Order</option>
          <option value="asc">Ascend</option>
          <option value="desc">Descend</option>
        </select>
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
