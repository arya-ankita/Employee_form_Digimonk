import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

const Text = [
  {
    Name: "High School",
  },
  {
    Name: "Higher Secondary",
  },
  {
    Name: "Graduation/Diploma",
  },
  {
    Name: "Post Graduation",
  },
];

export default class StepTwo extends Component {
  render() {
    return (
      <>
        <section className="space">
          <Container>
            <h2 className="mt-5">Educational Details</h2>
            {Text.map((c, index) => (
              <>
                <Row className="mt-4">
                  <Col>
                    <p>{c.Name}</p>
                    <input type="file" id="myFile" name="filename"></input>
                  </Col>
                </Row>
              </>
            ))}
            <Row className="mt-5">
              <Col md="12" className="text-center">
                <input type="Submit" name="sbmt" />
              </Col>
            </Row>
          </Container>
        </section>
      </>
    );
  }
}
