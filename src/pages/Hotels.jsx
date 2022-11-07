import React from "react";
import { useEffect, useState } from "react";
import HotelsCard from "../components/HotelsCard";

export default function Hotels() {
  let [hotels, setHotels] = useState([]);
  let [search, setSearch] = useState("");
  
  useEffect(() => {
    fetch("./hotels.json")
      .then((res) => res.json())
      .then((res) => setHotels(res));
  }, []);
  console.log(hotels);

  let select =(e)=>{
    // eslint-disable-next-line 
    let valor = e.target.value
    console.log(valor)
}
   
  

  return (
    <>   
       <div className="p-2 flex column justify-center" >
      <div >
        <input
          id="js-search"
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          onKeyUp={(e) => setSearch(e.target.value)}
        />
      </div>

      <select onChange={select}>
                <option>Select</option>
                <option value='Ascend' >Ascend</option>
                <option value='Descend'>Descend</option>
            </select>
            </div>

      <div className="flex wrap w-100 justify-center align-center g-25 pb-3">
        {hotels
          .filter((item) => {
            return search.toLowerCase === ""
              ? item
              : item.name.toLowerCase().includes(search);
          })
          .map((item) => {
            return <HotelsCard id={item.id} key={item.id} img={item.photo} name={item.name}></HotelsCard>;
          })}
      </div>
      
    </>
  );
}
