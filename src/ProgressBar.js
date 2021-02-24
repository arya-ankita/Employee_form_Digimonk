import React, { Component } from "react";
import { Stepper } from "@material-ui/core";

const steps = [
  {
    label: "Configure a Provider",
    component: <div>this is step 1 and it is good</div>,
    exitValidation: false,
  },
  {
    label: "Add Provider Actions",
    component: <div>this is step 2 and it is even better</div>,
  },
  {
    label: "More Provider Actions",
    component: <div>this is step 3 and... WOW</div>,
  },
  {
    label: "Even MOAR Provider",
    component: <div>this is step 4 and it is 3l33t</div>,
  },
];

export default class ProgressBar extends Component {
  constructor() {
    super();

    this.state = { activeStep: 0 };
  }

  handleStepChange(activeStep) {
    this.setState({ activeStep });
  }

  nextStep() {
    // console.log("next step");
    // console.log(this.steps, steps);
    if (this.state.activeStep < steps.length - 1) {
      this.setState({ activeStep: this.state.activeStep + 1 });
    }
  }

  previousStep() {
    if (this.state.activeStep > 0) {
      this.setState({ activeStep: this.state.activeStep - 1 });
    }
  }
  render() {
    let { steps, onFinish } = this.props;

    steps = [
      {
        label: "Configure a Provider",
        component: <div>this is step 1 and it is good</div>,
        exitValidation: false,
      },
      {
        label: "Add Provider Actions",
        component: <div>this is step 2 and it is even better</div>,
      },
      {
        label: "More Provider Actions",
        component: <div>this is step 3 and... WOW</div>,
      },
      {
        label: "Even MOAR Provider",
        component: <div>this is step 4 and it is 3l33t</div>,
      },
    ];

    const { activeStep } = this.state;
    const stepIndicators = steps.map((step, i) => {
      return (
        <div className="stepper-inner" onClick={() => this.handleStepChange(i)}>
          <div className={`stepper-number ${activeStep === i && "active"}`}>
            <span>{i + 1}</span>
            <div className="line-linkage"></div>
          </div>

          {i !== steps.length && (
            <div className="stepper-label">{step.label}</div>
          )}
        </div>
      );
    });

    return (
      <div className="stepper">
        <div className="stepper-indicator">{stepIndicators}</div>
        <div className="stepper-steps">{steps[activeStep].component}</div>
        <div className="stepper-actions">
          <button onClick={() => this.previousStep()}>Previous</button>
          {activeStep === steps.length - 1 ? (
            <button
              disabled={!!steps[activeStep].exitValidation}
              onClick={onFinish}
            >
              Submit
            </button>
          ) : (
            <button
              disabled={!!steps[activeStep].exitValidation}
              onClick={() => this.nextStep()}
            >
              Next
            </button>
          )}
        </div>
      </div>
    );
  }
}

const App = (props) => {
  const submit = () => {
    alert("submited");
  };

  return <Stepper steps={this.steps} onFinish={submit} />;
};
