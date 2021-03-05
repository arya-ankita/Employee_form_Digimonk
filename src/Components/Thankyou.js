import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import CancelIcon from "@material-ui/icons/Cancel";

export default class Thankyou extends Component {
  render() {
    return (
      <>
        <div className="loginBox pt-5 pb-5">
          <div className="checklsbel">
            <label>
              <CancelIcon />
              Company email-id
            </label>
          </div>

          <div className="checklsbel">
            <label>
              <CancelIcon />
              Password
            </label>
          </div>

          <div className="checklsbel">
            <label>
              <CancelIcon />
              Nitara-id
            </label>
          </div>

          {/* <Row className="mt-5">
              <Col className="text-center">
                <input type="submit" onClick={this.onClickn1}></input>
              </Col>
            </Row> */}
        </div>
      </>
    );
  }
}
