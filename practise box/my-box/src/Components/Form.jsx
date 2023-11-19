import react from "react";
import { useState } from "react";
const Form =(props)=>{
    const [ color , setColor]=useState('')
    const handleSubmit=(e)=>{
        e.preventDefault();
        //to avoid losing data during automatic refresh 
        //nhebou el color  box={div}
        //box.color
        props.addBox(color);


    };
    return(
        <form onSubmit={handleSubmit}>
            <label> color : </label>
            <input type="text" value ={color} onChange={(e)=>setColor(e.target.value)}/><br />
            <button> Add</button>

        </form>
    )
}
export default Form 