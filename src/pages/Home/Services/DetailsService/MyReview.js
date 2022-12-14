import React, { useContext, useEffect, useState } from "react";
import { Button, Card, Image, Row, Col } from "react-bootstrap";
import { AuthContext } from "../../../../context/AuthProvider";
import Reviews from "./Reviews";
import { toast } from "react-hot-toast";
import useTitle from "../../../../components/UseTitle";

const MyReview = () => {
  const { user } = useContext(AuthContext);
  const [myReviews, setMyReviews] = useState([]);
  useTitle("My Review");

  useEffect(() => {
    fetch(
      `https://dental-solution-server.vercel.app/myreviews?email=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => setMyReviews(data))
      .catch((error) => console.error(error));
  }, [user?.email]);

  const deleteHandler = (_id) => {
    const proceed = window.confirm("Do you want to detete this review?");
    if (proceed) {
      fetch(`https://dental-solution-server.vercel.app/myreviews/${_id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            toast.success("Review deleted Successfully");
            const remaining = myReviews.filter((rev) => rev._id !== _id);
            setMyReviews(remaining);
          }
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className="container mt-5 ">
      <h2>You have {myReviews.length} reviews</h2>
      <div style={{ height: "100vh" }}>
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
            <Reviews
              key={myrev._id}
              myrev={myrev}
              deleteHandler={deleteHandler}
            ></Reviews>
          ))}
          <div>
            <div className="text-center">
              {myReviews.length < 1 && <h2>No data found</h2>}
            </div>
          </div>
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
