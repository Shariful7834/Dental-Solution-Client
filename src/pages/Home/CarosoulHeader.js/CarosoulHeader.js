import React from "react";
import { Carousel, Row, Col, Button } from "react-bootstrap";
import Brand1 from "../../../assets/Brand1.jpg";
import Brand2 from "../../../assets/Brand2.jpg";
import Brand3 from "../../../assets/Brand3.jpg";
const CarosoulHeader = () => {
  return (
    <div className=" bg-info w-100">
      <div className="container">
        <Row>
          <Col lg="6">
            <div className=" fs-4">
              <h1 className="text-white mt-5" style={{ fontSize: "3.5rem" }}>
                Put dental health in <br />
                thrusted hands
              </h1>
              <p>
                We offer top quality dental treatment & services for <br />
                healthy and beautiful smile
              </p>
              <Button
                className="mt-3"
                variant="outline-light fw-bold fs-5 text-warning"
              >
                Appointment
              </Button>
            </div>
          </Col>
          <Col lg="6">
            <div className="container">
              <Carousel variant="light">
                <Carousel.Item>
                  <img
                    className="img-fluid d-block w-100"
                    src={Brand1}
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="img-fluid d-block w-100"
                    src={Brand2}
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="img-fluid d-block w-100"
                    src={Brand3}
                    alt="Second slide"
                  />
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className="img-fluid d-block w-100"
                    src={Brand3}
                    alt="Second slide"
                  />
                </Carousel.Item>
              </Carousel>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default CarosoulHeader;
