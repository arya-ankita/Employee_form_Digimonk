import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

export default class StepFour extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emergencyname: "",
      relation: "",
      contactno: "",
      emergencyaddress: "",
      emergencycontact: "",
    };
  }

  onClickn1 = (event) => {
    event.preventDefault();
    try {
      fetch("http://203.190.153.22:3002/employee-form/submit", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(this.state),
      }).then((result) => {
        result.json().then((resp) => {
          alert("added data");
        });
      });
    } catch (event) {
      console.log(event);
    }
  };

  handleAll1 = (event) => {
    event.preventDefault();
    this.setState({ [event.target.name]: [event.target.value] });
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
                <input
                  type="submit"
                  onClick={() => {
                    this.props.onClickn1(this.state);
                  }}
                ></input>
              </Col>
            </Row>

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
