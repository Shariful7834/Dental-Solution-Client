import React, { useContext, useEffect, useState } from "react";
import { Button, Card, Image, Row, Col } from "react-bootstrap";
import { AuthContext } from "../../../../context/AuthProvider";
import Reviews from "./Reviews";

const MyReview = () => {
  const { user } = useContext(AuthContext);
  const [myReviews, setMyReviews] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/myreviews?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyReviews(data))
      .catch((error) => console.error(error));
  }, [user?.email]);

  fetch();
  return (
    <div className="container mt-5">
      <h2>You have {myReviews.length} reviews</h2>
      <div>
        <Row className=" py-3 bg-light mt-4 rounded d-flex align-items-center justify-content-between">
          <Col lg="1">
            <h4>Image</h4>
          </Col>
          <Col lg="2">
            <h4>Name</h4>
          </Col>
          <Col lg="2">
            <h4>Title</h4>
          </Col>
          <Col lg="5">
            <h4>Message</h4>
          </Col>
          <Col lg="1">
            <h4>Update</h4>
          </Col>
          <Col lg="1">
            <h4>Delete</h4>
          </Col>
        </Row>
        <Row>
          {myReviews.map((myrev) => (
            <Reviews key={myrev._id} myrev={myrev}></Reviews>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default MyReview;
{
  /* <div>
            {user?.uid && <Image src={user.photoURL} variant="primary"></Image>}
            {user?.uid && user.displayName}
          </div> */
}
