import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { FaStar } from "react-icons/fa";
const ServiceDetails = ({ detailService }) => {
  const { _id, title, img, price, description, rating } = detailService;

  return (
    <div className="mt-5">
      <Card className="text-center">
        <Card.Header>
          <h1>{title}</h1>
        </Card.Header>
        <Row>
          <Col lg="6">
            <Image className="w-100 h-100" src={img}></Image>
          </Col>

          <Col lg="6">
            <Card.Body className="text-start">
              <Card.Title className="text-start mt-5">
                <h3>Service Cost ${price}</h3>
              </Card.Title>
              <div className="d-flex align-items-center"></div>
              <Card.Text>{description}</Card.Text>
              <Button className="fw-bold px-3 py-2" variant="outline-warning">
                Appointment
              </Button>
            </Card.Body>
          </Col>
        </Row>
        <Card.Footer className="text-muted">
          <h3 style={{ color: "gold" }}>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </h3>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default ServiceDetails;
