import React, { useEffect, useState } from "react";
import Btn from "./Btn";
import axios from "axios";

export default function Carousel() {
  let [number, setNumber] = useState(1);
  let [cities, setCities] = useState([]);
  let [hotels, setHotels] = useState([]);
  let [activities, setActivities] = useState([]);
  let [detailsCities, setDetailCities] = useState([]);
  let [detailsHotels, setDetailHotels] = useState([]);
  let [detailsActivities, setDetailActivities] = useState([]);
  let [details, setDetails] = useState([]);
  let [id, setId] = useState(0);
  useEffect(() => {
    let idInterval = setInterval(
      () => {
        next();
      },

      5000
    );
    setId(idInterval);
    return clearInterval(id);
    // eslint-disable-next-line
  }, [number]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/cities")
      .then((res) => setCities(res.data.response));

    axios
      .get(`http://localhost:8000/api/hotels`)
      .then((res) => setHotels(res.data.response));

    axios
      .get(`http://localhost:8000/api/itineraries`)
      .then((res) => setActivities(res.data.response));
  }, []);

  let prev = () => {
    if (number !== 0) {
      setNumber(--number);
    } else {
      setNumber(details.length - 1);
    }
    clearInterval(id);
  };
  let next = () => {
    if (number !== details.length - 1) {
      setNumber(++number);
    } else {
      setNumber(0);
    }
    clearInterval(id);
  };

  function aleatory(number) {
    return Math.floor(Math.random() * number);
  }

  // eslint-disable-next-line
  setDetailActivities = activities.map((activity) => {
    if (
      detailsActivities.length < 4 &&
      !detailsActivities.includes(activity.photo)
    ) {
      detailsActivities.push(
        activity.photo[aleatory(activity.photo.length - 1)]
      );
    }
  });

  // eslint-disable-next-line
  setDetailHotels = hotels.map((hotel) => {
    if (detailsHotels.length < 4 && !detailsHotels.includes(hotel.photo)) {
      detailsHotels.push(hotel.photo[aleatory(hotel.photo.length - 1)]);
    }
  });

  console.log(detailsHotels);

  // eslint-disable-next-line
  setDetailCities = cities.map(() => {
    let citiesAleatory = aleatory(cities.length - 1);
    if (detailsCities.length < 4 && !detailsCities.includes(cities.photo)) {
      detailsCities.push(cities[citiesAleatory].photo);
    }
  });

  if (details.length < 4) {
    // eslint-disable-next-line
    setDetails = details.push(detailsActivities, detailsCities, detailsHotels);
  }
  console.log(details);

  return (
    <div className="flex justify-center column ">
      <div className="flex justify-center">
        {<h1 className="tittleCar">Popular My Tineraries</h1>}
      </div>
      <div>
        <div className="flex justify-center align-center w-100 ">
          <Btn verb="<" onClick={prev} />
          <div className="flex wrap max-w-60 justify-center g-25">
            {details[number].map((photo) => {
              return <img className="carousel" src={photo} alt="photocity" />;
            })}
          </div>
          <Btn verb=">" onClick={next} />
        </div>
      </div>
    </div>
  );
}
