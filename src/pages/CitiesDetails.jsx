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
    axios.get(`${apiUrl}api/cities/${id}`)
      .then((res) => setCities(res.data.response));
    // eslint-disable-next-line
  }, []);

  return (
    <>
<div className="fondoCiudad" style={{backgroundImage: `url('${cities.photo}')`}}>
				<div className="tarjetaDeCiudad">	
					<div className="tituloCiudad">
					<h1>Welcome to {cities.name}</h1>
					</div>	
          <div className="tituloCiudad">
         <h3>Zone: {cities.zone}</h3> 
         <h3>Population: {cities.population}</h3>
          </div>
				</div>
			</div>
    {/* <Details
       
        zone={cities.zone}
        population={cities.population}
      /> */}
  
      <div className="p-2 flex column justify-center align-center">
      <Itinerary className="p-2" id={cities._id}></Itinerary>
     <button>View Comments</button>
      </div>
    
    </>
     
 
  );
}
