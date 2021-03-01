import React, { Component, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import User from "../images/avatar1.png";

export default class StepOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      dob: "",
      email: "",
      sex: "",
      matrimony: "",
      mobileno: "",
      dateofjoining: "",
      permanentaddress: "",
      presentaddress: "",
      photo: "",
    };

    this.handleAll1 = this.handleAll1.bind(this);
  }

  handleAll1 = (event) => {
    this.setState({ [event.target.name]: [event.target.value] });
  };

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

                  <input
                    type="text"
                    name="firstname"
                    value={this.state.firstname}
                    onChange={this.handleAll1}
                    // onChange={(event) => {
                    //   this.setState({ firstname: event.target.value });
                    // }}
                    placeholder="Firstname"
                  />

                  <p>Last Name</p>
                  <input
                    type="text"
                    name="lastname"
                    value={this.state.lastname}
                    onChange={this.handleAll1}
                    // onChange={(event) => {
                    //   this.setState({ lastname: event.target.value });
                    // }}
                    placeholder="Lastname"
                  />

                  <p>Date Of Birth</p>
                  <input
                    type="date"
                    name="dob"
                    value={this.state.dob}
                    onChange={this.handleAll1}
                    // onChange={(event) => {
                    //   this.setState({ dob: event.target.value });
                    // }}
                  />

                  <p>E-mail Address</p>
                  <input
                    type="email"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleAll1}
                    // onChange={(event) => {
                    //   this.setState({ email: event.target.value });
                    // }}
                    placeholder="e-mail"
                  />
                </div>
              </Col>
              <Col className="col-md-3 offset-md-1">
                <div className="avatar-wrapper offset-md-6">
                  <div className="upload-button">
                    <img src={User} alt="" />
                  </div>
                  <input
                    className="file-upload"
                    type="file"
                    name="photo"
                    value={this.state.photo}
                    onChange={this.handleAll1}
                    // onChange={(event) => {
                    //   this.setState({ photo: event.target.value });
                    // }}
                    accept="image/*"
                  />
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
                    <input
                      type="radio"
                      name="sex"
                      value="male"
                      onChange={(e) => this.setState({ sex: e.target.value })}
                      // onChange={(event) => {
                      //   this.setState({ sex: event.target.value });
                      // }}
                    ></input>
                    Male
                  </label>
                </div>
              </Col>

              <Col className="col-md-3">
                <div className="checklsbel">
                  <label>
                    <input
                      type="radio"
                      name="sex"
                      value={this.state.sex}
                      onChange={this.handleAll1}
                      // onChange={(event) => {
                      //   this.setState({ sex: event.target.value });
                      // }}
                    ></input>
                    Female
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
                    <input
                      type="radio"
                      name="matrimony"
                      value={this.state.matrimony}
                      onChange={this.handleAll1}
                      // onChange={(event) => {
                      //   this.setState({ matrimony: event.target.value });
                      // }}
                    ></input>
                    Married
                  </label>
                </div>
              </Col>

              <Col className="col-md-3">
                <div className="checklsbel">
                  <label>
                    <input
                      type="radio"
                      name="matrimony"
                      value={this.state.matrimony}
                      onChange={this.handleAll1}
                      // onChange={(event) => {
                      //   this.setState({ matrimony: event.target.value });
                      // }}
                    ></input>
                    Single
                  </label>
                </div>
              </Col>
              <Col className="col-md-3">
                <div className="checklsbel">
                  <label>
                    <input
                      type="radio"
                      name="matrimony"
                      value={this.state.matrimony}
                      onChange={this.handleAll1}
                      // onChange={(event) => {
                      //   this.setState({ matrimony: event.target.value });
                      // }}
                    ></input>
                    Divorced
                  </label>
                </div>
              </Col>
            </Row>

            <Row>
              <Col>
                <p>Mobile No.</p>
                <input
                  type="number"
                  name="mobileno"
                  value={this.state.mobileno}
                  onChange={this.handleAll1}
                  // onChange={(event) => {
                  //   this.setState({ mobileno: event.target.value });
                  // }}
                  placeholder="Enter Number"
                />
              </Col>
            </Row>

            <Row>
              <Col>
                <p>Date Of Joining</p>
                <input
                  type="date"
                  name="dateofjoining"
                  value={this.state.dateofjoining}
                  onChange={this.handleAll1}
                  // onChange={(event) => {
                  //   this.setState({ dateofjoining: event.target.value });
                  // }}
                />
              </Col>
            </Row>

            <Row>
              <Col>
                <p>Present Address</p>
                <textarea
                  name="presentaddress"
                  value={this.state.presentaddress}
                  onChange={this.handleAll1}
                  // onChange={(event) => {
                  //   this.setState({ presentaddress: event.target.value });
                  // }}
                ></textarea>
              </Col>
            </Row>

            <Row>
              <Col>
                <p>Permanent Address</p>
                <textarea
                  name="permanentaddress"
                  value={this.state.permanentaddress}
                  onChange={this.handleAll1}
                  // onChange={(event) => {
                  //   this.setState({ permanentaddress: event.target.value });
                  // }}
                ></textarea>
              </Col>
            </Row>

            <Row className="mt-5">
              <Col className="text-center">
                <button
                  onClick={() => {
                    this.props.steponetotwo(this.state);
                  }}
                >
                  Next
                </button>
              </Col>
            </Row>
          </Container>
        </section>
      </>
    );
  }
}
