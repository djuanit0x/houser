import React, { Component } from 'react';
import routes from "./routes.js";
import './App.css';
import Header from './components/Header/Header.js';

class App extends Component {
  render() {
    return (
      <div className="App">
 
        <Header />
        {routes}
      </div>
    );
  }
}

export default App;
