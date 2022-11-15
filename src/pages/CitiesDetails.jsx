import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Itinerary from "../components/Itinerary";
import Details from "./Details";
import axios from "axios";

export default function CitiesDetails() {
  let [cities, setCities] = useState([]);
  let { id } = useParams();
  
console.log(cities);

  useEffect(() => {
    axios.get(`http://localhost:8000/api/cities/${id}`)
      .then((res) => setCities(res.data.response));
    // eslint-disable-next-line
  }, []);

  return (
    <>

    <Details
        img={cities.photo}
        name={cities.name}
        zone={cities.zone}
        population={cities.population}
      />
  
      <div className="p-2 flex column justify-center align-center">
      <Itinerary className="p-2" id={cities._id}></Itinerary>
     <button>View Comments</button>
      </div>
    
    </>
     
 
  );
}
