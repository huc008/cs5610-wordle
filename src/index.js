import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import EasyGame from './components/EasyGame';
import MediumGame from './components/MediumGame';
import HardGame from './components/HardGame';
import 'bootstrap/dist/css/bootstrap.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom"
import Rule from './components/Rule';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
        <Route path={"/"} element={<App />}/>
        <Route path={"/home"} element={<App />}/>
        <Route path={"/easy"} element={<EasyGame />}/>
        <Route path={"/medium"} element={<MediumGame />}/>
        <Route path={"/hard"} element={<HardGame />}/>
        <Route path={"/rule"} element={<Rule />}/>
    </Routes>
  </BrowserRouter>,
  // <App />,
  document.getElementById('root')
);