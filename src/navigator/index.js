import React from 'react'
import {createStackNavigator, createAppContainer} from 'react-navigation';
import {Animated, Easing} from 'react-native';
import Login from '../components/login';
import Home from './../components/home';

const configScreen =  {
  Login: {screen: Login},
  Home: {screen: Home},
}

const screenInterpolator = sceneProps => {
  const { layout, position, scene } = sceneProps;
  const { index } = scene;
  const {routeName} = scene.route;
  const width = layout.initWidth;
  const height = layout.initHeight;
  
  const translateX = position.interpolate({
    inputRange: [index - 1, index, index + 1],
    outputRange: [width, 0, 0],
  });
  
  const translateY = position.interpolate({
    inputRange: [index - 1, index, index + 1],
    outputRange: [height, 0, 0],
  });

  const opacity = position.interpolate({
    inputRange: [index - 1, index],
    outputRange: [0, 1],
  });
  
  const scale = position.interpolate({
    inputRange: [index - 1, index],
    outputRange: [0, 1],
  });
  
  switch (routeName) {
    case "Home":
      return { opacity, transform: [{ translateX }, { translateY }, { scale }]};
    default:
      return { opacity, transform: [{ translateX }]};
  }
}

const ApplicationRouter = createStackNavigator(
    configScreen,
  {
    // Default config for all screens
    initialRouteName: 'Login',
    headerMode:"none",
    transitionConfig: () => ({
      transitionSpec: {
        duration: 1000,
        easing: Easing.out(Easing.poly(4)),
        timing: Animated.timing,
      },
      screenInterpolator: sceneProps=>screenInterpolator(sceneProps)
    })
  }
);

export default createAppContainer(ApplicationRouter);
