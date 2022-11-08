import React from "react";
import {
  Navbar,
  Container,
  Nav,
  Button,
  Image,
  Tooltip,
  OverlayTrigger,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { useContext } from "react";
import logo1 from "../../../assets/logo1.png";
import { BsCircleHalf } from "react-icons/bs";
import { AuthContext } from "../../../context/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const signOutUser = () => {
    logOut()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .then((error) => console.error(error));
  };
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
        sticky="top"
      >
        <Container>
          <Navbar.Brand className="d-flex align-items-center">
            {/* <Image
            roundedCircle
            style={{ width: "50px", height: "50px" }}
            src={logo}
            alt=""
            className="d-inline-block align-top"
          /> */}
            <Link style={{ textDecoration: "none" }} to="/">
              <h2 style={{ color: "tomato" }} className=" fs-1 py-2 ms-2">
                Dental Solution
              </h2>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto ">
              <Link
                style={{
                  textDecoration: "none",
                  marginRight: "50px",
                  color: "black",
                  fontSize: "18px",
                  marginTop: "3px",
                }}
                to="/faq"
              >
                <span>FAQ</span>
              </Link>
            </Nav>
            <Nav>
              {user?.uid ? (
                <>
                  <Link
                    style={{
                      textDecoration: "none",
                      marginRight: "50px",
                      marginTop: "20px",
                      color: "black",
                      fontSize: "20px",
                    }}
                    to="/reviews"
                  >
                    My Reviews
                  </Link>
                  <Link
                    style={{
                      textDecoration: "none",
                      marginRight: "50px",
                      marginTop: "20px",
                      color: "black",
                      fontSize: "20px",
                    }}
                    to="/addServices"
                  >
                    <span>Add Service</span>
                  </Link>
                  <Button
                    className="fs-5 me-3 text-dark mt-3 "
                    variant="outline-info"
                    style={{
                      height: "40px",
                      marginTop: "5px",
                    }}
                    onClick={logOut}
                  >
                    LogOut
                  </Button>
                </>
              ) : (
                <>
                  <Button className=" me-3 " variant="outline-info">
                    <Link
                      style={{
                        textDecoration: "none",
                        color: "black",
                        fontSize: "20px",
                      }}
                      className="me-3 "
                      to="/login"
                    >
                      Login
                    </Link>
                  </Button>

                  <Button className=" me-3  " variant="outline-info">
                    {" "}
                    <Link
                      style={{
                        textDecoration: "none",
                        color: "black",
                        fontSize: "20px",
                      }}
                      to="/register"
                    >
                      Register
                    </Link>
                  </Button>
                </>
              )}

              <div>
                <Nav.Link>
                  {user?.uid ? (
                    <>
                      <OverlayTrigger
                        placement="bottom"
                        overlay={
                          <Tooltip id="button-tooltip-2">
                            {user?.displayName}
                          </Tooltip>
                        }
                      >
                        {({ ref, ...triggerHandler }) => (
                          <span
                            variant="light"
                            {...triggerHandler}
                            className="d-inline-flex align-items-center rounded-3"
                          >
                            <Image
                              roundedCircle
                              style={{
                                height: "40px",
                                width: "40px",
                                marginTop: "8px",
                              }}
                              src={user?.photoURL}
                              ref={ref}
                            />
                          </span>
                        )}
                      </OverlayTrigger>
                    </>
                  ) : (
                    <>
                      <FaUserAlt
                        style={{ width: "23px", height: "23px" }}
                      ></FaUserAlt>
                    </>
                  )}
                </Nav.Link>
              </div>
            </Nav>
            {/* <Nav.Link>
              <BsCircleHalf
                style={{ width: "23px", height: "23px" }}
                className="ms-3 text-dark"
              ></BsCircleHalf>{" "}
              <span className="fs-6 text-dark">Theme</span>
            </Nav.Link> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
