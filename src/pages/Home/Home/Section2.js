import React from "react";
import { Button } from "react-bootstrap";
import { Image } from "react-bootstrap";
import { FloatingLabel } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";

const Section2 = () => {
  return (
    <div className="my-5">
      <h2 className="text-center fs-1 mt-5 pt-5">Find Me</h2>

      <div className="mt-5 bg-secondary w-100 h-100 ">
        <Row className="container mx-auto">
          <Col lg="6" className="p-5 ">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  className="w-75"
                  type="text"
                  placeholder="Enter Your Name"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control
                  type="text"
                  className="w-75"
                  placeholder="Location"
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="formBasicCheckbox"
              ></Form.Group>

              <>
                <FloatingLabel
                  controlId="floatingTextarea"
                  label="Problem"
                  className="mb-3 text-secondary"
                >
                  <Form.Control
                    as="textarea"
                    placeholder="Leave a comment here"
                  />
                </FloatingLabel>
                <FloatingLabel
                  className="text-secondary"
                  controlId="floatingTextarea2"
                  label="Explain your problem here"
                >
                  <Form.Control
                    as="textarea"
                    placeholder="Leave a comment here"
                    style={{ height: "100px" }}
                  />
                </FloatingLabel>
              </>
              <Button className="mt-3" variant="outline-warning" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
          <Col lg="6" className="bg-light">
            <div className="p-3">
              <div className="position-relative">
                <Image
                  className="img-fluid"
                  src="https://images.theconversation.com/files/304957/original/file-20191203-66986-im7o5.jpg"
                ></Image>
                <Image
                  className="position-absolute bottom-0 end-0 w-25 "
                  src="https://www.what-dentist.com/img/accredited-logo.svg"
                ></Image>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Section2;
