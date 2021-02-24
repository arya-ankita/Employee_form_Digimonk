import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
// import Image from "react-bootstrap/Image";
import digi from "../images/digimonk.jpeg";
import StepOne from "./StepOne";
import StepThree from "./StepFour";
import StepTwo from "./StepTwo";
import StepFour from "./StepThree";
import Thankyou from "./Thankyou";
import { NavLink } from "react-router-dom";
import Complete from "./Complete";

export default class Form1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "stepone",
    };
  }
  ChangeTab = (type) => (e) => {
    console.log(type);
    this.setState({
      type: type,
    });
  };
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

        <div className="stepNavbar">
          <Container>
            <div>
              <div className="Bar ">
                <ul>
                  <li>
                    <NavLink
                      to="#"
                      onClick={this.ChangeTab("stepone")}
                      activeClassName={
                        this.state.type === "stepone" ? "stepactive" : ""
                      }
                    >
                      <i class="fa fa-user-o"></i>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="#"
                      onClick={this.ChangeTab("steptwo")}
                      activeClassName={
                        this.state.type === "steptwo" ? "stepactive" : ""
                      }
                    >
                      <i class="fa fa-graduation-cap"></i>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="#"
                      onClick={this.ChangeTab("stepthree")}
                      activeClassName={
                        this.state.type === "stepthree" ? "stepactive" : ""
                      }
                    >
                      <i class="fa fa-lock"></i>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="#"
                      onClick={this.ChangeTab("stepfour")}
                      activeClassName={
                        this.state.type === "stepfour" ? "stepactive" : ""
                      }
                    >
                      <i class="fa fa-address-book"></i>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="#"
                      onClick={this.ChangeTab("thankyou")}
                      activeClassName={
                        this.state.type === "thankyou" ? "stepactive" : ""
                      }
                    >
                      <i class="fa fa-check"></i>
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </Container>
        </div>

        <div className="loginBox">
          <form>
            {this.state.type === "stepone" ? <StepOne /> : ""}
            {this.state.type === "steptwo" ? <StepTwo /> : ""}
            {this.state.type === "stepthree" ? <StepFour /> : ""}
            {this.state.type === "stepfour" ? <StepThree /> : ""}
            {this.state.type === "thankyou" ? <Thankyou /> : ""}
            {this.state.type === "complete" ? <Complete /> : ""}
          </form>
        </div>
      </>
    );
  }
}
