import * as React from 'react';
import './Resume.css';

const resume = require('./Resume.pdf');

class Resume extends React.Component {
    render() {
        return (
            <section id="sub-footer" className="section">
                <div className="container">
                    <div className="row">
                        <div className="columns">
                            <p className="statement slate">
                                Get in touch!<br />I am currently accepting new projects.
                            </p>
                            <div>
                                <button>
                                    <a href={resume} className="ResumeBtn">DOWNLOAD RESUME</a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Resume;