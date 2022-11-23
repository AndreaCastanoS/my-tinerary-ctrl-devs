import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from "../../url";

const getHotels = createAsyncThunk("getHotels", async () => {
    try {
      const res = await axios.get(`${apiUrl}api/hotels`);
      return res.data.response;
    } catch (error) {
      console.log(error);
      return {
        payload: "Error",
      };
    }
  });
  const getHotelsFilter = createAsyncThunk(
    "getHotelsFilter",
    async ({name }) => {
      let url = `${apiUrl}api/hotels?name=${name}`;
      try {
        const res = await axios.get(url);
        console.log(res.data.response);
        console.log(name);
        return {
          hotels: res.data.response,
          name,
        };
      } catch (error) {
        console.log(error);
        return {
          payload: "Error",
        };
      }
    }
  );
  const getHotelsSelect = createAsyncThunk(
    "getHotelsSelect",
    async ({order, name} ) => {
      let url = `${apiUrl}api/hotels?order=${order}&name=${name}`

      try {
        const res = await axios.get(url);
        console.log(res.data.response);
        console.log(name);
        console.log(order);
        return {
          hotels: res.data.response,
          name,
          order,
        };
      } catch (error) {
        console.log(error);
        return {
          payload: "Error",
        };
      }
    }
  );



  const hotelsActions = {
    getHotels,
    getHotelsFilter,
    getHotelsSelect,
   
  };
  
  export default hotelsActions;

