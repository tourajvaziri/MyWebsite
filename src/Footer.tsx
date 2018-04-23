import * as React from 'react';
import './Footer.css';

class Footer extends React.Component {
    render() {
        return (
            <div className="Footer-container">
                <p className="Footer-centered"> Created by me &copy; 2018.</p>
                <div className="Footer-centered">
                 <a href="https://github.com/tourajvaziri">Github</a>
                 &nbsp;
                 <a href="https://www.linkedin.com/in/tourajvaziri/">Linkedin</a>
                </div>
            </div>
        );
    }
}

export default Footer;