import React from "react";
import ReactDOM from "react-dom";
import {
  HashRouter as Router,
  Route
} from "react-router-dom";
import Homepage from "./pages/homepage";
import Talks from "./pages/talks";
import About from "./pages/about";

const BasicExample = () => ( 
  <Router>
    <div className="fullHeight">
      <Route exact path="/" component={Homepage}/>
      <Route exact path="/talks" component={Talks} />
      <Route exact path="/about" component={About} />
    </div>
  </Router>
);

ReactDOM.render(<BasicExample />, document.getElementById("app"));
