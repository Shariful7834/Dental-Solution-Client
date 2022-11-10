import React from "react";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { BiTime } from "react-icons/bi";
import { ImLocation2 } from "react-icons/im";
import { FiPhoneCall } from "react-icons/fi";

const Sections1 = () => {
  return (
    <div className="mt-5 container">
      <h2 className="text-center fs-1 mt-5 pt-5">Find Me</h2>
      <div>
        <Row className="mt-5 d-flex justify-content-center align-items-center gap-2">
          <Col className="p-5" lg="3" style={{ backgroundColor: "tomato" }}>
            <div className="d-flex justify-content-around align-items-center">
              <div>
                <BiTime
                  style={{ width: "80px", height: "80px", color: "white" }}
                ></BiTime>
              </div>
              <div>
                <h5>Opening Hours</h5>
                <p className="text-light">9.00 - 17.00 sat-Thu</p>
              </div>
            </div>{" "}
          </Col>
          <Col className="p-5 bg-info" lg="4">
            <div className="d-flex justify-content-around align-items-center">
              <div>
                <ImLocation2
                  style={{ width: "80px", height: "80px", color: "white" }}
                ></ImLocation2>
              </div>
              <div>
                <h5>Location</h5>
                <p className="text-light">Emil-figge . Dortmund</p>
              </div>
            </div>{" "}
          </Col>
          <Col className="p-5 bg-warning" lg="4">
            <div className="d-flex justify-content-around align-items-center">
              <div>
                <FiPhoneCall
                  style={{ width: "80px", height: "80px", color: "white" }}
                ></FiPhoneCall>
              </div>
              <div>
                <h5>Contact Me</h5>
                <p className="text-light">+4915221472586</p>
              </div>
            </div>{" "}
          </Col>
          {/* <Col className='bg-info p-4' lg='3'><ImLocation2 style={{width:'80px', height:'80px', color:'white'}}></ImLocation2>Visit our location</Col>
                <Col className='bg-warning p-4' lg='3'><FiPhoneCall style={{width:'50px', height:'80px', color:'white'}}></FiPhoneCall>  Contact us  +49015221472586</Col> */}
        </Row>
      </div>

      {/* <Section2></Section2>
      <Blogs></Blogs>
      <SpinnerLoading></SpinnerLoading> */}
    </div>
  );
};

export default Sections1;
