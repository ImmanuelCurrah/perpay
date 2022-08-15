import React from "react";

export default function NavBar() {
  return (
    <div className="h-12 w-screen bg-white flex flex-row items-center justify-between">
      <h2 className="flex flex-row text-4xl mx-4">
        <p className="text-emerald-600">per</p>
        <p className="text-blue-600">pay</p>
      </h2>
      <h2 className="text-4xl mx-4">DashBoard</h2>
    </div>
  );
}
