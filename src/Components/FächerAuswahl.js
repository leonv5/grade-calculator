import React, { Component } from 'react'
import Fach from './Fach';
import { Fächer } from '../Daten/Fächer'

let gewichtungCount = {
    lk: true,
    gk: true,
    mü: true,
    ek: true
}

export default class FächerAuswahl extends Component {

    checkEnough = () => {
        if(this.props.selektedCount === 8){
            return true;
        }else {
            return false;
        }
    }

    checkGewichtung = () => {
        gewichtungCount = {
            lk: this.props.fächer.filter(item => item.gewichtung === "LK").length < 2,
            gk: this.props.fächer.filter(item => item.gewichtung === "GK").length < 2,
            mü: this.props.fächer.filter(item => item.gewichtung === "MÜ").length < 2,
            ek: this.props.fächer.filter(item => item.gewichtung === "EK").length < 2,
        }
        return gewichtungCount
    }

    handleClick = () => {
        window.location.reload();
    }

  render() {
    return (
      <div className="faecherAuswahl">
        <div style={{visibility: `${this.checkEnough() ? "visible" : "hidden"}`}} className="finished">
            <a>FERTIG</a>
            <div onClick={this.handleClick}>Nochmal</div>
        </div>
        <h2>Wähle deine Prüfungsfächer:</h2>
        <h5 style={{color: `${this.checkEnough() ? "green" : "red"}`}}>{this.props.selektedCount + "/8"}</h5>
        <div className="faecherListe">
          {
              Fächer.map((item, i) => {
                  return <Fach key={i} select={this.props.selektedCount} count={this.checkGewichtung()} click={this.props.handleClick} name={item.name} />
              })
          }
        </div>
      </div>
    )
  }
}
