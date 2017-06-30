import "es6-shim";
import React from 'react';
import ReactDOM from 'react-dom';
import {createHashHistory} from 'history';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import promise from 'redux-promise';
import { HashRouter as Router } from 'react-router-dom';

import Routes from './routes';
import reducers from './reducers';

// const appHistory = useRouterHistory(createHashHistory)({queryKey: false});
let appHistory = (opts) => {
  return createHashHistory({queryKey: false})
}

const middleWareList = [promise];
const createStoreWithMiddleware = applyMiddleware(...middleWareList)(createStore);

let store = createStoreWithMiddleware(reducers);

if (process.env.NODE_ENV !== 'production') {
    console.log('Uncomented... Override store for debug purpose ....');
    const STORE_INIT_STATE = {};
    store = createStore(reducers, STORE_INIT_STATE, compose(
        applyMiddleware(...middleWareList),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ));
}

ReactDOM.render(
    <Provider store={store}>
        <Router history={appHistory}>
          <Routes />
        </Router>
    </Provider>,
    document.querySelector('.app')
);
