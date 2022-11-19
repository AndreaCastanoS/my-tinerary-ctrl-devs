import citiesReducers from "./citiesReducers"
import hotelsReducers from "./hotelsReducers";

const rootReducer = {
    cities: citiesReducers,
    hotels: hotelsReducers,
    
}

export default rootReducer;