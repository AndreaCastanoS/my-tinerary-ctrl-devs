import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from "../../url";

const getMyTineraries = createAsyncThunk(
  "getMyTineraries",
  async ({ idTinerary }) => {
    let url = `${apiUrl}api/itineraries?userId=${idTinerary}`;
    try {
      const res = await axios.get(url);
      return res.data.response;
    } catch (error) {
      console.log(error);
      return {
        payload: "Error",
      };
    }
  }
);

const deleteMyTinerary = createAsyncThunk(
  "deleteMyTinerary",
  async ({ idTinerary }) => {
    let url = `${apiUrl}api/itineraries/${idTinerary}`;
    try {
      const res = await axios.delete(url);
      console.log(res.data.message);
      console.log(res.data);
      if (res.data._id) {
        return {
          success: false,
          response: res.data,
        };
      } else {
        return {
          success: true,
          res: res.data.message,
        };
      }
    } catch (error) {
      console.log(error);
      return {
        payload: "Error",
      };
    }
  }
);

const mytinerariesActions = {
  deleteMyTinerary,
  getMyTineraries,
};

export default mytinerariesActions;
