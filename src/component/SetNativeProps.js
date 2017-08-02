/**
 * Created by 邵敬超 on 2017/8/2.
 */



import React from 'react';
import {TouchableOpacity,View,Text} from 'react-native';

var MyButton = React.createClass({
    render() {
        const prop = this.props.label;
        return (
            <View style={{height:40,backgroundColor:'gray'}}>
                <Text  style={[prop.style,{textAlign:'center'}]}>{prop.text}</Text>
            </View>
        )
    },
});

var App = React.createClass({
    render() {
        return (
            <TouchableOpacity>
                <MyButton label={{text:"Press me!",style:{color:"red"}}} />
            </TouchableOpacity>
        )
    },
});

module.exports = App;