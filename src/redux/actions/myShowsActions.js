import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from "../../url";




const getMyShows = createAsyncThunk("getMyShows", async ({ id }) => {
  let url = `${apiUrl}api/shows?userId=${id}`;
  try {
    const res = await axios.get(url);
    return {
      shows: res.data.response,
    };
  } catch (error) { 
    console.log(error);
    return {
      payload: "Error",
    };
  }
});
const deleteMyShows = createAsyncThunk("deleteMyShows", async ({ idShow}) => {
  let url = `${apiUrl}api/shows/${idShow}`;
  try {
    const res = await axios.delete(url);
    console.log(res);
    return res.data.id;
  } catch (error) {
    if (error.response) {
      throw error.response.data.message.join("\n");
    } else {
      throw error;
    }
  }
});

const myShowsActions = {
  deleteMyShows,
  getMyShows,
};

export default myShowsActions;