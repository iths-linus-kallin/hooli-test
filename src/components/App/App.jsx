import React from 'react'

import "./App.scss";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
// BEM = Block__Element--Modifier
import { textData } from "../../data/data";

import Header from "../Header/Header";
import Content from "../Content/Content";
import Aside from "../Aside/Aside";

const App = () => {
    console.log("OUTPUT ÄR: textData", textData);
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
                    <Route exact path="/">
                        <Content />
                    </Route>
                    <Route path="/strengths">
                        {textData && 
                            <Content title={textData.strengths.title}  text={textData.strengths.text}/>
                        }
                    </Route>
                    <Route path="/wishes"><Content /></Route>
                    <Route path="/flaws"><Content /></Route>
                    <Route path="/works"><Content /></Route>
                </Switch>
            </Router>
                <Aside />
            </div>
            </div>
        </div>
    )
}

export default App
