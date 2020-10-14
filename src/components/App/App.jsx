import React from 'react'

import "./App.scss";
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
            <Content />
            <Aside />
            </div>
        </div>
    )
}

export default App
