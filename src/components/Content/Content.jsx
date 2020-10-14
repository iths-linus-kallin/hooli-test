import React from 'react';
import "./Content.scss";


{/* <Route path="/" >
    <Content data={textData.strength} />
</Route> */}

const Content = () => {
  return (
    <div className="Content">
      <h1 className="Content__Title">
        Content
      </h1>
      <p className="Content__Text">
        Text
      </p>
      <img className="Content__Image" src="" alt="image1"/>
    </div>
  )
}

export default Content
