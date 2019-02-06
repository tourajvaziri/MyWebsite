import * as React from 'react';
import '../styles/Resume.css';

class Resume extends React.Component {
    render() {
        return (
            <section id="sub-footer" className="section">
                <p>Get in touch!<br />I am currently accepting new projects.</p>
                <div className="cd-modal-action">
                    <a href="https://s3.amazonaws.com/aws-website-wwwtourajvaziricom-9naq0/Touraj+Vaziri+Resume.pdf" className="btn" target="_blank">VIEW RESUME</a>
                </div>
            </section>
        );
    }
}

export default Resume;