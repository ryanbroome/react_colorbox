import React from "react";
import "./Box.css";

const Box = ({ id, style, removeBox }) => {
  const { backgroundColor, height, width } = style;

  const handleClick = (evt) => {
    // ? What is a better way to grab this value
    const { id } = evt.target.previousSibling;
    removeBox(id);
  };

  return (
    <>
      <div
        id={id}
        key={id}
        className='Box'
        style={{ backgroundColor, height, width }}>
        <p className='Box-text'>Box </p>
      </div>
      <button onClick={handleClick}>X</button>
    </>
  );
};
{
}

export default Box;
