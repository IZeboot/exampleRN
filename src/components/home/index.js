import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import NavigationAction from "../../helpers/NavigatorHelper";

export default class Home extends Component{
  constructor(props){
    super(props)
  }

  onPress = () =>{
    NavigationAction.PushStackActions(this.props.navigation, "Profile")
  }

  render(){
    return(
      <View style = {{backgroundColor: 'red', flex:1, justifyContent:"center", }}>
      <TouchableOpacity onPress = {this.onPress}>
        <Text>123</Text>
      </TouchableOpacity>
      </View>
    )
  }
}