import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import About from "./Components/About";

import Home from "./Components/Home";

function App() {
  return (
    <div className="App">
    
     <Route path="/" component={Home}></Route>
     <Route path="/About" component={About}></Route>
    </div>
  );
}

export default App;
