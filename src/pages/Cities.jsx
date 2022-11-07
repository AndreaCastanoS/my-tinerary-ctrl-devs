import React from "react";
import { useEffect, useState } from "react";
import CityCard from "../components/CityCard";

export default function Cities() {
  let [cities, setCities] = useState([]);
  let [search, setSearch] = useState("");
//   let [checkbox, setCheckbox] = useState([]);
  let categoriesZones = cities.map((event) => event.zone);
  console.log(categoriesZones);
  let categoriesZonesFilter = [...new Set(categoriesZones)];
  console.log(categoriesZonesFilter);

  console.log(search);

  useEffect(() => {
    fetch("./cities.json")
      .then((res) => res.json())
      .then((res) => setCities(res));
  }, []);
 
  return (
    <>
      <div className="flex column g-25">
        <input
          id="js-search"
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          onKeyUp={(e) => setSearch(e.target.value)}
        />
        <div>
          <div className="flex g-25 wrap">
            {categoriesZonesFilter.map((category) => {
              return (
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value={category}
                    id="inlineCheckbox1"
                    // onChange={(e) => setCheckbox(e.target.value)}
                  />
                  <label class="form-check-label" for="inlineCheckbox1">
                    {category}
                  </label>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="flex wrap w-100 justify-center align-center g-25 pb-3">
        {cities
          .filter((item) => {
            return search.toLowerCase === ""
              ? item
              : item.name.toLowerCase().includes(search);
          })
          .map((item) => {
            return <CityCard id={item.id} key={item.id} img={item.photo} name={item.name}></CityCard>;
          })}
      </div>
    </>
  );
}
