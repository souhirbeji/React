import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Components/Home";
import ParamsComponent from './Components/ParamsComponent';

function App() {
  return (
    <BrowserRouter>
    <div className="App">

      <Routes>
        {/* /home is a "hard path". There aren't params in the route. */}
        <Route element={<Home />} path="/home"/>
        {/* We have two potential routes/paths  for the ParamsComponent */}
        <Route element={<ParamsComponent />} path="/:inside" />
        {/* These values (params) can be destructured from the useParam hook and used as variables, 
        just like values destructured from props! */}
        <Route element={<ParamsComponent />} path="/:inside/:color/:bgCol" />
      </Routes>

    </div>
    </BrowserRouter>
  );
}

export default App;