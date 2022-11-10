import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import ServiceItems from "./ServiceItems";
const AllServices = () => {
  const allServices = useLoaderData();

  const handleAddService = (event) => {
    event.preventDefault();
  };

  return (
    <div className="container mt-5">
      <h1>All services {allServices.length}</h1>
      <Row>
        <Col lg="10">
          <Row lg="3">
            {allServices.map((service) => (
              <ServiceItems key={service._id} service={service}></ServiceItems>
            ))}
          </Row>
        </Col>
        <Col lg="2" className="bg-light">
          <Form onSubmit={handleAddService}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Your Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Enter your name"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="name@example.com"
                disabled
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control name="message" as="textarea" rows={3} />
            </Form.Group>
            <Button type="submit" variant="success">
              Add Review
            </Button>{" "}
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default AllServices;
