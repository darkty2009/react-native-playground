import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';

export default class Runner extends Component {
    constructor(props) {
        super(props);

        this.state = {
            instance:null
        };
    }

    componentDidMount() {
        fetch("http://10.2.21.76/react-native-playground/examples/test.jsbundle", {

        }).then(function(response) {
            if(response && !response.ok) {
                var error = new Error();
                error.name = response.status;
                throw error;
            }
            return response.text().then(function(text) {
                var Target = eval(`${text}`);
                alert(Object.keys(Target));
            });
        });
    }

    render() {
        var Instance = this.state.instance;
        return (
            <View style={{flex:1,backgroundColor:'#f2f2f2',alignItems:'center'}}>
                {Instance ? <Instance /> : <Text>正在加载中……</Text>}
            </View>
        );
    }
}