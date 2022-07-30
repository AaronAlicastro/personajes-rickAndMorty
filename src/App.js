import React, { Component } from "react";
import "./App.css";
import { Cabecera } from "./components/Cabecera.jsx";
import { Personajes } from "./components/Personajes";

class App extends Component {
  render() {
    return (
      <div id="containerApp">
        <Cabecera />
        <Personajes />
      </div>
    );
  }
}

export default App;
