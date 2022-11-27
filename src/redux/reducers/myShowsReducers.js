import { createReducer } from "@reduxjs/toolkit";
import myShowsActions from "../actions/myShowsActions";

const { deleteMyShows, getMyShows } = myShowsActions;

const initialState = {
  shows: [],
  /* id: "", */
  idShow: "",
};

const myShowsReducers = createReducer(initialState, (builder) => {
  builder
    .addCase(getMyShows.fulfilled, (state, action) => {
      return {
        shows: action.payload,
      };
    })
    .addCase(deleteMyShows.fulfilled, (state, action) => {
      let newShow = state.shows.filter(
        (newShow) => newShow._id !== action.payload.data._id
      );
      return { ...state, newShow: newShow };
    });
});

export default myShowsReducers;
