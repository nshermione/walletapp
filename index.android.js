import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

// import {Provider} from 'react-redux';
// import {createStore} from 'redux';
// import {todoApp} from "./app/core/reducers";
import {App} from './app/app.component';
//
// let store = createStore(todoApp);

export default class walletapp extends Component {
    render() {
        // return (
        //     <Provider store={store}>
        //         <App />
        //     </Provider>
        // );

        return (
            <App />
        );
    }
}

AppRegistry.registerComponent('walletapp', () => walletapp);
