import React, { Component, Fragment } from "react";
import { Route } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./components/Home";
import { FetchData } from "./components/FetchData";
import { Counter } from "./components/Counter";
import { Login } from "./components/Login";
import { Switch } from "react-router";

import "./custom.css";

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <Fragment>
        <div className="loginHeader">
          <h1 className="titleCircle"><span className="titleCircleText">RealTimeQ</span></h1>
        </div>
        <Switch>
          <Route path="/login" component={Login} />
          <Route>
            <Layout>
              <Route exact path="/" component={Home} />
              <Route path="/counter" component={Counter} />
              <Route path="/fetch-data" component={FetchData} />
            </Layout>
          </Route>
        </Switch>
      </Fragment>
    );
  }
}
