import HttpHelper from '../helpers/HttpHelper';
import APIconfig, {ApiLink} from '../helpers/APIconfig';
import Store from './../store';
import NavigationAction from './../helpers/NavigatorHelper';
let subscribeChangeUserStore
class User {
  static login = async (data) =>{
    return await HttpHelper.post(ApiLink, {...APIconfig.login, ...data});
  }

  static listenChangeScreen = (navigation) => {
    function selectData(state) {
      return state.user.profile;
    }
    
    let currentValue
    function handleChangeUser() {
      let previousValue = currentValue
      currentValue = selectData(Store.getState())
    
      if (previousValue !== currentValue && previousValue) {
        NavigationAction.ResetStackActions(navigation, 0, [{routeName:"Home"}])
      }
    }
    
    subscribeChangeUserStore = Store.subscribe(handleChangeUser);
  }

  static unlistenChangeScreen = () => {
    subscribeChangeUserStore()
  }

}

export default User;