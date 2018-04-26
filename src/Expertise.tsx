import * as React from 'react';
import './Expertise.css';

const codeIcon = require('./codeIcon.png');

class Expertise extends React.Component {
    render() {
        return (
            <div className="Expertise-container">
                <p className="Expertise-centered">My Expertise</p>
                <img id="codeIcon" src={codeIcon} alt="logo"/>
                <p className="Expertise-CodeText">Code</p>
            </div>
        );
    }
}

export default Expertise;