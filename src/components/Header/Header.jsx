import React from 'react'
import "./Header.scss";
import {BrowserRouter as Router, Route, Switch, NavLink} from "react-router-dom";
import purebem from 'purebem';

const Header = () => {
  const block = purebem("header");

  return (
    <div className={ block() }>
    <Router>
      <Switch>
        <Route path="/">
          <img src="figma/Hooli-logo.svg" alt="" className={ block("svg-logo") }/>
            <nav className={ block("nav-section") }>
              <NavLink to="/strengths"> Vår styrka </NavLink>
              <NavLink to="/wishes"> Önskemål </NavLink>
              <NavLink to="/flaws"> Brister </NavLink>
              <NavLink to="/works"> Arbetssätt </NavLink>
            </nav>
        </Route>
      </Switch>
    </Router>
    </div>
  )
}

export default Header
