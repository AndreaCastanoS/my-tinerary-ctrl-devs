import Main from "./layouts/Main";
import Home from "./pages/Home";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Cities from "./pages/Cities";
import SignIn from "./pages/SignIn";
import Hotels from "./pages/Hotels";
import NewHotel from "./pages/NewHotel";
import NotFound from "./pages/NotFound";
import CitiesDetails from "./pages/CitiesDetails";
import HotelDetails from "./pages/HotelDetails"
import NewCity from "./pages/NewCity";
import MyHotels from "./pages/MyHotels";
import MyCities from "./pages/MyCities.jsx"
import MyShows from "./pages/MyShows.jsx"

function App() {
  return (
    <Main>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/index" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/cities" element={<Cities />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/newHotel" element={<NewHotel />} />
        <Route path="/newcity" element={<NewCity />} />
        <Route path="/cities/:id" element={<CitiesDetails />} />
        <Route path="/hotels/:id" element={<HotelDetails />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/signin" element={<SignIn/>} />
        <Route path="/myhotels" element={<MyHotels/>} />
        <Route path="/mycities" element={<MyCities/>} />
        <Route path="/myshows" element={<MyShows/>} />
       </Routes>
    </Main>
  );
}

export default App;
