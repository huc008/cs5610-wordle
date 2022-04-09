import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import Game from './components/Game';
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
        <Route path={"/easy"} element={<Game row={7} col={5} difficultyLevel={"Easy"} />}/>
        <Route path={"/medium"} element={<Game row={6} col={6} difficultyLevel={"Medium"} />}/>
        <Route path={"/hard"} element={<Game row={5} col={7} difficultyLevel={"Hard"} />}/>
        <Route path={"/rule"} element={<Rule />}/>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);