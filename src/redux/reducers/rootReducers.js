import citiesReducers from "./citiesReducers"
import hotelsReducers from "./hotelsReducers";
import myHotelsReducers from "./myHotelsReducers";
import mycitiesReducers from "./mycitiesReducers";
import mytinerariesReducers from "./mytinerariesReducers"

const rootReducer = {
    cities: citiesReducers,
    hotels: hotelsReducers,
    myhotels: myHotelsReducers,
    mycities: mycitiesReducers,
    mytineraries: mytinerariesReducers,
}

export default rootReducer;