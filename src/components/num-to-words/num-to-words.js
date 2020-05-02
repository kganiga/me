import React, { Component } from "react";
import './style.css'
/**
* @author
* @function NumbersToWords
**/
function getOnes(number) {
    const ones = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    return ones[number] || "";
}

function getTeens(number) {
    const teens = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    return teens[number] || "";
}

function getTens(number) {
    const tens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    return tens[number] || "";
}

function getHundreds(num) {
    if (num > 0 && num < 10) {
        return getOnes(num);
    }
    if (num >= 10 && num < 20) {
        return getTeens(num % 10);
    }
    if (num >= 20 && num < 100) {
        return `${getTens(Math.floor(num / 10))} ${getOnes(num % 10)}`;
    }
    return "";
}

class NumbersToWords extends Component {
    constructor() {
        super();

        this.state = {
            numberBox: null
        };

        this.convertNumber = this.convertNumber.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }


    handleChange = e => {
        let num = e.target.value;

        if (!Number(num)) {
            alert("Number format error")
        }
        this.setState({
            [e.target.name]: num
        });
    };

    convertNumber() {

        const rupees = Number(parseInt(this.state.numberBox, 10));

        const output = [];
        if (rupees === 0) {
            output.push("zero");
        } else if (rupees === 1) {
            output.push("one");
        } else {
            const crores = Math.floor(rupees / 10000000) % 100;
            if (crores > 0) {
                output.push(`${getHundreds(crores)} crore`);
            }

            const lakhs = Math.floor(rupees / 100000) % 100;
            if (lakhs > 0) {
                output.push(`${getHundreds(lakhs)} lakh`);
            }

            const thousands = Math.floor(rupees / 1000) % 100;
            if (thousands > 0) {
                output.push(`${getHundreds(thousands)} thousand`);
            }

            const hundreds = Math.floor((rupees % 1000) / 100);
            if (hundreds > 0 && hundreds < 10) {
                output.push(`${getOnes(hundreds)} hundred`);
            }

            const tens = rupees % 100;
            if (tens > 0) {
                if (rupees > 100) output.push("and");
                output.push(`${getHundreds(tens)}`);
            }
        }
        alert("Rupees " + output.join(" ") + " only")

    }

    render() {
        return (

            <div className="card-inner animated active fadeInLeft" id="card-home">
                <div className="card-wrap">
                    <div className="content works">
                        <div className="title "><span class="first-word">C</span>onvert Numbers to Words using Indian Numbering</div>
                        <p className="desc">
                            The Indian numbering and currency system widely uses lakhs and crores for writing large numbers. The term lakh means one hundred thousand while a crore represents ten million. A billion is written as hundred crores and there exist even higher denominations like arab, kharabh or neel which is equivalent to 10 trillion.
                        </p>
                        <br />
                        <br />
                        <div role="form" className="numToStr">
                            <div >
                                <div> <span><input type="text" name="numberBox" placeholder="Enter number.." value={this.state.numberBox}
                                    onChange={this.handleChange} /></span></div>

                                <button onClick={this.convertNumber} className="button conv-btn"><span className="text">Convert</span><span className="arrow" /></button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default NumbersToWords