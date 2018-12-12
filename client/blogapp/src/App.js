import React, { Component } from 'react';
import './App.css';
import SideBar from './components/SideBar';
import HomePage from './components/HomePage';
import Header1 from './components/Header1';
import Header2 from './components/Header2';
import Post from './components/Post';
import Contact from './components/Contact';
import {BrowserRouter as Router, Route} from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App" id="mainwrapper">
          <Route path="/" component={Header1}></Route>
          <Route path="/posts/:category" component={Header2}></Route>
          <SideBar></SideBar>
          <Route path="/" exact component={HomePage}></Route>
          <Route path="/posts/:category" component={Post}></Route>
          <Route path="/contact" component={Contact}></Route>
        </div>
      </Router>
    );
  }
}

export default App;