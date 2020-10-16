import React from 'react';
import "./Content.scss";

const Content = ({title, text}) => {
  console.log("OUTPUT ÄR: Content -> title", text)
  return (
    <div className="Content">
      <h1 className="Content__Title">
        {title}
      </h1>
      <p className="Content__Text">
        {text}
      </p>
    </div>
  )
}

export default Content
