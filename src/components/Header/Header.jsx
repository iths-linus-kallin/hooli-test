import React from 'react'
import "./Header.scss";
import {BrowserRouter as Router, Route, Switch, NavLink} from "react-router-dom";
import purebem from 'purebem';

const Header = () => {
  const block = purebem("header");

  return (
    <div className={ block() }>
    {/* <div className={ block("cloud") }></div> */}
    <Router>
      <Switch>
        <Route path="/">
          {/* <img src="figma/cloud.png" alt="" className={ block("svg-logo") }/> */}
          <img src="figma/Hooli-logo.svg" alt="" className={ block("svg-logo") }/>
            <nav className={ block("nav-section") }>
              <NavLink to="/strength" activeClassName="active"> Vår styrka </NavLink>
              <NavLink to="/wishes" activeClassName="active"> Önskemål </NavLink>
              <NavLink to="/flaws" activeClassName="active"> Brister </NavLink>
              <NavLink to="/work" activeClassName="active"> Arbetssätt </NavLink>
            </nav>
        </Route>
      </Switch>

      {/* <Switch>
            <Route path="/battle/:id1/:id2" component={Battle}/>
            <Route path="/battle"><Battle /></Route>
            <Route path="/stats"><Stats /></Route>
            <Route path="/upload"><Upload /></Route>
            <Route path="/matchresult"><MatchResult /></Route>
            <Route path="/matchup/:id1/:id2" component={MatchUp}/>
            <Route path="/"><StartPage /></Route>
      </Switch> */}
    </Router>
    </div>
  )
}

export default Header
