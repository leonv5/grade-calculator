import React, { Component } from 'react'

export default class Berechnen extends Component {

    state = {
        nc: 0
    }

    calculateNC = () => {
        const { fächer } = this.props
        let points = 0;
        console.log("Calculating...")
        fächer.forEach(item => {
            points += item.calculatePoints();
            return points + item.calculatePoints()
        });
        let nc = 17/3 - (points/180);
        let ncRounded = Math.abs(Math.round( nc * 10 ) / 10);
        this.setState({nc: ncRounded});
    }

  render() {
    return (
      <div className="berechnenContainer">
        <div onClick={this.calculateNC} className="berechnenBTN">Berechnen</div>
        <h1>{`NC: ${this.state.nc}`}</h1>
      </div>
    )
  }
}
