import { createReducer } from "@reduxjs/toolkit";
import reactionsActions from "../actions/reactionsActions";
// eslint-disable-next-line
const { createReaction, getReactions, updateReactions} = reactionsActions;

const initialState = {
  // reactionss: [],
  // reqId: ""
};

const reactionsReducers = createReducer(initialState, (builder) => {
  // builder
  //   .addCase(createReaction.fulfilled, (state, action) => 
  //   {
    
  //     return {
  //       ...state,
  //       reactionss: action.payload.reactions,
        
  //     };
  //   })
  //   .addCase(getReactions.fulfilled, (state, action) => 
  //   {
  //   if(action.payload.success){
  //     return {
  //       ...state,
  //       reactionss: action.payload.reactions,
  //       reqId: action.payload.reqId
        
  //     };
  //   }
     
  //   })
  //   .addCase(updateReactions.fulfilled, (state, action) => 
  //   {
    
  //     return {
  //       ...state,
  //       reactionss: action.payload.reactions,
  //       reactioned: action.payload.reactioned
        
  //     };
  //   })
});

export default reactionsReducers;
