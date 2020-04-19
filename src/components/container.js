import React from 'react'
import Card from './card/card'
import Menu from './sidebar/menu';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import About from './sidebar/help-panel/about/about'
import Resume from './sidebar/help-panel/resume/resume'
import Blog from './sidebar/help-panel/blog/blog'
import Contact from './sidebar/help-panel/contact/contact'
import Gallery from './sidebar/help-panel/work/work'
function Container() {
    return (
        <div className="page page_wrap">
            <div className="container opened" data-animation-in="fadeInLeft" data-animation-out="fadeOutLeft">

                <BrowserRouter>
                    <div>
                        <Menu />
                        <Switch>
                            <Route path="/me" component={About} />
                            <Route path="/resume" component={Resume} exact />
                            <Route path="/contact" component={Contact} exact />
                            <Route path="/blog" component={Blog} exact />
                            <Route path="/gallery" component={Gallery} exact />
                        </Switch>
                    </div>
                </BrowserRouter>
                <Card />
            </div>
        </div >
    );
}

export default Container;
