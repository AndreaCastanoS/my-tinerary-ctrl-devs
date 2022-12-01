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


const getReactions = createAsyncThunk("getReactions", async (data) => {
  let headers = { headers: { Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzODRkZTk2ZDhiNmYzNGRhMGYwODY4ZiIsIm5hbWUiOiJFcmljY2MiLCJwaG90byI6Imh0dHBzOi8vYS5jZG4taG90ZWxzLmNvbS9nZGNzL3Byb2R1Y3Rpb245L2QxMjg1LzM0MTA4ZDgwLTliZWItMTFlOC1hOTQyLTAyNDJhYzExMDAwNy5qcGc_aW1wb2xpY3k9ZmNyb3Amdz04MDAmaD01MzMmcT1tZWRpdW0iLCJsb2dnZWQiOnRydWUsImlhdCI6MTY2OTg1MjE1MCwiZXhwIjoxNzAxMzg4MTUwfQ.oTUca2q97QDpCIu1M1e2hYGoPEQ26l18N8NGxjW-NiM` } };
  let url = `${apiUrl}api/reactions?${data.type}=${data.eventId}`;
  try {
    const res = await axios.get(url, headers);
    return {
      success: true,
      reactions: res.data,

    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      reactions: error.response.data.data
    };
  }
});


const getMyReactions = createAsyncThunk("getMyReactions", async ({idUser, token}) => {
  let headers = { headers: { Authorization: `Bearer ${token}` } };
  let url = `${apiUrl}api/reactions?userId=${idUser}`;
  try {
    const res = await axios.get(url, headers);
    console.log(res);
    return {
      success: true,
      myreactions: res.data.data,
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      reactions: error.response.data.data
    };
  }
});
const deleteMyReactions = createAsyncThunk("deleteMyActions", async ({idReaction, token}) => {
  let headers = { headers: { Authorization: `Bearer ${token}` } };
  let url = `${apiUrl}api/reactions/${idReaction}`;
  try {
    const res = await axios.put(url, null, headers);
    console.log(res);
    return {
      success: true,
      myreactions: res.data.response
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      reactions: error.response.data.data
    };
  }
});

const updateReactions = createAsyncThunk("updateReactions", async (datos) => {
  let headers = { headers: { Authorization: `Bearer ${datos.token}` } };
  let url = `${apiUrl}api/reactions?${datos.type}=${datos.eventId}&name=${datos.name}`;
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
const getTineraries = createAsyncThunk("getTineraries", async () => {
  try {
    const res = await axios.get(`${apiUrl}api/itineraries`);
    console.log(res);
    return  res.data.response
  } catch (error) {
    console.log(error);
    return {
      payload: "Error",
    };
  }
});
const getShows = createAsyncThunk("getShows", async () => {
  try {
    const res = await axios.get(`${apiUrl}api/shows`);
    console.log(res);
    return  res.data.response
  } catch (error) {
    console.log(error);
    return {
      payload: "Error",
    };
  }
});
const reactionsActions = {
  createReaction,
  getReactions,
  updateReactions,
  getMyReactions,
  deleteMyReactions,
  getTineraries,
  getShows
};

export default reactionsActions;
