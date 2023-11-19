import React from "react";

const Display = (props) => {
  const { boxes } = props;
//box can be called item too 
  return (
    <div>
      {boxes.map((box, index) => (
        <div
          key={index}
          style={{
            width: "200px",
            height: "200px",
            margin: "5px",
            display :'inline-block',
            backgroundColor:box.box_color}}
        > {box.box_color}</div>
      ))}
    </div>
  );
};

export default Display;
