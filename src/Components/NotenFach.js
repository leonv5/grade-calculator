import React, { Component } from 'react'
import {connect} from 'react-redux';
import {updateNC} from '../Redux/actions'

class NotenFach extends Component {

    state = {
        selectValue: "15",
    }

    chooseGewichtungColor = (gewichtung) => {
        switch (gewichtung) {
            case "LK":
                return { backgroundColor: "#DBE6EF", color: "grey" }
            case "GK": 
                return { backgroundColor: "rgb(202, 216, 228)", color: "grey" }
            case "MÜ": 
                return { backgroundColor: "rgb(168, 186, 201)", color: "white" }
            case "EK": 
                return { backgroundColor: "rgb(134, 158, 177)", color: "white" }
            default:
                return { backgroundColor: "rgb(134, 158, 177)", color: "grey" }
        }
    }

    handleChange = (event) => {
        const {kurs, fächer} = this.props
        kurs.setNcPoints(event.target.value);
        this.setState({selectValue: kurs.ncInPoints});
        this.props.updateNC(fächer)
    }

  render() {
    const kurs = this.props.kurs;

    return (
      <div className="notenChooser">
        <div className="nameGewichtung">
            <h3>{kurs.name}</h3>
            <div className="gewichtungIcon">
                {kurs.gewichtung}
            </div>
        </div>
        <select value={this.state.selectValue != kurs.ncInPoints ? kurs.ncInPoints : this.state.selectValue} onChange={this.handleChange} className="selectNote" name="noten">
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

        {/* <div onClick={this.handleDelete} className="fachLöschen">Löschen</div> */}
      </div>
    )
  }
}

const mapStateToProps = state => {
    return {
        fächer: state.fächer
    }
}

export default connect(mapStateToProps, {updateNC})(NotenFach)