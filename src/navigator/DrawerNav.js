import Home from '../components/home';
import {createDrawerNavigator } from 'react-navigation';
import Menu from './../components/menu';
import Settings from '../components/settings';

export default drawerNav =  createDrawerNavigator (
  {
    Main: {screen: Home},
    Settings: {screen:Settings}
  },
  {
    initialRouteName:'Main',
    contentComponent: Menu,
  },
)