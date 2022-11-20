const { createReducer } = require("@reduxjs/toolkit");
const { default: mytinerariesActions } = require("../actions/mytinerariesActions");



const {deleteMyTinerary} = mytinerariesActions;

const initialState = {
    idTinerary : ""
}

const mytinerariesReducers = createReducer(initialState, (builder) => {
    builder.addCase(deleteMyTinerary.fulfilled,(state, action) =>{
    return{
    idTinerary : action.payload
    }
    })
})

export default mytinerariesReducers;