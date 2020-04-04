import React from 'react';
import AvaliableApps from '../AvaliableApps'

import './style.css';

function Gatekeeper() {
  return (
    <div className="gatekeeper">
      <div className="gatekeeperContainer">
        <img src={require('../../assets/robot-gifs/gatekeeper.gif')} alt="gatekeeper-say-hi" className="gatekeeperGif" />
        <div className="headerContainer">
          <h1 className="h1Gatekeeper">Welcome to robository, we hope you be amazed.</h1>
          <h2 className="h2Gatekeeper">Which app would you like to use?</h2>
        </div>
      </div>
      <AvaliableApps />
    </div>

  );
}

export default Gatekeeper;
