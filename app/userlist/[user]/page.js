import React from "react";

const user = ({ params }) => {
  console.log(params);
  return <div>My name is {params.user}</div>;
};

export default user;
