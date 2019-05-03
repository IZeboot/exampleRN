import Home from '../components/home';
import {createDrawerNavigator } from 'react-navigation';
import Menu from './../components/menu';
import {Dimensions} from 'react-native';

export default drawerNav =  createDrawerNavigator (
  {
    Main: {screen: Home}
  },
  {
    initialRouteName:'Main',
    contentComponent: Menu,
  },
)