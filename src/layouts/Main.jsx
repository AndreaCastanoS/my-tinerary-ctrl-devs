import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import AutoToTop from "../components/AutoToTop";
import ScrollToTop from "../components/ScrollToTop";

export default function Main(props) {
  return (
    <div className="w-100 vh-100 flex column j-center a-center">
      <NavBar />
      <AutoToTop />
      <div className="flex grow w-100 vh-100 column justify-center align-center">
        {props.children}
      </div>
      <ScrollToTop />
      <Footer />
    </div>
  );
}
