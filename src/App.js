import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Component imports
import Home from "./components/Home";
import How from "./components/How";
import Partner from "./components/Partner";
import Error from "./components/Error";
import Navigation from "./components/Navigation";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation></Navigation>
          <Switch>
            <Route path="/" component={ Home } exact></Route>
            <Route path="/how" component={ How }></Route>
            <Route path="/partner" component={ Partner }></Route>
            <Route component={ Error } exact></Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
