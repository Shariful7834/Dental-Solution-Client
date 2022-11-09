import React, { useContext } from "react";
import { Button, Card, Col, Image, Row } from "react-bootstrap";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { AuthContext } from "../../../../context/AuthProvider";

const Reviews = ({ myrev }) => {
  const { user } = useContext(AuthContext);
  const { img, title, message } = myrev;
  return (
    <div>
      {img}
      <Row className="bg-light mt-4 rounded d-flex align-items-center justify-content-between">
        {" "}
        <Col lg="1">
          {user?.uid && (
            <Image
              roundedCircle
              className="py-3 h-100 w-100"
              src={user.photoURL}
              variant="primary"
            ></Image>
          )}
        </Col>
        <Col lg="2">
          <h5>{user.displayName}</h5>
        </Col>
        <Col lg="2">
          <h4>{title}</h4>
        </Col>
        <Col lg="5">
          <p className="fs-5">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-quote"
                viewBox="0 0 16 16"
              >
                <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
              </svg>
            </span>
            {message}
          </p>
        </Col>
        <Col lg="1">
          <Button>
            <FaEdit></FaEdit>
          </Button>
        </Col>
        <Col lg="1">
          <Button variant="danger">
            <RiDeleteBin6Fill></RiDeleteBin6Fill>
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default Reviews;
