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
            names: ['Mobile Applications',
                'Web Services',
                'Client-Server applications',
                'Restful Web APIs',
                'APIs integration',
                'Automation Tools',
                'Game Engine Programming',
                'Augment Reality',
                'Virtual Reality',
                'Web Applications',
                'Object-oriented design patterns',
                'Agile/Test driven development',
                'Desktop Applications',
                'Databases',
                'Cloud Computing',
                'Networking Protocols',
                'Multithreading',
                'Version Control Systems',
                'Project Management',
                '2D and 3D Graphics']
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
                            <span>Hi, I'm Touraj. I'm experienced in</span>
                            <Typing loop="true" speed={100}>
                                {menuNames}
                            </Typing>
                        </h1>
                        {/* <img id="profilepic" src={profilePic} alt="profile picture"/> */}
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;