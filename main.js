/**
 * Created by 邵敬超 on 2017/8/2.
 */


import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    ScrollView,
    InteractionManager,
    Text,
    View,
    DrawerLayoutAndroid,
    TouchableOpacity,
    Alert,
    TouchableWithoutFeedback
} from 'react-native';

import Swiper from './src/component/Swiper';
//
console.log("Swiper",Swiper);
import MyLoading from './src/component/Loading';
import MyButton from './src/component/Button';
import ScaleAble from './src/component/Scale';
import PanResponderExample from './src/component/PanResponder';
import FadeInView from './src/component/animate/FadeInView';
import SetNativeProps from './src/component/SetNativeProps';


// console.log(Swiper);

const images = [
    'http://szimg.mukewang.com/57bd5ec80001b0c405400300-360-202.jpg',
    'http://szimg.mukewang.com/57bd5ec80001b0c405400300-360-202.jpg',
    'http://szimg.mukewang.com/57bd5ec80001b0c405400300-360-202.jpg'];
export default class Main extends Component {

    constructor(props){
        super(props);
        this.state = { myButtonOpacity: 0.8 }
    }

    render() {

        return (

            <View>
                <View style={{height:500,backgroundColor:"#eee"}}>
                    <Swiper/>
                </View>

                <View>
                    <ScrollView>

                        <FadeInView style={{ backgroundColor: 'powderblue'}}>



                            <View style={styles.container}>

                                <View>
                                    <Text style={styles.welcome}>
                                        loading
                                    </Text>

                                    <Text style={styles.welcome}>
                                        Welcome s React Native!
                                    </Text>
                                    <Text style={styles.instructions}>
                                        To get started, edit .android.js
                                    </Text>
                                    <Text style={styles.instructions}>
                                        Double tap R on your keyboard to reload,{'\n'}
                                        Shake or press menu button for dev menu
                                    </Text>


                                    <PanResponderExample />

                                    <ScaleAble />

                                    <MyLoading />

                                    <MyButton />

                                    <TouchableOpacity>
                                        <View>
                                            <Text>
                                                TouchableOpacity
                                            </Text>
                                        </View>
                                    </TouchableOpacity>

                                    <TouchableWithoutFeedback
                                        onPressIn={() => {this.setState({myButtonOpacity: 0.9});console.log(this)}}
                                        onPressOut={() => {this.setState({myButtonOpacity: 1})}}>

                                        <View style={{width:200,height:40,backgroundColor:'gray',opacity:this.state.myButtonOpacity}}>
                                            <Text>{this.state.myButtonOpacity}</Text>
                                        </View>
                                    </TouchableWithoutFeedback>

                                    <SetNativeProps />

                                    <TouchableOpacity>
                                        <View style={[styles.button,{opacity:this.state.myButtonOpacity}]}>
                                            <Text>TouchableWithoutFeedback</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>

                        </FadeInView>


                    </ScrollView>
                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop:50,
        paddingBottom:60
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    button: {
        backgroundColor:'blue',
        padding:30
    }
});
