import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
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
            <Card.Body>
              <Card.Title className="text-start">
                Service Cost ${price}
              </Card.Title>
              <h3>rating {rating}</h3>
              <Card.Text>
                With supporting text below as a natural lead-in to additional
                content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Col>
        </Row>
        <Card.Footer className="text-muted">2 days ago</Card.Footer>
      </Card>
    </div>
  );
};

export default ServiceDetails;
