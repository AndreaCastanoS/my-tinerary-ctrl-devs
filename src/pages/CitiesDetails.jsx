import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Itinerary from "../components/Itinerary";
// import Details from "./Details";
import axios from "axios";
import apiUrl from "../url";

export default function CitiesDetails() {
  let [cities, setCities] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    axios
      .get(`${apiUrl}api/cities/${id}`)
      .then((res) => setCities(res.data.response));
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div
        className="fondoCiudad"
        style={{ backgroundImage: `url('${cities.photo}')` }}
      >
        <div className="blur">
          <div className="boxDetail">
            <div className="contentDetail">
              <img
                className="img-detail img-fluid"
                src={cities.photo}
                alt={cities.name}
              
              />
              <div className="contentDetail2">
                <h1>Welcome to {cities.name}</h1>
                <p>Population:{cities.population}</p>
                <p>Zone:{cities.zone}</p>
                <Itinerary id={cities._id}></Itinerary>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
