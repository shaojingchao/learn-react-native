/**
 * Created by 邵敬超 on 2017/8/1.
 */

import React,{ Component } from 'react';
import {
    StyleSheet,
    View,
    Button,
    Alert
} from 'react-native';

const  onPressLearnMore  = () => {

    console.log('dsd')

}

export default class MyButton extends Component{
    constructor(props){
        super(props);
    }

    onPressLearnMore(){
        Alert.alert('hello! 按钮')
    }

    render () {
        return (
            <View  style={styles.button}>
                <Button
                    disabled={false}
                    onPress={this.onPressLearnMore}
                    title="按钮"
                    color="#841584"
                    accessibilityLabel="点击这个按钮"
                /><Button
                    disabled={true}
                    onPress={this.onPressLearnMore}
                    title="按钮(不可用)"
                    color="#841584"
                    accessibilityLabel="点击这个按钮"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    button:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
