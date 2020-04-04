import React from 'react';

import './style.css';

function Gatekeeper() {
  return (
    <div className="gatekeeper">
      <img src={require('../../assets/robot-gifs/gatekeeper.gif')} alt="gatekeeper-say-hi" className="gatekeeperGif" />
      <div>
        <h1>Bem-vindo ao robository, tomara que sua estadia aqui seja incrível.</h1>
        <h2>Qual app você deseja utilizar?</h2>
      </div>
    </div>
  );
}

export default Gatekeeper;
