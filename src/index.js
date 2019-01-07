import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route } from 'react-router-dom';

import { Provider } from 'react-redux';
import configureStore from './redux/store/configureStore';
import 'bootstrap/dist/css/bootstrap.min.css';

//BrowserRouter is for reacter router to allow our app to use the methods for routing

const store = configureStore();
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Route path="/" component={App} />
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));

serviceWorker.unregister();
