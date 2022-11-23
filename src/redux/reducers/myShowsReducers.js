import { createReducer } from "@reduxjs/toolkit";
import myShowsActions from "../actions/myShowsActions";

const {deleteMyShows, getMyShows} = myShowsActions;

const initialState = {
  shows:[],
  id:"",
  idShow:""

};

const myShowsReducers = createReducer(initialState, (builder) => {
  builder
  .addCase(getMyShows.fulfilled, (state, action) => 
    {
    
      return {
        ...state,
        shows:action.payload,
        
      };
    })
    .addCase(deleteMyShows.fulfilled, (state, action) => 
    {
      
     let newShow = state.shows.filter(show => show._id !== action.payload)
      return{...state, messagge: "", shows: newShow}
        
    
      console.log(action.payload);
 
  
    })
});

export default myShowsReducers;
