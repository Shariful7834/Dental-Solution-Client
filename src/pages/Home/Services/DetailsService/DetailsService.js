import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../../context/AuthProvider";
import AllServiceReview from "./MyReview";
import ServiceDetails from "./ServiceDetails";
import { Button, Form, Image } from "react-bootstrap";
import MyReview from "./MyReview";
import AllReview from "../../../Shared/AllReview/AllReview";
const DetailsService = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const detailService = useLoaderData();
  console.log(detailService);
  const { _id, title, img, price, description } = detailService;

  const handleAddReview = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = user?.displayName || form.name.value;
    const email = user?.email || form.email.value;
    const message = form.message.value;
    console.log(email, message);

    const reviews = {
      service: _id,
      name,
      title,
      email: user?.email,
      photoUrl: user?.photoURL,
      message,
    };

    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reviews),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          form.reset();
          alert("Review posted Successfully");
        }
      })
      .catch((error) => console.error(error));
  };

  // get all review data from database
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/reviews?service=${_id}`)
      .then((res) => res.json())
      .then((data) => setReviews(data))
      .catch((error) => console.error(error));
  }, [_id]);

  return (
    <div className="container">
      <ServiceDetails detailService={detailService}></ServiceDetails>

      {user?.uid ? (
        <>
          <div className="mb-5 border p-5 mt-3 bg-info">
            <Form onSubmit={handleAddReview}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Your Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  defaultValue={user?.displayName}
                  placeholder="Enter your name"
                  required
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  defaultValue={user?.email}
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
          </div>
        </>
      ) : (
        <h2 className="mt-3">Please login to add a review</h2>
      )}
      <h3 className="my-3">Patient reviews </h3>
      <div className="mt-5">
        {reviews.map((review) => (
          <AllReview key={review} review={review}></AllReview>
        ))}
      </div>

      {/* <MyReview></MyReview> */}

      {user?.displayName}
      {/* <Image
        roundedCircle
        style={{
          height: "40px",
          width: "40px",
          marginTop: "8px",
        }}
        src={user?.photoURL}
      /> */}
    </div>
  );
};

export default DetailsService;
