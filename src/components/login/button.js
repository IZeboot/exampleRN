import React from 'react';
import {View, ActivityIndicator, Text, TouchableOpacity} from 'react-native';

export default (props) => {
  return <TouchableOpacity
    onPress={() => props.onPress && props.onPress()}
    disabled={props.waiting}
  >
    <View
      style={
        {
          height: 80,
          marginLeft: 10,
          marginRight: 10,
          backgroundColor: "grey",
          justifyContent: "center",
          alignItems: "center"
        }
      }
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