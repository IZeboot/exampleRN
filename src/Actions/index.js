import actionTypes from './ActionTypes';
export default {
  login:(data)=>({ type: actionTypes.SAGA_USER_LOGIN, data }),
}