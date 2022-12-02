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
import HotelDetails from "./pages/HotelDetails";
import NewCity from "./pages/NewCity";
import MyHotels from "./pages/MyHotels";
import MyCities from "./pages/MyCities.jsx";
import MyShows from "./pages/MyShows.jsx";
import MyTineraries from "./pages/MyTineraries.jsx";
import EditHotel from "./pages/EditHotel.jsx";
import EditMyCity from "./pages/EditMyCity";
import EditMyTinerary from "./pages/EditMyTinerary";
import EditShows from "./pages/EditShows";
import { useSelector, useDispatch } from "react-redux";
import usersActions from "./redux/actions/usersActions";
import { useEffect } from "react";
import ProtectedRoute from "./components/ProtectedRoute";
import Profile from "./pages/Profile";
import NewTinerary from "./pages/NewTinerary";
import NewShow from "./pages/NewShow.jsx";
import NewReaction from "./pages/NewReaction.jsx";
import MyReactions from "./pages/MyReactions";



function App() {
  let user = useSelector((store) => store.user);
  let dispatch = useDispatch();
  let { reEnter } = usersActions;

  useEffect(() => {
    let token = JSON.parse(localStorage.getItem("token"));
    if (token) {
      dispatch(reEnter(token.token.user));
    }
    // eslint-disable-next-line
  }, []);

  return (
    <Main>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/index" element={<Home />} />
        <Route path="/signup" element={<SignUp role="user" />} />
        <Route path="/cities" element={<Cities />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/cities/:id" element={<CitiesDetails />} />
        <Route path="/hotels/:id" element={<HotelDetails />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/signin" element={<SignIn />} />



        {/* <Route path="/myreactions" element={<MyReactions />} /> */}

        <Route
          element={
            <ProtectedRoute
              isAllowed={user.role === "admin" || user.role === "user"}
              redirect="/myreactions"
            />
          }
        >
          <Route path="/profile" element={<Profile />} />
          <Route path="/myreactions" element={<MyReactions />} />
        </Route>

        <Route
          element={
            <ProtectedRoute
              isAllowed={user.role === "admin"}
              redirect="/signin"
            />
          }
        >
          <Route path="/newHotel" element={<NewHotel />} />
          <Route path="/newcity" element={<NewCity />} />
          <Route path="/myhotels" element={<MyHotels />} />
          <Route path="/mycities" element={<MyCities />} />
          <Route path="/mycities/:id" element={<EditMyCity />} />
          <Route path="/edithotel/:id" element={<EditHotel />} />
          <Route path="/reactions" element={<NewReaction />} />
        </Route>
        <Route element={<ProtectedRoute isAllowed={user.role === "user"} />}>
          <Route path="/mytineraries" element={<MyTineraries />} />
          <Route path="/mytineraries/:id" element={<EditMyTinerary />} />
          <Route path="/myshows" element={<MyShows />} />
          <Route path="/editshows/:id" element={<EditShows />} />

          <Route path="/newtinerary" element={<NewTinerary />} />

          <Route path="/newshow" element={<NewShow />} />

        </Route>
      </Routes>
    </Main>
  );
}

export default App;
