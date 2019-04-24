import React from 'react';
import {View, ActivityIndicator, Text, TouchableOpacity} from 'react-native';
import {buttonLogin} from './Style';

export default (props) => {
  return <TouchableOpacity
    onPress={() => props.onPress && props.onPress()}
    disabled={props.waiting}
  >
    <View
      style={[buttonLogin.container, props.style]}
    >
      {props.waiting ? (
        <ActivityIndicator size="small" color="white" />
      ) : (
        <Text style = {buttonLogin.text}>
          {"Sign in".toUpperCase()}
        </Text>
      )}
    </View>
  </TouchableOpacity>
}