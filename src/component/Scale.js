/**
 * Created by 邵敬超 on 2017/8/2.
 */

import React,{Component} from 'react';
import {
    ScrollView,
    View,
    Text} from 'react-native';

export default class ScaleAble extends Component {
    render (){
        return (
            <ScrollView style={{flex:1}}
                maximumZoomScale={2}
                minimumZoomScale={0.1}>
                <View>
                    <Text>text1</Text>
                    <Text>text1</Text>
                    <Text>text1</Text>
                    <Text>text1</Text>
                    <Text>text1</Text>
                    <Text>text1</Text>
                    <Text>text1</Text>
                    <Text>text1</Text>
                    <Text>text1</Text>
                    <Text>text1</Text>
                    <Text>text1</Text>
                    <Text>text1</Text>
                    <Text>text1</Text>
                    <Text>text1</Text>
                    <Text>text1</Text>
                    <Text>text1</Text>
                    <Text>text1</Text>
                    <Text>text1</Text>
                    <Text>text1</Text>
                    <Text>text1</Text>
                    <Text>text1</Text>
                    <Text>text1</Text>
                    <Text>text1</Text>
                    <Text>text1</Text>
                </View>
            </ScrollView>
        )
    }
}
