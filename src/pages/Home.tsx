import * as React from 'react';
import '../styles/Home.css';
const Typing = require('react-typing-animation').default;
import { Link } from "gatsby";

interface HomeState {
    names: string[];
}
class Home extends React.Component<any, HomeState> {
    constructor(props: any) {
        super(props);
        this.state = {
            names: ['.NET applications',
                'Mobile applications',
                'Augmented Reality applications',
                'Virtual Reality applications',
                'Web applications',
                'C# applications',
                'Java applications',
                'Automation tools',
                'Web services',
                'Client-Server based applications',
                'Databases']
        };
    }

    render() {
        let menuNames = [];
        for (var i = 0; i < this.state.names.length; i++) {
            menuNames.push(
                (
                    <div><span>{this.state.names[i]}.</span>
                        <Typing.Delay ms={1000} /><Typing.Backspace count={this.state.names[i].length + 1} /></div>)
            );
        }
        return (
            <div id="fullscreen-hero" className="home-hero">
                <div className="hero-container">
                    <div className="hero-content">
                        <h1 className="cd-headine letters type">
                            <span>Hi, I'm Touraj. I design and build</span>
                            <Typing loop="true" speed={100}>
                                {menuNames}
                            </Typing>
                        </h1>
                        {/* <img id="profilepic" src={profilePic} alt="profile picture"/> */}
                        <div className="btn" style={{ margin: `3rem auto`, padding: `0 1rem` }}>
                            <Link to={`/blog/`} className="btn" style={{ width: 150 }} >Blog</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;