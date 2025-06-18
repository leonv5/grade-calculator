import React, { Component } from 'react';
import './App.css';
import FächerAuswahl from './Components/FächerAuswahl';
import GewählteFächer from './Components/GewählteFächer';
import Berechnen from './Components/Berechnen';
import {BrowserRouter as Router, Route } from 'react-router-dom' 

import {connect} from "react-redux"
import {addFach} from "./Redux/actions"

class App extends Component {

  render() {

    if (!window.location.href.includes("#")) {
      window.location = "https://leonv5.github.io/grade-calculator/#/"
    }

    return (
      <Router basename={process.env.PUBLIC_URL + "/#/"} className="App">
        <div className="mainContainer">
          <Route exact path="/" component={FächerAuswahl} />
          <Route path="/noten" component={GewählteFächer} />
          <Route path="/noten" component={Berechnen} />
        </div>
      </Router>
    );
  }
}

export default connect(null, {addFach})(App);
