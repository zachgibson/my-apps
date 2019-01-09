import React, { Component } from 'react';
import ReactPlayer from 'react-player';

import './App.css';

class App extends Component {
    render() {
        return (
            <div
                style={{
                    position: 'relative',
                    width: '50vw',
                    // maxWidth: 560,
                    height: '28.125vw',
                    // maxHeight: 315,
                    // height: '100vh',
                    marginLeft: 'auto',
                    marginRight: 'auto'
                    // paddingTop: 160
                }}
            >
                <ReactPlayer
                    className="react-player"
                    url="https://www.youtube.com/watch?v=pAmAI3wpK_U"
                    width="100%"
                    height="100%"
                />
            </div>
        );
    }
}

export default App;
