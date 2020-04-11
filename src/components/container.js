import React from 'react'
import Card from './card/card'
import Menu from './sidebar/menu';

function Container() {
    return (
        <div className="page page_wrap">
            <div className="container opened" data-animation-in="fadeInLeft" data-animation-out="fadeOutLeft">
            <Menu/>
            <Card />
        </div> 
        </div >
    );
}

export default Container;
