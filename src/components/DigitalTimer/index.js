// Write your code here
import {Component} from 'react'

import './index.css'

class DigitalTimer extends Component {
  state = {
    minutes: 25,
    seconds: 0,
    paused: true,
    valueSet: 25,
  }

  tick = () => {
    if (this.state.seconds !== 0) {
      this.setState(prev => ({
        seconds: prev.seconds - 1,
      }))
    } else if (this.state.minutes !== 0) {
      this.setState(prev => ({
        minutes: prev.minutes - 1,
        seconds: 59,
      }))
    } else {
      clearInterval(this.timerId)
    }
  }

  start = () => {
    let {valueSet} = this.state
    this.setState({paused: false})
    if (valueSet !== 0) {
      this.timerId = setInterval(this.tick, 1000)
    }
  }

  //pause
  pause = () => {
    this.setState({paused: true})
    clearInterval(this.timerId)
  }
  reset = () => {
    this.setState({
      paused: true,
      minutes: 25,
      seconds: 0,
    })
    clearInterval(this.timerId)
  }
  subTime = () => {
    if(this.state.paused===true){
      if (this.state.valueSet != 0) {
        this.setState(prev => ({
          valueSet: prev.valueSet - 1,
          minutes: prev.valueSet - 1,
        }))
      }
    }
  }
  addTime = () => {
    if(this.state.paused===true){
      this.setState(prev => ({
        valueSet: prev.valueSet + 1,
        minutes: prev.valueSet + 1,
      }))
    }
  }
  //reset
  //subTime
  //addTime

  render() {
    let {minutes, seconds, paused, valueSet} = this.state
    let minutesText, secondsText, pausedText
    minutes < 10 ? (minutesText = `0${minutes}`) : (minutesText = `${minutes}`)
    seconds < 10 ? (secondsText = `0${seconds}`) : (secondsText = `${seconds}`)
    paused ? (pausedText = 'Paused') : (pausedText = 'Running')
    return (
      <div className="bg-cont">
        <h1 className="heading"> Digital Timer</h1>
        <div className="timer-elements-card">
          <div className="timer-comp">
            <div className="timer-value">
              <h1 className="timer-value-text">
                {minutesText}:{secondsText}
              </h1>
              <p className="timer-value-status">{pausedText}</p>
            </div>
          </div>
          <div className="timer-control">
            <div className="timer-actions">
              <div className="action-components">
                {paused && (
                  <div className="action-component">
                    <button className="just-icon" onClick={this.start}>
                      <img
                        src="https://assets.ccbp.in/frontend/react-js/play-icon-img.png"
                        className="icon"
                        alt="play icon"
                      />
                      <p className="action-text">Start</p>
                    </button>
                  </div>
                )}
                {!paused && (
                  <div className="action-component">
                    <button className="just-icon" onClick={this.pause}>
                      <img
                        src="https://assets.ccbp.in/frontend/react-js/pause-icon-img.png"
                        className="icon"
                        alt="pause icon"
                      />
                    <p className="action-text">Pause</p>
                    </button>
                  </div>
                )}
                <div className="action-component">
                  <button className="just-icon" onClick={this.reset}>
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
                      className="icon"
                      alt="reset icon"
                    />
                    <p className="action-text">Reset</p>
                  </button>
                </div>
              </div>
            </div>
            <p className="set-timer-text">Set Timer Limit</p>
            <div className="set-timer">
              <button className="minus" onClick={this.subTime}>
                -
              </button>
              <div className="set-timer-value">
                <p>{valueSet}</p>
              </div>
              <button className="plus" onClick={this.addTime}>
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DigitalTimer
