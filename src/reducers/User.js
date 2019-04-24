import ActionTypes from './../constants/ActionsType';

const initState = {
  userData: null,
  users: 1,
}

export const UserReducer = (state = initState, action) => {

  const {type, data} = action

  switch (type) {
      case ActionTypes.NEXT:
          return Object.assign({}, state, {users: ++state.users})
      default:
          return state
  }
}

export default UserReducer;