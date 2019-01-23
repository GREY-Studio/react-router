import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import './index.css';

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
        <Route render={({ location }) => console.log(location) || (
          <React.Fragment>
            <Navigation></Navigation>
            <TransitionGroup>
              <CSSTransition key={ location.key } timeout={ 300 } classNames='fade'>
                <Switch location={ location }>
                  <Route path="/" component={ Home } exact></Route>
                  <Route path="/how" component={ How }></Route>
                  <Route path="/partner" component={ Partner }></Route>
                  <Route path="/:lang/partner" component={ Partner }></Route>
                  <Route component={ Error } exact></Route>
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          </React.Fragment>
        )} />
      </BrowserRouter>
    );
  }
}

export default App;
