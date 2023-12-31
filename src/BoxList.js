import React, { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";
import { v4 as uuid } from "uuid";

const BoxList = () => {
  const [boxes, setBoxes] = useState([]);

  const addBox = (newStyles) => {
    const { backgroundColor, height, width } = newStyles;
    setBoxes((boxes) => [...boxes, { style: { backgroundColor, height: `${height}px`, width: `${width}px` }, id: uuid() }]);
  };
  // id is not very solid if structure of box component changes siblings
  const removeBox = (id) => {
    const boxesCopy = [...boxes.filter((box) => box.id !== id)];
    setBoxes(boxesCopy);
  };

  return (
    <div className='BoxList'>
      <NewBoxForm addBox={addBox} />
      {boxes.map((b) => (
        <Box
          style={b.style}
          id={b.id}
          key={b.id}
          removeBox={removeBox}
        />
      ))}
    </div>
  );
};

export default BoxList;
