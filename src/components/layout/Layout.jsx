import React from "react";
import Footer from "../../UI/Footer";
import NavBar from "../../UI/NavBar";

export default function Layout(props) {
  return (
    <div className="h-max w-screen flex flex-col items-center">
      <NavBar />
      {props.children}
      <Footer />
    </div>
  );
}
