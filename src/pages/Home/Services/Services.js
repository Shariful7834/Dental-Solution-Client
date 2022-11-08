import React, { useEffect, useState } from "react";
import ServiceItems from "./ServiceItems";
import { Row } from "react-bootstrap";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="container">
      <div>
        <h1 className="fs-1 fw-bold text-center mt-5">
          Our Services {services.length}
        </h1>
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
    </div>
  );
};

export default Services;
