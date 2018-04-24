import * as React from 'react';
import './Home.css';

const logo = require('./tourajPhoto.png');

class Home extends React.Component {
    render() {
        return (
            <div className="Home-container">
                <p className="Home-centered">Hello! <br /> I'm Touraj <br /> <br /> I am a Software Engineer.</p>
                <img id="profilepic" src={logo} alt="profile picture"/>
            </div>
        );
    }
}

export default Home;