import React from "react";
import { useEffect, useState } from "react";
import CityCard from "../components/CityCard";
import axios from "axios";
import { useRef } from "react";

export default function Cities() {
  let [cities, setCities] = useState([]);
  let [citiesFilter, setCitiesFilter] = useState([]);
  let [checkbox, setCheckbox] = useState([]);
  let searchId = useRef();
  console.log(citiesFilter._id);

  let categoriesZones = cities.map((event) => event.zone);
  let categoriesZonesFilter = [...new Set(categoriesZones)];

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/cities")
      .then((res) => setCities(res.data.response));

    axios
      .get("http://localhost:8000/api/cities")
      .then((res) => setCitiesFilter(res.data.response));
  }, []);

  let filter = (evento) => {
    console.log(evento);
    let checks = checksFilter(evento);
    let urlChecks = checks.map((check) => `zone=${check}`).join("&");

    axios
      .get(
        `http://localhost:8000/api/cities?${urlChecks}&name=${searchId.current.value}`
      )
      .then((res) => setCitiesFilter(res.data.response));
  };

  function checksFilter(event) {
    let arrayCheck = [];
    if (event.target.checked) {
      arrayCheck = [...checkbox, event.target.value];
    } else {
      arrayCheck = checkbox.filter((e) => e !== event.target.value);
    }
    setCheckbox(arrayCheck);
    return arrayCheck;
  }

  return (
    <div className="flex justify-center column city">
      <div className=" g-25 flex column align-center pt-1 ">
        <input
          className="form-control "
          type="search"
          placeholder="Search"
          aria-label="Search"
          onKeyUp={filter}
          ref={searchId}
        />

        <div className="flex g-25 wrap checks">
          {categoriesZonesFilter.map((category) => {
            return (
              <div class="form-check form-check-inline">
                <input
                 
                  class="form-check-input"
                  type="checkbox"
                  value={category}
                  id={category}
                  onChange={filter}
                />
                <label class="form-check-label" for={category}>
                  {category}
                </label>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex wrap w-100 justify-center align-center g-25 pb-3">
        {citiesFilter.map((item) => {
          return (
            <CityCard
              id={item._id}
              key={item._id}
              img={item.photo}
              name={item.name}
            ></CityCard>
          );
        })}
      </div>
    </div>
  );
}
