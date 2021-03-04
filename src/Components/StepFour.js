import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import { responsiveFontSizes } from "@material-ui/core";

export default class StepFour extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);

    this.state = {
      emergencyname: "",
      relation: "",
      contactno: "",
      emergencyaddress: "",
      emergencycontact: "",
    };
  }

  onClickn1 = (event) => {
    console.log("hi", event, this.state, this.props);
    event.preventDefault();

    
    const data = {
      firstname: this.state.step4Data.firstname,
      //     lastname: this.props.formValue.props.formValue.step1Data.lastname,
      //     dob: this.props.formValue.props.formValue.step1Data.dob,
      //     email: this.props.formValue.props.formValue.step1Data.email,
      //     dateofjoining: this.props.formValue.props.formValue.step1Data
      //       .dateofjoining,
      //     matrimony: this.props.formValue.props.formValue.step1Data.matrimony,
      //     mobileno: this.props.formValue.props.formValue.step1Data.mobileno,
      //     permanentaddress: this.props.formValue.props.formValue.step1Data
      //       .permanentaddress,
      //     presentaddress: this.props.formValue.props.formValue.step1Data
      //       .presentaddress,
      //     photo: this.props.formValue.props.formValue.step1Data.photo,
      //     sex: this.props.formValue.props.formValue.step1Data.sex,
      //     graduation: this.props.formValue.props.formValue.step2Data.graduation,
      //     highersecondry: this.props.formValue.props.formValue.step2Data
      //       .highersecondry,
      //     highschool: this.props.formValue.props.formValue.step2Data.highschool,
      //     postgraduation: this.props.formValue.props.formValue.step2Data
      //       .postgraduation,
      //     bankaccountno: this.props.formValue.step3Data.bankaccountno,
      //     bankname: this.props.formValue.step3Data.bankname,
      //     ifsc: this.props.formValue.step3Data.ifsc,
      emergencyname: this.state.emergencyname,
      relation: this.state.relation,
      contactno: this.state.contactno,
      emergencyaddress: this.state.emergencyaddress,
      emergencycontact: this.state.emergencycontact,
    };
    console.log("Data", data);
    try {
      axios
        .post("http://203.190.153.22:4010/employee-form/submit", data)
        //   // url: "http://203.190.153.22:3002/employee-form/submit",
        //   headers: {
        //     "Content-type": "application/json",
        //   },
        //   // body: JSON.stringify(data),
        //   data: data,
        // })
        .then((result) => {
          result.json().then((resp) => {
            console.log(resp);
            alert("added data");
          });
        });
    } catch (error) {
      console.log(error);
    }
  };
  // onClickn1 = (event) => {
  //   event.preventDefault();
  //   console.log("hi", event);
  //   alert("h");
  // try {
  //   fetch("http://203.190.153.22:3002/employee-form/submit", {
  //     method: "POST",
  //     headers: {
  //       "Content-type": "application/json",
  //     },
  //     body: JSON.stringify(this.state),
  //   }).then((result) => {
  //     result.json().then((resp) => {
  //       alert("added data");
  //     });
  //   });
  // } catch (event) {
  //   console.log(event);
  // }

  // };

  handleAll1 = (event) => {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  };

  // componentDidMount = () => {
  //   console.log(this.props);
  // };

  render() {
    return (
      <>
        <section>
          <Container>
            <h2 className="mt-5">Emergency Contact Details</h2>
            <form onSubmit={this.onClickn1}>
              <Row className="mt-5">
                <Col>
                  <p>Name</p>
                  <input
                    type="text"
                    name="emergencyname"
                    value={this.state.emergencyname}
                    onChange={this.handleAll1}
                    placeholder="Enter Name"
                  />
                </Col>
              </Row>

              <Row className="mt-4">
                <Col>
                  <p>Relation</p>
                  <input
                    type="text"
                    name="relation"
                    value={this.state.relation}
                    onChange={this.handleAll1}
                    placeholder="Enter Relation"
                  />
                </Col>
              </Row>

              <Row className="mt-4">
                <Col>
                  <p>Contact No.</p>
                  <input
                    type="number"
                    name=" emergencycontact"
                    value={this.state.emergencycontactno}
                    onChange={this.handleAll1}
                    placeholder="Enter Number"
                  />
                </Col>
              </Row>

              <Row className="mt-4">
                <Col>
                  <p>Address</p>
                  <textarea
                    name="emergencyaddress"
                    value={this.state.emergencyaddress}
                    onChange={this.handleAll1}
                  ></textarea>
                </Col>
              </Row>

              <Row className="mb-4">
                <Col className="col-md-12">
                  <div className="checklsbel ">
                    <label>
                      <input
                        type="checkbox"
                        name="check"
                        value={this.state.check}
                        onChange={this.handleAll1}
                      ></input>
                      Everything I have mentioned is true to the best of my
                      knowledge.
                    </label>
                  </div>
                </Col>
              </Row>

              <Row className="mt-5">
                <Col className="text-center">
                  <input type="submit" onClick={
                  
this.onClickn1
                  }></input>
                </Col>
              </Row>
            </form>
            {/* <Row>
              <Col className="text-center">
                <button onClick={this.props.stepfourtofive(this.state)}>
                  Next
                </button>
              </Col>
            </Row> */}
          </Container>
        </section>
      </>
    );
  }
}
