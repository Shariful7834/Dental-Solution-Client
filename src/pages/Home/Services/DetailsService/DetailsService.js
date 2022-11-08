import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../../context/AuthProvider";
import AllServiceReview from "./AllServiceReview";
import ServiceDetails from "./ServiceDetails";
import { Button, Form, Image } from "react-bootstrap";
const DetailsService = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const detailService = useLoaderData();
  const { _id, title, img, price, description } = detailService;

  const handleAddReview = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = user?.displayName || "unregistered";
    const email = user?.email || "unregistered";
    const message = form.message.value;
    console.log(email, message);
  };

  const addReview = {};

  return (
    <div className="container ">
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
        <h2>Please Log in to post a review</h2>
      )}

      <AllServiceReview></AllServiceReview>
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
