import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Form1 from "./Components/Form1";
import Thankyou from "./Components/Thankyou";
import Complete from "./Components/Complete";
import StepTwo from "./Components/StepTwo";
import Otp from "./Components/Otp";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Login from "./Login";
import Forgot from "./Forgot";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/form" component={Form1} />
          <Route exact path="/completed" component={Complete} />
          <Route exact path="/forgotpass" component={Forgot} />
          <Route exact path="/otp" component={Otp} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
