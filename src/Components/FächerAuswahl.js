import React, { Component } from 'react'
import Fach from './Fach';
import { Fächer } from '../Daten/Fächer'

import {connect} from 'react-redux'
import {addFach} from '../Redux/actions'
import {withRouter} from 'react-router-dom'

let gewichtungCount = {
    lk: true,
    gk: true,
    mü: true,
    ek: true
}

class FächerAuswahl extends Component {

    checkEnough = () => {
        if(this.props.fächer.length === 8){
            return true;
        }else {
            return false;
        }
    }

    checkGewichtung = () => {
      const {fächer} = this.props;
      gewichtungCount = {
          lk: fächer.filter(item => item.gewichtung === "LK").length < 2,
          gk: fächer.filter(item => item.gewichtung === "GK").length < 2,
          mü: fächer.filter(item => item.gewichtung === "MÜ").length < 2,
          ek: fächer.filter(item => item.gewichtung === "EK").length < 2,
      }
      return gewichtungCount
    }

    handleClick = () => {
      this.props.history.push('/noten')
    }

  render() {
    return (
      <div className="faecherAuswahl">
        <div style={{visibility: `${this.checkEnough() ? "visible" : "hidden"}`}} className="finished">
            <a>FERTIG</a>
            <div onClick={this.handleClick}>Weiter</div>
        </div>
        <h2>Wähle deine Prüfungsfächer:</h2>
        <h5 style={{color: `${this.checkEnough() ? "green" : "red"}`}}>{this.props.fächer.length + "/8"}</h5>
        <div className="faecherListe">
          {
              Fächer.map((item, i) => {
                  return <Fach key={item.name} select={this.props.fächer.length} count={this.checkGewichtung()} click={this.props.addFach} name={item.name} />
              })
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log(state)
  return {
    fächer: state.fächer
  }
}

export default connect(mapStateToProps, {addFach})(withRouter(FächerAuswahl))
