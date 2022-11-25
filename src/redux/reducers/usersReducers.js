import { createReducer } from "@reduxjs/toolkit";
import usersActions from "../actions/usersActions";

const { enter, reEnter } = usersActions;

const initialState = {
  name: "",
  lastName: "",
  photo: "",
  logged: false,
  token: "",
};

const usersReducers = createReducer(initialState, (builder) => {
  builder.addCase(enter.fulfilled, (state, action) => {
    const { success, response } = action.payload;
    if (success) {
      let { user, token } = response; //este token es el codigo que viene del backend
      localStorage.setItem("token", JSON.stringify({ token: { user: token } })); //este objeto token va a guardar
      let newState = {
        ...state,
        name: user.name,
        lastName: user.lastName,
        photo: user.photo,
        logged: true,
        role: user.role,
        token: token,
      };
      return newState;
    } else {
      let newState = {
        ...state,
        message: response,
      };
      return newState;
    }
  })
  .addCase(reEnter.fulfilled, (state, action)=>{
    const{success,response,token}= action.payload       
   if(success){
     let { user } = response;

    let newState={
      ...state,
      name:user.name,
      lastName: user.lastName,
      photo:user.photo,
      logged:true,
      role:user.role,
      token:token,
    }
   
    return newState;
   }else {
    let newState = {
      ...state,
      message: response,
    };
    return newState;
  }

  })
})

export default usersReducers
