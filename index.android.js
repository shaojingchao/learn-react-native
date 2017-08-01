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
  DrawerLayoutAndroid
} from 'react-native';

import MyLoading from './src/component/Loading';
import MyButton from './src/component/Button';


const navigationView = (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>I'm in the Drawer!</Text>
    </View>);

export default class app04 extends Component {
  render() {
    return (

    <DrawerLayoutAndroid
        drawerWidth={300}
        drawerPosition={DrawerLayoutAndroid.positions.right}
        renderNavigationView={() => navigationView}>
      <View style={{flex: 1, alignItems: 'center',backgroundColor:'green'}}>
        <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>Hello</Text>
        <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>World!</Text>
      </View>
    </DrawerLayoutAndroid>
      // <View style={styles.container}>
      //
      //   {/*<MyLoading />*/}
      //
      //   {/*<MyButton />*/}
      //
      //
      //
      //
      //   {/*<Text style={styles.welcome}>*/}
      //     {/*loading*/}
      //   {/*</Text>*/}
      //
      //   {/*<Text style={styles.welcome}>*/}
      //     {/*Welcome s React Native!*/}
      //   {/*</Text>*/}
      //   {/*<Text style={styles.instructions}>*/}
      //     {/*To get started, edit .android.js*/}
      //   {/*</Text>*/}
      //   {/*<Text style={styles.instructions}>*/}
      //     {/*Double tap R on your keyboard to reload,{'\n'}*/}
      //     {/*Shake or press menu button for dev menu*/}
      //   {/*</Text>*/}
      // </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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
});

AppRegistry.registerComponent('app04', () => app04);
