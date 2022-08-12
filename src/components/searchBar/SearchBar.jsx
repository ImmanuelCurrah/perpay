import { useState } from "react";

export default function SearchBar(props) {
  return (
    <div className="text-center">
      <input
        className="w-9/12 m-2"
        type="text"
        placeholder="search..."
        value={""}
        onChange={(e) => {
          console.log(e.target.value);
        }}
      />
    </div>
  );
}
