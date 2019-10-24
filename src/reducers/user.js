const user = {
  user: ''
}
const reducer = (state = user, action) {
  switch(action.type) {
    case 'INCREMENT': {
      return { user: state.user }
    }
    default:
      return state
  }
}

export default reducer;