import Home from '../components/home';
import {createMaterialTopTabNavigator } from 'react-navigation';
import Menu from '../components/menu';
import Settings from '../components/settings';
import Login from '../components/login';
import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react';
import {View, Text} from 'react-native';

export default tabNavigator =  createMaterialTopTabNavigator (
  {
    Main: {
      screen: Home,
      navigationOptions:{
        tabBarLabel: "サービス",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="home" size={24} color="white" />
        )
      }
    },
    Settings: {
      screen:Settings,
      navigationOptions:{
        tabBarLabel:"お問合せ",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="envelope" size={24} color="white" />
        )
      }
    },
    Login: {screen: Login,
      navigationOptions:{
        tabBarLabel:"プロフィール",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="user-circle" size={24} color="white" />
        )
      }
    },
  },
  {
    initialRouteName:'Main',
    tabBarOptions:{
      style:{
        backgroundColor: "#004986"
      },
      showIcon:true,
      tabStyle:{
        flexDirection:'row'
      },
      activeTintColor:"white",
      indicatorStyle:{
        height:0
      }
    }
  },
)