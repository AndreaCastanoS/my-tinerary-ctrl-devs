import { createReducer } from "@reduxjs/toolkit";
import reactionsActions from "../actions/reactionsActions";
// eslint-disable-next-line
const { createReaction, getReactions, updateReactions, getMyReactions, deleteMyReactions} = reactionsActions;

const initialState = {
  myreactions: [],
  // reqId: ""
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
  });
    // .addCase(createReaction.fulfilled, (state, action) => 
    // {
    
    //   return {
    //     ...state,
    //     reactionss: action.payload.reactions,
        
    //   };
    // })
    // .addCase(getReactions.fulfilled, (state, action) => 
    // {
    // if(action.payload.success){
    //   return {
    //     ...state,
    //     reactionss: action.payload.reactions,
    //     reqId: action.payload.reqId
        
    //   };
    // }
     
    // })
    // .addCase(updateReactions.fulfilled, (state, action) => 
    // {
    
    //   return {
    //     ...state,
    //     reactionss: action.payload.reactions,
    //     reactioned: action.payload.reactioned
        
    //   };
    // })
});

export default reactionsReducers;
