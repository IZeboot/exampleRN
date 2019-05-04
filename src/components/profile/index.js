import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import BaseView from './../common/BaseView';
import styles from './styles';

export default class Child extends BaseView{
  constructor(props){
    super(props)
  }
  
  render(){
    return(
      <View style = {styles.container}>
        <TouchableOpacity
          style = {styles.touchable}
          onPress = {()=>this.reset({navigationNavigateActions:[{routeName: "Login"}]})}
        >
          <Text>Logout</Text> 
        </TouchableOpacity>
      </View>
    )
  }
}