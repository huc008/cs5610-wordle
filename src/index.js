import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import EasyGame from './components/EasyGame';
// import MediumGame from './components/MediumGame';
// import HardGame from './components/HardGame';
import 'bootstrap/dist/css/bootstrap.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Rule from './components/Rule';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
        <Route path={"/"} element={<App />}/>
        <Route path={"/home"} element={<App />}/>
        <Route path={"/easy"} element={<EasyGame row={7} col={5} difficultyLevel={"Easy"} />}/>
        <Route path={"/medium"} element={<EasyGame row={6} col={6} difficultyLevel={"Medium"} />}/>
        <Route path={"/hard"} element={<EasyGame row={5} col={7} difficultyLevel={"Hard"} />}/>
        <Route path={"/rule"} element={<Rule />}/>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);