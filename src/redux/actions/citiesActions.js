import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from "../../url";

const getCities = createAsyncThunk("getCities", async () => {
  try {
    const res = await axios.get(`${apiUrl}api/cities`);
    return res.data.response;
  } catch (error) {
    console.log(error);
    return {
      payload: "Error",
    };
  }
});
const getCitiesFilter = createAsyncThunk(
  "getCitiesFilter",
  async ({ zone, value , checks}) => {
    let url = `${apiUrl}api/cities?${zone}&name=${value}`;

    try {
      const res = await axios.get(url);
      console.log(res.data.response);
      return {
        cities: res.data.response,
        zone,
        value,
        checks,
      };
    } catch (error) {
      console.log(error);
      return {
        payload: "Error",
      };
    }
  }
);

const citiesActions = {
  getCities,
  getCitiesFilter,
};

export default citiesActions;
