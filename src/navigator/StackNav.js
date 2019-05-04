import configTabNavigator from './TabNavigator';
import Profile from '../components/profile';
export default {
  Home: {
    screen: configTabNavigator,
    navigationOptions: {
      header: null
    }
  },
  Profile: {
    screen: Profile,
    navigationOptions:{
      headerTitle: "Profile",
    }
  },
}