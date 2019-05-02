import React, {Component} from 'react';
import {View, Text} from 'react-native';

export default class Child extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <View style = {{backgroundColor: 'yellow', flex:1, justifyContent:"center", }}>
        <Text>234</Text>
      </View>
    )
  }
}