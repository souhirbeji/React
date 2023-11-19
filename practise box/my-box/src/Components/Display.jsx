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
// in this code we did our importation as usual then what we did is pass props as our parameter 
// so the {box.box_color}</div> is used to display the color inside the box , 
// also he was mapping over the box values 
// as for the props its used in here its used to receive data from the parents . Specifically, the boxes array is passed down as a prop to the Display component to map the values 