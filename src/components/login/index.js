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
import {connect} from 'react-redux'
import { userIcon, passIcon } from '../common/svg-icon';
import TextInputCustom from './TextInputCustom';
import ButtonCustom from './ButtonLogin';
import BackgroundImage from './Background';
import {viewLogin} from './Style';
import {PushStackActions} from '../../helpers/NavigatorHelper';
import Actions from '../../Actions'

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: "",
      password: "",
      waiting: false
    }
  }

  onLogin(){
    const {username, password} = this.state;
    const {navigation} = this.props;
    console.log("this.state.username", username)
    console.log("this.state.password", password)
    this.setState({waiting: true})
    this.props.dispatch(Actions.login("",()=>{}, ()=>{}))
  }

  render() {
    var state = this.state;
    return (
      <View style = {viewLogin.container}>
        <TouchableWithoutFeedback
          onPress={() => {
            Keyboard.dismiss();
          }}
          enabled
        >
        <KeyboardAvoidingView behavior="padding" style={viewLogin.body}>
          <View>
            <TextInputCustom
              path={userIcon}
              placeholder = "Username"
              onChangeText = {username => this.setState({username})}
              returnKeyType = "next"
              value = {state.username}
              refInput={input => (this.usernameInput = input)}
              onSubmitEditing={() => {
                this.passwordInput.focus();
              }}
            />
            <TextInputCustom
              placeholder = "Password"
              style={viewLogin.textInputPassword}
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
            style = {viewLogin.buttonLogin}
            onPress = {()=>this.onLogin()}
            waiting = {state.waiting}
          />
          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
        <BackgroundImage/>
      </View>
    );
  }
}

export default connect()(Login)

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
