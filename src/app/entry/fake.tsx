import 'core-js/stable';
import 'regenerator-runtime/runtime';

import 'root/app/general.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { App } from 'root/app/component/component';
import { initStore } from "root/app/initStore";
import { Provider } from "react-redux";
import { FakeDependencies } from "root/app/dependencies/fake";

initApp();

function initApp() {
    const root = document.getElementById('root');
    const dependencies = new FakeDependencies();
    const store = initStore(dependencies);
    const renderApp = () => {
        return (
            <Provider store={store}>
                <App/>
            </Provider>
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

