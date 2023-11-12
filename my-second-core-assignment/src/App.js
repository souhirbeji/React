import React, { useState } from "react";
import PersonaCard from './components/PersonaCard';
import './App.css';

const array = [
  { name: "John Doe", Age: "30", haircolor: "black" },
  { name: "Jane Smith", Age: "25", haircolor: "brown" },
  { name: "fillmore , millard", Age: "50", haircolor: "brown" },
  { name: "Smith, Maria", Age: "82", haircolor: "brown" },
];

function App() {
  return (
    <div className="App">
      <PersonaCard
        name={array[0].name}
        Age={array[0].Age}
        haircolor={array[0].haircolor}
      />
      <PersonaCard
        name={array[1].name}
        Age={array[1].Age}
        haircolor={array[1].haircolor}
      />
      <PersonaCard
        name={array[2].name}
        Age={array[2].Age}
        haircolor={array[2].haircolor}  
      />
      <PersonaCard
        name={array[3].name}
        Age={array[3].Age}
        haircolor={array[3].haircolor}  
      />
    </div>
  );
}

export default App;
