import {StackActions} from 'react-navigation';

export const PushStackActions = (props, routeName, params = {}) => {
  const push = StackActions.push({
    routeName,
    params
  });
  props.navigation.dispatch(push);
}