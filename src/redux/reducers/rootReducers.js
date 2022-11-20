import citiesReducers from "./citiesReducers"
import hotelsReducers from "./hotelsReducers";
import myHotelsReducers from "./myHotelsReducers";
import mycitiesReducers from "./mycitiesReducers";


const rootReducer = {
    cities: citiesReducers,
    hotels: hotelsReducers,
    myhotels: myHotelsReducers,
    mycities: mycitiesReducers,
}

export default rootReducer;