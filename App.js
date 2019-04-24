import React, {Component} from 'react';
import { Provider } from 'react-redux';
import Store from './src/store';
import {Platform, StyleSheet, Text, View} from 'react-native';
import ApplicationRouter from './src/navigator';


export default class App extends Component {
  render() {
    return (
      <Provider store = {Store}>
        <ApplicationRouter/>
      </Provider>
    );
  }
}