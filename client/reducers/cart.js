const initialState =  [

  {name: 'Pauline', quantity: 4, id: 2},
  {name: 'James', quantity: 5, id: 6}

]

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
