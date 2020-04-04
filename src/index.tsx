import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";

import './index.css';

const browserHistory = createBrowserHistory();

ReactDOM.render(
      <Router history={browserHistory}>
        <App />
      </Router>,
  document.getElementById('root')
);
