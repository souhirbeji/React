import PersonaCard from './components/PersonaCard';
import './App.css';

function App() {
      return (
          <div className="App">
             
              <PersonaCard name={"Doe, Jane"} age ={"45"} haircolor={"black"}/>
              <PersonaCard name={"smith , john"} age={"88"} haircolor={ "brown"}/>
              <PersonaCard name={"fillmore,Millard"} age={"50"} haircolor={ "brown"}/>
              <PersonaCard name={"Smith , Maria"} age={"82"} haircolor={ "brown"}/>
          </div>
      );
  }
  
  

export default App;
