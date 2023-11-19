import './App.css';
import { useState } from "react";
import Form from './Components/Form';
import Display from  './Components/Display';
// we are doing a creation of our box 
function App() {
  const [boxes,setBoxes]=useState([])
  const addBox=(color)=>{
    const newbox ={box_color:color};
    setBoxes([...boxes,newbox]);
  };
  return (
    <div className="App">
    <Form addBox={addBox}/>
    <Display boxes ={boxes}/>

    </div>
  );
}
// in this app.js what did we do exacly 
export default App;
