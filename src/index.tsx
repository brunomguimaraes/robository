import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Gatekeeper from './components/Gatekeeper';
import AvaliableApps from './components/AvaliableApps';

ReactDOM.render(
    <main>
      <Gatekeeper />
      <AvaliableApps />
    </main>,
  document.getElementById('root')
);