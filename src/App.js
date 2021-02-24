import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Form1 from "./Components/Form1";
import Thankyou from "./Components/Thankyou";
import Complete from "./Components/Complete";

import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

function App() {
   return (
     <>
       <BrowserRouter>
         <Switch>
           <Route exact path="/" component={Form1} />
           <Route exact path="/completed" component={Complete} />
         </Switch>
       </BrowserRouter>
     </>
   );


}

export default App;
