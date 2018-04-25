import * as React from 'react';
import './Home.css';

const profilePic = require('./tourajPhoto.png');
const logo = require('./logoIcon.png');

class Home extends React.Component {
    render() {
        return (
            <div className="Home-container">
                <p className="Home-centered">Hello! <br /> I'm Touraj <br /> <br /> I am a Software Engineer.</p>
                <img id="logo" src={logo} alt="logo"/>
                <img id="profilepic" src={profilePic} alt="profile picture"/>
            </div>
        );
    }
}

export default Home;