/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
    Platform, 
    StyleSheet, 
    Text, 
    View, 
    ImageBackground, 
    KeyboardAvoidingView
} from 'react-native';

import {userIcon, passIcon} from './../common/svg-icon';
import TextInput from './TextInput';

export default class Login extends Component {
  render() {
    return (
        <View style = {{flex:1}}>
            <TextInput path = {userIcon}/>
            <TextInput path = {passIcon} x = {5}/>
        </View>
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
