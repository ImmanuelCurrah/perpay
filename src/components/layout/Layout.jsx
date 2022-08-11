import React from "react";
import Footer from "../../UI/Footer";
import NavBar from "../../UI/NavBar";

export default function Layout(props) {
  return (
    <>
      <NavBar />
      {props.children}
      <Footer />
    </>
  );
}
