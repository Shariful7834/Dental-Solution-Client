import React from "react";
import { Accordion } from "react-bootstrap";
import { Image } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";

const Blogs = () => {
  return (
    <div className="my-5 container">
      <h2 className="my-5 text-center">Blogs</h2>
      <Row>
        <Col lg="6" className="bg-light">
          <Image
            className="img-fluid w-75 mt-5"
            src="https://thumbs.dreamstime.com/b/handwriting-text-did-you-know-question-concept-meaning-asking-facts-informations-trivia-competition-written-notebook-book-114832979.jpg"
          ></Image>
        </Col>
        <Col lg="6" className="bg-light">
          <Accordion defaultActiveKey={["0"]} alwaysOpen>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                Difference Between JavaScript vs Node Js
              </Accordion.Header>
              <Accordion.Body>
                JavaScript is a simple programming language that runs in any
                browser JavaScript Engine. Javascript is a lightweight,
                object-oriented scripting language that is used to build dynamic
                HTML pages with interactive effects on a webpage. Whereas Node
                JS is an interpreter or running environment for a JavaScript
                programming language that holds many excesses, it requires
                libraries that can easily be accessed from JavaScript
                programming for better use. We can use Node.js to execute and
                run the code outside of the browser. Node.js was developed and
                introduced by Ryan Dahl in 2009. Node.js can be used to create a
                variety of applications, including web apps, real-time chat
                apps, command-line apps, and REST API servers, among others.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                Difference Between SQl and NoSQL database
              </Accordion.Header>
              <Accordion.Body>
                SQL databases are vertically scalable, SQL databases are
                primarily called Relational Databases (RDBMS). SQL databases are
                table-based.SQL databases follow ACID properties (Atomicity,
                Consistency, Isolation, and Durability) Great support is
                available for all SQL databases from their vendors. Also, a lot
                of independent consultants are there who can help you with SQL
                databases for very large-scale deployments. while NoSQL
                databases are horizontally scalable. NoSQL databases are
                primarily called non-relational or distributed databases. A
                NoSQL database has a dynamic schema for unstructured data. Data
                is stored in many ways which means it can be document-oriented,
                column-oriented, graph-based, or organized as a KeyValue store.
                NoSQL databases are either key-value pairs, document-based,
                graph databases, or wide-column stores.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="3">
              <Accordion.Header>
                What is the purpose of JWT and how does it work
              </Accordion.Header>
              <Accordion.Body>
                JWT, or JSON Web Token, is an open standard (RFC 7519) that
                defines a compact and self-contained way for securely
                transmitting information between parties as a JSON object. This
                information can be verified and trusted because it is digitally
                signed. In authentication, when the user successfully logs in
                using their credentials, a JSON Web Token will be returned.
                Since tokens are credentials, great care must be taken to
                prevent security issues. In general, you should not keep tokens
                longer than required. Whenever the user wants to access a
                protected route or resource, the user agent should send the JWT,
                typically in the Authorization header using the Bearer schema.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="4">
              <Accordion.Header>
                When should you use node.js and when should you use mongodb?
              </Accordion.Header>
              <Accordion.Body>
                Nodejs is a Javascript engine that we can write any application
                we want (by programming in the Javascript language). It runs our
                Javascript code. Any project needs a programming environment and
                a runtime library that offers you basic programming
                tools/support and can compile and/or interpret our code. Nodejs
                is a tool for the Javascript programming language. There are
                other similar tools for other languages as well. So, if we want
                to write some kind of stand-alone program or server in
                Javascript, then we can use node.js for it. MongoDB is a
                database engine. Code within some application or server uses
                MongoDB to save, query, or update data in a database. There are
                many web servers built with node.js that will then use MongoDB
                for storing data. If your application needs the ability to
                persistently store data in a way that you can efficiently query
                or update it later, then you would typically use some form of a
                database. There are dozens of popular databases. MongoDB is one
                such database.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>
    </div>
  );
};

export default Blogs;
