import React, { useState } from "react";

    const PersonaCard = (props) => {
    const { name, Age, haircolor } = props;

    const [stateAge, setStateAge] = useState(parseInt(Age, 10));

    return (
        <div>
        <h1>{name}</h1>
        <p>Age: {stateAge}</p>
        <p>Hair Color: {haircolor}</p>
        <button onClick={() => setStateAge(stateAge + 1)}>
            Birthday Button for {name}
        </button>
        </div>
    );
    };

    export default PersonaCard;
