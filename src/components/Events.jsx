import React from "react";
import { useEffect, useState } from "react";
import CardShow from "./CardShow";
import axios from "axios";
import apiUrl from "../url";

export default function Events(props) {
  let { idC } = props;
  let [hotelsShow, setHotelsShow] = useState([]);

  useEffect(() => {
    axios
      .get(`${apiUrl}api/shows?hotelId=${idC}`)
      .then((res) => setHotelsShow(res.data.response));

    // eslint-disable-next-line
  }, []);
 

  return (
    <div className="flex j-center wrap ">
      {hotelsShow.map((item) => (
        <CardShow
          idShow={item._id}
          key={item._id}
          name={item.name}
          photo={item.photo}
          description={item.description}
          price={item.price}
          capacity={item.capacity}
        />
      ))}
    </div>
  );
}
