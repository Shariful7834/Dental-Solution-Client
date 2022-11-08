import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./ServicesItems.css";
import { PhotoProvider, PhotoView } from "react-photo-view";
const ServiceItems = ({ service }) => {
  const { title, img, price, description, _id, rating } = service;
  <PhotoProvider bannerVisible={false} />;
  return (
    <div className="mt-5">
      <Card>
        {/* <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <PhotoProvider>
                <PhotoView src={img}>
                  <Card.Img src={img} alt="" />
                </PhotoView>
              </PhotoProvider>
              <Card.Img
                className="img-fluid w-100 h-100"
                src={img}
                alt="Avatar"
              />
            </div>
            <div className="flip-card-back">
              <h1>John Doe</h1>
              <p>Architect & Engineer</p>
              <p>We love that guy</p>
            </div>
          </div>
        </div> */}

        <PhotoProvider bannerVisible={false}>
          <PhotoView src={img}>
            <Card.Img
              className="img-fluid w-100 h-100"
              src={img}
              alt="Avatar"
            />
          </PhotoView>
        </PhotoProvider>

        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {description?.length > 100
              ? description.slice(0, 100) + " ..."
              : description}
          </Card.Text>
          <div className="d-flex justify-content-between mt-4">
            <h5>Cost : ${price}</h5>
            <span>Rating : {rating}</span>
            <div>
              <Link to={`/detailsService/${_id}`}>
                <Button variant="primary">View Details</Button>
              </Link>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ServiceItems;
