import React, { Component } from 'react'
import GenNumber from './generate-number';
import InputNumber from './input-number';
import './style.css'

/**
* @author
* @class MemoryGame
**/

class MemoryGame extends Component {
  constructor() {
    super();
    this.compareUserInput = this.compareUserInput.bind(this);
    this.randomGenerate = this.randomGenerate.bind(this);
    this.resetState = this.resetState.bind(this);
    this.state = {
      question: btoa(this.randomGenerate(2)),
      level: { main: 1, sub: 1 },
      wrong: 0
    }
  }
  resetState() {
    this.setState({
      question: btoa(this.randomGenerate(2)),
      level: { main: 1, sub: 1 },
      wrong: 0,
    })
  }
  randomGenerate(digit) {
    let max = Math.pow(10, digit) - 1,
      min = Math.pow(10, digit - 1)

    return Math.floor(Math.random() * (max - min + 1)) + min
  }
  compareUserInput(userNumber) {
    let currQuestion = this.state.question,
      mainLevel = this.state.level.main,
      subLevel = this.state.level.sub,
      wrong = this.state.wrong,
      digit;

    if (userNumber === currQuestion) {
      if (subLevel < 3) {
        ++subLevel;
      } else
        if (subLevel === 3) {
          ++mainLevel;
          subLevel = 1;
        }
    } else {
      ++wrong;
    }
    digit = mainLevel + 2;

    this.setState({
      question: btoa(this.randomGenerate(digit)),
      level: { main: mainLevel, sub: subLevel },
      wrong: wrong
    });
  }
  render() {
    return (

      <div className="card-inner animated active fadeInLeft" id="card-home">
        <div className="card-wrap">
          <div className="content works">
            <div className="title "><span class="first-word">M</span>emory Game</div>
            <div id="app"></div>
            <div className="main__app">
              <GenNumber
                question={this.state.question}
                level={this.state.level}
                wrong={this.state.wrong} />
              <InputNumber
                compareUserInput={this.compareUserInput}
                wrong={this.state.wrong}
                onReset={this.resetState} />
            </div>
          </div>
        </div>
      </div>

    )
  }
}


MemoryGame.propTypes = {}
export default MemoryGame