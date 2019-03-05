import React, { Component } from 'react'
import Kurs from '../Daten/Kurs';


export default class Fach extends Component {

    state = {
        selected: false,
    }

    checkIfNeeded = (gew) => {
        return this.props.count[gew]
    }

    handleGewichtungsClick = (gewichtung) => {
        this.setState({selected: true})
        let kurs = new Kurs(this.props.name, gewichtung);
        this.props.click(kurs)
    }

  render() {
    const { selected } = this.state;
    return (
      <div className="fachContainer"
        style={{opacity: `${selected ? 0.5 : 1}`, pointerEvents: `${selected ? "none" : "all"}`}}
      >
        <a>{this.props.name}</a>
        <div className="gewichtung"
        >
            <div 
                style={{display: `${this.checkIfNeeded("lk") ? "flex" : "none"}`}} 
                className="lk" 
                onClick={() => this.handleGewichtungsClick("LK")}>LK</div>
            <div 
                style={{display: `${this.checkIfNeeded("gk") ? "flex" : "none"}`}} 
                className="gk" 
                onClick={() => this.handleGewichtungsClick("GK")}>GK</div>
            <div 
                style={{display: `${this.checkIfNeeded("mü") ? "flex" : "none"}`}} 
                className="mü" 
                onClick={() => this.handleGewichtungsClick("MÜ")}>MÜ</div>
            <div 
                style={{display: `${this.checkIfNeeded("ek") ? "flex" : "none"}`}} 
                className="ek" 
                onClick={() => this.handleGewichtungsClick("EK")}>EK</div>
        </div>
      </div>
    )
  }
}