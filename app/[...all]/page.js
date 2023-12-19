"use client";
import React from "react";

const all = ({ params }) => {
  console.log(params);
  return (
    <div>
      theese are the url values {params.all}
      <br />
      All Routes
      {params.all.map((p) => (
        <li key={p}> {p}</li>
      ))}
    </div>
  );
};

export default all;
