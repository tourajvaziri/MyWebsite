import * as React from 'react';
import './Footer.css';

// const logo = require('./logoIcon.png');

class Footer extends React.Component {
    render() {
        return (
            <div className="Footer-container">
                {/* <img id="logoFooter" src={logo} alt="logo"/> */}
                <p className="Footer-centered"> Created by me &copy; 2018.</p>
                <div className="Footer-centered">
                <a href="https://www.github.com/tourajvaziri" target="_blank" className="fa fa-github"/>
                 &nbsp;
                 <a href="https://www.linkedin.com/in/tourajvaziri/" target="_blank" className="fa fa-linkedin"/>
                </div>
            </div>
        );
    }
}

export default Footer;