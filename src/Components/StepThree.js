import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

export default class StepThree extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bankname: "",
      ifsc: "",
      bankaccountno: "",
      pfaccount: "",
    };
  }

  handleAll1 = (event) => {
    this.setState({ [event.target.name]: [event.target.value] });
  };

  componentDidMount = () => {
    console.log(this.props);
  };

  render() {
    return (
      <>
        <section>
          <Container>
            <h2 className="mt-5">Financial Details </h2>
            <Row>
              <Col className="mt-4">
                <p>Bank Name</p>
                <input
                  type="text"
                  name="bankname"
                  value={this.state.bankname}
                  onChange={this.handleAll1}
                  placeholder="Enter Account No."
                />
              </Col>
            </Row>

            <Row>
              <Col className="mt-4">
                <p>IFSC Code</p>
                <input
                  type="text"
                  name="ifsc"
                  value={this.state.ifsc}
                  onChange={this.handleAll1}
                  placeholder="Enter IFSC code"
                />
              </Col>
            </Row>

            <Row>
              <Col className="mt-4">
                <p>Bank Account No.</p>
                <input
                  type="number"
                  name="bankaccountno"
                  value={this.state.bankaccountno}
                  onChange={this.handleAll1}
                  placeholder="Enter Account No."
                />
              </Col>
            </Row>

            <Row>
              <Col className="mt-4">
                <p>PF Account No.</p>
                <input
                  type="number"
                  name="pfaccount"
                  value={this.state.pfaccount}
                  onChange={this.handleAll1}
                  placeholder="Enter PF No."
                />
              </Col>
            </Row>

            <Row className="mt-5">
              <Col className="text-center">
                <button
                  className="btn btn-dark"
                  onClick={() =>
                    this.props.stepthreetofour({
                      step3Data: this.state,
                      step2Data: this.props.formValue,
                    })
                  }
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
