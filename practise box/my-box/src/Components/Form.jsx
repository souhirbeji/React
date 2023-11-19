import react from "react";
import { useState } from "react";
// const Form in here defines a functional components names form and takes props as a parameter 
const Form =(props)=>{
    const [ color , setColor]=useState('')
    // in here we used the use state because as we know the use state are changeable and their state can be modified like they have changes that can be asynchronus 
    const handleSubmit=(e)=>{
        e.preventDefault();
        //to avoid losing data during automatic refresh 
        //nhebou el color  box={div}
        //box.color
        //this function handles all the data coming from the submission of the botton it prevent also default submission as it makes us lose the data its a shame in REACT 
        props.addBox(color); // it callsaddbox function passed as a prop to the component and passes the current color as an argument 


    };
    return(
        // in here we are doing our form and we are seeting the form with handle submit event 
        <form onSubmit={handleSubmit}>
            <label> color : </label>
            <input type="text" value ={color} onChange={(e)=>setColor(e.target.value)}/><br />
            <button> Add</button>

        </form>
        //  An input field where the user can enter a color. The value is controlled by the color state, and the onChange event updates the state as the user types.
        //When the form is submitted, the addBox function (passed as a prop) is called with the entered color.
    )
}
export default Form 
// in here I am going to explain the code of those lines 
// so in here we imported the libraries of react and the usestate 