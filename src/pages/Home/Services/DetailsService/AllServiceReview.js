import React, { useContext } from "react";
import { Card, Image } from "react-bootstrap";
import { AuthContext } from "../../../../context/AuthProvider";

const AllServiceReview = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <Card>
        <Card.Body>
          <div>
            {user?.uid && <Image src={user.photoURL} variant="primary"></Image>}
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default AllServiceReview;
