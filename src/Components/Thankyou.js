import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class Thankyou extends Component {
  componentDidMount = () => {
    console.log(this.props);
  };

  handleAll1 = (event) => {
    this.setState({ [event.target.name]: [event.target.value] });
  };

  render() {
    return (
      <>
        <section>
          <Container>
            <Row>
              <Col className="col-md-3">
                <div className="checklsbel">
                  <label>
                    <input
                      type="checkbox"
                      name="check"
                      // value={this.state.check}
                      onChange={this.handleAll1}
                    ></input>
                    Company email-id
                  </label>
                </div>
              </Col>

              <Col className="col-md-3">
                <div className="checklsbel">
                  <label>
                    <input
                      type="checkbox"
                      name="check2"
                      value={this.state.check2}
                      onChange={this.handleAll1}
                    ></input>
                    Password
                  </label>
                </div>
              </Col>

              <Col className="col-md-3">
                <div className="checklsbel">
                  <label>
                    <input
                      type="checkbox"
                      name="check3"
                      value={this.state.check3}
                      onChange={this.handleAll1}
                    ></input>
                    Nitara-id
                  </label>
                </div>
              </Col>
            </Row>

            <Row className="mt-5">
              <Col className="text-center">
                <input type="submit" onClick={this.onClickn1}></input>
              </Col>
            </Row>
          </Container>
        </section>
      </>
    );
  }
}
