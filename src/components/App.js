import './App.css';
import {Link, NavLink} from "react-router-dom";
import Navbar from './Navbar'


function App() {
  localStorage.clear();
  return (
    <div className="App">
      <Navbar />
      <div className="button-container">
        <Link className="button" to={"/easy"}>Easy</Link>
        <Link className="button" to={"/medium"}>Medium</Link>
        <Link className="button" to={"/hard"}>Hard</Link>
        <Link className="button" to={"/rule"}>Rule</Link>
      </div>
    </div>

    
  );
}

export default App;
