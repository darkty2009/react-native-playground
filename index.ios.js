/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Navigator
} from 'react-native';

import IndexContent from './scripts/Index.js';
import RunnerContent from './scripts/Runner.js';

class Playground extends Component {
    componentDidMount() {

    }

    configureScene(route) {
        return Object.assign({
            gestures:{}
        }, Navigator.SceneConfigs.FloatFromRight);
    }

    renderScene(route, navigator) {
        var Page = null;
        if(route.name == 'index') {
            Page = IndexContent;
        }else {
            Page = RunnerContent;
        }

        return <Page {...route} route={route} navigator={navigator} />;
    }

    render() {
        return (
            <View style={{flex:1}}>
                <Navigator
                    initialRoute={{name: 'index'}}
                    configureScene={this.configureScene}
                    renderScene={this.renderScene.bind(this)}
                />
            </View>
        );
    }
}

AppRegistry.registerComponent('reactnativeplayground', () => Playground);