import React, { Component } from 'react'
import Kurs from '../Daten/Kurs';


export default class Fach extends Component {

    state = {
        gewichtungIsVisible: false,
        isInGewichtung: false,
        selected: false
    }

    handleMouseEnter = () => {
        this.setState({gewichtungIsVisible: true})
    }

    handleMouseLeave = () => {
        this.setState({gewichtungIsVisible: false})
    }

    handleMouseEnterGewichtung = () => {
        this.setState({isInGewichtung: true})
        console.log("IN")
    }

    handleMouseLeaveGewichtung = () => {
        this.setState({isInGewichtung: false})
        console.log("OUT")
    }

    checkIfVisible = () => {
        const { isInGewichtung, gewichtungIsVisible, selected } = this.state;
        if ((isInGewichtung || gewichtungIsVisible) && !selected) {
            return true;
        }else {
            return false;
        }
    }

    checkIfNeeded = (gew) => {
        return this.props.count[gew]
    }

    handleGewichtungsClick = (gewichtung) => {
        let points = 0;
        switch (gewichtung) {
            case "LK":
                points = 13;
                break;
            case "GK":
                points = 9;
                break;
            case "MÜ":
                points = 4;
                break;
            case "EK":
                points = 4;
                break;
            default:
                points = 13;
                break;
        }

        let kurs = new Kurs(this.props.name, gewichtung, points);
        this.setState({selected: true})
        this.props.click(kurs);
    }

  render() {

    const { selected } = this.state;

    return (
      <div className="fachContainer"
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        style={{opacity: `${selected ? 0.5 : 1}`, pointerEvents: `${selected ? "none" : "all"}`}}
      >
        <a>{this.props.name}</a>
        <div style={{ transition: "opacity 250ms", opacity: `${this.checkIfVisible() ? 1 : 0}`, pointerEvents: `${this.checkIfVisible() ? "all" : "none"}` }} className="gewichtung"
            onMouseEnter={this.handleMouseEnterGewichtung}
            onMouseLeave={this.handleMouseLeaveGewichtung}
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