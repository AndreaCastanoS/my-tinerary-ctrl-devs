import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from "../../url";

const deleteMyTinerary = createAsyncThunk ("getMyCities", async({idTinerary}) => {
    let url = `${apiUrl}api/itineraries/${idTinerary}`
    try{
        const res = await axios.delete(url);
        return{
            success : true,
            res: res.data.message
        }
    } catch(error){
        console.log(error);
        return{
            payload: "Error"
        }
    }
})

const mytinerariesActions = {
    deleteMyTinerary
}

export default mytinerariesActions;