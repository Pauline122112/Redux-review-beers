const navigation = (state = 'home', action) => {
  switch(action.type){
    case 'NAVIGATE':
      state = action.target
      return state

    default:
      return state
  }
}

export default navigation
