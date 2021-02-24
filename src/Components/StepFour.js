import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

export default class StepFour extends Component {
  render() {
    return (
      <>
        <section>
          <Container>
            <h2 className="mt-5">Emergency Contact Details</h2>
            <Row className="mt-5">
              <Col>
                <p>Name</p>
                <input type="text" placeholder="Enter Name" />
              </Col>
            </Row>

            <Row className="mt-4">
              <Col>
                <p>Relation</p>
                <input type="text" placeholder="Enter Relation" />
              </Col>
            </Row>

            <Row className="mt-4">
              <Col>
                <p>Contact No.</p>
                <input type="number" placeholder="Enter Number" />
              </Col>
            </Row>

            <Row className="mt-4">
              <Col>
                <p>Address</p>
                <textarea></textarea>
              </Col>
            </Row>

            <Row className="mb-4">
              <Col className="col-md-12">
                <div className="checklsbel ">
                  <label>
                    {" "}
                    <input type="checkbox" name="check"></input>
                    Everything I have mentioned is true to the best of my
                    knowledge.
                  </label>
                </div>
              </Col>
            </Row>
            <Row>
              <Col className="text-center">
                <input type="Submit" name="sbmt" />
              </Col>
            </Row>
          </Container>
        </section>
      </>
    );
  }
}
