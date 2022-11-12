import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Events from "../components/Events";
import DetailsHotel from "./DetailsHotel";
import axios from "axios";

export default function HotelDetails() {
  let [hotels, setHotels] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/hotels/${id}`)
      .then((res) => setHotels(res.data.response[0]))
      
      

    // eslint-disable-next-line
  }, []);

  console.log(id);
  return (
    <>
      <DetailsHotel
        img={hotels.photo}
        name={hotels.name}
        capacity={hotels.capacity}
        id={hotels._id}
      />
      <div className="p-2 flex column justify-center align-center">
        <Events className="p-2" idC={id}></Events>
        <button>View Comments</button>
      </div>
    </>
  );
}
