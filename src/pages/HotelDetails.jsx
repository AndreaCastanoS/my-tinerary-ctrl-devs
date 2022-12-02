import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Events from "../components/Events";
import DetailsHotel from "./DetailsHotel";
import axios from "axios";
import apiUrl from "../url";

export default function HotelDetails() {
  let [hotels, setHotels] = useState([]);
  let[filter, setFilter] = useState([])
  let { id } = useParams();

  useEffect(() => {
    axios
      .get(`${apiUrl}api/hotels/${id}`)
      .then((res) => setHotels(res.data.response[0]))
      
      axios
      .get(`${apiUrl}api/hotels/${id}`)
      .then((res) => setFilter(res.data.response.find((x)=>x._id === id)))

      

    // eslint-disable-next-line
  }, []);

 
  return (
    <>
      <DetailsHotel
        img={hotels.photo}
        name={hotels.name}
        capacity={hotels.capacity}
        id={hotels._id}
        key={hotels._id}
    
      />
      <div className=" flex column justify-center align-center">
        <Events  idC={id}></Events>
      </div>
    </>
  );
}
