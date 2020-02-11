import React, { Component } from "react";
import "./login.css";

export class Login extends Component {
  render() {
    return (
      <div className="d-flex justify-content-between">
        <form>
          <div className="loginForm">
            <h2>Login</h2>
            <div className="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input
                type="email"
                class="form-control loginInput"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
              <small id="emailHelp" class="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div className="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input
                type="password"
                class="form-control loginInput"
                id="exampleInputPassword1"
                placeholder="Password"
              />
            </div>
            <button type="submit" className="btn loginInput">
              Submit
            </button>
          </div>
        </form>
        <div className="loginBlurb">
          <h2>Welcome!</h2>
          <p>This styling this page is taking too long, so I'm moving on to functionality.</p>
        </div>
      </div>
    );
  }
}
