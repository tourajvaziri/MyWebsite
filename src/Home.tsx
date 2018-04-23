import * as React from 'react';
import './Home.css';

// const logo = require('./backgroundLaptop.jpg');

class Home extends React.Component {
    render() {
        return (
            <div className="Home-container">
                {/* <img src={logo} alt="logo" /> */}
                <p className="Home-centered">Hi, I'm Touraj <br /> A Software Engineer...</p>
            </div>
        );
    }
}

export default Home;