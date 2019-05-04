import React, {Component} from 'react';
import { Provider } from 'react-redux';
import Store from './src/store';
import {Platform, StyleSheet, Text, View, SafeAreaView} from 'react-native';
import ApplicationRouter from './src/navigator';


export default class App extends Component {
  render() {
    return (
      <Provider store = {Store}>
        <SafeAreaView style = {styles.container}>
          <ApplicationRouter/>
        </SafeAreaView>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1, 
    backgroundColor:"#004986"
  }
})