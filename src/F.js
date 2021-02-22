import React, { Component } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";


const label = [
  {
    name: "First Name",
  },
  {
    name: "Last Name",
  },
  {
    name: " Name",
  },
  {
    name: "First Name",
  },
  {
    name: "First Name",
  },
  {
    name: "First Name",
  },
];
export default class F extends Component {
  render() {
    return (
      <>
        <div className="loginBox">
          <h2>Personal Details</h2>
          <Container>
            <Form>
              <Row>
                <Col md="4">
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>first Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Name" />
                  </Form.Group>
                </Col>
                <Col md="4">
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Your Last Name" />
                  </Form.Group>
                </Col>
                <Col md="4">
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Photo Upload</Form.Label>
                    <Form.Control type="file" />
                  </Form.Group>
                </Col>
              </Row>
            </Form>
          </Container>
        </div>
      </>
    );
  }
}
