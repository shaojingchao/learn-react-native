/**
 * Created by 邵敬超 on 2017/8/1.
 */


import React,{ Component } from 'react';
import {
    View,
    ActivityIndicator
} from 'react-native';

export default class MyLoading extends Component{
    render () {
        return (
            <View>
                <ActivityIndicator
                    animating={true}
                    color='green'
                    size={30} />
            </View>
        );
    }
}