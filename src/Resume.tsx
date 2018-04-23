import * as React from 'react';
import './Resume.css';

const resume = require('./Resume.pdf');

class Resume extends React.Component {
    render() {
        return (
            <div className="Resume-container">
                <p className="Resume-centered">I am currently available for hire:</p>
                <div className="Resume-centered">
                 <a href={resume} >DOWNLOAD RESUME</a>
                </div>
            </div>
        );
    }
}

export default Resume;