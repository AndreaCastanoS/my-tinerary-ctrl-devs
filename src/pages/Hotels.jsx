import React from "react";
import { useEffect, useState } from "react";
import HotelsCard from "../components/HotelsCard";
import axios from "axios";
import { useRef } from "react";

export default function Hotels() {
  let [hotels, setHotels] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/hotels`)
      .then((res) => setHotels(res.data.response));
  }, []);

  const search = useRef();
  const select = useRef();

  let filter = () => {
    if (select.current.value !== "asc" && select.current.value !== "desc") {
      axios
        .get(`http://localhost:8000/api/hotels?name=${search.current.value}`)
        .then((res) => setHotels(res.data.response));
    } else {
      axios
        .get(
          `http://localhost:8000/api/hotels?order=${select.current.value}&name=${search.current.value}`
        )
        .then((res) => setHotels(res.data.response));
    }
  };

  return (
    <>
      <div className="p-2 flex column justify-center">
        <div>
          <input
            ref={search}
            type="search"
            className="search-input"
            placeholder="Type Hotel Name"
            onChange={filter}
          />
        </div>

        <select onChange={filter} ref={select}>
          <option>Select</option>
          <option value="asc">Ascend</option>
          <option value="desc">Descend</option>
        </select>
      </div>

      <div className="flex wrap w-100 justify-center align-center g-25 pb-3">
        {hotels.map((item) => {
          return (
            <HotelsCard
              id={item.id}
              key={item.id}
              img={item.photo}
              name={item.name}
            ></HotelsCard>
          );
        })}
      </div>
    </>
  );
}
