import React from 'react'

import "./App.scss";
// BEM = Block__Element--Modifier

const App = () => {
    return (
        <div className="App">
            <h1 className="App__Title">
            hejhejhejhej
            </h1>
            <h1 className="App__Title App__Title--Pink">
            modifier
            </h1>
        </div>
    )
}

export default App
