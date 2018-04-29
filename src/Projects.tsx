import * as React from 'react';
import './Projects.css';
const YouTube = require('react-youtube').default;

const woundCareLinkIcon = require('./WoundCareLink.png');

class Projects extends React.Component {
    _onReady(event: any) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
      }

    render() {
        const opts = {
            height: '340',
            width: '320'
        };
        return (
            <section id="wip">
                <div className="container">
                    <div className="row">
                        <div className="eight columns offset-by-two columns">
                            <p className="intro slate">Example Projects</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="one-third column">
                            <div className="expertise-block wow animated">
                                <a href="https://s3.amazonaws.com/aws-website-wwwtourajvaziricom-9naq0/WoundCareLink/index.html" target="_blank" className="startup-brand">
                                    <img src={woundCareLinkIcon} />
                                </a>
                                <p className="description">
                                    <em>WoundCareLink</em>,
                                        an application that facilitates communication and reliable access
                                        and transfer of information between
                                        healthcare practitioners during wound care management.
                                </p>
                            </div>
                        </div>
                        <div className="one-third column">
                            <div className="expertise-block wow animated">
                                <YouTube
                                    videoId="5NS69FrG3UI"
                                    opts={opts}
                                    onReady={this._onReady}
                                />
                                {/* <iframe width="350" height="315" src="https://www.youtube.com/embed/5NS69FrG3UI" allowfullscreen="" /> */}
                                <p className="description">
                                    <em>Garibaldi Stakes</em>,
                                        an INNOVATIVE horse racing game that uses augmented reality technology to turn any surface into a game table.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Projects;