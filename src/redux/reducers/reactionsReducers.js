import { createReducer } from "@reduxjs/toolkit";
import reactionsActions from "../actions/reactionsActions";
// eslint-disable-next-line
const { createReaction, getReactions, updateReactions, getMyReactions, deleteMyReactions, getShows, getTineraries} = reactionsActions;

const initialState = {
  myreactions: [],
  shows:[],
  itineraries: []
};

const reactionsReducers = createReducer(initialState, (builder) => {
  builder.addCase(getMyReactions.fulfilled, (state, action) => {
    return {
          ...state,
          myreactions: action.payload.myreactions,
          
        };
  })
  .addCase(deleteMyReactions.fulfilled, (state, action) => {
   
    let reaction = state.myreactions.filter(
      (myreactionss) => myreactionss._id !== action.payload.myreactions._id
    );
    console.log(reaction);
    return { ...state, myreactions: reaction };
  })
  .addCase(getShows.fulfilled, (state, action) => {
    return {
      ...state,
      shows: action.payload,
    };
  })
  .addCase(getTineraries.fulfilled, (state, action) => {
    return {
      ...state,
      itineraries: action.payload,
    };
  })
  
});

export default reactionsReducers;
