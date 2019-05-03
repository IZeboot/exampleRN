import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import BaseView from './../common/BaseView';

export default class Child extends BaseView{
  constructor(props){
    super(props)
  }
  
  render(){
    return(
      <View style = {{backgroundColor: 'yellow', flex:1, justifyContent:"center", }}>
        <TouchableOpacity
          onPress = {()=>this.reset({navigationNavigateActions:[{routeName: "Login"}]})}
        >
          <Text>234</Text> 
        </TouchableOpacity>
      </View>
    )
  }
}