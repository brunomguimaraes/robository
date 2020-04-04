import React from 'react';

import "antd/dist/antd.css";
import './style.css';

function Dinotron() {
  return (
    <div className="dinotron">
      <div className="dinotronHeader">
        <div className="dinotronSpeech" >I am Dinotron, i love eating barbecue! I've been barbecuing since the post-jurrasic-cyber-gama
          age. Oh, you don't know what i'm talking about? You are not from the future?!</div>
        <img src={require('../../assets/robot-gifs/dino.gif')} alt="dino-say-hi" className="dinoGif" />
      </div>
    </div>
  );
}

export default Dinotron;
