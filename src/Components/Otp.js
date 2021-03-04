import React, { Component } from 'react'
import OtpInput from "react-otp-input";
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
} from "mdbreact";

export default class Otp extends Component {
  state = {
    modal: false,
    otp: "",
  };

  

  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };

  render() {
    return (
      <>
        <MDBContainer>
          <MDBBtn onClick={this.toggle}>Modal</MDBBtn>
          <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
            <MDBModalHeader toggle={this.toggle}>MDBModal title</MDBModalHeader>
            <MDBModalBody>
              <OtpInput
                value={this.state.otp}
                onChange={this.handleChange}
                numInputs={6}
                separator={<span>-</span>}
              />
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color="secondary" onClick={this.toggle}>
                Close
              </MDBBtn>
              <MDBBtn color="primary">Save changes</MDBBtn>
            </MDBModalFooter>
          </MDBModal>
        </MDBContainer>
      </>
    );
  }
}
