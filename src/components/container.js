import React from 'react'
import Card from './card/card'
import Menu from './sidebar/menu';

import { HashRouter as BrowserRouter, Route, Switch, } from 'react-router-dom';

import About from './sidebar/help-panel/about/about'
import Resume from './sidebar/help-panel/resume/resume'
import Work from './sidebar/help-panel/work/work'
import Contact from './sidebar/help-panel/contact/contact'
import Gallery from './sidebar/help-panel/gallery/gallery'
import NumbersToWords from './num-to-words/num-to-words';
import ReadOMeter from './read-o-meter/readoMeter';
import MemoryGame from './memory-game/memory-game'
function Container() {
    return (
        <div className="page page_wrap">
            <div className="container opened" data-animation-in="fadeInLeft" data-animation-out="fadeOutLeft">

                <BrowserRouter basename={process.env.PUBLIC_URL}>
                    <div>
                        <Menu />
                        <Switch>
                            <Route path="/" component={About} exact />
                            <Route path="/resume" component={Resume} exact />
                            <Route path="/contact" component={Contact} />
                            <Route path="/Work" component={Work} exact />
                            <Route path="/gallery" component={Gallery} exact />
                            <Route path="/number-to-words" component={NumbersToWords} exact />
                            <Route path="/read-o-meter" component={ReadOMeter} exact />
                            <Route path="/memory-game" component={MemoryGame} exact />
                        </Switch>
                    </div>
                </BrowserRouter>
                <Card />
            </div>
        </div >
    );
}

export default Container;
