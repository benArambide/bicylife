import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import 'semantic-ui-css/semantic.min.css';
import 'semantic-ui-react';
import * as $ from 'jquery'; 


import App from './App';
import registerServiceWorker from './registerServiceWorker';

window.jQuery = window.jquery = $;
require('@fancyapps/fancybox/dist/jquery.fancybox.js');
require('@fancyapps/fancybox/dist/jquery.fancybox.min.css');

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
