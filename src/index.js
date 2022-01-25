import React from "react";
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducers from './reducers';
import './index.css'

import App from './App';

ReactDOM.render(<Provider store={createStore(reducers,composeWithDevTools())}>
    <App />
</Provider>, document.querySelector('#root'))