import React, {Component} from 'react';
import {View, TextInput} from 'react-native';
import {viewTextInput} from './style';

import SvgIcon from './../common/svg-icon';

export default (props) => {
    return<View style = {viewTextInput.container}>
        <SvgIcon 
            path = {props.path}
            strokeWidth = {2.5}
            {...props}
        />
        <TextInput
            style = {viewTextInput.textInput}
            placeholder={"Password"}
            secureTextEntry={true}
            autoCorrect = {true}
            placeholderTextColor={"rgba(255,255,255,0.6)"}
            underlineColorAndroid={"transparent"}
            returnKeyType="go"
            onChangeText={text => props.onChangeText&&props.onChangeText(text)}
        />
    </View>
}