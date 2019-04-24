import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import { viewTextInput } from './Style';

import SvgIcon from '../common/svg-icon';

export default (props) => {
	return <View style={[props.style, viewTextInput.container]}>
		<SvgIcon
			path={props.path}
			strokeWidth={4}
			stroke = "rgba(0,0,0,0.8)"
			{...props}
		/>
		<TextInput
			style={viewTextInput.textInput}
			placeholder={props.placeholder}
			secureTextEntry={props.secureTextEntry}
			autoCorrect={props.autoCorrect}
			placeholderTextColor={"rgba(0,0,0,0.8)"}
			underlineColorAndroid={"transparent"}
			returnKeyType={props.returnKeyType}
			value={props.value}
			ref = {props.refInput && props.refInput}
			onChangeText={text => props.onChangeText && props.onChangeText(text)}
			onSubmitEditing={() => { props.onSubmitEditing && props.onSubmitEditing() }}
		/>
	</View>
}