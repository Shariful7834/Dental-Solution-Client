import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
// import "./Login.css";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import ButtonGroup from "react-bootstrap/ButtonGroup";

import { toast } from "react-hot-toast";
import { AuthContext } from "../../../context/AuthProvider";
import useTitle from "../../../components/UseTitle";

const Login = () => {
  const { logIn, googleProvider, githubProvider } = useContext(AuthContext);
  const [error, setError] = useState("");
  let navigate = useNavigate();
  let location = useLocation();
  useTitle("Login");
  const from = location.state?.from?.pathname || "/";
  const handleSignIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    logIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        toast.success("Successfully logind");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  };
  const handleGoogle = () => {
    googleProvider()
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => console.error(error));
  };

  const handlerGitHub = () => {
    githubProvider()
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <Container className="vh-100 mt-5">
        <Row className=" d-flex justify-content-center ">
          <Col md={8} lg={6} xs={9}>
            <Card className="shadow">
              <Card.Body>
                <div className="mb-3 mt-md-4 text-center">
                  <h2 className="fw-bold mb-2 text-uppercase ">Login</h2>
                  <p className=" mb-5 text-center">
                    Please enter your login and password!
                  </p>
                  <div className="mb-3">
                    <Form onSubmit={handleSignIn}>
                      <Form.Group
                        className="mb-3 w-75 mx-auto"
                        controlId="formBasicEmail"
                      >
                        <Form.Control
                          className="fs-4"
                          type="email"
                          name="email"
                          placeholder="Enter email"
                          required
                        />
                      </Form.Group>

                      <Form.Group
                        className="mb-3 w-75 mx-auto"
                        controlId="formBasicPassword"
                      >
                        <Form.Control
                          className="fs-4"
                          type="password"
                          placeholder="Password"
                          name="password"
                          required
                        />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      >
                        <p className="small text-start mt-2 text-danger w-75 mx-auto">
                          {error}
                        </p>
                      </Form.Group>
                      <div className="d-grid ">
                        <Button
                          className="w-75 mx-auto fs-4 mt-3"
                          variant="primary"
                          type="submit"
                        >
                          Login
                        </Button>
                      </div>
                      <div className="mt-5 ">
                        <ButtonGroup vertical className="w-100">
                          <Button
                            onClick={handleGoogle}
                            variant="outline-primary"
                            className="mb-4 w-75 mx-auto"
                          >
                            <FaGoogle className="me-2" />
                            Google with Login
                          </Button>
                        </ButtonGroup>
                      </div>
                    </Form>
                    <div className="mt-3">
                      <p className="mb-0  text-center">
                        Don't have an account?{" "}
                        <Link to="/register">Create a new account</Link>
                      </p>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
