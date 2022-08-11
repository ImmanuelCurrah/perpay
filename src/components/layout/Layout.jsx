import React from "react";
import Footer from "../../UI/Footer";
import NavBar from "../../UI/NavBar";

export default function Layout(props) {
  return (
    <div className="h-screen w-screen bg-slate-400 overflow-auto">
      <NavBar />
      {props.children}
      <Footer />
    </div>
  );
}
