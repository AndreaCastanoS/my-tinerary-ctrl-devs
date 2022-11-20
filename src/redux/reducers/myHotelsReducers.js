import { createReducer } from "@reduxjs/toolkit";
import myHotelsAction from "../actions/myHotelsAction";

const { getMyHotels, deleteMyHotels } = myHotelsAction;

const initialState = {
  hotels: [],
  id:"",
  idHotels:""

};

const myHotelsReducers = createReducer(initialState, (builder) => {
  builder
    .addCase(getMyHotels.fulfilled, (state, action) => 
    {
    
      return {
        ...state,
        hotels: action.payload,
        
      };
    })
    .addCase(deleteMyHotels.fulfilled, (state, action) => 
    {
      console.log(action.payload);
 
      return {
        ...state,
        ...action.payload,
                        
      };
    })
});

export default myHotelsReducers;
