import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

export default class Child extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <View style = {{backgroundColor: 'yellow', flex:1, justifyContent:"center", }}>
        <TouchableOpacity
          onPress = {()=>{}}
        >
          <Text>234</Text> 
        </TouchableOpacity>
      </View>
    )
  }
}