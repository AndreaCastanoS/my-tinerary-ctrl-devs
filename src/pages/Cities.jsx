import React from "react";
import { useEffect, useState } from "react";
import CityCard from "../components/CityCard";
import { useRef } from "react";
import citiesActions from "../redux/actions/citiesActions";
import { useDispatch, useSelector } from "react-redux";

export default function Cities() {
  const dispatch = useDispatch();
  const { getCities, getCitiesFilter } = citiesActions;
  const { cities, categories } = useSelector((state) => state.cities);
  const { zone, value, checks } = useSelector((store) => store.cities);

  let [checkbox, setCheckbox] = useState([]);
  let searchId = useRef();
  let che = useRef();


  useEffect(() => {
    if (zone || value) {
      dispatch(getCitiesFilter({ zone, value, checks }));
      searchId.current.value = value
      if(checks){
        checks.forEach(e=>{
          let input = Array.from(che.current).find(input => input.value === e)
          input.checked = true
        })
      }
    } else {
      dispatch(getCities());
    }

    // eslint-disable-next-line
  }, []);

  console.log(zone);
  console.log(value);

  let filter = (evento) => {
    console.log(evento);
    let checks = checksFilter(evento);
    console.log(checks);
    let text = searchId.current.value;
    let urlChecks = checks.map((check) => `zone=${check}`).join("&");
    dispatch(getCitiesFilter({ zone: urlChecks, value: text, checks }));
  };

  function checksFilter(event) {
    let arrayCheck = [];
    if (event.target.checked) {
      arrayCheck = [...checks, event.target.value];
    } else {
      arrayCheck = checkbox.filter((e) => e !== event.target.value);
    }
    setCheckbox(arrayCheck);
    return arrayCheck;
  }

  return (
    <div className="flex justify-center column main-full">
      <div className="container-header">
        <img src="./img/mytinerary.jpg" className="img-city" alt="map img" />
      </div>

      <h2 className="tittle-find text-center">FIND YOUR NEW ADVENTURE!</h2>

      <div className=" g-25 flex column align-center pt-1 ">
        <input
          className="form-control form-search"
          type="search"
          placeholder="Search your destination..."
          aria-label="Search"
          onKeyUp={filter}
          ref={searchId}
        />

        <form ref={che} className="flex g-25 wrap checks">
          {categories?.map((category) => {
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
        </form>
      </div>
      <div className="flex wrap w-100 justify-center align-center g-25 pb-3">
        {cities?.map((item) => {
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
