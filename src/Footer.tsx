import * as React from 'react';
import './Footer.css';

// const logo = require('./logoIcon.png');
{/* <img id="logoFooter" src={logo} alt="logo"/> */ }
class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div id="contact">
                    <div className="container">
                        <div className="row">
                            <div className="twelve columns">
                                <p>Created by me &copy; 2019.</p>
                                <div className="social-links">
                    <a href="https://www.github.com/tourajvaziri" target="_blank" className="fa fa-github" />
                                    &nbsp;
                    <a href="https://www.linkedin.com/in/tourajvaziri/" target="_blank" className="fa fa-linkedin" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;