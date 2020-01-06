import React, {Component} from 'react';
import {StyleSheet, View,Text} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <>
        <View style={styles.cont}>
          <Text>Hi</Text>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  cont: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  }
});

