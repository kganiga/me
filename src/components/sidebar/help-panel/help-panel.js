import React, { Component } from 'react';
import NumbersToWords from '../../num-to-words/num-to-words';


class HelpPanel extends Component {
    render() {
        const panels = [<NumbersToWords />

        ];
        const correctPanel = panels[this.props.panelIndex];
        return (<>
            {correctPanel}
        </>
        );
    }
}

export default HelpPanel;