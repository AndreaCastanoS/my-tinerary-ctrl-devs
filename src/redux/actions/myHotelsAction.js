import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from "../../url";

const getMyHotels = createAsyncThunk("getMyHotels", async ({ id }) => {
  let url = `${apiUrl}api/hotels?userId=${id}`;
  try {
    const res = await axios.get(url);
    return {
      hotels: res.data.response,
    };
  } catch (error) {
    console.log(error);
    return {
      payload: "Error",
    };
  }
});
const deleteMyHotels = createAsyncThunk("deleteMyHotels", async ({ idHotel, token }) => {
  let headers = { headers: { Authorization: `Bearer ${token}` } }
  let url = `${apiUrl}api/hotels/${idHotel}`;
  try {
    const res = await axios.delete(url, headers);
    return {
      success: true,
      res: res.data.message,
      data: res.data.res
    };
  } catch (error) {
    console.log(error);
    return {
      payload: "Error",
    };
  }
});

const myHotelsAction = {
  getMyHotels,
  deleteMyHotels
};

export default myHotelsAction;