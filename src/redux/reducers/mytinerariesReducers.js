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
      return { ...state, tineraries: action.payload}

    })

    .addCase(deleteMyTinerary.fulfilled, (state, action) => {
      let itinerary = state.tineraries.filter(
        (itinerary) => itinerary._id !== action.payload.data._id
      );
      return { ...state, itinerary: itinerary };
    });
});

export default mytinerariesReducers;
