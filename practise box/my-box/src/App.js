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
// the const addbox color is a function called to take a color argument inside the function there is a new box that is created to make the new box 
// display boxes etc renders the display component and passes the boxes state as a prop in here also we are allowed to create new boxes 
// to understand how did we use props in here ' function addbox is passed as a prop to form.jsx also you repass the addbox prop in the app.js with form 
//So, in summary, props serve as a means of communication between components. In this case, the Form component receives the addBox function as a prop and calls it when the form is submitted. The Display component receives the boxes state as a prop and uses it to display the boxes. The data and functions flow from the parent (App) to the child components (Form and Display) through props, allowing them to interact with each other.