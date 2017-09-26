import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux'


import App from './components/app';
import reducers from './redux/reducers/configureStore.js';
let store = createStore(reducers);

ReactDOM.render (
    <Provider store={store}>
        <App/>
    </Provider>
    , document.querySelector('.container')
);


