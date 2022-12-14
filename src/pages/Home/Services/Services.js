import React, { useEffect, useState } from "react";
import ServiceItems from "./ServiceItems";
import { Button, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://dental-solution-server.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="container">
      <div>
        <h1 className="fs-1 fw-bold text-center mt-5">Dental Services</h1>
        <p className="fs-5 text-center w-50 mx-auto">
          Highly-qualified dentist and good population coverage together mean
          that dental care in Germany ranks as one of the best in Europe. This
          page covers the basics services .
        </p>
      </div>
      <Row lg="3">
        {services.map((service) => (
          <ServiceItems key={service._id} service={service}></ServiceItems>
        ))}
      </Row>
      <Row className="text-center fw-bold">
        <Link to="/seeAllServices">
          <Button className="mx-auto w-25 fw-bold fs-4">See All</Button>
        </Link>
      </Row>
    </div>
  );
};

export default Services;
