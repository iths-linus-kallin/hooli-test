import React from 'react'
import "./Header.scss";
import {BrowserRouter as Router, Route, Switch, NavLink} from "react-router-dom";
import purebem from 'purebem';

const Header = () => {
  const block = purebem("header");

  return (
    <div className={ block() }>
    <div className={ block("svg-logo") }></div>
    <Router>
      <Switch>
        <Route path="/">
            <nav className={ block("nav-section") }>
              <NavLink to="/strength" activeClassName="active"> Vår styrka </NavLink>
              <NavLink to="/wishes" activeClassName="active"> Önskemål </NavLink>
              <NavLink to="/flaws" activeClassName="active"> Brister </NavLink>
              <NavLink to="/work" activeClassName="active"> Arbetssätt </NavLink>
            </nav>
        </Route>
      </Switch>
    </Router>
    </div>
  )
}

export default Header
