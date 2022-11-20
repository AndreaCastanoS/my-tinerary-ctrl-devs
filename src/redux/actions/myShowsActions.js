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
const deleteMyShows = createAsyncThunk("deleteMyShows", async ({ idShow }) => {
  let url = `${apiUrl}api/shows/${idShow}`;
  try {
    const res = await axios.delete(url);
    console.log(res);
    if(res.data){
        return{
      success: true,
      res: res.data.message,
        };
      }else{
        return{success: false, res: res.data.message}
      }
  
  } catch (error) {
    console.log(error);
    return {
      success:false, res: "ocurrio un error"

    };
  }
});

const myShowsActions = {
  deleteMyShows,
  getMyShows,
};

export default myShowsActions;