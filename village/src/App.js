import React, { Component } from "react";

import "./App.css";
import SmurfForm from "./components/SmurfForm";
import Smurfs from "./components/Smurfs";
import axios from "axios";
import { Route, NavLink } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3333/smurfs")
      .then(res => {
        this.setState({ smurfs: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        <NavLink to="/">Smurfs</NavLink>
        <NavLink to="/smurf-form">Smurf Form</NavLink>

        {/* <SmurfForm smurfs={this.state.smurfs} /> */}
        {/* <Route path="/test" render={ this.state.smurfs => <SmurfForm smurfs={this.state.smurfs} />} /> */}
        <Route path="/smurf-form" component={SmurfForm} />
        {/* <Route exact path="/" component={Smurfs} /> */}
        <Smurfs smurfs={this.state.smurfs} />
      </div>
    );
  }
}

export default App;
