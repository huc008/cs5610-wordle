import './App.css';
import {Link, NavLink} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1 className="home-title">Wordle</h1>
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
