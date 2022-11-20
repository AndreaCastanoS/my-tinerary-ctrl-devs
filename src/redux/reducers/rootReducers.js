import citiesReducers from "./citiesReducers"
import hotelsReducers from "./hotelsReducers";
import myHotelsReducers from "./myHotelsReducers";

const rootReducer = {
    cities: citiesReducers,
    hotels: hotelsReducers,
    myhotels: myHotelsReducers,
    
}

export default rootReducer;