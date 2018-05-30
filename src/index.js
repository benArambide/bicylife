import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import 'semantic-ui-css/semantic.min.css';
import 'semantic-ui-react';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

import $ from 'jquery';
window.jQuery = $;
window.$ = $;
global.jQuery = $;

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
