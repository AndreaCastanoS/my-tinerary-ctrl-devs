import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from "../../url";

const getMyCities = createAsyncThunk("getMyCities", async ({ id }) => {
  let url = `${apiUrl}api/cities?userId=${id}`;
  try {
    const res = await axios.get(url);
    return {
      cities: res.data.response,
    };
  } catch (error) {
    console.log(error);
    return {
      payload: "Error",
    };
  }
});
const deleteMyCities = createAsyncThunk("deleteMyCities", async ({ idCity, token }) => {
  let headers = { headers: { Authorization: `Bearer ${token}` } };
  let url = `${apiUrl}api/cities/${idCity}`;
  try {
    const res = await axios.delete(url, headers);
    console.log(res.data);
    return {
      success: true,
      res: res.data.message,
      data: res.data.res
    }
  } catch (error) {
    console.log(error);
    return {
      payload: "Error",
    };
  }
});

const mycitiesActions = {
  getMyCities,
  deleteMyCities
};

export default mycitiesActions;
