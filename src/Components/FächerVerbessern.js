import React, { Component } from 'react'
import {connect} from 'react-redux'

/*
    - Das Fach was am meisten Punkte erreichen kann aber am wenigsten hat.
    - Schauen wieviel % vom maximal zu erreichenden wert erreicht sind.
    - 

*/

class FächerVerbessern extends Component {

  state = {
    fächerVerbessern: []
  }

  componentDidMount() {
    this.calculateVerbessern(this.props.fächer)
  }

  componentWillReceiveProps(nextProps) {
    if(this.props !== nextProps) {
      this.calculateVerbessern(nextProps.fächer)
    }
  }

  calculateVerbessern = (fächer) => {
    let valueArray = fächer.sort((a, b) => a.reachedPercent() - b.reachedPercent())
    this.setState({fächerVerbessern: valueArray})
  }

  render() {
    return (
      <div className="verbessernContainer">
        <h2>Verbessern</h2>
        {
          this.state.fächerVerbessern.map((item, i) => (
            <p key={i}>{`${i+1}. ${item.name}`}</p>
          ))
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    fächer: state.fächer,
    nc: state.nc
  }
}

export default connect(mapStateToProps)(FächerVerbessern)