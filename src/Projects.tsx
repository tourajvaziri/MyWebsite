import * as React from 'react';
import './Projects.css';
const YouTube = require('react-youtube').default;
const woundCareLinkIcon = require('./WoundCareLink.png');
interface ProjectsState {
    loadWoundCareLinkIframe: boolean;
}

class Projects extends React.Component<any, ProjectsState> {
    constructor(props: any) {
        super(props);
        this.handleWoundCareLinkClick = this.handleWoundCareLinkClick.bind(this);
        this.state = { loadWoundCareLinkIframe: false };
    }

    _onReady(event: any) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }

    handleWoundCareLinkClick() {
        this.setState({ loadWoundCareLinkIframe: true });
    }

    render() {
        const opts = {
            height: '340',
            width: '320'
        };

        const woundCareLinkDiv = this.state.loadWoundCareLinkIframe ?
            (
                <iframe src="https://s3.amazonaws.com/aws-website-wwwtourajvaziricom-9naq0/WoundCareLink/index.html" width={opts.width} height={opts.height} className="startup-brand" />
            ) :
            (
                <img src={woundCareLinkIcon} onClick={this.handleWoundCareLinkClick} />
            );

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
                                {woundCareLinkDiv}
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