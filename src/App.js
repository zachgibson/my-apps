import React, { Component } from "react";
import ReactPlayer from "react-player";

import "./App.css";
import balllr from "./balllr.mp4";
import particles from "./particles.mp4";
import willSmith from "./will-smith.MP4";
import camera from "./camera.mp4";
import iridescent from "./iridescent.mp4";
import reactNativeTwitterMoments from "./react-native-twitter-moments.MP4";
import slider from "./slider.mp4";
import localToIP from "./local-to-ip.mp4";
import calculator from "./calculator.mp4";
import bubbles from "./bubbles.mp4";
import goldenHour from "./golden-hour.mp4";
import masterClass from "./master-class.mp4";
import nikeParallax from "./nike-parallax.mp4";

const Video = ({ title, link, url, isPortrait }) => (
  <React.Fragment>
    <h2>{title}</h2>
    {link && (
      <div style={{ marginBottom: 24 }}>
        <a href={link} target="_blank">
           App Store Link ↗
        </a>
      </div>
    )}
    <div
      style={{
        position: "relative",
        marginLeft: "auto",
        marginRight: "auto",
        paddingTop: isPortrait ? "75%" : "50%",
        marginBottom: 160
      }}
    >
      <ReactPlayer
        controls
        className="react-player"
        url={url}
        width="100%"
        height="100%"
      />
    </div>
  </React.Fragment>
);

class App extends Component {
  render() {
    return (
      <div
        style={{
          width: "100%",
          maxWidth: 800,
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: 80
        }}
      >
        <Video title="Objective-C" url={localToIP} isPortrait={false} />
        <Video title="Swift" url={calculator} isPortrait={false} />
        <Video title="React Native" url={balllr} isPortrait={true} />
        <Video
          title="React Native"
          url={willSmith}
          isPortrait={true}
          link="https://itunes.apple.com/us/app/will-smith-official-app/id1080053724?mt=8"
        />
        <Video title="React Native" url={masterClass} isPortrait={true} />
        <Video title="React Native" url={camera} isPortrait={false} />
        <Video title="React Native" url={bubbles} isPortrait={true} />
        <Video title="React Native" url={nikeParallax} isPortrait={true} />
        <Video title="React Native" url={particles} isPortrait={true} />
        <Video title="React Native" url={slider} isPortrait={true} />
        <Video
          title="React Native"
          url={reactNativeTwitterMoments}
          isPortrait={false}
        />
        <Video title="React Native" url={iridescent} isPortrait={false} />
        <Video title="React Native" url={goldenHour} isPortrait={true} />
      </div>
    );
  }
}

export default App;
