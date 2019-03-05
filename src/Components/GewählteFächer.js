import React, { Component } from 'react'
import NotenFach from './NotenFach';
import {connect} from 'react-redux'
import ProgressBar from './ProgressBar';
import Kurs from '../Daten/Kurs';

class GewählteFächer extends Component {

    state = {
        fächer: [
            new Kurs(),
            new Kurs("Franze"),
            new Kurs("Englisch"),
            new Kurs("Deutsch"),
            new Kurs("Sport"),
        ],
        currentFach: 0,
        progress: 0
    }

    increaseProgress = () => {
        if(this.state.progress >= 100){
            return
        }
        this.setState({
            progress: this.state.progress + (100 / this.props.fächer.length)
        })
    }

    checkCount = (gewichtung) => {
        return this.props.fächer.filter(item => item.gewichtung === gewichtung).length
    }

    pushRoute = () => {
        this.props.history.push('/noten/berechnen')
    }

    onFachChangeClick = (dir) => () => {
        this.setState({
            currentFach: this.chooseCurrentFach(dir)
        })
    }

    chooseCurrentFach = (dir) => {
        const {currentFach} = this.state;
        const {fächer} = this.props;
        let length = fächer.length - 1

        this.increaseProgress()

        if (currentFach === length && dir > 0){
            return 0
        }else if (currentFach === 0 && dir < 0) {
            return length
        }else {
            return currentFach + dir
        }
    }

  render() {
    const {currentFach, progress} = this.state;
    const {fächer} = this.props

    if(this.props.fächer.length < 8) {
        this.props.history.push('/')
    }   
    return (
        <div className="secondContainer">
            <div className="nextFachContainer">
                <svg onClick={this.onFachChangeClick(-1)} viewBox="0 0 24 24">
                    <path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"/>
                </svg>
                {fächer.length > 0 ? <NotenFach 
                    increaseProgress={this.increaseProgress} 
                    delete={this.props.delete} 
                    kurs={fächer[currentFach]}>
                </NotenFach>
                :
                <div></div>
                }
                <svg onClick={this.onFachChangeClick(1)} viewBox="0 0 24 24">
                    <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"/>
                </svg>
            </div>
            <ProgressBar progress={progress} className="progressContainer" />
        </div>
    )
  }
}

const mapStateToProps = state => {
    return {
        fächer: state.fächer
    }
}

export default connect(mapStateToProps)(GewählteFächer)