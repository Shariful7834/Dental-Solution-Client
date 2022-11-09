import React from "react";
import { useLoaderData } from "react-router-dom";
const AllServices = () => {
  const allServices = useLoaderData();
  return (
    <div className="container mt-5">
      <h1>All services {allServices.length}</h1>
    </div>
  );
};

export default AllServices;
