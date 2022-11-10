import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import ServiceItems from "./ServiceItems";
const AllServices = () => {
  // const allServices = useLoaderData();
  const [allServices, SetAllServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/allservices")
      .then((res) => res.json())
      .then((data) => SetAllServices(data))
      .catch((error) => console.error(error));
  }, [allServices]);

  const handleAddService = (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const img = form.img.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const description = form.description.value;
    console.log(title, img, price, rating, description);

    const services = {
      title,
      img,
      price,
      rating,
      description,
    };

    fetch("http://localhost:5000/allservices", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(services),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          form.reset();
          alert("Service added Successfully");
        }
      })
      .catch((error) => console.error(error));
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
              <Form.Label>Add title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                placeholder="Service Title"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Add Service Image</Form.Label>
              <Form.Control
                type="text"
                name="img"
                placeholder="Image Url"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="text"
                name="price"
                placeholder="Add price"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>rating</Form.Label>
              <Form.Control
                type="text"
                name="rating"
                placeholder="Rating"
                required
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control
                name="description"
                as="textarea"
                rows={3}
                required
              />
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
