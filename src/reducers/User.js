import actionTypes from '../Actions/ActionTypes';

const initState = {
  userData: null,
  user: {},
}

export const UserReducer = (state = initState, action) => {

  const {type, data} = action
  console.log("data", data)
  switch (type) {
      case actionTypes.USER_SET_CURRENT_USER_DATA:
          return Object.assign({}, state, {user: {...data}})
      default:
          return state
  }
}

export default UserReducer;