import {StackActions} from 'react-navigation';

export const PushStackActions = (navigation, routeName, params = {}) => {
  const push = StackActions.push({
    routeName,
    params
  });
  navigation.dispatch(push);
}