import React, { Component, Fragment } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import PageNotFound from "./components/PageNotFound";
import { Route, Switch } from "react-router-dom";

const withHeaderAndFooter = Comp => (props) => (
  <Fragment>
    <Header logo={logo} header="НАЗВАНИЕ САЙТА" />
    <Comp {...props} />
    <Footer />
  </Fragment>
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" render={withHeaderAndFooter(Body)} />
          <Route path="/about" render={withHeaderAndFooter(About)} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
