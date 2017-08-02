/**
 * Created by 邵敬超 on 2017/8/2.
 */




'use strict';

import React from 'react';
import {
    StyleSheet,
    Text,
    View,} from 'react-native';

var Carousel = require('react-native-carousel');

var RNCarousel = React.createClass({
    render: function() {
        return (
            <Carousel delay={3000}
                      animate={true}
                      loop={false}>
                <View style={styles.container}>
                    <Text>Page 1</Text>
                </View>
                <View style={styles.container}>
                    <Text>Page 2</Text>
                </View>
                <View style={styles.container}>
                    <Text>Page 3</Text>
                </View>
                <View style={styles.container}>
                    <Text>Page 4</Text>
                </View>
                <View style={styles.container}>
                    <Text>Page 5</Text>
                </View>
                <View style={styles.container}>
                    <Text>Page 6</Text>
                </View>
            </Carousel>
        );
    }
});

var styles = StyleSheet.create({
    container: {
        width: 375,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
});

module.exports = RNCarousel