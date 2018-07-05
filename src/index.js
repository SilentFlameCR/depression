import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import $ from 'jquery'; 
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
