import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import { toast } from "react-hot-toast";
const Update = () => {
  const storedMyreview = useLoaderData();
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState(storedMyreview);

  const { _id, title, img, price, description, name } = storedMyreview;
  const handleUpdateReview = (event) => {
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

    fetch(`http://localhost:5000/myreviews/${storedMyreview._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reviews),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Successfully Updated the Review");
        }
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="container">
      <h1>plese update your Review {storedMyreview.name}</h1>

      <div className="mb-5 border p-5 mt-3 bg-info">
        <Form onSubmit={handleUpdateReview}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Your Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              defaultValue={user?.displayName}
              placeholder="Enter your name"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              defaultValue={user?.email}
              placeholder="name@example.com"
              disabled
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Example textarea</Form.Label>
            <Form.Control
              name="message"
              defaultValue={storedMyreview.message}
              as="textarea"
              rows={3}
            />
          </Form.Group>
          <Button type="submit" variant="success">
            Update Review
          </Button>{" "}
        </Form>
      </div>
    </div>
  );
};

export default Update;
