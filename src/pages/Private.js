import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import Dashboard from './dashboard';
class Private extends Component {
  render() {
    return (
      <div>
        <h1>Welcome {this.props.user.username}</h1>
        <Dashboard />
      </div>
    );
  }
}

export default withAuth(Private);
