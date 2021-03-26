import React, {Component} from 'react';
import {StyleSheet, Button, Text, View} from 'react-native';
import {VXGMobileSDK} from 'react-native-vxg-mobile-sdk';

export default class SimplePlayerScreen extends Component {
  _url = null;
  constructor() {
    super();
    this._url = 'rtsp://184.72.239.149/vod/mp4:BigBuckBunny_115k.mov';
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Example 1: Simple Player</Text>
        <VXGMobileSDK
          style={styles.player}
          config={{connectionUrl: this._url, autoplay: true}}></VXGMobileSDK>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    marginTop: 65,
    alignItems: 'stretch',
  },
  player: {
    paddingTop: 20,
    borderWidth: 1,
    borderColor: 'black',
    width: '100%',
    height: 250,
  },
});
