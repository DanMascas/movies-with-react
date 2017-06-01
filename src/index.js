import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {FILME} from './constants/filme';
ReactDOM.render(<App data={FILME}/>, document.getElementById('root'));
