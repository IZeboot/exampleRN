import React from 'react';
import {View, ActivityIndicator, Text, TouchableOpacity} from 'react-native';
import {buttonLogin} from './style';

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
        <Text>
          {"Sign in".toUpperCase()}
        </Text>
      )}
    </View>
  </TouchableOpacity>
}