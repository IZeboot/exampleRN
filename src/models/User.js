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
      return state.user.user;
    }
    
    let currentValue
    function handleChangeUser() {
      let previousValue = currentValue
      currentValue = selectData(Store.getState())
    
      if (previousValue !== currentValue && previousValue) {
        console.log("previousValue", previousValue,"currentValue",currentValue)
        NavigationAction.PushStackActions(navigation, "Home")
      }
    }
    
    subscribeChangeUserStore = Store.subscribe(handleChangeUser);
  }

  static unlistenChangeScreen = () => {
    subscribeChangeUserStore()
  }

}

export default User;