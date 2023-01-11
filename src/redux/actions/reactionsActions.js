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
  let headers = { headers: { Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYmQ5ZTQ2YzRiOWYwZDZiZTc5YjVkZCIsIm5hbWUiOiJhbnRvbmVsbGEiLCJwaG90byI6Imh0dHBzOi8vaW1hZ2VzLnBleGVscy5jb20vcGhvdG9zLzExNjQ2NzQvcGV4ZWxzLXBob3RvLTExNjQ2NzQuanBlZz9hdXRvPWNvbXByZXNzJmNzPXRpbnlzcmdiJnc9NjAwIiwibG9nZ2VkIjp0cnVlLCJpYXQiOjE2NzMzNzEyNTgsImV4cCI6MTcwNDkwNzI1OH0.KpkWad8X5pB0b-uemIAiUwsoAeZP6H_7daUOgOBvUeY` } };
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
