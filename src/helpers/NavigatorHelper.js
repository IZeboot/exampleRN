import {StackActions, NavigationActions} from 'react-navigation';
class ModelRouter{
  // data = "",
  constructor()
}
const PushStackActions = (navigation, routeName, params = {}) => {
  const push = StackActions.push({
    routeName,
    params
  });
  navigation.dispatch(push);
}

const ResetStackActions = (navigation, routeNames = [], params = {}) =>{
  const resetAction = StackActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({ routeName: 'Profile' })],
  });
  navigation.dispatch(resetAction);
}

export default {
  PushStackActions,
  ResetStackActions,
  ModelRouter
}