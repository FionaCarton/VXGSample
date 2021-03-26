import React from 'react';
import {StyleSheet, View} from 'react-native';
import SimplePlayerScreen from './src/SimplePlayerScreen';
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <SimplePlayerScreen />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
