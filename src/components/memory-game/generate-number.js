import React, { Component } from 'react'


/**
* @author
* @class 
**/

class GenNumber extends Component {
    componentDidUpdate() {
        let time, digit;
        // increase showing time depend on level
        digit = this.props.level.main + 2;
        time = 100 * Math.min(digit, 5) + 400 * Math.max(digit - 5, 0);

        let number = document.getElementById('number');
        setTimeout(function () {
            number.innerHTML = number.innerHTML.replace(/\w/gi, '&#183;');
        }, time);

    }
    componentDidMount() {
        let number = document.getElementById('number');
        setTimeout(function () {
            number.innerHTML = number.innerHTML.replace(/\w|\W/gi, '&#183;');
        }, 1200);
    }
    render() {
        return (
            <div className="app__gen-number">
                <div className="app__info">
                    <p className="app__level">Level: {this.props.level.main} - {this.props.level.sub}</p>
                    <p className="app__wrong">Wrong: {this.props.wrong}/3</p>
                </div>
                <p className="app__divider">############################</p>
                <p></p>
                <p className="game-info">Shall we play a game?<br/>

                     Re-type the number you see below and press Enter. Easy right?
                </p>
                <p className="app__number" id="number">{(this.props.wrong < 3) ? atob(this.props.question) : 'Game Over.'}</p>
                <p className="app__divider">############################</p>
            </div>
        )
    }
}
export default GenNumber; 