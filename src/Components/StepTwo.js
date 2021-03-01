import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

export default class StepTwo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      validation: false,
      Text: [
        {
          Name: "highschool",
        },
        {
          Name: "highersecondry",
        },
        {
          Name: "graduation",
        },
        {
          Name: "postgraduation",
        },
      ],
      d: [],
    };
  }

  componentDidMount = () => {
    console.log(this.props);
  };

  mouse = (e) => {
    e.preventDefault();
    this.state.Text.map((r, index) => {
      if (r.Name.replace(" ", "") === "") {
        this.setState({ d: this.state.d.concat(true) });
      } else {
        this.setState({ d: this.state.d.concat(false) });
      }
    });
    if (this.state.d.includes(false)) {
      this.setState({ validation: true });
      this.props.steptwoprops(this.state);
    } else {
      this.setState({ validation: false });
    }
  };

  next = (Name) => (event) => {
    console.log("HHHHhhhhh");
    try {
      let files = event.target.files;
      let reader = new FileReader();
      reader.readAsDataURL(files[0]);
      reader.onload = (e) => {
        this.setState({ [Name]: e.target.result });
      };
    } catch (e) {}
  };

  render() {
    console.log(this.state);
    return (
      <>
        <section className="space">
          <Container>
            <h2 className="mt-5">Educational Details</h2>

            {this.state.Text.map((c, index) => (
              <>
                <Row className="mt-4" key={c.Name}>
                  <Col>
                    <p>{c.Name}</p>
                    <input
                      type="file"
                      value=""
                      name={c.Name.replace(" ", "")}
                      onChange={this.next(c.Name.replace(" ", ""))}
                    ></input>
                  </Col>
                </Row>
              </>
            ))}
            <Row className="mt-5">
              <Col md="12" className="text-center">
                <button onClick={() => this.props.steptwoprops(this.state)}>
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
