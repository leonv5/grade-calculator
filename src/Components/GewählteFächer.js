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
                <a style={{color: `${this.checkCount("LK") < 2 ? "red" : "green"}`}}>{`Leistungskurs ${this.checkCount("LK")}/2`}</a>
                <a style={{color: `${this.checkCount("GK") < 2 ? "red" : "green"}`}}>{`Grundkurs ${this.checkCount("GK")}/2`}</a>
                <a style={{color: `${this.checkCount("MÜ") < 2 ? "red" : "green"}`}}>{`Mündlich ${this.checkCount("MÜ")}/2`}</a>
                <a style={{color: `${this.checkCount("EK") < 2 ? "red" : "green"}`}}>{`Ergebniskurs ${this.checkCount("EK")}/2`}</a>
            </div>
            <div className="gewählteFächer">
                {this.props.fächer.map(item => {
                    return <NotenFach kurs={item}></NotenFach>
                })}
            </div>
        </div>
    )
  }
}
