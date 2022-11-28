import { createReducer } from "@reduxjs/toolkit";
import myHotelsAction from "../actions/myHotelsAction";

const { getMyHotels, deleteMyHotels } = myHotelsAction;

const initialState = {
  hotels: []
};

const myHotelsReducers = createReducer(initialState, (builder) => {
  builder
    .addCase(getMyHotels.fulfilled, (state, action) => 
    {
    
      return {
        ...state,
        hotels: action.payload.hotels,
        
      };
    })
    .addCase(deleteMyHotels.fulfilled, (state, action) => 
    {
      console.log(action.payload);
      let data = state.hotels.filter(e=> e._id !== action.payload.data._id)
      return {
        ...state,
        hotels: data
                        
      };
    })
});

export default myHotelsReducers;
