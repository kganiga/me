import React, { Component } from 'react';
import About from './about/about'
import Conatct from './contact/contact'
import Resume from './resume/resume'
import Blog from './blog/blog'
import Gallery from './work/work'

class HelpPanel extends Component{
    render(){
        const panels = [
			<About/>,<Resume/>,<Gallery/>,<Blog/>,<Conatct/>
        ];
        const correctPanel = panels[this.props.panelIndex];
        return(    <>        
                {correctPanel}  
                </>          
        );
    }
}

export default HelpPanel;