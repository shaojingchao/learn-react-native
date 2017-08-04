/**
 * Created by 邵敬超 on 2017/8/2.
 */

import React, {Component} from 'react';
import {
    Image,
    StyleSheet,
    Text,
    TouchableWithoutFeedback,
    TouchableOpacity,
    View,
    Button,
    ViewPagerAndroid,
} from 'react-native';

const PAGES = 5;
const BGCOLOR = ['#fdc08e', '#fff6b9', '#99d1b7', '#dde5fe', '#f79273'];
const IMAGE_URIS = [
    'http://apod.nasa.gov/apod/image/1410/20141008tleBaldridge001h990.jpg',
    'http://apod.nasa.gov/apod/image/1409/volcanicpillar_vetter_960.jpg',
    'http://apod.nasa.gov/apod/image/1409/m27_snyder_960.jpg',
    'http://apod.nasa.gov/apod/image/1409/PupAmulti_rot0.jpg',
    'http://apod.nasa.gov/apod/image/1510/lunareclipse_27Sep_beletskycrop4.jpg',
];

class LikeCount extends Component {
    constructor(props) {
        console.log(props);
        super(props);
        this.state = {
            likes: 7
        };
        this._onClick = () => {
            console.log(this);
            this.setState({likes: this.state.likes + 1})
        }
    }
    render() {
        const thumbsUp = '\uD83D\uDC4D';
        return (
            <View style={styles.likeContainer}>
                <TouchableOpacity onPress={this._onClick} style={styles.likeButton}>
                    <Text style={styles.likesText}>
                        {thumbsUp + ' Like'}
                    </Text>
                </TouchableOpacity>
                <Text style={styles.likesText}>
                    {this.state.likes + ' likes'}
                </Text>
            </View>
        );
    }
}

class ProgressBar extends Component {
    constructor(props) {
        super(props);
        console.log(this);
    }
    render() {
        const progress = this.props.progress;
        const currentPosition = (progress.position + progress.offset);
        const barSize = (currentPosition / (PAGES - 1) * this.props.size);
        return (
            <View style={[styles.progressBarContainer,{width:this.props.size}]}>
                <View style={[styles.progressBar,{width:barSize}]}></View>
            </View>
        );
    }
}


export default class ViewPagerAndroidExample extends Component {
    constructor(props) {
        super(props);
        this.statics = {
            title: '<ViewPagerAndroid>',
            description: 'Container that allows to flip left and right between child views.'
        };
        this.state = {
            page: 0,
            animationsAreEnabled: true,
            scrollEnabled: true,
            progress: {
                position: 0,
                offset: 0,
            },
        };
        this.onPageSelected = (e) => {
            this.setState({page: e.nativeEvent.position});
        };
        this.onPageScroll = (e) => {
            this.setState({progress: e.nativeEvent});
        };
        this.onPageScrollStateChanged = (state: ViewPagerScrollState) => {
            this.setState({scrollState: state});
        };
        this.move = (delta) => {
            const page = this.state.page + delta;
            this.go(page);
        };
        this.go = (page) => {
            if (this.state.animationsAreEnabled) {
                console.log("animationsAreEnabled",this);
                this.viewPager.setPage(page);
            } else {
                this.viewPager.setPageWithoutAnimation(page);
            }
            this.setState({page});
        }
    }
    render() {
        const pages = [];
        for (let i = 0; i < PAGES; i++) {
            const pageStyle = {
                backgroundColor: BGCOLOR[i % BGCOLOR.length],
                alignItems: 'center',
                padding: 20,
            };
            pages.push(
                <View key={i} style={pageStyle} collapsable={false} ref={''+i+''}>
                    <Image
                        style={styles.image}
                        source={{uri: IMAGE_URIS[i % BGCOLOR.length]}}
                    />
                    <LikeCount />
                </View>
            );
        }
        const {page, animationsAreEnabled} = this.state;
        return (
            <View style={styles.container}>
                <ViewPagerAndroid
                    style={styles.viewPager}
                    initialPage={0}
                    scrollEnabled={this.state.scrollEnabled}
                    onPageScroll={this.onPageScroll}
                    onPageSelected={this.onPageSelected}
                    onPageScrollStateChanged={this.onPageScrollStateChanged}
                    pageMargin={10}
                    ref={viewPager => { this.viewPager = viewPager; console.log('viewPager-----',viewPager) }}>
                    {pages}
                </ViewPagerAndroid>
                <View style={styles.buttons}>
                    <Button
                        disabled={false}
                        title={this.state.scrollEnabled ? 'Scroll Enabled' : 'Scroll Disabled'}
                        onPress={() => this.setState({scrollEnabled: !this.state.scrollEnabled})}
                        ref={viewPager => {console.log('====Button=====',viewPager) }}
                    >
                    </Button>
                </View>
                <View style={styles.buttons}>
                    { animationsAreEnabled ?
                        <Button
                            title="Turn off animations"
                            disabled={false}
                            onPress={() => this.setState({animationsAreEnabled: false})}>
                        </Button> :
                        <Button
                            title="Turn animations back on"
                            disabled={false}
                            onPress={() => this.setState({animationsAreEnabled: true})}
                        >
                        </Button> }
                    <Text style={styles.scrollStateText}>ScrollState[ {this.state.scrollState} ]</Text>
                </View>
                <View style={styles.buttons}>
                    <Button title="Start" disabled={page == 0} onPress={() => this.go(0)}/>
                    <Button title="Prev" disabled={page == 0} onPress={() => this.move(-1)}/>
                    <Text style={styles.buttonText}>Page {page + 1} / {PAGES}</Text>
                    <ProgressBar size={100} progress={this.state.progress}/>
                    <Button title="Next" disabled={page >= PAGES - 1} onPress={() => this.move(1)}/>
                    <Button title="Last" disabled={page >= PAGES - 1} onPress={() => this.go(PAGES - 1)}/>
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    buttons: {
        flexDirection: 'row',
        height: 30,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    button: {
        flex: 1,
        width: 0,
        margin: 5,
        borderColor: 'gray',
        borderWidth: 1,
        backgroundColor: 'gray',
    },
    buttonDisabled: {
        backgroundColor: 'black',
        opacity: 0.5,
    },
    buttonText: {
        color: 'white',
    },
    scrollStateText: {
        color: '#99d1b7',
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    image: {
        width: 300,
        height: 200,
        padding: 20,
    },
    likeButton: {
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        borderColor: '#333333',
        borderWidth: 1,
        borderRadius: 5,
        flex: 1,
        margin: 8,
        padding: 8,
    },
    likeContainer: {
        flexDirection: 'row',
    },
    likesText: {
        flex: 1,
        fontSize: 18,
        alignSelf: 'center',
    },
    progressBarContainer: {
        height: 10,
        margin: 10,
        borderColor: '#eeeeee',
        borderWidth: 2,
    },
    progressBar: {
        alignSelf: 'flex-start',
        flex: 1,
        backgroundColor: '#eeeeee',
    },
    viewPager: {
        flex: 1,
    },
});