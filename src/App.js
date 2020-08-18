import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from "./pages/HomePage"
import OtherPage from "./pages/OtherPage";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (<Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/OtherPage" exact component={OtherPage} />
        </Switch>
      </div>
    </Router>);
  };

}

export default App;
