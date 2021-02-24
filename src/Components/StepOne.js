import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import User from "../images/avatar1.png";
export default class StepOne extends Component {
  render() {
    return (
      <>
        <section>
          <Container>
            <h2 className="mt-5">Personal Details</h2>
            <Row className="mt-5">
              <Col className="col-md-6">
                {/* <div className="firsttwo"> */}
                <div>
                  <p>First Name</p>

                  <input type="text" name="fname" placeholder="Firstname" />

                  <p>Last Name</p>
                  <input type="text" name="lname" placeholder="Lastname" />
                  <p>Date Of Birth</p>
                  <input type="date" />

                  <p>E-mail Address</p>
                  <input type="email" name="email" placeholder="e-mail" />
                </div>
              </Col>
              <Col className="col-md-3 offset-md-1">
                <div className="avatar-wrapper offset-md-6">
                  <div className="upload-button">
                    <img src={User} alt="" />
                  </div>
                  <input className="file-upload" type="file" accept="image/*" />
                </div>
              </Col>
            </Row>

            <Row>
              <Col className="col-md-2">
                <p>Sex</p>
              </Col>
              <Col className="col-md-3">
                <div className="checklsbel">
                  <label>
                    <input type="radio" name="check"></input>Male
                  </label>
                </div>
              </Col>

              <Col className="col-md-3">
                <div className="checklsbel">
                  <label>
                    {" "}
                    <input type="radio" name="check"></input>Female
                  </label>
                </div>
              </Col>
            </Row>

            <Row>
              <Col className="col-md-2">
                <p>Matrimony</p>
              </Col>

              <Col className="col-md-3">
                <div className="checklsbel">
                  <label>
                    <input type="radio" name="check"></input>Married
                  </label>
                </div>
              </Col>

              <Col className="col-md-3">
                <div className="checklsbel">
                  <label>
                    <input type="radio" name="check"></input>Unmarried
                  </label>
                </div>
              </Col>
              <Col className="col-md-3">
                <div className="checklsbel">
                  <label>
                    <input type="radio" name="check"></input>Divorced
                  </label>
                </div>
              </Col>
            </Row>

            <Row>
              <Col>
                <p>Mobile No.</p>
                <input type="number" name="phone" placeholder="Enter Number" />
              </Col>
            </Row>

            <Row>
              <Col>
                <p>Date Of Joining</p>
                <input type="date" />
              </Col>
            </Row>

            <Row>
              <Col>
                <p>Present Address</p>
                <textarea></textarea>
              </Col>
            </Row>

            <Row>
              <Col>
                <p>Permanent Address</p>
                <textarea ></textarea>
                
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
