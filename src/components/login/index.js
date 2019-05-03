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
  Image,
  SafeAreaView
} from 'react-native';
import {connect} from 'react-redux'
import { userIcon, passIcon } from '../common/svg-icon';
import TextInputCustom from './TextInputCustom';
import ButtonCustom from './ButtonLogin';
import BackgroundImage from './Background';
import {viewLogin} from './Style';
import {PushStackActions} from '../../helpers/NavigatorHelper';
import Actions from '../../actions';
import ModelUser from './../../models/User';

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: "",
      password: "",
      waiting: false
    }
    const {navigation} = this.props;
    ModelUser.listenChangeScreen(navigation);
  }

  onLogin = () =>{
    const {username, password} = this.state;
    const {navigation, dispatch} = this.props;
    this.setState({waiting: true});
    dispatch(Actions.login("1234",()=>{}, ()=>{}));
  }



  render() {
    var state = this.state;
    return (
      <SafeAreaView style = {viewLogin.container}>
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
              onSubmitEditing={this.onLogin}
              returnKeyType = "go"
            />
          </View>
          <ButtonCustom
            style = {viewLogin.buttonLogin}
            onPress = {this.onLogin}
            waiting = {state.waiting}
          />
          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
        <BackgroundImage/>
      </SafeAreaView>
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
});
