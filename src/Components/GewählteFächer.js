import React, { Component } from 'react'
import NotenFach from './NotenFach';

export default class GewählteFächer extends Component {

    checkCount = (gewichtung) => {
        return this.props.fächer.filter(item => item.gewichtung === gewichtung).length
    }

  render() {
    return (
        <div className="secondContainer">
            <div className="fächerCounter">
                <p style={{color: `${this.checkCount("LK") < 2 ? "red" : "green"}`}}>{`LK ${this.checkCount("LK")}/2`}</p>
                <p style={{color: `${this.checkCount("GK") < 2 ? "red" : "green"}`}}>{`GK ${this.checkCount("GK")}/2`}</p>
                <p style={{color: `${this.checkCount("MÜ") < 2 ? "red" : "green"}`}}>{`MÜ ${this.checkCount("MÜ")}/2`}</p>
                <p style={{color: `${this.checkCount("EK") < 2 ? "red" : "green"}`}}>{`EK ${this.checkCount("EK")}/2`}</p>
            </div>
            <div className="gewählteFächer">
                {this.props.fächer.map((item, i) => {
                    return <NotenFach key={i} kurs={item}></NotenFach>
                })}
            </div>
        </div>
    )
  }
}
