import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

export default class StepThree extends Component {
  render() {
    return (
      <>
        <section>
          <Container>
            <h2 className="mt-5">Bank Account Details </h2>
            <Row>
              <Col className="mt-4">
                <p>Bank Name</p>
                <input
                  type="number"
                  name="account no."
                  placeholder="Enter Account No."
                />
              </Col>
            </Row>

            <Row>
              <Col className="mt-4">
                <p>IFSC Code</p>
                <input type="text" name="code" placeholder="Enter IFSC code" />
              </Col>
            </Row>

            <Row>
              <Col className="mt-4">
                <p>Bank Account No.</p>
                <input
                  type="number"
                  name="account no."
                  placeholder="Enter Account No."
                />
              </Col>
            </Row>

            <Row className="mt-5">
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
