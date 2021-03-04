import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

export default class StepTwo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      file1: "",
      Text: [
        {
          Name: "highschool",
          Value: "highschool",
        },
        {
          Name: "highersecondry",
          Value: "highersecondry",
        },
        {
          Name: "graduation",
          Value: "graduation",
        },
        {
          Name: "postgraduation",
        },
      ],
      d: [],
    };
  }

  componentDidMount = () => {
    console.log("name", this.props);
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
    this.setState({ [event.target.name]: [event.target.value] });
    try {
      let files = event.target.files;
      console.warn("data file", files);
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
                      value={this.state.name}
                      name={c.Name}
                      onChange={this.next(c.Name)}
                    ></input>
                  </Col>
                </Row>
              </>
            ))}
            <Row className="mt-5">
              <Col md="12" className="text-center">
                <button
                  onClick={() =>
                    this.props.steptwoprops({
                      step2Data: this.state,
                      step1Data: this.props.formValue,
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
