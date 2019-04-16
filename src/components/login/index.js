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
  Keyboard,
  ImageBackground,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Image
} from 'react-native';

import { userIcon, passIcon } from './../common/svg-icon';
import TextInput from './TextInput';
import ButtonCustom from './button';
import BackgroundImage from './background';

export default class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: "",
      password: "",
      waiting: false
    }
  }

  onLogin(){
    console.log("this.state.username", this.state.username)
    console.log("this.state.password", this.state.password)
    this.setState({waiting: true})
    setTimeout(() => {
      this.setState({waiting: false})
    }, 3*1000);
  }

  render() {
    var state = this.state;
    return (
      <View style = {{flex:1, zIndex:1}}>
        <TouchableWithoutFeedback
          style={{ justifyContent:"center", flex:1}}
          onPress={() => {
            Keyboard.dismiss();
          }}
          enabled
        >
        <View style={{ justifyContent:"center", flex:1 }}>
          <View>
            <TextInput
              path={userIcon}
              onChangeText = {username => this.setState({username})}
              returnKeyType = "next"
              value = {state.username}
              refInput={input => (this.usernameInput = input)}
              onSubmitEditing={() => {
                this.passwordInput.focus();
              }}
            />
            <TextInput
              style={{marginTop: 10}}
              path={passIcon} x={5}
              secureTextEntry={true}
              autoCorrect={true}
              value = {state.password}
              onChangeText = {password => this.setState({password})}
              refInput={input => (this.passwordInput = input)}
              onSubmitEditing={() => this.onLogin()}
              returnKeyType = "go"
            />
          </View>
          <ButtonCustom
            style = {{marginTop: 10}}
            onPress = {()=>this.onLogin()}
            waiting = {state.waiting}
          />
          </View>
        </TouchableWithoutFeedback>
        <BackgroundImage/>
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
