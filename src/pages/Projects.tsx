import * as React from 'react';
import '../styles/Projects.css';
const YouTube = require('react-youtube').default;
const woundCareLinkIcon = require('../../static/WoundCareLink.png');
import { css } from "@emotion/core";

interface ProjectsState {
    loadWoundCareLinkIframe: boolean;
    isWoundCareLinkMouseOver: boolean;
    woundCareLinkIframeFinishedLoading: boolean;
    woundCareLinkIframeFinishedLoadingTimer: any;
}

class Projects extends React.Component<any, ProjectsState> {
    constructor(props: any) {
        super(props);
        this.handleWoundCareLinkClick = this.handleWoundCareLinkClick.bind(this);
        this.handleMouseEnterWoundCareLink = this.handleMouseEnterWoundCareLink.bind(this);
        this.handleMouseLeaveWoundCareLink = this.handleMouseLeaveWoundCareLink.bind(this);
        this.state = { loadWoundCareLinkIframe: false, isWoundCareLinkMouseOver: false, woundCareLinkIframeFinishedLoading: false, woundCareLinkIframeFinishedLoadingTimer: null };
    }

    _onReady(event: any) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }

    handleWoundCareLinkClick() {
        this.setState({ loadWoundCareLinkIframe: true });

        // let timer = setInterval(
        //     () => this.checkForWoundCareLinkStart(),
        //     1000
        // );

        // this.setState({ woundCareLinkIframeFinishedLoadingTimer: timer });
    }

    handleMouseEnterWoundCareLink() {
        this.setState({ isWoundCareLinkMouseOver: true });
    }

    handleMouseLeaveWoundCareLink() {
        this.setState({ isWoundCareLinkMouseOver: false });
    }

    checkForWoundCareLinkStart() {
        let iframe = (document.getElementById('woundCareLinkIframe') as HTMLIFrameElement);
        if (iframe != null) {
            var innerDoc = iframe.contentDocument || (iframe.contentWindow ? iframe.contentWindow.document : null);
            if (innerDoc != null) {
                var s = innerDoc.getElementsByTagName('ion-input');
                if (s.length > 0) {
                    this.setState({ woundCareLinkIframeFinishedLoading: true });
                    clearInterval(this.state.woundCareLinkIframeFinishedLoadingTimer);
                }
            }
        }
    }

    render() {
        const opts = {
            height: '440',
            width: '330'
        };

        const woundCareLinkDiv = this.state.loadWoundCareLinkIframe ?
            (
                <div className="woundCareLinkIframeContainer">
                    {/* {!this.state.woundCareLinkIframeFinishedLoading && <div className="loader" />} */}
                    <iframe id="woundCareLinkIframe" src="https://s3.amazonaws.com/aws-website-wwwtourajvaziricom-9naq0/WoundCareLink/woundcarelinkindex.html" width="330" height="680" className="startup-brand" />
                </div>
            ) :
            (
                <div className="woundCareLinkContainer">
                    {this.state.isWoundCareLinkMouseOver && <div className="middle">
                        <div className="text">Launch</div>
                    </div>}
                    <img
                        src={woundCareLinkIcon}
                        alt="WoundCareLink"
                        className="woundCareLinkImage"
                        onClick={this.handleWoundCareLinkClick}
                        onMouseOver={this.handleMouseEnterWoundCareLink}
                        onMouseOut={this.handleMouseLeaveWoundCareLink}
                    />

                </div>
            );

        return (
            <section id="wip">
                <div className="container">
                    <div className="row">
                        <div className="eight columns offset-by-two columns">
                        <h1 css={css`
                            text-align: center;
                            `}> Example Projects
                        </h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="one-third column" onClick={this.handleMouseEnterWoundCareLink} >
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
                                <p className="description">
                                    <em>Garibaldi Stakes</em>,
                                        an INNOVATIVE horse racing game that uses augmented reality technology to turn any surface into a game table.
                                </p>
                            </div>
                        </div>
                        <div className="one-third column">
                            <div className="expertise-block wow animated">
                                <YouTube
                                    videoId="auzT9tMjDKU"
                                    opts={opts}
                                    onReady={this._onReady}
                                />
                                <p className="description">
                                    <em>Gryd XR</em>,
                                        a Virtual Reality real estate app running on Google Cardboard for Android and iOS, Oculus Go and Samsung Gear VR.
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