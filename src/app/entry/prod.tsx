import 'core-js/stable';
import 'regenerator-runtime/runtime';

import 'root/app/general.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { App } from 'root/app/component';

initApp();

function initApp() {
    const root = document.getElementById('root');
    const renderApp = () => {
        return (
            <App/>
        );
    };

    const render = () => {
        if (root) {
            ReactDOM.render(
                renderApp(),
                root,
            );
        }
    };

    render();
}

