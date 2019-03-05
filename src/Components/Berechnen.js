import React, { Component } from 'react'

import {connect} from 'react-redux'
import FächerVerbessern from './FächerVerbessern';

class Berechnen extends Component {

    componentDidMount() {
      if(this.props.fächer.length < 8) {
        this.props.history.push('/')
      }
    }

  render() {
    return (
      <div>
        <div className="berechnenContainer">
          <h1>Dein NC ist: </h1>
          <h1>{`NC: ${this.props.nc}`}</h1>
        </div>
        <FächerVerbessern />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    nc: state.nc,
    fächer: state.fächer
  }
}

export default connect(mapStateToProps)(Berechnen)