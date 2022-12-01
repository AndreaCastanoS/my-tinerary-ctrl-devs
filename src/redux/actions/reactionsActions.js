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
  let headers = { headers: { Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzODRkZTk2ZDhiNmYzNGRhMGYwODY4ZiIsIm5hbWUiOiJFcmljY2MiLCJwaG90byI6Imh0dHBzOi8vYS5jZG4taG90ZWxzLmNvbS9nZGNzL3Byb2R1Y3Rpb245L2QxMjg1LzM0MTA4ZDgwLTliZWItMTFlOC1hOTQyLTAyNDJhYzExMDAwNy5qcGc_aW1wb2xpY3k9ZmNyb3Amdz04MDAmaD01MzMmcT1tZWRpdW0iLCJsb2dnZWQiOnRydWUsImlhdCI6MTY2OTg1MjE1MCwiZXhwIjoxNzAxMzg4MTUwfQ.oTUca2q97QDpCIu1M1e2hYGoPEQ26l18N8NGxjW-NiM` } };
  let url = `${apiUrl}api/reactions?itineraryId=${key}`;
  try {
    const res = await axios.get(url, headers);
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


const getMyReactions = createAsyncThunk("getMyReactions", async ({idUser, token}) => {
  let headers = { headers: { Authorization: `Bearer ${token}` } };
  console.log(headers);
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
  getMyReactions,
  deleteMyReactions
};

export default reactionsActions;
