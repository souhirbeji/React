import react from "react";
const PersonaCard =(props)=>{
    return(
    <div>
        <h1>{props.name}</h1>
        <p>Age: {props.age}</p>
        <p>Hair Color:{props.haircolor} </p>

    </div>
        )

}
export default PersonaCard;