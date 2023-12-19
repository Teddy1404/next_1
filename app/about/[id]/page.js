import React from "react";
import { redirect } from "next/navigation";
const id = ({ params }) => {
  if (params.id == "4") {
    redirect("/login");
  }
  return <div>Id - {params.id}</div>;
};

export default id;
