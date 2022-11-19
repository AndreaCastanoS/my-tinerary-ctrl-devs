import { createReducer } from "@reduxjs/toolkit";
import mycitiesActions from "../actions/mycitiesActions";

const { getMyCities, deleteMyCities } = mycitiesActions;

const initialState = {
  cities: [],
  id:"",
  idCity:""

};

const mycitiesReducers = createReducer(initialState, (builder) => {
  builder
    .addCase(getMyCities.fulfilled, (state, action) => 
    {
    
      return {
        ...state,
        cities: action.payload,
        
      };
    })
    .addCase(deleteMyCities.fulfilled, (state, action) => 
    {
      console.log(action.payload);
 
      return {
        ...state,
        ...action.payload,
                        
      };
    })
});

export default mycitiesReducers;
