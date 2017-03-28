import React, {Component} from 'react';
import {
    AppRegistry
} from 'react-native';
import {
    StackNavigator,
    TabNavigator,
    DrawerNavigator
} from 'react-navigation';
import {LoginScreen} from "./screens/LoginScreen";
import {HomeScreen} from "./screens/HomeScreen";

export const App = DrawerNavigator({
    Login: {screen: LoginScreen},
    Main: {
        screen: StackNavigator({
            Home: {screen: HomeScreen}
        })
    }

});

AppRegistry.registerComponent('App', () => App);
