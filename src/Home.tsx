import * as React from 'react';
import './Home.css';

const logo = require('./logoIcon.png');

class Home extends React.Component {
    render() {
        return (
            <div id="fullscreen-hero" className="home-hero">
                <img id="logo" src={logo} alt="logo" />
                {/* <img id="profilepic" src={profilePic} alt="profile picture"/> */}
            </div>
        );
    }
}

export default Home;