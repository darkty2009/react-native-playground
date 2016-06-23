import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    Dimensions
} from 'react-native';

export default class Index extends Component {
    componentDidMount() {

    }

    openScanner() {
        this.props.navigator.push({
            name:Math.random(),
            url:"12312321"
        });
    }

    render() {
        return (
            <View style={{
                flex:1,
                backgroundColor:'#f2f2f2',
                alignItems:'center',
                height:Dimensions.get('window').height,
                justifyContent:'center'
            }}>
                <TouchableOpacity onPress={()=>this.openScanner()}>
                    <Text>扫描二维码</Text>
                </TouchableOpacity>
            </View>
        );
    }
}