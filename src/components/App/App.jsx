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
            <Router>
            <Header />
            <div className="App__Row">
                <Switch>
                    <Route exact path="/">
                            <Content title={textData.strengths.title}  text={textData.strengths.text}/>
                    </Route>
                    <Route path="/strengths">
                            <Content title={textData.strengths.title}  text={textData.strengths.text}/>
                    </Route>
                    <Route path="/wishes"> 
                            <Content title={textData.wishes.title}  text={textData.wishes.text}/>
                    </Route>
                    <Route path="/flaws"> 
                            <Content title={textData.flaws.title}  text={textData.flaws.text}/>
                        </Route>
                    <Route path="/works"> 
                            <Content title={textData.works.title}  text={textData.works.text}/>
                        </Route>
                </Switch>
                <Aside />
            </div>
            </Router>
        </div>
    )
}

export default App
