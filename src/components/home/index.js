import React, {Component} from 'react';
import {View, Text} from 'react-native';

export default class Home extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <View style = {{backgroundColor: 'red', flex:1, justifyContent:"center", }}>
        <Text>123</Text>
      </View>
    )
  }
}