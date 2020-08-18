import React, { Component } from 'react';
import './App.css';
import HomePage from "./pages/homePage"
import OtherPage from "./pages/otherPagse";
import BlogPage from "./pages/blogPages";
import Navbar from "./components/navbar";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/other-page" exact component={OtherPage} />
            <Route path="/blog-page" exact component={BlogPage} />
          </Switch>
        </div>
      </Router>);
  };

}

export default App;
