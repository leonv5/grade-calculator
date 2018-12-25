import React, { Component } from 'react';
import './App.css';
import FächerAuswahl from './Components/FächerAuswahl';
import GewählteFächer from './Components/GewählteFächer';
import Kurs from './Daten/Kurs'
import Berechnen from './Components/Berechnen';

class App extends Component {

  state = {
    fächer: []
  }

  handleClick = (kurs) => {
    this.setState(prevState => ({
      fächer: [...prevState.fächer, kurs]
    }))
  }

  render() {
    const {fächer} = this.state;
    return (
      <div className="App">
        <h1>Notenschnitt Rechner</h1>
        <FächerAuswahl fächer={fächer} selektedCount={this.state.fächer.length} handleClick={this.handleClick}/>
        <GewählteFächer fächer={fächer} />
        <Berechnen fächer={fächer} />
      </div>
    );
  }
}

export default App;
