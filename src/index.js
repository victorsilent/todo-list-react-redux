import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './store/store';
import registerServiceWorker from './registerServiceWorker';
import 'bulma/css/bulma.css';

const jsx = (
    <Provider store={store}>
        <App></App>
    </Provider>
)
ReactDOM.render(jsx, document.getElementById('root'));
registerServiceWorker();
