import React, { Component } from 'react'

export default class NotenFach extends Component {

    state = {
        selectValue: "15"
    }

    chooseGewichtungColor = () => {
        switch (this.props.kurs.gewichtung) {
            case "LK":
                return { backgroundColor: "#FE4A49", boxShadow: "5px 5px rgb(199, 58, 58)" }
            case "GK": 
                return { backgroundColor: "#2AB7CA", boxShadow: "5px 5px rgb(36, 139, 153)" }
            case "MÜ": 
                return { backgroundColor: "rgb(100, 228, 83)", boxShadow: "5px 5px rgb(90, 200, 70)" }
            case "EK": 
                return { backgroundColor: "#FED766", boxShadow: "5px 5px rgb(201, 167, 66)" }
            default:
                return { backgroundColor: "#FE4A49", boxShadow: "5px 5px rgb(199, 58, 58)" }
        }
    }

    handleChange = (event) => {
        this.setState({selectValue: event.target.value}, () => {
            this.props.kurs.setNcPoints(this.state.selectValue);
            console.log(this.props.kurs.calculatePoints())
        });
    }

  render() {
    const kurs = this.props.kurs;
    return (
      <div className="notenChooser" style={this.chooseGewichtungColor()}>
        <div className="nameGewichtung">
            <h3>{kurs.name}</h3>
            <div className="gewichtungIcon">
                {kurs.gewichtung}
            </div>
        </div>
        <select value={this.state.selectValue} onChange={this.handleChange} className="selectNote" name="noten">
            <option value="15">1+</option>
            <option value="14">1</option>
            <option value="13">1-</option>
            <option value="12">2+</option>
            <option value="11">2</option>
            <option value="10">2-</option>
            <option value="9">3+</option>
            <option value="8">3</option>
            <option value="7">3-</option>
            <option value="6">4+</option>
            <option value="5">4</option>
            <option value="4">4-</option>
            <option value="3">5+</option>
            <option value="2">5</option>
            <option value="1">5-</option>
            <option value="0">6</option>
        </select>
      </div>
    )
  }
}