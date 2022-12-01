import React from "react";
import { useEffect, useState } from "react";
import CardItinerary from "./CardItinerary";
import { useParams } from "react-router-dom";
import axios from "axios"
import apiUrl from "../url";
export default function Itinerary() {
  let { id } = useParams();
  let [count, setCount] = useState(0);
  let [activities, setActivities] = useState([]);

  useEffect(() => {
    axios.get(`${apiUrl}api/itineraries?cityId=${id}`)
    .then((res) => setActivities(res.data.response));
    
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    let interval = setInterval(() => {
      count < 2 ? setCount(++count) : setCount(0);
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, [count]);

  return (
    <div className="flex j-center wrap ">
      {activities?.length >0 && 
      activities?.map((item) => (
        <CardItinerary
          key={item._id}
          id={item._id}
          name={item.name}
          photo={item.photo[count]}
          description={item.description}
          price={item.price} duration={item.duration}
        />
      ))}
    </div>
  );
}
