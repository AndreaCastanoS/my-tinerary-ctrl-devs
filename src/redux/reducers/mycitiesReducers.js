import { createReducer } from "@reduxjs/toolkit";
import mycitiesActions from "../actions/mycitiesActions";

const { getMyCities, deleteMyCities } = mycitiesActions;

const initialState = {
  cities: []
};

const mycitiesReducers = createReducer(initialState, (builder) => {
  builder
    .addCase(getMyCities.fulfilled, (state, action) => 
    {
    
      return {
        ...state,
        cities: action.payload.cities,
        
      };
    })
    .addCase(deleteMyCities.fulfilled, (state, action) => 
    {
      console.log(action.payload);
      let data = state.cities.filter(e=> e._id !== action.payload.data._id)
      return {
        ...state,
        cities: data
                        
      };
    })
});

export default mycitiesReducers;
