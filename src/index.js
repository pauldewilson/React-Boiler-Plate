// necessary react imports
import React from 'react'
import ReactDOM from 'react-dom'

// css imports
import 'normalize-css/normalize.css';
import './styles.scss'

// Project react component imports
import App from './react_components/ReactComponentOne';

// render to main app div
const appROOT = document.getElementById('appROOT');
ReactDOM.render(<App />, appROOT);
