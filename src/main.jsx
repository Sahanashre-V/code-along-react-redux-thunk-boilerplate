
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { legacy_createStore, applyMiddleware } from "redux";
import { Provider } from 'react-redux';
import {thunk} from "redux-thunk";
import Reducer from './assets/Componenets/Reducer.jsx';

const store = legacy_createStore(Reducer, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
