import React from 'react'

import "./App.scss";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
// BEM = Block__Element--Modifier

import Header from "../Header/Header";
import Content from "../Content/Content";
import Aside from "../Aside/Aside";

const App = () => {
    return (
        <div className="App">
            <div className="App__Grid">
            {/* <h1 className="App__Title">
            hejhejhej
            </h1>
            <h1 className="App__Title App__Title--Pink">
            modifier
            </h1> */}
            <Header />
            <div className="App__Row">
            <Router>
                <Switch>
                    <Route path="/strength"><Content /></Route>
                    <Route path="/wishes"><Content /></Route>
                    <Route path="/flaws"><Content /></Route>
                    <Route path="/work"><Content /></Route>
                </Switch>
            </Router>
                <Content />
                <Aside />
            </div>
            </div>
        </div>
    )
}

export default App
