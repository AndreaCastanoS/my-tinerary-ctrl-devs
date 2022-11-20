import citiesReducers from "./citiesReducers"
import hotelsReducers from "./hotelsReducers";
import mycitiesReducers from "./mycitiesReducers";

const rootReducer = {
    cities: citiesReducers,
    hotels: hotelsReducers,
    mycities: mycitiesReducers,
    
}

export default rootReducer;