/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  KeyboardAvoidingView
} from 'react-native';

import { userIcon, passIcon } from './../common/svg-icon';
import TextInput from './TextInput';
import ButtonCustom from './button';

export default class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: "",
      password: ""
    }
  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent:"center" }}>
        <View>
          <TextInput
            path={userIcon}
            // onChangeText = {(password)=>{this.setState({username:text})}}
            returnKeyType = "next"
            onSubmitEditing={() => {
              this.passwordInput.focus();
            }}
          />
          <TextInput
            path={passIcon} x={5}
            secureTextEntry={true}
            autoCorrect={true}
            // onChangeText = {(text)=>{this.setState({password:text})}}
            ref={input => (this.passwordInput = input)}
            returnKeyType = "go"
          />
        </View>
        <ButtonCustom/>
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
