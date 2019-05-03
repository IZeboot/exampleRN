import Login from '../components/login';
import Profile from '../components/profile';
import configDrawerNav from './DrawerNav';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {TouchableOpacity} from 'react-native';
import { DrawerActions } from 'react-navigation-drawer';
export default {
  Login: {
    screen: Login,
    navigationOptions: {
      header: null
    }
  },
  Home: {
    navigationOptions: ({navigation}) => ({
      title: "Main",
      headerLeft:(
        <TouchableOpacity 
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
          style = { {paddingRight: 10, paddingLeft: 10} }
        >
          <Icon name="menu" size={30} />
        </TouchableOpacity>
      ),
    }),
    screen: configDrawerNav,
  },
  Profile: {screen: Profile},
}