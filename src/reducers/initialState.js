const initialState = {
  fuga: 1
}

const initialStateReducer = (state = initialState, action) =>{
  switch(action.type) {
    case 'INCREMENT': {
      return { fuga: state.fuga + 1 }
    }
    default:
      return state
  }
}


export default initialStateReducer;