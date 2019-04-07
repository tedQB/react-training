import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux'
import './index.css';
//import App from './App';
//import App from "./example";
import * as serviceWorker from './serviceWorker';
import store from './store'
import Route from './router/index'

//ReactDOM.render(<App />, document.getElementById('root'));

const render = Component => {
    ReactDOM.render(
        <Provider store={store}>
            <AppContainer>
                <Component />
            </AppContainer>
        </Provider>,
        document.getElementById("root")
    )
}
render(Route)

if (module.hot) {
    module.hot.accept('./router/', () => {
        render(Route);
    })
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
