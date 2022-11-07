import React from "react";
import { useEffect, useState } from "react";
import CityCard from "../components/CityCard";

export default function Cities() {
  let [cities, setCities] = useState([]);
  let [search, setSearch] = useState("");
  let [checked, setChecked] = useState([]);

  console.log(search);

  useEffect(() => {
    fetch("./cities.json")
      .then((res) => res.json())
      .then((res) => setCities(res));
  }, []);
  console.log(cities);

  let checks = (e) => {
    let auxArray = [...checked];
    if (e.target.checked) {
      auxArray.push(e.target.value);
    } else {
      auxArray = auxArray.filter((el) => el !== e.target.value);
    }
    setChecked(auxArray);
    setChecked = cities.filter((element) => auxArray.includes(element.zone));

    console.log(setChecked);
  };

  return (
    <>
      <div className="p-2">
        <div className="flex column g-25">
          <input
            id="js-search"
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            onKeyUp={(e) => setSearch(e.target.value)}
          />
        </div>
        <div >
         
          {Array.from(new Set(cities.map((city) => city.zone))).map((el) => {
            return (
              <label  key={el}>
                <input onClick={checks} type="checkbox" value={el} />
                {el}
              </label>
            );
          })}
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
