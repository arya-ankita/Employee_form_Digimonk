import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
// import Image from "react-bootstrap/Image";
import Navbar from "react-bootstrap/Navbar";
import User from "../src/images/avatar1.png";
import digi from "../src/images/digimonk.jpeg";

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

export default class Form1 extends Component {
  render() {
    return (
      <>
        <div className="top-header mb-5">
          <Container className="half-div ">
            <Row className="align-items-center">
              <Col md="3">
                <img
                  src={digi}
                  width="200"
                  height="100"
                  className="d-inline-block align-top"
                  alt="Digimonk"
                />
              </Col>
              <Col md="9">
                <h1 className="colours">Employee Joining Form</h1>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="loginBox">
          <h2>Personal Details</h2>

          <form>
            <section>
              <Container>
                <Row>
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
                  <Col className="col-md-3">
                    <div className="avatar-wrapper offset-md-6">
                      <div className="upload-button">
                        <img src={User} alt="" />
                      </div>
                      <input
                        className="file-upload"
                        type="file"
                        accept="image/*"
                      />
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col className="col-md-2">
                    <p>Sex</p>
                  </Col>
                  <Col className="col-md-1">
                    <input type="checkbox" name="check"></input>
                  </Col>
                  <Col className="col-md-2">
                    <p>Male</p>
                  </Col>
                  <Col className="col-md-1">
                    <input type="checkbox" name="check"></input>
                  </Col>
                  <Col className="col-md-1">
                    <p>Female</p>
                  </Col>
                </Row>

                <Row>
                  <Col className="col-md-2">
                    <p>Matrimony</p>
                  </Col>
                  <Col className="col-md-1">
                    <input type="checkbox" name="check"></input>
                  </Col>
                  <Col className="col-md-2">
                    <p>Married</p>
                  </Col>
                  <Col className="col-md-1">
                    <input type="checkbox" name="check"></input>
                  </Col>
                  <Col className="col-md-2">
                    <p>Unmarried</p>
                  </Col>
                  <Col className="col-md-1">
                    <input type="checkbox" name="check"></input>
                  </Col>
                  <Col className="col-md-1">
                    <p>Divorced</p>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <p>Mobile No.</p>
                    <input
                      type="number"
                      name="phone"
                      placeholder="Enter Number"
                    />
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
                    <p>Bank Account No.</p>
                    <input
                      type="number"
                      name="account no."
                      placeholder="Enter Account No."
                    />
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <p>IFSC Code</p>
                    <input
                      type="text"
                      name="code"
                      placeholder="Enter IFSC code"
                    />
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <p>Present Address</p>
                    <input
                      type="text"
                      name="address"
                      Placeholder="Enter Present Address"
                    />

                    <input
                      type="text"
                      name="address"
                      Placeholder="Enter Present Address"
                    />
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <p>Permanent Address</p>
                    <input
                      type="text"
                      name="residential address"
                      Placeholder="Enter Permanent Address"
                    />
                    <input
                      type="text"
                      name="residential address"
                      Placeholder="Enter Permanent Address"
                    />
                  </Col>
                </Row>
              </Container>
            </section>

            <section className="space">
              <Container>
                <h2>Educational Details</h2>
                {Text.map((c, index) => (
                  <>
                    <Row>
                      <Col>
                        <p>{c.Name}</p>

                        <input type="file" id="myFile" name="filename"></input>
                      </Col>
                    </Row>
                  </>
                ))}
              </Container>
            </section>

            <section>
              <Container>
                <h2>Emergency Contact Details</h2>
                <Row>
                  <Col>
                    <p>Name</p>
                    <input type="text" placeholder="Enter Name" />
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <p>Relation</p>
                    <input type="text" placeholder="Enter Relation" />
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <p>Contact No.</p>
                    <input type="number" placeholder="Enter Number" />
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <p>Address</p>
                    <input type="text" placeholder="Enter Address" />
                    <input type="text" placeholder="Enter Address" />
                  </Col>
                </Row>

                <Row>
                  <Col className="col-md-12">
                    <label>
                      {" "}
                      <input
                        className="mr-4"
                        type="checkbox"
                        name="check"
                      ></input>
                      Everything I have mentioned is true to the best of my
                      knowledge.
                    </label>
                  </Col>
                </Row>
                <Row>
                  <Col className="text-center">
                    <input type="Submit" name="sbmt" />
                  </Col>
                </Row>
              </Container>
            </section>
          </form>
        </div>
      </>
    );
  }
}
