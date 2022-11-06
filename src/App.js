import Main from "./layouts/Main";
import Home from "./pages/Home";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Cities from "./pages/Cities";
import SignIn from "./pages/SignIn";
import Hotels from "./pages/Hotels";
/* import NotFound from "./pages/NotFound"; */

function App() {
  return (
    <Main>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/index" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/cities" element={<Cities />} />
        <Route path="/hotels" element={<Hotels />} />
        {/* <Route path="/detailscities" element={<Details />} /> */}
        <Route path="/signin" element={<SignIn/>} />
       </Routes>
    </Main>
  );
}

export default App;
