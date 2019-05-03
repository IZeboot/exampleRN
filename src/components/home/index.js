import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import BaseView from './../common/BaseView';

export default class Home extends BaseView{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <View style = {{backgroundColor: 'red', flex:1, justifyContent:"center"}}>
        <TouchableOpacity onPress = {()=> this.goTo("Profile")}>
          <Text>123</Text>
        </TouchableOpacity>
      </View>
    )
  }
}