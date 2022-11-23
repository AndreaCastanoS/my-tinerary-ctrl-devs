const { createReducer } = require("@reduxjs/toolkit");
const {
  default: mytinerariesActions,
} = require("../actions/mytinerariesActions");

const { deleteMyTinerary, getMyTineraries } = mytinerariesActions;

const initialState = {
  tineraries: [],
  idTinerary: "",
};

const mytinerariesReducers = createReducer(initialState, (builder) => {
  builder
    .addCase(getMyTineraries.fulfilled, (state, action) => {
      console.log(action.payload);
      
      return {
        tineraries: action.payload,
      };
    })

    .addCase(deleteMyTinerary.fulfilled, (state, action) => {
        console.log(action.payload._id);
     return{
        idTinerary: action.payload
     }
    });
});

export default mytinerariesReducers;
