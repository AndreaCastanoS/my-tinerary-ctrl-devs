import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from "../../url";

const createReaction = createAsyncThunk("createReaction", async ({datos, token}) => {
  let headers = { headers: { Authorization: `Bearer ${token}` } };
  let url = `${apiUrl}api/reactions`;
  try {
    const res = await axios.post(url, datos, headers);

    return {
      success: true,
      reactions: res.data.response,
      response: res,
    };
  } catch (error) {

    return {
      success: false,
      response: error.response.data.message,
    };
  }
});


const getReactions = createAsyncThunk("getReactions", async (key) => {
  let headers = { headers: { Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzODQzODIyYTdjYjZmZGMxM2I5MzA3YyIsIm5hbWUiOiJNZXNzaSIsInBob3RvIjoiaHR0cHM6Ly9wYnMudHdpbWcuY29tL21lZGlhL0UzQVgxc3FWVUFBSWk0Vi5qcGciLCJsb2dnZWQiOnRydWUsImlhdCI6MTY2OTgyMTM3MywiZXhwIjoxNzAxMzU3MzczfQ.SGzEBmAheZtvmblDjzlLLHDW1gAgp3ATK669Iawvhag` } };
  let url = `${apiUrl}api/reactions?itineraryId=${key}`;
  try {
    const res = await axios.get(url, headers);
    console.log(res);
    return {
      success: true,
      reactions: res.data,
      reqId: res.data.id,

    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      reactions: error.response.data.data
    };
  }
});
// const getMyReactions = createAsyncThunk("getMyReactions", async (datos) => {
//   let headers = { headers: { Authorization: `Bearer ${datos.token}` } };
//   let url = `${apiUrl}api/reactions?userId=${datos}`;
//   try {
//     const res = await axios.get(url, headers);
//     console.log(res);
//     return {
//       success: true,
//       reactions: res.data,
//       reqId: res.data.id,

//     };
//   } catch (error) {
//     console.log(error);
//     return {
//       success: false,
//       reactions: error.response.data.data
//     };
//   }
// });


const updateReactions = createAsyncThunk("updateReactions", async (datos) => {
  let headers = { headers: { Authorization: `Bearer ${datos.token}` } };
  let url = `${apiUrl}api/reactions?itineraryId=${datos.id}&name=${datos.name}`;
  try {
    const res = await axios.put(url, datos, headers);
    console.log(res);
    return {
      success: true,
      reactions: res.data.data,
      reactioned: res.data.reactioned,
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      response: error.response.data.message,
    };
  }
});

const reactionsActions = {
  createReaction,
  getReactions,
  updateReactions,
  // getMyReactions
};

export default reactionsActions;
