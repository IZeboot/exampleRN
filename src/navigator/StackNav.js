import configDrawerNav from './DrawerNav';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {TouchableOpacity} from 'react-native';
import { DrawerActions } from 'react-navigation-drawer';
import Login from '../components/login';
import Profile from '../components/profile';
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
          onPress={() => {
            if(navigation.state.isDrawerOpen || navigation.state.drawerMovementDirection === "opening"){
              navigation.dispatch(DrawerActions.closeDrawer())
              return;
            }
            if(!navigation.state.isDrawerOpen || navigation.state.drawerMovementDirection === "closing"){
              navigation.dispatch(DrawerActions.openDrawer())
            }
          }}
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