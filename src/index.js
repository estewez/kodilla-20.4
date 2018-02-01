import React from 'react';
import { render } from 'react-dom';
import { Router, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import store from './store/index';
import routes from './routes';
import DevTools from './store/DevTools';

const DT = () => {
    return (
        <div className="App">
            <DevTools />
        </div>
    );
};

render(
    <Provider store={store}>
        <div>
            <Router history={hashHistory} routes={routes}/>
            <DT />
        </div>
    </Provider>,
    document.getElementById('root')
);