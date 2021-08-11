
import './App.css';
import Navbar from 'component/navbar';
import { Redirect, Route, Switch } from 'react-router-dom'
import Home from 'pages/home'
import About from 'pages/about'
import Gba from 'pages/GBA'
import Question from 'pages/question'
import Handbook from 'pages/handbook'
import React from 'react';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path='/home' component={Home}></Route>
        <Route path='/about' component={About}></Route>
        <Route path='/gba' component={Gba}></Route>
        <Route path='/handbook' component={Handbook}></Route>
        <Route path='/FAQ' component={Question}></Route>
        <Redirect to='/home' />
      </Switch>
    </div>
  );
}

export default App;
