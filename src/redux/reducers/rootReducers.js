import citiesReducers from "./citiesReducers"
import hotelsReducers from "./hotelsReducers";
import myHotelsReducers from "./myHotelsReducers";
import mycitiesReducers from "./mycitiesReducers";
import myShowsReducers from "./myShowsReducers";
import mytinerariesReducers from "./mytinerariesReducers"
import usersReducers from "./usersReducers"

const rootReducer = {
    cities: citiesReducers,
    hotels: hotelsReducers,
    myhotels: myHotelsReducers,
    mycities: mycitiesReducers,
    myshows: myShowsReducers,
    mytineraries: mytinerariesReducers,
    user: usersReducers,
}

export default rootReducer;