
const initialState = [
  { name: 'Blue Beer', quantity: 4, id: 1},
  { name: 'Red Beer', quantity: 8, id: 2}
]

//this reducer doesn't do anything yet
const cart = ( state = initialState, action) => {
  switch (action.type) {

    case 'ADD_TO_CART':
      const newItem = {id: action.id, name: action.name, quantity: 1}

      return [...state, newItem]

    default:
      return state
  }
}

export default cart
