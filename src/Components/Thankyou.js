import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class Thankyou extends Component {
  render() {
    return (
      <>
        <section>
          <Container>
            <Row>
              <Col className="col-md-3">
                <div className="checklsbel">
                  <label>
                    <input type="checkbox" name="check"></input>
                    Company email-id
                  </label>
                </div>
              </Col>

              <Col className="col-md-3">
                <div className="checklsbel">
                  <label>
                    <input type="checkbox" name="check"></input>
                    Password
                  </label>
                </div>
              </Col>

              <Col className="col-md-3">
                <div className="checklsbel">
                  <label>
                    <input type="checkbox" name="check"></input>
                    Nitara-id
                  </label>
                </div>
              </Col>
            </Row>

            <Row className="mt-5">
              <Col className="text-center">
                <Link to="/completed">Finsh</Link>
              </Col>
            </Row>
          </Container>
        </section>
      </>
    );
  }
}
