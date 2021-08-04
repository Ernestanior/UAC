
import './App.css';

import { Redirect, Route } from 'react-router-dom'
import Home from 'pages/home'
import React from 'react';
function App() {
  return (
    <div className="App">
      <Route path='/home' component={Home}></Route>
      <Redirect to='/home' />
    </div>
  );
}

export default App;
