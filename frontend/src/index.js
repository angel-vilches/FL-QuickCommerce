import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

const header_container = document.getElementById('root');
const product_container = document.createElement('div');
header_container.appendChild(product_container);
ReactDOM.render(<App />, product_container);
