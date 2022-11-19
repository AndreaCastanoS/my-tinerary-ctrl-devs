import { createReducer } from "@reduxjs/toolkit";
import hotelsActions from "../actions/hotelsActions";

const { getHotels, getHotelsFilter, getHotelsSelect } = hotelsActions;

const initialState = {
  hotels: [],
  name: "",
  order: "",
 
};

const hotelsReducers = createReducer(initialState, (builder) => {
    builder
      .addCase(getHotels.fulfilled, (state, action) => {
        
        return {
          ...state,
          hotels: action.payload,
          
        };
      })
      .addCase(getHotelsFilter.fulfilled, (state, action) => {
        return {
          ...state,
          ...action.payload,
        };
      })
      .addCase(getHotelsSelect.fulfilled, (state, action) => {
        return {
          ...state,
          ...action.payload,
        };
      });
    })

      export default hotelsReducers;