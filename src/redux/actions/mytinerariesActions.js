import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from "../../url";

const getMyTineraries = createAsyncThunk(
  "getMyTineraries",
  async ({ idTinerary }) => {
    let url = `${apiUrl}api/itineraries?userId=${idTinerary}`;
    try {
      const res = await axios.get(url);
      return {
       tineraries: res.data.response
      }
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
  async ({ idTinerary, token }) => {
    let headers = { headers: { Authorization: `Bearer ${token}` } };
    let url = `${apiUrl}api/itineraries/${idTinerary}`;
    try {
      const res = await axios.delete(url, headers);
      
      return {
        tineraries:res.data,
        data: res.data.res

      }

    } catch(error){
        console.log(error)
        return {
            payload: 'Error'
        }
    }
})


const mytinerariesActions = {
  deleteMyTinerary,
  getMyTineraries,

};

export default mytinerariesActions;
