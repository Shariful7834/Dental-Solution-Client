import React from "react";
import { useLoaderData } from "react-router-dom";
import AllServiceReview from "./AllServiceReview";
import ServiceDetails from "./ServiceDetails";

const DetailsService = () => {
  const detailService = useLoaderData();
  const { _id, title, img, price, description } = detailService;
  return (
    <div className="container">
      <ServiceDetails detailService={detailService}></ServiceDetails>
      <AllServiceReview></AllServiceReview>
    </div>
  );
};

export default DetailsService;
