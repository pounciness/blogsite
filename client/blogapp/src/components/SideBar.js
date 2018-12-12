import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
class SideBar extends Component {
  render() {
    return (
      <div id="sidebarwrapper">
        <div id="subsidebarwrapper">
          <img id="logoimage" width="200" height="200" src="/images/pounce_512.png" alt=""></img>
          <div id="logotext">
            <h1>Pounciness</h1>
            <h4>devblog</h4>
          </div>
          <NavLink activeClassName="is-active" to="/" className="sidebarcontentlink">Home</NavLink>
          <NavLink activeClassName="is-active" to="/posts/art" className="sidebarcontentlink">Art and Design</NavLink>
          <NavLink activeClassName="is-active" to="/posts/code" className="sidebarcontentlink">Coding</NavLink>
          <NavLink activeClassName="is-active" to="/posts/progress" className="sidebarcontentlink">Progress</NavLink>
          <NavLink activeClassName="is-active" to="/contact" className="sidebarcontentlink">Contact</NavLink>
        </div>
      </div>
    );
  }
}

export default SideBar;
