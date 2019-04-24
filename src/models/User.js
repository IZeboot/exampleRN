import HttpHelper from '../helpers/HttpHelper';
import APIconfig from '../helpers/APIconfig'

class User {
  static login = (params, onSuccess, onFail) =>{
    params = {...APIconfig.login} 
    return HttpHelper.post(url, params, onSuccess, onFail);
  }

}

export default User;